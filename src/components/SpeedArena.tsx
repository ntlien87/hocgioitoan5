import React, { useState, useEffect, useRef } from 'react';
import { Zap, Play, RotateCcw, Trophy, Flame, Sparkles, CheckCircle2, XCircle, Timer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

interface SpeedArenaProps {
  highScore: number;
  onUpdateHighScore: (score: number, xpGained: number) => void;
}

interface FastQuestion {
  statement: string;
  options: (number | string)[];
  correctAnswer: number | string;
  category: string;
}

// Procedural fast math question generator for Grade 5
function generateFastQuestion(): FastQuestion {
  const types = ['decimal_mul', 'percent_calc', 'fraction_quick', 'unit_convert', 'geometry_quick', 'decimal_add'];
  const chosenType = types[Math.floor(Math.random() * types.length)];

  if (chosenType === 'decimal_mul') {
    const a = (Math.floor(Math.random() * 80) + 10) / 10; // e.g. 3.5
    const factor = [10, 100, 0.1, 2, 0.5][Math.floor(Math.random() * 5)];
    let ans: number;
    let stmt = '';
    if (factor === 0.5) {
      stmt = `${a} : 0.5 = ?`;
      ans = Math.round(a * 2 * 10) / 10;
    } else {
      stmt = `${a} × ${factor} = ?`;
      ans = Math.round(a * factor * 100) / 100;
    }
    const wrong1 = Math.round((ans + (Math.random() > 0.5 ? 1 : -1) * (factor >= 10 ? 10 : 0.5)) * 100) / 100;
    const wrong2 = Math.round((ans * 10) * 100) / 100;
    const wrong3 = Math.round((ans / 10) * 100) / 100;
    const opts = Array.from(new Set([ans, wrong1, wrong2, wrong3])).slice(0, 4);
    while (opts.length < 4) opts.push(Math.round((ans + opts.length) * 10) / 10);
    opts.sort(() => Math.random() - 0.5);

    return {
      statement: stmt,
      options: opts,
      correctAnswer: ans,
      category: 'Số thập phân',
    };
  }

  if (chosenType === 'percent_calc') {
    const p = [10, 20, 25, 50, 75][Math.floor(Math.random() * 5)];
    const base = [40, 80, 120, 200, 300, 400][Math.floor(Math.random() * 6)];
    const ans = (base * p) / 100;
    const wrong1 = ans + 10;
    const wrong2 = ans - 5 > 0 ? ans - 5 : ans + 15;
    const wrong3 = (base * (p + 10)) / 100;
    const opts = Array.from(new Set([ans, wrong1, wrong2, wrong3])).slice(0, 4);
    while (opts.length < 4) opts.push(ans + opts.length * 2);
    opts.sort(() => Math.random() - 0.5);

    return {
      statement: `Tìm ${p}% của ${base}:`,
      options: opts,
      correctAnswer: ans,
      category: 'Tỉ số %',
    };
  }

  if (chosenType === 'fraction_quick') {
    const fracPairs = [
      { stmt: '1/2 + 1/4 = ?', ans: '3/4', wr: ['2/6', '1/3', '5/4'] },
      { stmt: '1 - 2/5 = ?', ans: '3/5', wr: ['1/5', '2/5', '4/5'] },
      { stmt: '2/3 × 3/4 = ?', ans: '1/2', wr: ['6/12', '5/7', '2/4'] },
      { stmt: '3/5 : 3/10 = ?', ans: '2', wr: ['1', '9/50', '1/2'] },
      { stmt: 'Rút gọn 18/24 về tối giản:', ans: '3/4', wr: ['9/12', '6/8', '2/3'] },
    ];
    const picked = fracPairs[Math.floor(Math.random() * fracPairs.length)];
    const opts = [picked.ans, ...picked.wr].sort(() => Math.random() - 0.5);
    return {
      statement: picked.stmt,
      options: opts,
      correctAnswer: picked.ans,
      category: 'Phân số',
    };
  }

  if (chosenType === 'unit_convert') {
    const units = [
      { stmt: '2.5 m = ... cm', ans: '250', wr: ['25', '2500', '0.25'] },
      { stmt: '3 ha = ... m²', ans: '30000', wr: ['3000', '300', '300000'] },
      { stmt: '1.5 dm³ = ... lít', ans: '1.5', wr: ['15', '150', '1500'] },
      { stmt: '2 tấn 50 kg = ... tấn', ans: '2.05', wr: ['2.5', '2.50', '20.5'] },
      { stmt: '1.2 giờ = ... phút', ans: '72', wr: ['60', '80', '120'] },
    ];
    const picked = units[Math.floor(Math.random() * units.length)];
    const opts = [picked.ans, ...picked.wr].sort(() => Math.random() - 0.5);
    return {
      statement: picked.stmt,
      options: opts,
      correctAnswer: picked.ans,
      category: 'Đại lượng',
    };
  }

  if (chosenType === 'geometry_quick') {
    const geoms = [
      { stmt: 'Tam giác có đáy 8 cm, chiều cao 5 cm. S = ?', ans: '20 cm²', wr: ['40 cm²', '13 cm²', '25 cm²'] },
      { stmt: 'Hình tròn có r = 2 cm. Chu vi = ?', ans: '12.56 cm', wr: ['6.28 cm', '15.7 cm', '25.12 cm'] },
      { stmt: 'Hình lập phương có cạnh 3 cm. V = ?', ans: '27 cm³', wr: ['9 cm³', '18 cm³', '54 cm³'] },
    ];
    const picked = geoms[Math.floor(Math.random() * geoms.length)];
    const opts = [picked.ans, ...picked.wr].sort(() => Math.random() - 0.5);
    return {
      statement: picked.stmt,
      options: opts,
      correctAnswer: picked.ans,
      category: 'Hình học',
    };
  }

  // decimal add
  const x = (Math.floor(Math.random() * 50) + 10) / 10;
  const y = (Math.floor(Math.random() * 50) + 10) / 10;
  const sum = Math.round((x + y) * 10) / 10;
  const opts = [sum, Math.round((sum + 0.5) * 10) / 10, Math.round((sum - 0.5) * 10) / 10, Math.round((sum + 1) * 10) / 10].sort(() => Math.random() - 0.5);
  return {
    statement: `${x} + ${y} = ?`,
    options: opts,
    correctAnswer: sum,
    category: 'Tính nhẩm',
  };
}

export const SpeedArena: React.FC<SpeedArenaProps> = ({
  highScore,
  onUpdateHighScore,
}) => {
  const [gameDuration, setGameDuration] = useState<30 | 45 | 60>(45);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState<FastQuestion>(generateFastQuestion());
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    soundFx.playLevelUp();
    setIsPlaying(true);
    setIsGameOver(false);
    setTimeLeft(gameDuration);
    setScore(0);
    setStreak(0);
    setMultiplier(1);
    setCorrectAnswersCount(0);
    setMaxStreak(0);
    setCurrentQuestion(generateFastQuestion());
  };

  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setIsPlaying(false);
          setIsGameOver(true);
          soundFx.playLevelUp();
          return 0;
        }
        if (prev <= 6) {
          soundFx.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (isGameOver) {
      const xpGained = Math.round(score * 1.5);
      onUpdateHighScore(score, xpGained);
      if (score > highScore) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (e) {
          // ignore
        }
      }
    }
  }, [isGameOver]);

  const handleAnswer = (option: string | number) => {
    if (!isPlaying) return;

    if (String(option) === String(currentQuestion.correctAnswer)) {
      soundFx.playCorrect();
      const newStreak = streak + 1;
      setStreak(newStreak);
      setMaxStreak((prev) => Math.max(prev, newStreak));
      const newMultiplier = newStreak >= 8 ? 4 : newStreak >= 5 ? 3 : newStreak >= 3 ? 2 : 1;
      setMultiplier(newMultiplier);
      const points = 10 * newMultiplier;
      setScore((prev) => prev + points);
      setCorrectAnswersCount((prev) => prev + 1);
    } else {
      soundFx.playWrong();
      setStreak(0);
      setMultiplier(1);
    }

    setCurrentQuestion(generateFastQuestion());
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 py-4 pb-24 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span>Đấu Trường Tính Nhanh Phản Xạ</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black">
            Thử Thách Tốc Độ • Vượt Kỷ Lục
          </h1>
          <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-md">
            Trả lời đúng liên tiếp để nhân điểm số x2, x3, x4! Rèn luyện phản xạ tính nhẩm siêu tốc cho học sinh lớp 5.
          </p>
        </div>

        {/* High Score Badge */}
        <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 text-center sm:text-right shrink-0">
          <span className="text-[11px] font-bold text-amber-300 block">KỶ LỤC CÁ NHÂN</span>
          <div className="flex items-center justify-center sm:justify-end gap-1.5 mt-0.5">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span className="text-2xl font-black text-white">{highScore}</span>
            <span className="text-xs text-white/70">điểm</span>
          </div>
        </div>
      </div>

      {/* Main Game Stage */}
      {!isPlaying && !isGameOver ? (
        /* Lobby Screen */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-center shadow-lg space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-500 to-amber-500 mx-auto flex items-center justify-center text-4xl shadow-xl animate-pulse">
            ⚡
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100">
              Sẵn Sàng Chinh Phục Tốc Độ?
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto mt-1.5">
              Chọn thời gian thử thách và bắt đầu bấm đáp án thật nhanh và chuẩn xác nhé!
            </p>
          </div>

          {/* Time mode select */}
          <div className="flex justify-center gap-3">
            {[30, 45, 60].map((sec) => (
              <button
                key={sec}
                id={`duration-btn-${sec}`}
                onClick={() => {
                  soundFx.playClick();
                  setGameDuration(sec as any);
                }}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border-2 transition ${
                  gameDuration === sec
                    ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-600 dark:text-rose-400 shadow-md scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600'
                }`}
              >
                {sec} Giây
              </button>
            ))}
          </div>

          <button
            id="start-speed-game-btn"
            onClick={startGame}
            className="w-full max-w-sm mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white font-black py-4 rounded-2xl shadow-xl hover:shadow-2xl active:scale-95 transition text-base"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>BẮT ĐẦU NGAY!</span>
          </button>
        </div>
      ) : isGameOver ? (
        /* Game Over Scorecard */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-center shadow-xl space-y-6 animate-in zoom-in-95">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 mx-auto flex items-center justify-center text-4xl shadow-xl animate-bounce">
            🎉
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">
              Hết Giờ! Kết Quả Tuyệt Vời!
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Con đã giải đúng <strong>{correctAnswersCount}</strong> câu trong {gameDuration} giây!
            </p>
          </div>

          {/* Points Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
            <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 p-3 rounded-2xl">
              <span className="text-xs text-rose-600 font-bold block">Tổng Điểm</span>
              <span className="text-2xl font-black text-rose-700 dark:text-rose-400">{score}</span>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 p-3 rounded-2xl">
              <span className="text-xs text-amber-600 font-bold block">XP Nhận Được</span>
              <span className="text-2xl font-black text-amber-700 dark:text-amber-400">+{Math.round(score * 1.5)}</span>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900 p-3 rounded-2xl col-span-2 sm:col-span-1">
              <span className="text-xs text-orange-600 font-bold block">Chuỗi Đúng Tối Đa</span>
              <span className="text-2xl font-black text-orange-700 dark:text-orange-400">{maxStreak} 🔥</span>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              id="replay-speed-game-btn"
              onClick={startGame}
              className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-orange-600 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl active:scale-95 transition text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chơi Lại Ván Mới</span>
            </button>
          </div>
        </div>
      ) : (
        /* Active Game Arena */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xl space-y-6">
          {/* Live Status Bar */}
          <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/80 p-3 rounded-2xl">
            {/* Timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-sm ${
              timeLeft <= 5 ? 'bg-rose-500 text-white animate-pulse' : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-xs'
            }`}>
              <Timer className="w-4 h-4" />
              <span>{timeLeft}s</span>
            </div>

            {/* Streak & Multiplier */}
            <div className="flex items-center gap-2">
              {multiplier > 1 && (
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black px-2.5 py-1 rounded-xl shadow-xs animate-bounce">
                  x{multiplier} COMBO!
                </span>
              )}
              <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-bold text-xs">
                <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
                <span>{streak}</span>
              </div>
            </div>

            {/* Live Score */}
            <div className="bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-black px-3 py-1.5 rounded-xl text-sm">
              {score} đ
            </div>
          </div>

          {/* Question Display Card */}
          <div className="bg-gradient-to-tr from-slate-900 to-slate-800 text-white p-6 sm:p-8 rounded-3xl text-center shadow-lg border border-slate-700 space-y-2">
            <span className="text-[11px] font-extrabold uppercase text-amber-400 tracking-wider">
              {currentQuestion.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white py-2">
              {currentQuestion.statement}
            </h3>
          </div>

          {/* Quick 4 Options Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {currentQuestion.options.map((opt, idx) => (
              <button
                key={idx}
                id={`speed-opt-${idx}`}
                onClick={() => handleAnswer(opt)}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 border-2 border-slate-200 dark:border-slate-700 hover:border-rose-500 font-black text-base sm:text-xl text-slate-800 dark:text-slate-100 shadow-xs hover:shadow-md active:scale-95 transition duration-100 flex items-center justify-center cursor-pointer"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
