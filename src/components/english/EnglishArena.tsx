import React, { useState, useEffect, useRef } from 'react';
import { Zap, Timer, Flame, Trophy, RotateCcw, Sparkles, CheckCircle2, XCircle, ArrowRight, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../../utils/audio';

interface EnglishArenaProps {
  highScore?: number;
  onUpdateHighScore: (score: number, xpGained: number) => void;
}

interface FastQuestion {
  id: string;
  type: 'past-tense' | 'antonym' | 'synonym' | 'grammar' | 'vocab';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const ARENA_QUESTIONS: FastQuestion[] = [
  {
    id: 'ea_1',
    type: 'past-tense',
    question: 'Past form of "GO"?',
    options: ['went', 'gone', 'goed', 'going'],
    correctAnswer: 'went',
    explanation: 'go ➡️ went'
  },
  {
    id: 'ea_2',
    type: 'past-tense',
    question: 'Past form of "BUY"?',
    options: ['bought', 'buyed', 'brought', 'boated'],
    correctAnswer: 'bought',
    explanation: 'buy ➡️ bought'
  },
  {
    id: 'ea_3',
    type: 'past-tense',
    question: 'Past form of "SEE"?',
    options: ['saw', 'seen', 'seed', 'sawed'],
    correctAnswer: 'saw',
    explanation: 'see ➡️ saw'
  },
  {
    id: 'ea_4',
    type: 'past-tense',
    question: 'Past form of "EAT"?',
    options: ['ate', 'eaten', 'eated', 'ating'],
    correctAnswer: 'ate',
    explanation: 'eat ➡️ ate'
  },
  {
    id: 'ea_5',
    type: 'antonym',
    question: 'Opposite of "NOISY"?',
    options: ['quiet', 'loud', 'busy', 'crowded'],
    correctAnswer: 'quiet',
    explanation: 'noisy (ồn ào) ↔️ quiet (yên tĩnh)'
  },
  {
    id: 'ea_6',
    type: 'antonym',
    question: 'Opposite of "BORING"?',
    options: ['exciting', 'dull', 'tired', 'slow'],
    correctAnswer: 'exciting',
    explanation: 'boring (nhàm chán) ↔️ exciting (hào hứng)'
  },
  {
    id: 'ea_7',
    type: 'antonym',
    question: 'Opposite of "SAFE"?',
    options: ['dangerous', 'careful', 'healthy', 'secure'],
    correctAnswer: 'dangerous',
    explanation: 'safe (an toàn) ↔️ dangerous (nguy hiểm)'
  },
  {
    id: 'ea_8',
    type: 'grammar',
    question: 'She ________ (watch) cartoons on TV every evening.',
    options: ['watches', 'watch', 'watching', 'watched'],
    correctAnswer: 'watches',
    explanation: 'Subject "She" ➡️ verb adds "-es" (watches)'
  },
  {
    id: 'ea_9',
    type: 'grammar',
    question: 'Did you ________ to Cuc Phuong National Park last week?',
    options: ['go', 'went', 'going', 'goes'],
    correctAnswer: 'go',
    explanation: 'After "Did", the verb is in base form (go)'
  },
  {
    id: 'ea_10',
    type: 'grammar',
    question: 'You ________ play with matches because you may get a burn.',
    options: ['shouldn\'t', 'should', 'must', 'can'],
    correctAnswer: 'shouldn\'t',
    explanation: 'Warning: you shouldn\'t play with matches'
  },
  {
    id: 'ea_11',
    type: 'vocab',
    question: 'A person who flies airplanes is a ________.',
    options: ['pilot', 'architect', 'dentist', 'writer'],
    correctAnswer: 'pilot',
    explanation: 'Phi công = pilot'
  },
  {
    id: 'ea_12',
    type: 'vocab',
    question: 'A person who designs houses and buildings is an ________.',
    options: ['architect', 'engineer', 'astronaut', 'artist'],
    correctAnswer: 'architect',
    explanation: 'Kiến trúc sư = architect'
  },
  {
    id: 'ea_13',
    type: 'synonym',
    question: 'Word with the SAME meaning as "KIND"?',
    options: ['helpful & generous', 'cruel', 'lazy', 'strict'],
    correctAnswer: 'helpful & generous',
    explanation: 'kind (tốt bụng) = helpful & generous'
  },
  {
    id: 'ea_14',
    type: 'past-tense',
    question: 'Past form of "TAKE"?',
    options: ['took', 'taken', 'taked', 'taking'],
    correctAnswer: 'took',
    explanation: 'take ➡️ took'
  },
  {
    id: 'ea_15',
    type: 'past-tense',
    question: 'Past form of "HAVE"?',
    options: ['had', 'haved', 'has', 'having'],
    correctAnswer: 'had',
    explanation: 'have ➡️ had'
  },
  {
    id: 'ea_16',
    type: 'grammar',
    question: 'Ha Noi is ________ than my hometown.',
    options: ['larger', 'large', 'more large', 'largest'],
    correctAnswer: 'larger',
    explanation: 'Comparative of short adjective: large ➡️ larger than'
  },
  {
    id: 'ea_17',
    type: 'vocab',
    question: 'What\'s the matter? - "I have a ________ in my tooth."',
    options: ['toothache', 'headache', 'earache', 'fever'],
    correctAnswer: 'toothache',
    explanation: 'Đau răng = toothache'
  },
  {
    id: 'ea_18',
    type: 'grammar',
    question: 'What will the weather be like tomorrow? - It ________ sunny.',
    options: ['will be', 'was', 'is being', 'were'],
    correctAnswer: 'will be',
    explanation: 'Tomorrow ➡️ Future Simple "will be"'
  }
];

export const EnglishArena: React.FC<EnglishArenaProps> = ({
  highScore = 0,
  onUpdateHighScore,
}) => {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'ended'>('idle');
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [qPool, setQPool] = useState<FastQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [missedQuestions, setMissedQuestions] = useState<{ q: FastQuestion; userAns: string }[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startArena = () => {
    soundFx.playLevelUp();
    // Shuffle questions
    const shuffled = [...ARENA_QUESTIONS].sort(() => Math.random() - 0.5);
    setQPool(shuffled);
    setCurrentQIndex(0);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setTimeLeft(60);
    setFeedback(null);
    setMissedQuestions([]);
    setGameState('playing');
  };

  useEffect(() => {
    if (gameState !== 'playing') return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  const endGame = () => {
    setGameState('ended');
    soundFx.playLevelUp();
  };

  const handleAnswer = (selected: string) => {
    if (gameState !== 'playing' || feedback !== null) return;
    const curQ = qPool[currentQIndex % qPool.length];
    const isRight = selected === curQ.correctAnswer;

    if (isRight) {
      soundFx.playCorrect();
      const comboBonus = Math.floor(combo / 3) * 5;
      const points = 10 + comboBonus;
      setScore((prev) => prev + points);
      setCombo((prev) => {
        const next = prev + 1;
        if (next > maxCombo) setMaxCombo(next);
        return next;
      });
      setFeedback('correct');
    } else {
      soundFx.playWrong();
      setCombo(0);
      setFeedback('wrong');
      setMissedQuestions((prev) => [...prev, { q: curQ, userAns: selected }]);
    }

    setTimeout(() => {
      setFeedback(null);
      setCurrentQIndex((prev) => prev + 1);
    }, 450);
  };

  useEffect(() => {
    if (gameState === 'ended') {
      const xpGained = Math.round(score * 1.5);
      onUpdateHighScore(score, xpGained);
      if (score > highScore && score > 0) {
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
          });
        } catch (e) {
          // ignore
        }
      }
    }
  }, [gameState]);

  const curQ = qPool[currentQIndex % (qPool.length || 1)] || ARENA_QUESTIONS[0];

  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 py-4 pb-24 space-y-5">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Speed English Arena • 60-Second Challenge</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black">Đấu Trường Tốc Độ Tiếng Anh 5 ⚡</h1>
          <p className="text-white/90 text-xs sm:text-sm mt-1">
            Phản xạ nhanh từ vựng, quá khứ đơn, cặp từ trái nghĩa và ngữ pháp Grade 5 trong 60 giây!
          </p>
        </div>

        <div className="bg-black/25 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 flex sm:flex-col items-center justify-between sm:justify-center shrink-0">
          <span className="text-[11px] font-bold text-white/80">Kỷ Lục Của Con</span>
          <span className="text-xl sm:text-2xl font-black text-amber-300">{highScore} pts</span>
        </div>
      </div>

      {gameState === 'idle' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-center space-y-5 shadow-lg">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-blue-500 to-sky-400 mx-auto flex items-center justify-center text-4xl shadow-md animate-bounce">
            ⚡
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">
              Sẵn Sàng Thử Thách Phản Xạ 60 Giây?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Mỗi câu trả lời đúng được <strong>+10 điểm</strong>. Giữ chuỗi combo liên tiếp để nhân thêm điểm thưởng và leo bảng xếp hạng!
            </p>
          </div>

          <button
            id="start-english-arena-btn"
            onClick={startArena}
            className="w-full max-w-sm mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-4 rounded-2xl shadow-xl transition active:scale-98 text-base flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5 text-amber-300" />
            <span>Bắt Đầu Đấu Trường Ngay!</span>
          </button>
        </div>
      )}

      {gameState === 'playing' && (
        <div className="space-y-4">
          {/* Top Timer & Scoreboard */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-3 text-center shadow-xs flex items-center justify-center gap-2">
              <Timer className="w-4 h-4 text-rose-500 animate-pulse" />
              <span className="font-mono text-lg sm:text-xl font-black text-rose-600">{timeLeft}s</span>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-3 text-center shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 block">Điểm số</span>
              <span className="text-lg sm:text-xl font-black text-blue-600">{score}</span>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-3 text-center shadow-xs flex items-center justify-center gap-1.5">
              <Flame className={`w-4 h-4 ${combo >= 3 ? 'text-amber-500 animate-bounce' : 'text-slate-400'}`} />
              <span className="text-xs font-black text-slate-700 dark:text-slate-300">
                Combo <strong className="text-amber-500 text-base font-black">x{combo}</strong>
              </span>
            </div>
          </div>

          {/* Question Card */}
          <div className={`bg-white dark:bg-slate-900 rounded-3xl border-2 p-5 sm:p-7 shadow-lg text-center space-y-4 transition-all ${
            feedback === 'correct' ? 'border-emerald-500 bg-emerald-50/20' : feedback === 'wrong' ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200 dark:border-slate-800'
          }`}>
            <span className="text-[11px] font-extrabold uppercase px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full">
              Question #{currentQIndex + 1} • {curQ.type}
            </span>

            <h3 className="text-base sm:text-xl font-black text-slate-800 dark:text-slate-100 py-2">
              {curQ.question}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {curQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  disabled={feedback !== null}
                  onClick={() => handleAnswer(opt)}
                  className="p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/40 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base transition active:scale-95 shadow-xs flex items-center justify-between"
                >
                  <span>{opt}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {gameState === 'ended' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-center space-y-5 shadow-xl animate-in zoom-in-95 duration-200">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 mx-auto flex items-center justify-center text-4xl shadow-md">
            🏆
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">
              Hết Giờ! Kết Quả Đấu Trường:
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Con đã đạt <strong>{score} điểm</strong> • Max Combo: <strong>{maxCombo}</strong>!
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 py-2">
            <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 px-5 py-2.5 rounded-2xl">
              <span className="text-xs text-blue-700 dark:text-blue-300 font-bold block">Tổng Điểm</span>
              <span className="text-xl font-black text-blue-600">{score}</span>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 px-5 py-2.5 rounded-2xl">
              <span className="text-xs text-amber-700 dark:text-amber-300 font-bold block">Kinh Nghiệm</span>
              <span className="text-xl font-black text-amber-600">+{Math.round(score * 1.5)} XP</span>
            </div>
          </div>

          {/* Missed questions review */}
          {missedQuestions.length > 0 && (
            <div className="text-left space-y-2 max-h-52 overflow-y-auto pr-1">
              <h4 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase">
                Câu cần xem lại ({missedQuestions.length} câu):
              </h4>
              {missedQuestions.map((item, idx) => (
                <div key={idx} className="p-3 bg-rose-50/60 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900 text-xs space-y-1">
                  <p className="font-bold text-slate-800 dark:text-slate-200">{item.q.question}</p>
                  <p className="text-emerald-700 dark:text-emerald-300 font-bold">Đáp án đúng: {item.q.correctAnswer} ({item.q.explanation})</p>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={startArena}
            className="w-full max-w-sm mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-3.5 rounded-2xl shadow-md transition active:scale-98 text-sm flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Thử Thách Lại Lần Nữa</span>
          </button>
        </div>
      )}
    </div>
  );
};
