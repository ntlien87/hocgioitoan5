import React, { useState, useEffect } from 'react';
import { X, ShieldAlert, Swords, Heart, Sparkles, Trophy, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Chapter } from '../types/math';
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
              particleCount: 120,
              spread: 90,
              origin: { y: 0.5 },
            });
          } catch (e) {
            // ignore
          }
          onDefeatBoss(boss.id, boss.rewardBadgeId, 150, 80);
        }
      }, 800);
    } else {
      soundFx.playWrong();
      setIsBossAttacking(true);
      setTimeout(() => {
        soundFx.playBossHit();
        setPlayerHp((prev) => Math.max(0, prev - 35));
      }, 250);

      setTimeout(() => {
        setIsBossAttacking(false);
        if (playerHp - 35 <= 0) {
          setBattleState('defeat');
        }
      }, 800);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-xs overflow-y-auto">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-rose-500/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white my-auto">
        {/* Boss Top Bar */}
        <div className="p-4 bg-gradient-to-r from-rose-900 via-slate-900 to-red-950 border-b border-rose-900/50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-black uppercase tracking-wider">
            <Swords className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Trận Đấu Boss Quyết Định • {chapter.vietnameseTitle}</span>
          </div>
          <button
            id="close-boss-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {/* Battle Arena Stage */}
        <div className="p-4 sm:p-6 space-y-6 flex-1">
          {battleState === 'victory' ? (
            /* Boss Defeated Victory Screen */
            <div className="text-center py-6 space-y-4 animate-in zoom-in-90 duration-300">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-500 to-yellow-300 mx-auto flex items-center justify-center text-5xl shadow-2xl animate-bounce">
                👑
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-300">
                CHIẾN THẮNG HUY HOÀNG!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Con đã giải đúng các bài toán ma thuật và đánh bại <strong>{boss.name}</strong>, bảo vệ thành công Vương Quốc Toán Học!
              </p>

              <div className="flex items-center justify-center gap-4 py-3">
                <div className="bg-amber-950/60 border border-amber-500/50 px-4 py-2 rounded-2xl">
                  <span className="text-xs text-amber-300 font-semibold block">Thưởng Boss</span>
                  <span className="text-xl font-black text-amber-400">+150 XP</span>
                </div>
                <div className="bg-orange-950/60 border border-orange-500/50 px-4 py-2 rounded-2xl">
                  <span className="text-xs text-orange-300 font-semibold block">Kho Báu Vàng</span>
                  <span className="text-xl font-black text-orange-400">+80 Xu</span>
                </div>
              </div>

              <button
                id="boss-claim-victory-btn"
                onClick={onClose}
                className="w-full max-w-sm mx-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold py-3.5 rounded-2xl shadow-xl transition active:scale-98"
              >
                Nhận Thưởng & Mở Khóa Chương Mới
              </button>
            </div>
          ) : battleState === 'defeat' ? (
            /* Player Defeated Screen */
            <div className="text-center py-6 space-y-4 animate-in zoom-in-90 duration-300">
              <div className="w-20 h-20 rounded-3xl bg-slate-800 border border-rose-600 mx-auto flex items-center justify-center text-4xl">
                ☠️
              </div>
              <h3 className="text-2xl font-black text-rose-400">
                Boss Quá Mạnh!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Đừng nản lòng! Con hãy xem lại lý thuyết của các ải trước và khiêu chiến lại nhé!
              </p>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  id="retry-boss-btn"
                  onClick={handleRetry}
                  className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 px-6 py-3 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Quyết Đấu Lại</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-2xl font-bold text-sm"
                >
                  Rút Lui Về Luyện Tập
                </button>
              </div>
            </div>
          ) : (
            /* Active Boss Fight */
            <>
              {/* Boss & Player Status Duel Stage */}
              <div className="grid grid-cols-2 gap-4 items-center bg-slate-950/80 border border-slate-800 p-4 rounded-3xl relative overflow-hidden">
                {/* Boss Side */}
                <div className={`flex flex-col items-center text-center transition-transform ${
                  isBossHurt ? 'scale-90 opacity-60 animate-shake' : isBossAttacking ? 'scale-125' : ''
                }`}>
                  <div className="text-5xl sm:text-6xl mb-1 filter drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                    {boss.avatar}
                  </div>
                  <span className="font-extrabold text-sm text-rose-300 truncate max-w-full">
                    {boss.name}
                  </span>
                  {/* Boss HP Bar */}
                  <div className="w-full bg-slate-800 h-2.5 rounded-full mt-1.5 overflow-hidden border border-rose-900">
                    <div
                      className="bg-gradient-to-r from-rose-600 to-red-500 h-full transition-all duration-300"
                      style={{ width: `${(bossHp / boss.maxHp) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-rose-400 mt-0.5">
                    HP: {bossHp}/{boss.maxHp}
                  </span>
                </div>

                {/* Player Side */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl sm:text-6xl mb-1 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    🛡️
                  </div>
                  <span className="font-extrabold text-sm text-blue-300">
                    Dũng Sĩ Toán Học
                  </span>
                  {/* Player HP Bar */}
                  <div className="w-full bg-slate-800 h-2.5 rounded-full mt-1.5 overflow-hidden border border-blue-900">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full transition-all duration-300"
                      style={{ width: `${playerHp}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 mt-0.5">
                    HP: {playerHp}/100
                  </span>
                </div>
              </div>

              {/* Boss Challenge Question */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-rose-300 font-bold">
                  <span>⚔️ Tuyệt chiêu {qIndex + 1}/{boss.questions.length}</span>
                  <span className="bg-rose-950/80 border border-rose-800 px-2 py-0.5 rounded-md">
                    Sát thương: -{damagePerQuestion} HP
                  </span>
                </div>
                <p className="font-bold text-slate-100 text-sm sm:text-base leading-relaxed">
                  {currentQ.question}
                </p>
              </div>

              {/* Multiple Choice Options */}
              {currentQ.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    let style = 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-rose-400';

                    if (isAnswered) {
                      if (opt === currentQ.correctAnswer) {
                        style = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold ring-2 ring-emerald-400';
                      } else if (isSelected && !isCorrect) {
                        style = 'bg-rose-950 border-rose-500 text-rose-200 font-bold';
                      } else {
                        style = 'bg-slate-800/30 border-slate-800 opacity-40';
                      }
                    } else if (isSelected) {
                      style = 'bg-rose-950/80 border-rose-500 text-rose-100 font-bold ring-2 ring-rose-500';
                    }

                    return (
                      <button
                        key={idx}
                        id={`boss-opt-${idx}`}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(opt)}
                        className={`p-3.5 rounded-2xl border-2 text-left text-xs sm:text-sm transition flex items-center justify-between ${style}`}
                      >
                        <span>{opt}</span>
                        {isAnswered && opt === currentQ.correctAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        )}
                        {isAnswered && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Turn Outcome Feedback */}
              {isAnswered && (
                <div className={`p-3 rounded-xl text-xs sm:text-sm border ${
                  isCorrect
                    ? 'bg-emerald-950/60 border-emerald-700 text-emerald-200'
                    : 'bg-rose-950/60 border-rose-700 text-rose-200'
                }`}>
                  <p><strong>{isCorrect ? '🎯 Đòn đánh chính xác!' : '💥 Boss đánh trúng bạn!'}</strong> {currentQ.explanation}</p>
                </div>
              )}

              {/* Action Strike Button */}
              <div>
                {!isAnswered ? (
                  <button
                    id="boss-strike-btn"
                    disabled={!selectedAnswer}
                    onClick={handleStrike}
                    className="w-full bg-gradient-to-r from-rose-600 via-red-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 disabled:opacity-50 text-white font-extrabold py-3.5 rounded-2xl shadow-xl transition active:scale-98"
                  >
                    Ra Đòn Tấn Công Boss!
                  </button>
                ) : (
                  <button
                    id="boss-next-turn-btn"
                    onClick={handleNextTurn}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold py-3.5 rounded-2xl shadow-xl transition active:scale-98"
                  >
                    Hiệp Đấu Tiếp Theo
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
