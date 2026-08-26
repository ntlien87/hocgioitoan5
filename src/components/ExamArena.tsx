import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Timer, Award, CheckCircle2, XCircle, ArrowLeft, ArrowRight, Flag, RotateCcw, Sparkles, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Exam, SubjectId } from '../types/curriculum';
import { getExamsBySubject } from '../data/exams';
import { soundFx } from '../utils/audio';

interface ExamArenaProps {
  examScores: { [examId: string]: number };
  currentSubject?: SubjectId;
  onSaveExamScore: (examId: string, score: number, xpGained: number) => void;
}

export const ExamArena: React.FC<ExamArenaProps> = ({
  examScores,
  currentSubject = 'math',
  onSaveExamScore,
}) => {
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [qId: string]: string }>({});
  const [flagged, setFlagged] = useState<{ [qId: string]: boolean }>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  const [examResult, setExamResult] = useState<{ score: number; totalPoints: number; correctCount: number } | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const answersRef = useRef<{ [qId: string]: string }>({});

  const activeSubject: SubjectId = currentSubject as SubjectId;
  const availableExams = getExamsBySubject(activeSubject);

  const startExam = (exam: Exam) => {
    soundFx.playLevelUp();
    setSelectedExam(exam);
    setCurrentQIndex(0);
    setAnswers({});
    answersRef.current = {};
    setFlagged({});
    setTimeLeft(exam.durationMinutes * 60);
    setIsExamSubmitted(false);
    setExamResult(null);
  };

  useEffect(() => {
    if (!selectedExam || isExamSubmitted) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [selectedExam, isExamSubmitted]);

  const handleSelectOption = (qId: string, opt: string) => {
    if (isExamSubmitted) return;
    soundFx.playClick();
    setAnswers((prev) => {
      const next = { ...prev, [qId]: opt };
      answersRef.current = next;
      return next;
    });
  };

  const toggleFlag = (qId: string) => {
    soundFx.playClick();
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const submitExam = () => {
    if (!selectedExam) return;
    if (timerRef.current) clearInterval(timerRef.current);

    let earnedPoints = 0;
    let correctCount = 0;

    selectedExam.questions.forEach((q) => {
      if (answersRef.current[q.id] === q.correctAnswer) {
        earnedPoints += q.points;
        correctCount += 1;
      }
    });

    const finalScore = Math.round((earnedPoints / selectedExam.totalPoints) * 10 * 10) / 10;
    setExamResult({
      score: finalScore,
      totalPoints: selectedExam.totalPoints,
      correctCount,
    });
    setIsExamSubmitted(true);

    const xpGained = Math.round(finalScore * 20);
    onSaveExamScore(selectedExam.id, finalScore, xpGained);

    if (finalScore >= 8) {
      soundFx.playLevelUp();
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
        });
      } catch (e) {}
    } else {
      soundFx.playWrong();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const subjectExamHeaders: Record<SubjectId, { title: string; desc: string; gradient: string; icon: string }> = {
    math: {
      title: 'Phòng Thi Chuẩn Quốc Gia - Toán 5 📐',
      desc: 'Bộ 5 đề thi Giữa kỳ, Cuối kỳ & Tuyển sinh Lớp 6 Trường Chuyên chuẩn thang điểm 10.',
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
      icon: '📐',
    },
    vietnamese: {
      title: 'Phòng Thi Chuẩn Quốc Gia - Tiếng Việt 5 ✍️',
      desc: 'Bộ 5 đề thi Đọc hiểu, Luyện từ và câu, Nghệ thuật miêu tả & Tuyển sinh Lớp 6 Chuyên Văn.',
      gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
      icon: '✍️',
    },
    english: {
      title: 'Primary National Exam Room - English 5 🇬🇧',
      desc: 'Complete 5 standard exams for Grade 5 (Term 1, Term 2 & Advanced Selective Schools).',
      gradient: 'from-blue-600 via-indigo-600 to-sky-600',
      icon: '🇬🇧',
    },
  };

  const headerInfo = subjectExamHeaders[activeSubject] || subjectExamHeaders.math;

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-5 py-3 pb-28 space-y-6 select-none">
      {/* Header Banner */}
      {!selectedExam && (
        <div className={`bg-gradient-to-r ${headerInfo.gradient} rounded-3xl p-5 sm:p-7 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4`}>
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-amber-200 mb-2 border border-white/20">
              <GraduationCap className="w-4 h-4" />
              <span>Phòng Khảo Thí & Đánh Giá Năng Lực Lớp 5</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight drop-shadow-xs">
              {headerInfo.title}
            </h1>
            <p className="text-white/90 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed font-bold">
              {headerInfo.desc}
            </p>
          </div>

          <div className="bg-black/25 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 flex sm:flex-col items-center justify-between sm:justify-center shrink-0">
            <span className="text-[11px] font-bold text-white/80">Tổng Số Đề</span>
            <span className="text-xl sm:text-2xl font-black text-amber-300">{availableExams.length} Đề Thi</span>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      {!selectedExam ? (
        /* Exams Card Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {availableExams.map((exam) => {
            const previousScore = examScores[exam.id];
            const isPassed = previousScore !== undefined;

            return (
              <div
                key={exam.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between game-card"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {exam.type === 'mid-term-1' ? 'Giữa Học Kỳ 1' : exam.type === 'final-term-1' ? 'Cuối Học Kỳ 1' : exam.type === 'mid-term-2' ? 'Giữa Học Kỳ 2' : exam.type === 'final-term-2' ? 'Cuối Học Kỳ 2' : 'Tuyển Sinh Lớp 6 CLC'}
                    </span>

                    <div className="flex items-center gap-1 text-xs font-black text-slate-500">
                      <Timer className="w-3.5 h-3.5" />
                      <span>{exam.durationMinutes} phút</span>
                    </div>
                  </div>

                  <h3 className="font-black text-slate-900 dark:text-slate-100 text-base sm:text-lg tracking-tight">
                    {exam.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mt-1.5 font-semibold line-clamp-2 leading-relaxed">
                    {exam.description}
                  </p>

                  {/* Previous Score Pill */}
                  {isPassed && (
                    <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-black">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>Điểm cao nhất: {previousScore}/10 điểm</span>
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-black text-slate-500">
                    {exam.questions.length} câu • Thang điểm 10
                  </span>
                  <button
                    id={`start-exam-${exam.id}`}
                    onClick={() => startExam(exam)}
                    className="btn-3d btn-3d-blue text-xs font-black px-5 py-2.5 rounded-xl shadow-md"
                  >
                    Vào Thi Ngay ⚔️
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Active Exam Workspace */
        <div className="space-y-4 animate-in fade-in-50 duration-200">
          {/* Top Timer & Action Bar */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 p-3.5 sm:p-4 shadow-md flex items-center justify-between gap-3">
            <button
              onClick={() => {
                if (window.confirm('Con có chắc chắn muốn rời khỏi phòng thi không? Kết quả bài làm chưa nộp sẽ không được lưu.')) {
                  setSelectedExam(null);
                }
              }}
              className="flex items-center gap-1.5 text-xs font-black text-slate-600 dark:text-slate-300 hover:text-slate-900 btn-3d"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Thoát</span>
            </button>

            {!isExamSubmitted && (
              <div className="flex items-center gap-2 bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-300 dark:border-rose-800 px-4 py-1.5 rounded-2xl text-rose-700 dark:text-rose-300 shadow-xs">
                <Timer className="w-4 h-4 animate-pulse text-rose-500" />
                <span className="font-mono font-black text-base sm:text-lg">{formatTime(timeLeft)}</span>
              </div>
            )}

            {!isExamSubmitted ? (
              <button
                id="submit-exam-btn"
                onClick={() => {
                  const answeredCount = Object.keys(answers).length;
                  const total = selectedExam.questions.length;
                  if (answeredCount < total) {
                    if (!window.confirm(`Con mới làm ${answeredCount}/${total} câu. Con có chắc muốn nộp bài sớm không?`)) {
                      return;
                    }
                  }
                  submitExam();
                }}
                className="btn-3d btn-3d-emerald text-xs font-black px-5 py-2.5 rounded-xl shadow-md"
              >
                Nộp Bài Thi
              </button>
            ) : (
              <button
                onClick={() => setSelectedExam(null)}
                className="btn-3d btn-3d-blue text-xs font-black px-5 py-2.5 rounded-xl shadow-md"
              >
                Về Danh Sách Đề
              </button>
            )}
          </div>

          {/* Exam Result Podium */}
          {isExamSubmitted && examResult && (
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl border-2 border-indigo-300 dark:border-indigo-800 p-6 text-center space-y-4 shadow-xl animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 mx-auto flex items-center justify-center text-4xl shadow-lg animate-bounce">
                🏆
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-100">
                Kết Quả Bài Thi: {examResult.score} / 10 Điểm
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto font-bold">
                Con đã làm đúng <strong className="text-emerald-600 dark:text-emerald-400 text-base">{examResult.correctCount}/{selectedExam.questions.length} câu</strong>. Hãy xem lại từng câu hỏi bên dưới để đối chiếu lời giải chi tiết nhé!
              </p>
            </div>
          )}

          {/* Question Grid Number Selector */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 p-4 shadow-xs">
            <div className="text-xs font-black text-slate-500 mb-2">Bảng câu hỏi ({selectedExam.questions.length} câu):</div>
            <div className="flex flex-wrap gap-2">
              {selectedExam.questions.map((q, idx) => {
                const isCurrent = idx === currentQIndex;
                const isAnswered = !!answers[q.id];
                const isFlag = !!flagged[q.id];
                let isRight = false;
                if (isExamSubmitted) {
                  isRight = answers[q.id] === q.correctAnswer;
                }

                let btnStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';

                if (isExamSubmitted) {
                  btnStyle = isRight
                    ? 'btn-3d-emerald font-black shadow-xs'
                    : 'btn-3d-rose font-black shadow-xs';
                } else if (isCurrent) {
                  btnStyle = 'btn-3d-blue font-black ring-2 ring-blue-400 shadow-sm';
                } else if (isAnswered) {
                  btnStyle = 'bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-200 border-2 border-blue-400 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      soundFx.playClick();
                      setCurrentQIndex(idx);
                    }}
                    className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs font-bold transition btn-3d ${btnStyle}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlag && !isExamSubmitted && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Question Display Card */}
          {selectedExam.questions[currentQIndex] && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-3 py-1 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-full">
                    Câu {currentQIndex + 1} / {selectedExam.questions.length} ({selectedExam.questions[currentQIndex].points} điểm)
                  </span>
                  <span className="text-xs font-bold text-slate-500 hidden sm:inline">
                    Chủ đề: {selectedExam.questions[currentQIndex].topic}
                  </span>
                </div>

                {!isExamSubmitted && (
                  <button
                    onClick={() => toggleFlag(selectedExam.questions[currentQIndex].id)}
                    className={`flex items-center gap-1 text-xs font-black px-3 py-1 rounded-xl border transition ${
                      flagged[selectedExam.questions[currentQIndex].id]
                        ? 'border-amber-400 bg-amber-50 text-amber-800'
                        : 'border-slate-200 text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>{flagged[selectedExam.questions[currentQIndex].id] ? 'Đã đánh dấu' : 'Đánh dấu'}</span>
                  </button>
                )}
              </div>

              {/* Question Statement */}
              <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                {selectedExam.questions[currentQIndex].question}
              </h3>

              {/* Multiple Choice Options */}
              {selectedExam.questions[currentQIndex].options && (
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedExam.questions[currentQIndex].options.map((opt, idx) => {
                    const qId = selectedExam.questions[currentQIndex].id;
                    const isSelected = answers[qId] === opt;
                    const isCorrectOpt = opt === selectedExam.questions[currentQIndex].correctAnswer;

                    let optionStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400';

                    if (isExamSubmitted) {
                      if (isCorrectOpt) {
                        optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-black ring-2 ring-emerald-400';
                      } else if (isSelected && !isCorrectOpt) {
                        optionStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 font-bold';
                      } else {
                        optionStyle = 'bg-slate-50 opacity-40';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-900 dark:text-indigo-200 font-black ring-2 ring-indigo-400 shadow-sm';
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isExamSubmitted}
                        onClick={() => handleSelectOption(qId, opt)}
                        className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left text-xs sm:text-sm font-bold transition-all flex items-center justify-between btn-3d active:scale-98 ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center text-xs font-black shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isExamSubmitted && isCorrectOpt && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isExamSubmitted && isSelected && !isCorrectOpt && (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Detailed Solution on Exam Review */}
              {isExamSubmitted && (
                <div className="bg-emerald-50/80 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800 p-4 rounded-2xl space-y-1.5 text-xs">
                  <div className="font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Lời giải chi tiết:</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                    {selectedExam.questions[currentQIndex].explanation}
                  </p>
                </div>
              )}

              {/* Prev / Next Question Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={currentQIndex === 0}
                  onClick={() => {
                    soundFx.playClick();
                    setCurrentQIndex((prev) => Math.max(0, prev - 1));
                  }}
                  className="flex items-center gap-1.5 text-xs font-black px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 btn-3d btn-3d-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Câu Trước</span>
                </button>

                <button
                  disabled={currentQIndex + 1 >= selectedExam.questions.length}
                  onClick={() => {
                    soundFx.playClick();
                    setCurrentQIndex((prev) => Math.min(selectedExam.questions.length - 1, prev + 1));
                  }}
                  className="flex items-center gap-1.5 text-xs font-black px-4 py-2.5 rounded-xl btn-3d btn-3d-blue disabled:opacity-40"
                >
                  <span>Câu Tiếp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
