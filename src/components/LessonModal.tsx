import React, { useState } from 'react';
import { X, BookOpen, Swords, Lightbulb, CheckCircle2, XCircle, ArrowRight, Star, Sparkles, Bot, Volume2, Bookmark, Compass, RotateCcw, AlertCircle, Eye, Ear, Wind, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Chapter, LessonLevel, Question } from '../types/curriculum';
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
  const [hasPassed, setHasPassed] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Results tracker
  const [questionHistory, setQuestionHistory] = useState<(boolean | null)[]>(
    () => Array(lesson.questions.length).fill(null)
  );
  const [missedQuestions, setMissedQuestions] = useState<MissedQuestionItem[]>([]);

  // AI Hint state
  const [aiHintLoading, setAiHintLoading] = useState(false);
  const [aiHintText, setAiHintText] = useState<string | null>(null);

  const totalQuestions = lesson.questions.length;
  const currentQ = lesson.questions[currentQIndex];

  // Speech synthesis helper
  const handleSpeakTheory = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const isEnglish = chapter.subjectId === 'english';
      const textToSpeak = `${lesson.theory.title}. ${lesson.theory.keyPoints.join('. ')}. ${lesson.theory.formula || ''}. ${lesson.theory.memoryTip || ''}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = isEnglish ? 'en-US' : 'vi-VN';
      utterance.rate = isEnglish ? 0.9 : 0.95;
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
      const finalScore = correctCount + (isCorrect ? 1 : 0);
      const passed = finalScore >= totalQuestions;
      setHasPassed(passed);
      setIsFinished(true);

      if (passed) {
        soundFx.playLevelUp();
        try {
          confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.5 },
          });
        } catch (e) {}
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
    setHasPassed(false);
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
          subject: chapter.subjectId || 'vietnamese',
        }),
      });
      const data = await res.json();
      setAiHintText(data.reply || currentQ.hint || 'Gợi ý: Đọc kỹ câu hỏi và làm theo các bước lý thuyết đã học nhé!');
    } catch (e) {
      setAiHintText(currentQ.hint || 'Gợi ý: Đọc kỹ câu hỏi và áp dụng bí kíp đã học!');
    } finally {
      setAiHintLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto pt-safe pb-safe">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[94vh] my-auto animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className={`p-4 sm:p-5 bg-gradient-to-r ${chapter.color} text-white flex items-center justify-between shadow-md`}>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl sm:text-3xl shadow-inner ring-2 ring-white/40 shrink-0">
              {lesson.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-black/20 px-2.5 py-0.5 rounded-full text-white/95">
                  Ải {lesson.levelNumber}
                </span>
                <span className="text-xs font-bold text-white/90 truncate max-w-[170px] sm:max-w-xs">
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
            className="p-2 rounded-2xl bg-black/20 hover:bg-black/30 text-white transition active:scale-90"
            title="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        {!isFinished && (
          <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-800/90 p-1.5 gap-2 select-none">
            <button
              id="lesson-tab-theory"
              onClick={() => {
                soundFx.playClick();
                setTab('theory');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all btn-3d ${
                tab === 'theory'
                  ? 'btn-3d-white text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>1. Bí Kíp & Sổ Tay Vàng</span>
            </button>
            <button
              id="lesson-tab-practice"
              onClick={() => {
                soundFx.playClick();
                setTab('practice');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all btn-3d ${
                tab === 'practice'
                  ? 'btn-3d-white text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Swords className="w-4 h-4 text-rose-500" />
              <span>2. Thử Thách Vượt Ải ({totalQuestions} câu)</span>
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {isFinished ? (
            hasPassed ? (
              /* Perfect Pass Screen */
              <div className="text-center py-6 space-y-5 animate-in zoom-in-90 duration-300">
                <div className="relative inline-block">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-400 to-amber-500 mx-auto flex items-center justify-center text-5xl sm:text-6xl shadow-2xl animate-bounce">
                    🏆
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-md border-2 border-white">
                    HOÀN HẢO {totalQuestions}/{totalQuestions}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-100">
                    Xuất Sắc! Vượt Ải {lesson.levelNumber} Thành Công!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-bold">
                    Con đã nắm trọn vẹn kiến thức và bí kíp đắt giá của bài học này!
                  </p>
                </div>

                {/* 3 Gold Stars */}
                <div className="flex items-center justify-center gap-3 py-1">
                  {[1, 2, 3].map((starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-10 h-10 text-amber-400 fill-amber-400 scale-110 drop-shadow-md animate-in zoom-in-50"
                    />
                  ))}
                </div>

                {/* Reward Cards */}
                <div className="flex items-center justify-center gap-4 py-2">
                  <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 px-6 py-3 rounded-2xl shadow-xs">
                    <span className="text-xs text-amber-700 dark:text-amber-300 font-extrabold block">Kinh Nghiệm</span>
                    <span className="text-xl font-black text-amber-600">+{lesson.xpReward} XP</span>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/40 border border-orange-300 dark:border-orange-800 px-6 py-3 rounded-2xl shadow-xs">
                    <span className="text-xs text-orange-700 dark:text-orange-300 font-extrabold block">Vàng Thưởng</span>
                    <span className="text-xl font-black text-orange-600">+{lesson.coinReward} Xu</span>
                  </div>
                </div>

                <button
                  id="lesson-finish-btn"
                  onClick={onClose}
                  className="w-full max-w-sm mx-auto btn-3d btn-3d-emerald font-black py-4 rounded-2xl shadow-xl text-base"
                >
                  Tiếp Tục Chinh Phục Ải Mới 🚀
                </button>
              </div>
            ) : (
              /* Retry Screen */
              <div className="py-4 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="text-center space-y-2">
                  <div className="w-18 h-18 rounded-3xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center text-4xl shadow-sm">
                    🎯
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100">
                    Cố Gắng Lên Nào Bé Ơi!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto font-bold">
                    Con đã trả lời đúng <strong className="text-emerald-600 dark:text-emerald-400 text-base">{correctCount}/{totalQuestions}</strong> câu. Hãy xem lại lời giải chi tiết và luyện tập lại để đạt 3 sao hoàn hảo nhé!
                  </p>
                </div>

                {/* Progress bar */}
                <div className="bg-slate-100 dark:bg-slate-800 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between text-xs font-black mb-1.5">
                    <span className="text-slate-600 dark:text-slate-400">Kết quả thử thách:</span>
                    <span className="text-emerald-600 dark:text-emerald-400">{correctCount}/{totalQuestions} câu</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500"
                      style={{ width: `${(correctCount / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Missed Questions */}
                {missedQuestions.length > 0 && (
                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                    <h4 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-rose-500" />
                      <span>Các câu cần xem lại ({missedQuestions.length} câu):</span>
                    </h4>
                    {missedQuestions.map((item, idx) => (
                      <div key={idx} className="bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 p-3.5 rounded-2xl text-xs space-y-1.5">
                        <p className="font-black text-slate-800 dark:text-slate-100">
                          {idx + 1}. {item.question.question}
                        </p>
                        <div className="flex flex-wrap gap-2 text-[11px]">
                          <span className="text-rose-700 dark:text-rose-400 font-bold bg-rose-100 dark:bg-rose-900/60 px-2 py-0.5 rounded-lg">
                            Con chọn: {item.studentAnswer} ❌
                          </span>
                          <span className="text-emerald-700 dark:text-emerald-300 font-black bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-lg">
                            Đúng: {item.question.correctAnswer} ✅
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-[11px] bg-white/80 dark:bg-slate-800 p-2.5 rounded-xl border border-rose-100 dark:border-slate-700 font-medium leading-relaxed">
                          💡 <strong>Giải thích:</strong> {item.question.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    id="retry-lesson-quiz-btn"
                    onClick={handleRetryQuiz}
                    className="flex-1 btn-3d btn-3d-emerald font-black py-3.5 rounded-2xl shadow-md text-sm flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Luyện Lại Vượt Ải</span>
                  </button>

                  <button
                    id="review-theory-btn"
                    onClick={() => {
                      soundFx.playClick();
                      setTab('theory');
                      setIsFinished(false);
                    }}
                    className="btn-3d btn-3d-white font-black py-3.5 px-5 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-4 h-4 text-amber-500" />
                    <span>Ôn Bí Kíp</span>
                  </button>
                </div>
              </div>
            )
          ) : tab === 'theory' ? (
            /* Theory Mode */
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📖</span>
                  <span className="text-xs font-black uppercase text-slate-700 dark:text-slate-200">
                    Sổ Tay Bí Kíp & Sơ Đồ Tư Duy
                  </span>
                </div>
                {'speechSynthesis' in window && (
                  <button
                    id="read-theory-speech-btn"
                    onClick={handleSpeakTheory}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black transition btn-3d ${
                      isSpeaking
                        ? 'btn-3d-rose animate-pulse'
                        : 'btn-3d-emerald'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isSpeaking ? 'Dừng Đọc' : '🔊 Đọc Giúp Con'}</span>
                  </button>
                )}
              </div>

              {/* Key Concept Flashcard */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-950/40 dark:to-teal-950/20 border-2 border-emerald-300 dark:border-emerald-800 rounded-3xl p-4 sm:p-5 shadow-xs">
                <h3 className="font-black text-emerald-950 dark:text-emerald-100 text-sm sm:text-base flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" />
                  {lesson.theory.title}
                </h3>
                <div className="space-y-2.5">
                  {lesson.theory.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white/90 dark:bg-slate-800/90 p-3 rounded-2xl border border-emerald-200/80 dark:border-slate-700 shadow-xs">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sensory Guide */}
              {lesson.theory.sensoryGuide && (
                <div className="bg-white dark:bg-slate-800/80 border-2 border-teal-200 dark:border-teal-800 rounded-3xl p-4 sm:p-5 space-y-3">
                  <h4 className="text-xs sm:text-sm font-black text-teal-900 dark:text-teal-200 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Kho Từ Vựng 5 Giác Quan Đắt Giá:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {lesson.theory.sensoryGuide.sight && (
                      <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-2xl border border-amber-200 dark:border-amber-800/60">
                        <span className="font-black text-amber-800 dark:text-amber-300 flex items-center gap-1 mb-1">
                          <Eye className="w-3.5 h-3.5" /> Thị giác:
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 font-bold">{lesson.theory.sensoryGuide.sight.join(', ')}</p>
                      </div>
                    )}
                    {lesson.theory.sensoryGuide.sound && (
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-2xl border border-blue-200 dark:border-blue-800/60">
                        <span className="font-black text-blue-800 dark:text-blue-300 flex items-center gap-1 mb-1">
                          <Ear className="w-3.5 h-3.5" /> Thính giác:
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 font-bold">{lesson.theory.sensoryGuide.sound.join(', ')}</p>
                      </div>
                    )}
                    {lesson.theory.sensoryGuide.smell && (
                      <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800/60">
                        <span className="font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-1 mb-1">
                          <Wind className="w-3.5 h-3.5" /> Khứu giác:
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 font-bold">{lesson.theory.sensoryGuide.smell.join(', ')}</p>
                      </div>
                    )}
                    {lesson.theory.sensoryGuide.emotion && (
                      <div className="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-800/60">
                        <span className="font-black text-rose-800 dark:text-rose-300 flex items-center gap-1 mb-1">
                          <Heart className="w-3.5 h-3.5" /> Cảm xúc:
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 font-bold">{lesson.theory.sensoryGuide.emotion.join(', ')}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Formula */}
              {lesson.theory.formula && (
                <div className="bg-amber-500/10 border-2 border-dashed border-amber-400 rounded-3xl p-4 sm:p-5 text-center shadow-xs">
                  <div className="inline-flex items-center gap-1.5 text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 bg-amber-200/60 dark:bg-amber-900/60 px-3 py-1 rounded-full">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Công Thức Ghi Nhớ Vàng</span>
                  </div>
                  <div className="font-black text-sm sm:text-base text-amber-950 dark:text-amber-100 bg-white dark:bg-slate-800 py-3.5 px-4 rounded-2xl shadow-sm border border-amber-200 dark:border-amber-700">
                    {lesson.theory.formula}
                  </div>
                </div>
              )}

              {/* Memory Tip */}
              {lesson.theory.memoryTip && (
                <div className="bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border-2 border-emerald-400 rounded-3xl p-4 flex items-start gap-3 shadow-xs">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                    🌟
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block mb-0.5">
                      Bí Kíp Nhớ Siêu Lâu
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 font-extrabold leading-relaxed">
                      {lesson.theory.memoryTip}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                id="start-lesson-practice-btn"
                onClick={() => {
                  soundFx.playClick();
                  setTab('practice');
                }}
                className="w-full flex items-center justify-center gap-2 btn-3d btn-3d-emerald font-black py-4 rounded-2xl shadow-lg text-sm sm:text-base"
              >
                <span>Con Đã Hiểu! Bắt Đầu Vượt Ải Ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Practice Quiz Mode */
            <div className="space-y-4">
              {/* Stepper Header */}
              <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-800 dark:text-slate-200">
                    Tiến độ: Câu {currentQIndex + 1}/{totalQuestions}
                  </span>
                  <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400">
                    Đúng: <strong className="text-emerald-600 dark:text-emerald-400">{correctCount}</strong>/{totalQuestions}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 pt-1">
                  {Array.from({ length: totalQuestions }).map((_, idx) => {
                    const isCur = idx === currentQIndex;
                    const status = questionHistory[idx];

                    let dotClass = 'bg-slate-200 dark:bg-slate-700 text-slate-500';
                    if (status === true) {
                      dotClass = 'bg-emerald-500 text-white font-black shadow-xs';
                    } else if (status === false) {
                      dotClass = 'bg-rose-500 text-white font-black shadow-xs';
                    } else if (isCur) {
                      dotClass = 'bg-amber-500 text-white ring-2 ring-amber-400 font-black animate-pulse';
                    }

                    return (
                      <div
                        key={idx}
                        className={`flex-1 h-7 rounded-xl flex items-center justify-center text-[11px] font-bold transition-all ${dotClass}`}
                      >
                        {status === true ? '✓' : status === false ? '✗' : idx + 1}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Question Statement */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 dark:from-slate-800/90 dark:to-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-3xl p-4 sm:p-5 shadow-xs">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">❓</span>
                  <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-relaxed">
                    {currentQ.question}
                  </h3>
                </div>
              </div>

              {/* Large Touch-friendly Option Buttons */}
              {currentQ.options && (
                <div className="grid grid-cols-1 gap-2.5">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    let optionStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-400';

                    if (isAnswerSubmitted) {
                      if (opt === currentQ.correctAnswer) {
                        optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-black ring-2 ring-emerald-400';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 font-bold';
                      } else {
                        optionStyle = 'bg-slate-50 opacity-40';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200 font-black ring-2 ring-blue-400 shadow-sm';
                    }

                    return (
                      <button
                        key={idx}
                        id={`option-btn-${idx}`}
                        disabled={isAnswerSubmitted}
                        onClick={() => handleSelectOption(opt)}
                        className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left text-xs sm:text-sm font-bold transition-all flex items-center justify-between btn-3d active:scale-98 ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center text-xs font-black shrink-0">
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

              {/* Explanation Banner */}
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
                          Chính xác! Bé giỏi quá! 🎉
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span className="font-black text-rose-900 dark:text-rose-200 text-sm">
                          Chưa chính xác, hãy xem phân tích bên dưới nhé!
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold leading-relaxed bg-white/80 dark:bg-slate-900/80 p-3 rounded-xl">
                    <strong>Phân tích:</strong> {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* AI Hint */}
              {(showHint || aiHintText) && !isAnswerSubmitted && (
                <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-2xl p-3.5 flex items-start gap-2.5 animate-in fade-in duration-200">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 dark:text-amber-200 font-bold">
                    <strong className="block mb-0.5">Gợi ý từ Gia Sư AI:</strong>
                    {aiHintText || currentQ.hint || 'Hãy đọc kỹ câu hỏi và áp dụng bí kíp ở phần Sổ Tay nhé!'}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 gap-3">
                {!isAnswerSubmitted ? (
                  <>
                    <button
                      id="ask-ai-hint-btn"
                      onClick={handleAskAIHint}
                      disabled={aiHintLoading}
                      className="flex items-center gap-1.5 text-xs font-black text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 px-4 py-3 rounded-2xl border border-teal-200 dark:border-teal-800 transition btn-3d"
                    >
                      <Bot className="w-4 h-4" />
                      <span>{aiHintLoading ? 'Đang nghĩ...' : 'Hỏi Gợi Ý'}</span>
                    </button>

                    <button
                      id="check-answer-btn"
                      disabled={!selectedAnswer}
                      onClick={handleCheckAnswer}
                      className={`px-7 py-3 rounded-2xl text-xs sm:text-sm font-black transition btn-3d ${
                        selectedAnswer
                          ? 'btn-3d-emerald shadow-lg'
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
                    className="w-full flex items-center justify-center gap-2 btn-3d btn-3d-emerald font-black py-3.5 rounded-2xl shadow-xl text-sm"
                  >
                    <span>
                      {currentQIndex + 1 < totalQuestions ? 'Câu Tiếp Theo' : 'Xem Kết Quả Vượt Ải 🏆'}
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
