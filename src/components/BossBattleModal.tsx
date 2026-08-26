import React, { useState } from 'react';
import { X, Swords, Heart, Sparkles, Trophy, CheckCircle2, XCircle, RotateCcw, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Chapter } from '../types/curriculum';
import { soundFx } from '../utils/audio';

interface BossBattleModalProps {
  chapter: Chapter;
  onClose: () => void;
  onDefeatBoss: (bossId: string, badgeId: string, xpReward: number, coinReward: number) => void;
}

export const BossBattleModal: React.FC<BossBattleModalProps> = ({
  chapter,
  onClose,
  onDefeatBoss,
}) => {
  const boss = chapter.boss;
  const [bossHp, setBossHp] = useState(boss.maxHp);
  const [playerHp, setPlayerHp] = useState(100);
  const [qIndex, setQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isBossAttacking, setIsBossAttacking] = useState(false);
  const [isBossHurt, setIsBossHurt] = useState(false);
  const [battleState, setBattleState] = useState<'playing' | 'victory' | 'defeat'>('playing');

  const currentQ = boss.questions[qIndex];
  const damagePerQuestion = Math.ceil(boss.maxHp / boss.questions.length);

  const handleSelectOption = (opt: string) => {
    if (isAnswered || battleState !== 'playing') return;
    soundFx.playClick();
    setSelectedAnswer(opt);
  };

  const handleStrike = () => {
    if (!selectedAnswer || isAnswered) return;
    const correct = selectedAnswer === currentQ.correctAnswer;
    setIsAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      soundFx.playCorrect();
      setIsBossHurt(true);
      setTimeout(() => {
        soundFx.playBossHit();
      }, 150);

      const newBossHp = Math.max(0, bossHp - damagePerQuestion);
      setBossHp(newBossHp);

      setTimeout(() => {
        setIsBossHurt(false);
        if (newBossHp === 0 || qIndex + 1 >= boss.questions.length) {
          setBattleState('victory');
          soundFx.playLevelUp();
          try {
            confetti({
              particleCount: 140,
              spread: 100,
              origin: { y: 0.5 },
            });
          } catch (e) {}
          onDefeatBoss(boss.id, boss.rewardBadgeId, 200, 100);
        }
      }, 700);
    } else {
      soundFx.playWrong();
      setIsBossAttacking(true);
      setTimeout(() => {
        soundFx.playBossHit();
        setPlayerHp((prev) => Math.max(0, prev - 35));
      }, 200);

      setTimeout(() => {
        setIsBossAttacking(false);
        if (playerHp - 35 <= 0) {
          setBattleState('defeat');
        }
      }, 700);
    }
  };

  const handleNextTurn = () => {
    if (qIndex + 1 < boss.questions.length) {
      setQIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      if (bossHp <= 0) {
        setBattleState('victory');
      } else {
        setBattleState('defeat');
      }
    }
  };

  const handleRetry = () => {
    setBossHp(boss.maxHp);
    setPlayerHp(100);
    setQIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setBattleState('playing');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto pt-safe pb-safe">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-rose-500/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white my-auto animate-in zoom-in-95 duration-200">
        {/* Boss Top Stadium Bar */}
        <div className="p-4 bg-gradient-to-r from-rose-950 via-slate-900 to-red-950 border-b border-rose-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-black uppercase tracking-wider">
            <Swords className="w-4 h-4 text-rose-400 animate-pulse" />
            <span>Đại Chiến Boss • {chapter.vietnameseTitle}</span>
          </div>
          <button
            id="close-boss-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition active:scale-90"
          >
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {/* Battle Arena Stage */}
        <div className="p-4 sm:p-6 space-y-5 flex-1 overflow-y-auto">
          {battleState === 'victory' ? (
            /* Boss Defeated Victory Screen */
            <div className="text-center py-6 space-y-4 animate-in zoom-in-90 duration-300">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-400 to-orange-500 mx-auto flex items-center justify-center text-5xl sm:text-6xl shadow-2xl animate-bounce">
                👑
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-300">
                CHIẾN THẮNG HUY HOÀNG!
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto font-bold leading-relaxed">
                Con đã xuất sắc giải mã toàn bộ câu hỏi và đánh bại <strong>{boss.name}</strong>, mở khóa huy hiệu danh dự!
              </p>

              <div className="flex items-center justify-center gap-4 py-2">
                <div className="bg-amber-950/80 border border-amber-500/50 px-5 py-2.5 rounded-2xl">
                  <span className="text-xs text-amber-300 font-extrabold block">Thưởng Boss</span>
                  <span className="text-xl font-black text-amber-400">+200 XP</span>
                </div>
                <div className="bg-orange-950/80 border border-orange-500/50 px-5 py-2.5 rounded-2xl">
                  <span className="text-xs text-orange-300 font-extrabold block">Kho Báu Vàng</span>
                  <span className="text-xl font-black text-orange-400">+100 Xu</span>
                </div>
              </div>

              <button
                id="boss-claim-victory-btn"
                onClick={onClose}
                className="w-full max-w-sm mx-auto btn-3d btn-3d-emerald font-black py-4 rounded-2xl shadow-xl text-base"
              >
                Nhận Thưởng & Mở Khóa Thế Giới Mới 🚀
              </button>
            </div>
          ) : battleState === 'defeat' ? (
            /* Player Defeated Screen */
            <div className="text-center py-6 space-y-4 animate-in zoom-in-90 duration-300">
              <div className="w-20 h-20 rounded-3xl bg-slate-800 border-2 border-rose-600 mx-auto flex items-center justify-center text-4xl">
                ☠️
              </div>
              <h3 className="text-2xl font-black text-rose-400">
                Boss Quá Mạnh!
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto font-bold">
                Đừng nản lòng! Con hãy xem lại lý thuyết ở các ải trước và khiêu chiến lại nhé!
              </p>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  id="retry-boss-btn"
                  onClick={handleRetry}
                  className="btn-3d btn-3d-rose px-6 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Quyết Đấu Lại</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-2xl font-bold text-sm"
                >
                  Rút Lui
                </button>
              </div>
            </div>
          ) : (
            /* Active Duel Stage */
            <>
              {/* Boss & Player Status Duel Bar */}
              <div className="grid grid-cols-2 gap-3 items-center bg-slate-950/90 border border-slate-800 p-3.5 sm:p-4 rounded-3xl shadow-inner">
                {/* Boss Side */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-rose-950 border-2 border-rose-500 flex items-center justify-center text-2xl sm:text-3xl shrink-0 transition-transform ${isBossHurt ? 'animate-ping scale-110' : ''}`}>
                      {boss.avatar}
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-black uppercase text-rose-400 block">Đại Boss</span>
                      <h4 className="text-xs sm:text-sm font-black truncate">{boss.name}</h4>
                    </div>
                  </div>
                  {/* Boss HP Bar */}
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5 border border-rose-900/60">
                    <div
                      className="bg-gradient-to-r from-rose-500 to-red-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${(bossHp / boss.maxHp) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-rose-400 text-right block">
                    HP: {bossHp}/{boss.maxHp}
                  </span>
                </div>

                {/* Player Side */}
                <div className="space-y-1.5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="overflow-hidden text-right">
                      <span className="text-[10px] font-black uppercase text-emerald-400 block">Dũng Sĩ</span>
                      <h4 className="text-xs sm:text-sm font-black truncate">Bé Thông Thái</h4>
                    </div>
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-emerald-950 border-2 border-emerald-500 flex items-center justify-center text-2xl sm:text-3xl shrink-0">
                      🦁
                    </div>
                  </div>
                  {/* Player HP Bar */}
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5 border border-emerald-900/60">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${playerHp}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 text-left block">
                    HP: {playerHp}/100
                  </span>
                </div>
              </div>

              {/* Boss Challenge Question */}
              <div className="bg-slate-800/80 border-2 border-rose-900/60 rounded-3xl p-4 sm:p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between text-xs font-black text-rose-300">
                  <span>Chiêu Thức #{qIndex + 1}/{boss.questions.length}</span>
                  <span className="text-amber-300">Sát thương: -{damagePerQuestion} HP Boss</span>
                </div>

                <h3 className="text-sm sm:text-base font-black text-slate-100 leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>

              {/* Multiple Choice Options */}
              <div className="grid grid-cols-1 gap-2.5">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedAnswer === opt;
                  let style = 'bg-slate-800/90 border-slate-700 text-slate-200 hover:border-rose-400';

                  if (isAnswered) {
                    if (opt === currentQ.correctAnswer) {
                      style = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-black ring-2 ring-emerald-400';
                    } else if (isSelected && !isCorrect) {
                      style = 'bg-rose-950/80 border-rose-600 text-rose-200 font-bold';
                    } else {
                      style = 'bg-slate-800/40 opacity-40';
                    }
                  } else if (isSelected) {
                    style = 'bg-rose-900/50 border-rose-500 text-white font-black ring-2 ring-rose-400 shadow-md';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(opt)}
                      className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left text-xs sm:text-sm font-bold transition-all flex items-center justify-between btn-3d active:scale-98 ${style}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-xl bg-slate-700 text-slate-200 flex items-center justify-center text-xs font-black shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isAnswered && opt === currentQ.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Strike / Next Actions */}
              <div className="pt-2">
                {!isAnswered ? (
                  <button
                    id="boss-strike-btn"
                    disabled={!selectedAnswer}
                    onClick={handleStrike}
                    className={`w-full py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 btn-3d ${
                      selectedAnswer
                        ? 'btn-3d-rose shadow-xl'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                    }`}
                  >
                    <Swords className="w-5 h-5" />
                    <span>Tung Đòn Tấn Công Boss ⚡</span>
                  </button>
                ) : (
                  <button
                    id="boss-next-turn-btn"
                    onClick={handleNextTurn}
                    className="w-full btn-3d btn-3d-emerald font-black py-4 rounded-2xl shadow-xl text-sm sm:text-base flex items-center justify-center gap-2"
                  >
                    <span>Lượt Đấu Tiếp Theo</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
