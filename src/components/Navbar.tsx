import React from 'react';
import { Volume2, VolumeX, Flame, Coins, Sparkles, Trophy } from 'lucide-react';
import { UserProgress, SubjectId } from '../types/curriculum';
import { calculatePlayerRank } from '../utils/storage';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  progress: UserProgress;
  currentSubject?: SubjectId;
  onToggleSound: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  progress,
  currentSubject = 'math',
  onToggleSound,
  onOpenProfile,
}) => {
  const activeSubject: SubjectId = currentSubject as SubjectId;
  const rank = calculatePlayerRank(progress.xp, activeSubject);

  const subjectBadges: Record<SubjectId, { label: string; gradient: string; icon: string }> = {
    math: { label: 'Toán 5', gradient: 'from-amber-500 to-orange-600', icon: '📐' },
    vietnamese: { label: 'Thần Bút', gradient: 'from-emerald-500 to-teal-600', icon: '✍️' },
    english: { label: 'English 5', gradient: 'from-blue-500 to-indigo-600', icon: '🇬🇧' },
  };

  const currentBadge = subjectBadges[activeSubject] || subjectBadges.math;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs pt-safe">
      <div className="max-w-5xl mx-auto px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2">
        {/* Left: Player Profile Card / Mascot */}
        <div
          id="navbar-profile-btn"
          onClick={() => {
            soundFx.playClick();
            onOpenProfile();
          }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none active:scale-95 transition-transform"
        >
          <div className="relative">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 p-0.5 shadow-md flex items-center justify-center text-2xl sm:text-3xl ring-2 ring-white dark:ring-slate-800">
              <span>{progress.avatar || '🦁'}</span>
            </div>
            {/* Level Badge Pill */}
            <span className="absolute -bottom-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] sm:text-[10px] font-black px-1.5 py-0.2 rounded-full border border-white dark:border-slate-900 shadow-xs">
              Lv.{rank.level}
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xs sm:text-sm text-slate-800 dark:text-slate-100 tracking-tight line-clamp-1">
                {progress.playerName}
              </span>
              <span className={`text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded-lg text-white bg-gradient-to-r ${currentBadge.gradient} shadow-xs hidden xs:inline-block`}>
                {currentBadge.icon} {currentBadge.label}
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-amber-600 dark:text-amber-400 truncate max-w-[110px] sm:max-w-[160px]">
              {rank.rankName}
            </span>
          </div>
        </div>

        {/* Right: Game Stats HUD (XP Bar, Streak, Gold, Sound) */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* XP Progress Bar (Tablet & Desktop) */}
          <div
            onClick={() => {
              soundFx.playClick();
              onOpenProfile();
            }}
            className="hidden sm:flex flex-col w-32 md:w-40 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-amber-400 transition"
          >
            <div className="flex justify-between text-[10px] font-extrabold text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Sparkles className="w-3 h-3 text-amber-500" /> XP
              </span>
              <span>{progress.xp}/{rank.nextLevelXp}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-0.5">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${rank.progressPercent}%` }}
              />
            </div>
          </div>

          {/* Fire Streak Flame */}
          <div
            className="flex items-center gap-1 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-300 dark:border-orange-800 text-orange-700 dark:text-orange-300 px-2.5 py-1 rounded-2xl text-xs font-black shadow-xs select-none"
            title="Chuỗi ngày học tập liên tiếp"
          >
            <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
            <span>{progress.streakDays}</span>
          </div>

          {/* Shiny Gold Coins */}
          <div
            className="flex items-center gap-1 bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 px-2.5 py-1 rounded-2xl text-xs font-black shadow-xs select-none"
            title="Xu vàng tích lũy"
          >
            <Coins className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>{progress.coins}</span>
          </div>

          {/* Sound Toggle Button */}
          <button
            id="navbar-sound-toggle-btn"
            onClick={() => {
              soundFx.playClick();
              onToggleSound();
            }}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center transition-all shadow-xs active:scale-90 border ${
              progress.soundEnabled
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'
            }`}
            title={progress.soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {progress.soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
