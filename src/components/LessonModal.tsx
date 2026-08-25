import React, { useState } from 'react';
import { X, BookOpen, Swords, Lightbulb, CheckCircle2, XCircle, ArrowRight, Star, Sparkles, Bot, Volume2, Bookmark, Compass, RotateCcw, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Chapter, LessonLevel, Question } from '../types/math';
import { soundFx } from '../utils/audio';

interface LessonModalProps {
  lesson: LessonLevel;
  chapter: Chapter;
  onClose: () => void;
  onCompleteLesson: (lessonId: string, stars: number, xp: number, coins: number) => void;
}

interface MissedQuestionItem {
  question: Question;
  studentAnswer: string;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  chapter,
  onClose,
  onCompleteLesson,
}) => {
  const [tab, setTab] = useState<'theory' | 'practice'>('theory');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Question results tracker: index -> boolean (true = correct, false = wrong)
  const [questionHistory, setQuestionHistory] = useState<(boolean | null)[]>(
    () => Array(lesson.questions.length).fill(null)
  );
  const [missedQuestions, setMissedQuestions] = useState<MissedQuestionItem[]>([]);

  // AI Tutor Quick Hint state
  const [aiHintLoading, setAiHintLoading] = useState(false);
  const [aiHintText, setAiHintText] = useState<string | null>(null);

  const totalQuestions = lesson.questions.length;
  const currentQ = lesson.questions[currentQIndex];

  // Speech helper
  const handleSpeakTheory = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const textToSpeak = `${lesson.theory.title}. ${lesson.theory.keyPoints.join('. ')}. Công thức: ${lesson.theory.formula || ''}. ${lesson.theory.memoryTip || ''}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectOption = (opt: string) => {
    if (isAnswerSubmitted) return;
    soundFx.playClick();
    setSelectedAnswer(opt);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer || isAnswerSubmitted) return;
    const correct = selectedAnswer === currentQ.correctAnswer;
    setIsAnswerSubmitted(true);
    setIsCorrect(correct);

    const updatedHistory = [...questionHistory];
    updatedHistory[currentQIndex] = correct;
    setQuestionHistory(updatedHistory);

    if (correct) {
      soundFx.playCorrect();
      setCorrectCount((prev) => prev + 1);
    } else {
      soundFx.playWrong();
      setMissedQuestions((prev) => [
        ...prev,
        { question: currentQ, studentAnswer: selectedAnswer },
      ]);
    }
  };

  const handleNextQuestion = () => {
    soundFx.playClick();
    if (currentQIndex + 1 < totalQuestions) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setIsCorrect(false);
      setShowHint(false);
      setAiHintText(null);
    } else {
      // Finished all questions
      const finalScore = correctCount + (isCorrect ? 1 : 0);
      const isPassed = finalScore >= totalQuestions; // Require 10/10 to pass

      setIsFinished(true);

      if (isPassed) {
        soundFx.playLevelUp();
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
          });
        } catch (e) {
          // ignore
        }
        onCompleteLesson(lesson.id, 3, lesson.xpReward, lesson.coinReward);
      } else {
        soundFx.playWrong();
      }
    }
  };

  const handleRetryQuiz = () => {
    soundFx.playClick();
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setIsCorrect(false);
    setCorrectCount(0);
    setShowHint(false);
    setIsFinished(false);
    setAiHintText(null);
    setQuestionHistory(Array(totalQuestions).fill(null));
    setMissedQuestions([]);
    setTab('practice');
  };

  const handleAskAIHint = async () => {
    if (aiHintLoading) return;
    setAiHintLoading(true);
    soundFx.playClick();

    try {
      const res = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Học sinh đang làm câu hỏi: "${currentQ.question}". Hãy cho 1 gợi ý tư duy ngắn gọn, vui vẻ để bé tự giải, không nói thẳng đáp án.`,
          context: `Bài học: ${lesson.title}. Lý thuyết: ${lesson.theory.keyPoints.join('; ')}`,
          type: 'hint',
        }),
      });
      const data = await res.json();
      setAiHintText(data.reply || currentQ.hint || 'Thầy Cú gợi ý: Con hãy quan sát kỹ các số liệu trong đề bài và quy về cùng một đơn vị nhé!');
    } catch (e) {
      setAiHintText(currentQ.hint || 'Gợi ý: Đọc kỹ câu hỏi và làm theo các bước lý thuyết đã học!');
    } finally {
      setAiHintLoading(false);
    }
  };

  // Helper for difficulty label per question
  const getDifficultyTier = (index: number) => {
    if (index < 3) return { label: '🥉 Nhận biết • Cơ bản', color: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800' };
    if (index < 6) return { label: '🥈 Thông hiểu • Kỹ năng', color: 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800' };
    if (index < 8) return { label: '🥇 Vận dụng • Thực tế', color: 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800' };
    return { label: '💎 Thử thách 10 Điểm • Nâng cao', color: 'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800' };
  };

  const isPassed = correctCount === totalQuestions;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] my-auto animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className={`p-4 sm:p-5 bg-gradient-to-r ${chapter.color} text-white flex items-center justify-between shadow-md`}>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner ring-2 ring-white/30">
              {lesson.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white/95">
                  Ải {lesson.levelNumber}
                </span>
                <span className="text-xs font-semibold text-white/80 truncate max-w-[180px] sm:max-w-xs">
                  {chapter.title}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black tracking-tight mt-0.5">{lesson.title}</h2>
            </div>
          </div>

          <button
            id="close-lesson-modal-btn"
            onClick={() => {
              if (isSpeaking && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
              }
              onClose();
            }}
            className="p-2 rounded-xl bg-black/20 hover:bg-black/30 text-white/90 hover:text-white transition active:scale-95"
            title="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher Bar */}
        {!isFinished && (
          <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-800/90 p-1.5 gap-2">
            <button
              id="lesson-tab-theory"
              onClick={() => {
                soundFx.playClick();
                setTab('theory');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                tab === 'theory'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-slate-200/50'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>1. Bí Kíp Lý Thuyết Vàng</span>
            </button>
            <button
              id="lesson-tab-practice"
              onClick={() => {
                soundFx.playClick();
                setTab('practice');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                tab === 'practice'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-slate-200/50'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Swords className="w-4 h-4 text-rose-500" />
              <span>2. Thử Thách Vượt Ải ({totalQuestions} câu • Cần 10/10)</span>
            </button>
          </div>
        )}

        {/* Modal Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {isFinished ? (
            isPassed ? (
              /* Victory 10/10 Perfect Pass Screen */
              <div className="text-center py-5 space-y-5 animate-in zoom-in-90 duration-300">
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-400 to-amber-500 mx-auto flex items-center justify-center text-5xl shadow-xl shadow-amber-500/30 animate-bounce">
                    🏆
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white text-xs font-black px-2.5 py-0.5 rounded-full shadow">
                    10/10 HOÀN HẢO
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                    Xuất Sắc! Vượt Ải {lesson.levelNumber} Hoàn Hảo!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                    Con đã trả lời đúng tuyệt đối <strong className="text-emerald-600 dark:text-emerald-400">10/10 câu hỏi</strong>, nắm trọn kiến thức của bài học!
                  </p>
                </div>

                {/* 3 Gold Stars */}
                <div className="flex items-center justify-center gap-3 py-1">
                  {[1, 2, 3].map((starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-9 h-9 text-amber-400 fill-amber-400 scale-110 drop-shadow-md transition-transform duration-300"
                    />
                  ))}
                </div>

                {/* Reward Cards */}
                <div className="flex items-center justify-center gap-4 py-2">
                  <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 px-5 py-2.5 rounded-2xl shadow-xs">
                    <span className="text-xs text-amber-700 dark:text-amber-300 font-bold block">Kinh Nghiệm</span>
                    <span className="text-xl font-black text-amber-600">+{lesson.xpReward} XP</span>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 px-5 py-2.5 rounded-2xl shadow-xs">
                    <span className="text-xs text-orange-700 dark:text-orange-300 font-bold block">Vàng Thưởng</span>
                    <span className="text-xl font-black text-orange-600">+{lesson.coinReward} Xu</span>
                  </div>
                </div>

                <button
                  id="lesson-finish-btn"
                  onClick={onClose}
                  className="w-full max-w-sm mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition active:scale-98"
                >
                  Tiếp Tục Chinh Phục Ải Tiếp Theo 🚀
                </button>
              </div>
            ) : (
              /* Needs 10/10 Improvement Screen */
              <div className="py-4 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center text-3xl shadow-sm">
                    🎯
                  </div>
                  <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">
                    Cần Trả Lời Đúng 10/10 Để Vượt Ải
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Con đã trả lời đúng <strong className="text-blue-600 dark:text-blue-400 text-base">{correctCount}/{totalQuestions}</strong> câu. Để nắm vững kiến thức và tự tin đạt 10 điểm trong các bài kiểm tra, con hãy xem lại các câu chưa đúng và thử thách lại nhé!
                  </p>
                </div>

                {/* Progress bar visual */}
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-600 dark:text-slate-400">Kết quả thử thách:</span>
                    <span className="text-blue-600 dark:text-blue-400">{correctCount}/10 câu ({correctCount * 10}%)</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500"
                      style={{ width: `${(correctCount / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Missed Questions Review */}
                {missedQuestions.length > 0 && (
                  <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                    <h4 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-rose-500" />
                      <span>Các câu cần xem lại ({missedQuestions.length} câu):</span>
                    </h4>
                    {missedQuestions.map((item, idx) => (
                      <div key={idx} className="bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 p-3 rounded-2xl text-xs space-y-1.5">
                        <p className="font-bold text-slate-800 dark:text-slate-100">
                          {idx + 1}. {item.question.question}
                        </p>
                        <div className="flex flex-wrap gap-2 text-[11px]">
                          <span className="text-rose-700 dark:text-rose-400 font-semibold bg-rose-100 dark:bg-rose-900/60 px-2 py-0.5 rounded-md">
                            Con đã chọn: {item.studentAnswer} ❌
                          </span>
                          <span className="text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-md">
                            Đáp án đúng: {item.question.correctAnswer} ✅
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-[11px] bg-white/70 dark:bg-slate-800 p-2 rounded-xl border border-rose-100 dark:border-slate-700">
                          💡 <strong>Giải thích:</strong> {item.question.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <button
                    id="retry-lesson-quiz-btn"
                    onClick={handleRetryQuiz}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-3 rounded-2xl shadow-md hover:shadow-lg transition active:scale-98 text-sm"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Luyện Lại Vượt Ải (Mục Tiêu 10/10)</span>
                  </button>

                  <button
                    id="review-theory-btn"
                    onClick={() => {
                      soundFx.playClick();
                      setTab('theory');
                      setIsFinished(false);
                    }}
                    className="flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 px-4 rounded-2xl transition text-xs sm:text-sm"
                  >
                    <BookOpen className="w-4 h-4 text-amber-500" />
                    <span>Ôn Lý Thuyết</span>
                  </button>
                </div>
              </div>
            )
          ) : tab === 'theory' ? (
            /* Theory Digest Mode */
            <div className="space-y-4">
              {/* Theory Header with Read Aloud Button */}
              <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📖</span>
                  <span className="text-xs font-black uppercase text-slate-600 dark:text-slate-300">
                    Sổ Tay Kiến Thức Toán 5
                  </span>
                </div>
                {'speechSynthesis' in window && (
                  <button
                    id="read-theory-speech-btn"
                    onClick={handleSpeakTheory}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      isSpeaking
                        ? 'bg-rose-500 text-white animate-pulse'
                        : 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 hover:bg-blue-200'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isSpeaking ? 'Dừng Đọc' : '🔊 Đọc Giúp Con'}</span>
                  </button>
                )}
              </div>

              {/* Key Concept Points with Colorful Badges */}
              <div className="bg-gradient-to-br from-blue-50/90 to-indigo-50/50 dark:from-blue-950/40 dark:to-indigo-950/20 border-2 border-blue-200/80 dark:border-blue-900/80 rounded-3xl p-4 sm:p-5 shadow-xs">
                <h3 className="font-black text-blue-950 dark:text-blue-100 text-sm sm:text-base flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-blue-600 animate-spin" />
                  {lesson.theory.title}
                </h3>
                <div className="space-y-2.5">
                  {lesson.theory.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white/80 dark:bg-slate-800/80 p-2.5 rounded-2xl border border-blue-100 dark:border-slate-700/60">
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 shadow-xs">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formula Highlight Glowing Card */}
              {lesson.theory.formula && (
                <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/15 to-amber-500/10 border-2 border-dashed border-amber-400 dark:border-amber-500 rounded-3xl p-4 sm:p-5 text-center shadow-xs">
                  <div className="inline-flex items-center gap-1.5 text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 bg-amber-200/60 dark:bg-amber-900/60 px-3 py-1 rounded-full">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Công Thức Vàng Cần Khắc Cốt Ghi Tâm</span>
                  </div>
                  <div className="font-mono font-black text-sm sm:text-base text-amber-950 dark:text-amber-100 bg-white/90 dark:bg-slate-800 py-3 px-4 rounded-2xl shadow-sm border border-amber-200/60 dark:border-amber-700">
                    {lesson.theory.formula}
                  </div>
                </div>
              )}

              {/* Solved Examples Step-by-Step */}
              {lesson.theory.examples && lesson.theory.examples.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl p-4 sm:p-5 space-y-3">
                  <h4 className="font-black text-slate-800 dark:text-slate-200 text-xs sm:text-sm flex items-center gap-2">
                    <Compass className="w-4 h-4 text-emerald-600" />
                    <span>Ví Dụ Mẫu Giải Chi Tiết Từng Bước:</span>
                  </h4>
                  {lesson.theory.examples.map((ex, idx) => (
                    <div key={idx} className="text-xs sm:text-sm space-y-2 bg-white dark:bg-slate-800 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
                      <div className="font-bold text-slate-800 dark:text-slate-100 flex items-start gap-2">
                        <span className="bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 px-2 py-0.5 rounded-lg text-[11px] font-black shrink-0">
                          Đề bài
                        </span>
                        <p>{ex.problem}</p>
                      </div>
                      <div className="text-emerald-700 dark:text-emerald-300 font-semibold bg-emerald-50/70 dark:bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60">
                        <span className="font-black text-emerald-800 dark:text-emerald-200 block mb-1">
                          💡 Hướng dẫn giải:
                        </span>
                        {ex.solution}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Memory Tip Magic Card */}
              {lesson.theory.memoryTip && (
                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-2 border-emerald-400 dark:border-emerald-700 rounded-3xl p-4 flex items-start gap-3 shadow-xs">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                    🌟
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block mb-0.5">
                      Thần Chú Ghi Nhớ & Mẹo Tính Siêu Tốc
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 font-bold leading-relaxed">
                      {lesson.theory.memoryTip}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Button to switch to practice */}
              <button
                id="start-lesson-practice-btn"
                onClick={() => {
                  soundFx.playClick();
                  setTab('practice');
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-3.5 rounded-2xl shadow-md hover:shadow-lg transition active:scale-98"
              >
                <span>Con Đã Hiểu! Bắt Đầu Vượt Ải 10 Câu Ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Practice Challenge Mode (10 Questions Progress) */
            <div className="space-y-4">
              {/* Question 10-Dot Progress Stepper */}
              <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-800 dark:text-slate-200">
                      Tiến độ: Câu {currentQIndex + 1}/{totalQuestions}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-lg border ${getDifficultyTier(currentQIndex).color}`}>
                      {getDifficultyTier(currentQIndex).label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      Đúng: <strong className="text-emerald-600 dark:text-emerald-400">{correctCount}</strong>/10
                    </span>
                  </div>
                </div>

                {/* 10 Step Dots */}
                <div className="grid grid-cols-10 gap-1.5 pt-1">
                  {Array.from({ length: totalQuestions }).map((_, idx) => {
                    const isCur = idx === currentQIndex;
                    const status = questionHistory[idx];

                    let dotClass = 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400';
                    if (status === true) {
                      dotClass = 'bg-emerald-500 text-white shadow-xs';
                    } else if (status === false) {
                      dotClass = 'bg-rose-500 text-white shadow-xs';
                    } else if (isCur) {
                      dotClass = 'bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-1 dark:ring-offset-slate-900 font-black animate-pulse';
                    }

                    return (
                      <div
                        key={idx}
                        className={`h-7 rounded-xl flex items-center justify-center text-[11px] font-bold transition-all ${dotClass}`}
                      >
                        {status === true ? '✓' : status === false ? '✗' : idx + 1}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Question Statement Card */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 dark:from-slate-800/90 dark:to-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-3xl p-4 sm:p-5 shadow-xs">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">❓</span>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-relaxed">
                    {currentQ.question}
                  </h3>
                </div>
              </div>

              {/* Multiple Choice Options */}
              {currentQ.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    let optionStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-400 hover:bg-blue-50/30';

                    if (isAnswerSubmitted) {
                      if (opt === currentQ.correctAnswer) {
                        optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-black ring-2 ring-emerald-400';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 font-bold';
                      } else {
                        optionStyle = 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-40';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-900 dark:text-blue-200 font-black ring-2 ring-blue-400 shadow-sm';
                    }

                    return (
                      <button
                        key={idx}
                        id={`option-btn-${idx}`}
                        disabled={isAnswerSubmitted}
                        onClick={() => handleSelectOption(opt)}
                        className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs font-black">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isAnswerSubmitted && opt === currentQ.correctAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isAnswerSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Explanation / Result Banner */}
              {isAnswerSubmitted && (
                <div
                  className={`p-4 rounded-2xl border-2 space-y-2 animate-in fade-in-50 duration-200 ${
                    isCorrect
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
                      : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span className="font-black text-emerald-900 dark:text-emerald-200 text-sm">
                          Chính xác! Con làm rất tốt! 🎉
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span className="font-black text-rose-900 dark:text-rose-200 text-sm">
                          Chưa chính xác rồi, hãy xem lời giải bên dưới nhé!
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed bg-white/70 dark:bg-slate-900/60 p-2.5 rounded-xl">
                    <strong>Lời giải:</strong> {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* AI Hint / Standard Hint Box */}
              {(showHint || aiHintText) && !isAnswerSubmitted && (
                <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-2xl p-3.5 flex items-start gap-2.5 animate-in fade-in duration-200">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 dark:text-amber-200">
                    <strong className="block mb-0.5">Gợi ý từ Thầy Cú:</strong>
                    {aiHintText || currentQ.hint || 'Hãy đọc kỹ đề bài và áp dụng công thức ở phần Lý Thuyết!'}
                  </div>
                </div>
              )}

              {/* Action Buttons Footer */}
              <div className="flex items-center justify-between pt-2 gap-3">
                {!isAnswerSubmitted ? (
                  <>
                    <button
                      id="ask-ai-hint-btn"
                      onClick={handleAskAIHint}
                      disabled={aiHintLoading}
                      className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 px-3.5 py-2.5 rounded-xl border border-indigo-200 dark:border-indigo-800 transition"
                    >
                      <Bot className="w-4 h-4" />
                      <span>{aiHintLoading ? 'Đang suy nghĩ...' : 'Hỏi Gợi Ý'}</span>
                    </button>

                    <button
                      id="check-answer-btn"
                      disabled={!selectedAnswer}
                      onClick={handleCheckAnswer}
                      className={`px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition active:scale-95 ${
                        selectedAnswer
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Kiểm Tra Đáp Án
                    </button>
                  </>
                ) : (
                  <button
                    id="next-question-btn"
                    onClick={handleNextQuestion}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-3 rounded-2xl shadow-md transition active:scale-98"
                  >
                    <span>
                      {currentQIndex + 1 < totalQuestions ? 'Câu Hỏi Tiếp Theo (Câu ' + (currentQIndex + 2) + ')' : 'Xem Kết Quả Vượt Ải'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
