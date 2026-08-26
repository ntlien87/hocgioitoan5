import React, { useState, useEffect } from 'react';
import { Zap, Timer, Trophy, Sparkles, RefreshCw, Flame, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../../utils/audio';

interface WritingArenaProps {
  highScore: number;
  onUpdateHighScore: (score: number, xpGained: number) => void;
}

interface WritingChallenge {
  prompt: string;
  type: 'word' | 'metaphor' | 'upgrade' | 'connect';
  options: string[];
  correct: string;
  explanation: string;
}

const writingChallenges: WritingChallenge[] = [
  {
    prompt: 'Chọn từ láy gợi tả tiếng mưa rơi dồn dập trên mái tôn:',
    type: 'word',
    options: ['Rào rào', 'Thoang thoảng', 'Lập lòe', 'Hiu hiu'],
    correct: 'Rào rào',
    explanation: '"Rào rào" là từ tượng thanh diễn tả tiếng mưa rơi dồn dập, mạnh mẽ.'
  },
  {
    prompt: 'Hình ảnh so sánh nào hay nhất để miêu tả vầng trăng rằm?',
    type: 'metaphor',
    options: [
      'Như chiếc đĩa bạc khổng lồ lơ lửng giữa trời',
      'Như một quả dưa hấu',
      'Như bóng đèn huỳnh quang',
      'Như một cái bánh quy'
    ],
    correct: 'Như chiếc đĩa bạc khổng lồ lơ lửng giữa trời',
    explanation: 'So sánh chiếc đĩa bạc khổng lồ mang lại cảm giác sáng lung linh, huyền ảo.'
  },
  {
    prompt: 'Từ láy nào diễn tả màu sắc vàng óng của cánh đồng lúa chín?',
    type: 'word',
    options: ['Vàng ruộm / Vàng ươm', 'Vàng xỉn', 'Vàng vọt', 'Vàng nhạt'],
    correct: 'Vàng ruộm / Vàng ươm',
    explanation: '"Vàng ruộm / Vàng ươm" gợi cảm giác chín mọng, ấm áp và trù phú.'
  },
  {
    prompt: 'Câu nào sau đây nâng cấp xuất sắc câu thô: "Mẹ em đang cười"?',
    type: 'upgrade',
    options: [
      'Nụ cười mẹ rạng rỡ như nắng mai, xua tan bao mệt nhọc trên khóe mắt hằn vết chân chim.',
      'Mẹ em cười to phát ra tiếng haha.',
      'Mẹ em cười từ sáng tới trưa.',
      'Mẹ em có hàm răng trắng khi cười.'
    ],
    correct: 'Nụ cười mẹ rạng rỡ như nắng mai, xua tan bao mệt nhọc trên khóe mắt hằn vết chân chim.',
    explanation: 'Câu văn kết hợp so sánh (như nắng mai), hình ảnh biểu cảm (vết chân chim, nhọc nhằn) rất xúc động.'
  },
  {
    prompt: 'Chọn từ nối chuyển đoạn thích hợp để nối từ tả bao quát sang tả chi tiết một cái cây:',
    type: 'connect',
    options: [
      'Nhìn từ xa là thế, nhưng khi bước lại gần...',
      'Tóm lại là hết rồi.',
      'Bây giờ em chuyển sang chuyện khác.',
      'Và thế là cây bị chặt.'
    ],
    correct: 'Nhìn từ xa là thế, nhưng khi bước lại gần...',
    explanation: '"Nhìn từ xa là thế, nhưng khi bước lại gần..." là câu chuyển mạch không gian hoàn hảo.'
  },
  {
    prompt: 'Từ ngữ nào diễn tả ánh nắng sớm mai tinh khôi, ấm áp?',
    type: 'word',
    options: ['Vàng dịu dàng, óng ả', 'Gắt gao, chói chang', 'Bỏng rát', 'U ám'],
    correct: 'Vàng dịu dàng, óng ả',
    explanation: 'Nắng sớm mai mang vẻ đẹp dịu êm, óng ả.'
  },
  {
    prompt: 'Biện pháp nhân hóa nào làm cho dòng sông quê hương trở nên thân thương như một người mẹ?',
    type: 'metaphor',
    options: [
      'Dòng sông hiền hòa dang rộng vòng tay ôm ấp xóm làng thân yêu',
      'Dòng sông có nhiều cá tôm',
      'Dòng sông chảy từ nguồn ra biển',
      'Dòng sông rộng 50 mét'
    ],
    correct: 'Dòng sông hiền hòa dang rộng vòng tay ôm ấp xóm làng thân yêu',
    explanation: '"Dang rộng vòng tay ôm ấp" nhân hóa dòng sông thành người mẹ chở che.'
  }
];

export const WritingArena: React.FC<WritingArenaProps> = ({ highScore, onUpdateHighScore }) => {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Timer countdown during game
  useEffect(() => {
    let timer: any;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (gameState === 'playing' && timeLeft === 0) {
      handleGameOver();
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const startGame = () => {
    soundFx.playClick();
    setGameState('playing');
    setTimeLeft(60);
    setScore(0);
    setStreak(0);
    setCurrentIdx(Math.floor(Math.random() * writingChallenges.length));
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const handleSelectOption = (opt: string) => {
    if (selectedOption !== null || gameState !== 'playing') return;

    const currentChallenge = writingChallenges[currentIdx];
    setSelectedOption(opt);

    if (opt === currentChallenge.correct) {
      soundFx.playCorrect();
      setIsCorrect(true);
      const points = 10 + streak * 2;
      setScore((prev) => prev + points);
      setStreak((prev) => prev + 1);
    } else {
      soundFx.playWrong();
      setIsCorrect(false);
      setStreak(0);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null);
      let nextIdx = Math.floor(Math.random() * writingChallenges.length);
      while (nextIdx === currentIdx && writingChallenges.length > 1) {
        nextIdx = Math.floor(Math.random() * writingChallenges.length);
      }
      setCurrentIdx(nextIdx);
    }, 600);
  };

  const handleGameOver = () => {
    setGameState('gameover');
    soundFx.playWin();
    const xpGained = Math.round(score * 1.5);
    onUpdateHighScore(score, xpGained);

    if (score > highScore) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const current = writingChallenges[currentIdx];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-6 pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
              Đấu Trường Bút Thần
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black">Thử Thách Phản Xạ 60 Giây ⚡</h1>
          <p className="text-xs sm:text-sm text-pink-100 mt-1">
            Tìm từ láy, ghép câu so sánh và bắt lỗi văn cụt lủn thật nhanh!
          </p>
        </div>

        <div className="text-right bg-white/15 p-3 rounded-2xl backdrop-blur-xs border border-white/20">
          <span className="text-[10px] uppercase font-bold text-pink-100 flex items-center justify-end gap-1">
            <Trophy className="w-3.5 h-3.5 text-amber-300" /> Kỷ lục
          </span>
          <p className="text-xl sm:text-2xl font-black text-amber-300">{highScore} đ</p>
        </div>
      </div>

      {/* Game States */}
      {gameState === 'idle' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-center space-y-6 shadow-md">
          <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-pink-500 to-rose-600 rounded-3xl flex items-center justify-center text-4xl shadow-lg shadow-pink-500/30">
            ✍️
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-black text-slate-800 dark:text-slate-100">
              Sẵn Sàng Cho Cuộc Đua Ngôn Từ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Trong 60 giây, bé hãy trả lời càng nhiều câu hỏi về từ ngữ và câu văn hay càng tốt. Càng trả lời đúng liên tiếp, điểm Combo càng cao!
            </p>
          </div>

          <button
            onClick={startGame}
            className="w-full max-w-xs mx-auto py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-black text-base rounded-2xl shadow-lg shadow-rose-500/30 transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5 fill-current" /> BẮT ĐẦU NGAY!
          </button>
        </div>
      )}

      {gameState === 'playing' && current && (
        <div className="space-y-4">
          {/* Status Bar */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-rose-500 animate-pulse" />
              <span className={`text-lg font-black ${timeLeft <= 10 ? 'text-rose-600 animate-bounce' : 'text-slate-800 dark:text-slate-100'}`}>
                {timeLeft}s
              </span>
            </div>

            <div className="flex items-center gap-4">
              {streak > 1 && (
                <span className="flex items-center gap-1 text-xs font-black text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 px-2.5 py-1 rounded-xl animate-pulse">
                  <Flame className="w-4 h-4 fill-orange-500" /> Combo x{streak}!
                </span>
              )}
              <div className="text-right">
                <span className="text-xs text-slate-400 font-bold block">Điểm</span>
                <span className="text-lg font-black text-rose-600 dark:text-rose-400">{score}</span>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-md space-y-4">
            <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
              Câu hỏi phản xạ:
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug">
              {current.prompt}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 gap-2.5 pt-2">
              {current.options.map((opt, i) => {
                const isThisSelected = selectedOption === opt;
                let btnStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:border-rose-300 text-slate-800 dark:text-slate-200';

                if (isThisSelected) {
                  btnStyle = isCorrect
                    ? 'border-emerald-500 bg-emerald-500 text-white font-bold'
                    : 'border-rose-500 bg-rose-500 text-white font-bold';
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    disabled={selectedOption !== null}
                    className={`w-full p-3.5 rounded-2xl border text-left text-sm font-medium transition flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isThisSelected && isCorrect && <span>✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {gameState === 'gameover' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-center space-y-6 shadow-lg animate-fadeIn">
          <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center text-4xl shadow-lg shadow-amber-500/30">
            <Award className="w-10 h-10 text-white" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">
              HẾT GIỜ! 🎉
            </h2>
            <p className="text-sm text-slate-500">
              Bé đã thể hiện phản xạ ngôn từ cực kỳ xuất sắc!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            <div className="bg-slate-100 dark:bg-slate-800 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-400 font-semibold block">Điểm đạt được</span>
              <span className="text-2xl font-black text-rose-600 dark:text-rose-400">{score}</span>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-400 font-semibold block">Thưởng XP</span>
              <span className="text-2xl font-black text-amber-500">+{Math.round(score * 1.5)} XP</span>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full max-w-xs mx-auto py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-black text-sm rounded-2xl shadow-md transition flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" /> CHƠI LẠI LƯỢT MỚI
          </button>
        </div>
      )}
    </div>
  );
};
