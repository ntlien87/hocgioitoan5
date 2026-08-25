import React from 'react';
import { Volume2, VolumeX, Trophy, Flame, Coins, Sparkles } from 'lucide-react';
import { UserProgress } from '../types/math';
import { calculatePlayerRank } from '../utils/storage';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  progress: UserProgress;
  onToggleSound: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  progress,
  onToggleSound,
  onOpenProfile,
}) => {
  const rank = calculatePlayerRank(progress.xp);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 flex items-center justify-between gap-2">
        {/* App Logo & Title */}
        <div 
          onClick={onOpenProfile}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
            <span className="text-2xl">{progress.avatar || '🦁'}</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">
                Học Giỏi Toán 5
              </span>
              <span className="bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-300 dark:border-amber-800">
                Lv.{rank.level}
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate max-w-[120px] sm:max-w-[160px]">
              {rank.rankName}
            </span>
          </div>
        </div>

        {/* Stats Pill Badges */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* XP Progress Bar (Desktop / Tablet) */}
          <div 
            onClick={onOpenProfile}
            className="hidden md:flex flex-col w-36 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-blue-400 transition"
          >
            <div className="flex justify-between text-[10px] font-semibold text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-amber-500" /> XP</span>
              <span>{progress.xp} / {rank.nextLevelXp}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-0.5">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${rank.progressPercent}%` }}
              />
            </div>
          </div>

          {/* Streak Badge */}
          <div 
            className="flex items-center gap-1 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-900/80 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-xl text-xs font-bold"
            title="Chuỗi ngày học tập"
          >
            <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
            <span>{progress.streakDays}</span>
          </div>

          {/* Coins Badge */}
          <div 
            className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/80 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-xl text-xs font-bold"
            title="Xu vàng tích lũy"
          >
            <Coins className="w-4 h-4 text-amber-500" />
            <span>{progress.coins}</span>
          </div>

          {/* Sound Toggle */}
          <button
            id="navbar-sound-toggle-btn"
            onClick={() => {
              soundFx.playClick();
              onToggleSound();
            }}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition border border-slate-200 dark:border-slate-700"
            title={progress.soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {progress.soundEnabled ? (
              <Volume2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

        </div>
      </div>
    </header>
  );
};
