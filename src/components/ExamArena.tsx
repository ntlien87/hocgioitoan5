import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Timer, Award, CheckCircle2, XCircle, ArrowLeft, ArrowRight, Flag, RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Exam } from '../types/math';
import { exams } from '../data/exams';
import { soundFx } from '../utils/audio';

interface ExamArenaProps {
  examScores: { [examId: string]: number };
  onSaveExamScore: (examId: string, score: number, xpGained: number) => void;
}

export const ExamArena: React.FC<ExamArenaProps> = ({
  examScores,
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
          origin: { y: 0.6 },
        });
      } catch (e) {
        // ignore
      }
    } else {
      soundFx.playCorrect();
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 py-4 pb-24 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Phòng Khảo Thí & Đề Thi Chính Thức</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black">
            Bộ Đề Thi Giữa Kỳ, Cuối Kỳ & Lớp 6 CLC
          </h1>
          <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-lg">
            Đề thi bám sát cấu trúc thi chuẩn của Bộ Giáo Dục, có đồng hồ bấm giờ, chấm điểm thang 10 và đáp án lời giải chi tiết.
          </p>
        </div>
      </div>

      {!selectedExam ? (
        /* Exams Directory List */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exams.map((exam) => {
            const bestScore = examScores[exam.id];

            return (
              <div
                key={exam.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-lg flex flex-col justify-between hover:border-indigo-500 transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                      {exam.semester === 1 ? 'Học kỳ 1' : 'Học kỳ 2'} • {exam.durationMinutes} Phút
                    </span>
                    {bestScore !== undefined && (
                      <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-2.5 py-0.5 rounded-full text-xs font-black">
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>Kỷ lục: {bestScore}/10 đ</span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-base sm:text-lg">
                    {exam.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {exam.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-semibold text-slate-500">
                    {exam.questions.length} câu hỏi • Thang điểm 10
                  </span>
                  <button
                    id={`start-exam-${exam.id}`}
                    onClick={() => startExam(exam)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition active:scale-95"
                  >
                    Vào Thi Ngay
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : isExamSubmitted && examResult ? (
        /* Exam Results & Step-by-Step Review */
        <div className="space-y-6">
          {/* Result Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 text-center shadow-xl space-y-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 mx-auto flex items-center justify-center text-4xl shadow-xl">
              🎓
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                Kết Quả Bài Thi: {selectedExam.title}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Số câu trả lời đúng: {examResult.correctCount}/{selectedExam.questions.length}
              </p>
            </div>

            <div className="inline-block bg-indigo-50 dark:bg-indigo-950/40 border-2 border-indigo-200 dark:border-indigo-800 rounded-3xl px-8 py-3 my-2">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block uppercase">
                Điểm Tổng Kết
              </span>
              <span className="text-4xl sm:text-5xl font-black text-indigo-700 dark:text-indigo-300">
                {examResult.score} / 10
              </span>
            </div>

            <div className="flex justify-center gap-3">
              <button
                id="exam-return-btn"
                onClick={() => setSelectedExam(null)}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold px-6 py-3 rounded-2xl shadow-md transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Danh Sách Đề Thi Khác</span>
              </button>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-lg">
              Lời Giải Chi Tiết Từng Câu:
            </h3>

            {selectedExam.questions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`p-4 sm:p-5 rounded-2xl border ${
                    isCorrect
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                      : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500">
                      Câu {idx + 1} ({q.points} điểm) • {q.topic}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold">
                      {isCorrect ? (
                        <span className="text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Đúng
                        </span>
                      ) : (
                        <span className="text-rose-600 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Chưa đúng
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                    {q.question}
                  </p>

                  <div className="mt-3 text-xs sm:text-sm space-y-1">
                    <p className="text-slate-600 dark:text-slate-300">
                      Con chọn: <strong>{userAns || '(Chưa làm)'}</strong>
                    </p>
                    <p className="text-emerald-700 dark:text-emerald-300 font-semibold">
                      Đáp án chuẩn: <strong>{q.correctAnswer}</strong>
                    </p>
                    <div className="bg-white/80 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700 mt-2">
                      💡 <strong>Hướng dẫn giải chi tiết:</strong> {q.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Active Testing Room */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xl space-y-6">
          {/* Exam Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <button
              onClick={() => {
                if (confirm('Bạn có chắc muốn thoát bài thi không? Dữ liệu đang làm sẽ không được lưu.')) {
                  setSelectedExam(null);
                }
              }}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Thoát</span>
            </button>

            {/* Timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black ${
              timeLeft < 300 ? 'bg-rose-500 text-white animate-pulse' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
            }`}>
              <Timer className="w-4 h-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>

          </div>

          {/* Question Palette Matrix */}
          <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
            {selectedExam.questions.map((q, idx) => {
              const isAnswered = !!answers[q.id];
              const isFlag = flagged[q.id];
              const isCurrent = currentQIndex === idx;

              return (
                <button
                  key={q.id}
                  id={`palette-btn-${idx}`}
                  onClick={() => {
                    soundFx.playClick();
                    setCurrentQIndex(idx);
                  }}
                  className={`w-8 h-8 rounded-xl text-xs font-bold transition flex items-center justify-center relative ${
                    isCurrent
                      ? 'bg-indigo-600 text-white ring-2 ring-indigo-400'
                      : isAnswered
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 border border-slate-200 dark:border-slate-600'
                  }`}
                >
                  <span>{idx + 1}</span>
                  {isFlag && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Question Box */}
          {(() => {
            const currentQ = selectedExam.questions[currentQIndex];
            const currentAns = answers[currentQ.id];
            const isFlag = flagged[currentQ.id];

            return (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-xl">
                    Câu {currentQIndex + 1}/{selectedExam.questions.length} ({currentQ.points} điểm)
                  </span>

                  <button
                    id="toggle-flag-btn"
                    onClick={() => toggleFlag(currentQ.id)}
                    className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl border transition ${
                      isFlag
                        ? 'bg-amber-100 border-amber-300 text-amber-800'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>{isFlag ? 'Đã đánh dấu xem lại' : 'Đánh dấu câu này'}</span>
                  </button>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-relaxed">
                    {currentQ.question}
                  </h3>
                </div>

                {/* Options */}
                {currentQ.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentQ.options.map((opt, idx) => (
                      <button
                        key={idx}
                        id={`exam-opt-${idx}`}
                        onClick={() => handleSelectOption(currentQ.id, opt)}
                        className={`p-4 rounded-2xl border-2 text-left text-xs sm:text-sm font-semibold transition flex items-center justify-between ${
                          currentAns === opt
                            ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-600 text-indigo-900 dark:text-indigo-200'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-indigo-300'
                        }`}
                      >
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Navigation and Submit Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    disabled={currentQIndex === 0}
                    onClick={() => setCurrentQIndex((prev) => prev - 1)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 disabled:opacity-40"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Câu trước</span>
                  </button>

                  {currentQIndex + 1 < selectedExam.questions.length ? (
                    <button
                      onClick={() => setCurrentQIndex((prev) => prev + 1)}
                      className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition"
                    >
                      <span>Câu tiếp theo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      id="submit-exam-final-btn"
                      onClick={() => {
                        if (confirm('Bạn có chắc muốn nộp bài thi ngay bây giờ?')) {
                          submitExam();
                        }
                      }}
                      className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-xs font-extrabold shadow-md transition"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>NỘP BÀI THI</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
