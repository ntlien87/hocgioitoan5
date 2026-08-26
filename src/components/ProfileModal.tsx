import React, { useState } from 'react';
import { X, Trophy, Sparkles, RotateCcw, Check, Flame, Coins, Shield, Award } from 'lucide-react';
import { UserProgress, SubjectId } from '../types/curriculum';
import { calculatePlayerRank } from '../utils/storage';
import { badges } from '../data/badges';
import { soundFx } from '../utils/audio';

interface ProfileModalProps {
  progress: UserProgress;
  currentSubject?: SubjectId;
  onClose: () => void;
  onUpdateName: (name: string) => void;
  onUpdateAvatar: (avatar: string) => void;
  onResetProgress: () => void;
}

const AVATAR_OPTIONS = ['🦁', '🦉', '🚀', '🧙‍♂️', '🦊', '🤖', '🦄', '🦖', '⚡', '👑', '🐯', '🐼', '🐬', '🦸‍♂️'];

export const ProfileModal: React.FC<ProfileModalProps> = ({
  progress,
  currentSubject = 'math',
  onClose,
  onUpdateName,
  onUpdateAvatar,
  onResetProgress,
}) => {
  const [name, setName] = useState(progress.playerName);
  const [isEditingName, setIsEditingName] = useState(false);
  const rank = calculatePlayerRank(progress.xp, currentSubject);

  const profileTitles: Record<SubjectId, string> = {
    math: 'Hồ Sơ Hiệp Sĩ Toán Học ⚔️',
    vietnamese: 'Hồ Sơ Thần Bút Nhí ✍️',
    english: 'My Explorer Profile 🇬🇧',
  };

  const handleSaveName = () => {
    if (!name.trim()) return;
    soundFx.playClick();
    onUpdateName(name.trim());
    setIsEditingName(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto pt-safe pb-safe select-none">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] my-auto animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <Trophy className="w-5 h-5 text-amber-200" />
            <h2 className="text-base sm:text-lg font-black tracking-tight">{profileTitles[currentSubject]}</h2>
          </div>
          <button
            id="close-profile-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-black/20 hover:bg-black/30 text-white transition active:scale-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Avatar & Player Info Hero */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-br from-slate-50 to-amber-50/40 dark:from-slate-800/80 dark:to-slate-800/40 p-4 sm:p-5 rounded-3xl border-2 border-amber-200 dark:border-amber-900/60 shadow-xs">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-400 to-orange-500 flex items-center justify-center text-4xl sm:text-5xl shadow-lg shrink-0 ring-4 ring-white dark:ring-slate-700 animate-float">
              {progress.avatar}
            </div>

            <div className="flex-1 text-center sm:text-left w-full">
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white dark:bg-slate-900 border-2 border-blue-400 rounded-xl px-3 py-1.5 text-sm font-black w-full focus:outline-hidden"
                    maxLength={25}
                  />
                  <button
                    onClick={handleSaveName}
                    className="btn-3d btn-3d-emerald p-2 rounded-xl"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-lg sm:text-xl font-black text-slate-800 dark:text-slate-100">
                    {progress.playerName}
                  </h3>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-bold"
                  >
                    (Đổi tên)
                  </button>
                </div>
              )}

              <div className="inline-flex items-center gap-1.5 bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 font-black text-xs px-3 py-1 rounded-full mt-1.5 border border-amber-300 dark:border-amber-800">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Cấp {rank.level} • {rank.rankName}</span>
              </div>

              {/* XP Progress Bar */}
              <div className="mt-3">
                <div className="flex justify-between text-[11px] font-black text-slate-500 mb-1">
                  <span>Tiến độ lên cấp tiếp theo:</span>
                  <span>{progress.xp} / {rank.nextLevelXp} XP</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-full transition-all duration-500 shadow-xs"
                    style={{ width: `${rank.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Choose Avatar Grid */}
          <div>
            <span className="text-xs font-black text-slate-700 dark:text-slate-300 block mb-2">
              Chọn Linh Vật Đồng Hành:
            </span>
            <div className="flex flex-wrap gap-2">
              {AVATAR_OPTIONS.map((av) => (
                <button
                  key={av}
                  onClick={() => {
                    soundFx.playClick();
                    onUpdateAvatar(av);
                  }}
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center text-xl sm:text-2xl transition-all btn-3d ${
                    progress.avatar === av
                      ? 'bg-amber-100 dark:bg-amber-950/60 border-2 border-amber-500 scale-110 shadow-md ring-2 ring-amber-400'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>

          {/* Game Stats 4 Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
            <div className="bg-amber-50/70 dark:bg-amber-950/30 p-3 rounded-2xl border border-amber-200 dark:border-amber-800/60 shadow-xs">
              <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 block">Tổng XP</span>
              <span className="text-lg font-black text-amber-600">{progress.xp}</span>
            </div>
            <div className="bg-orange-50/70 dark:bg-orange-950/30 p-3 rounded-2xl border border-orange-200 dark:border-orange-800/60 shadow-xs">
              <span className="text-[10px] font-bold text-orange-700 dark:text-orange-400 block">Xu Vàng</span>
              <span className="text-lg font-black text-orange-600">{progress.coins}</span>
            </div>
            <div className="bg-blue-50/70 dark:bg-blue-950/30 p-3 rounded-2xl border border-blue-200 dark:border-blue-800/60 shadow-xs">
              <span className="text-[10px] font-bold text-blue-700 dark:text-blue-400 block">Ải Hoàn Thành</span>
              <span className="text-lg font-black text-blue-600">
                {Object.keys(progress.completedLessonStars).length}
              </span>
            </div>
            <div className="bg-rose-50/70 dark:bg-rose-950/30 p-3 rounded-2xl border border-rose-200 dark:border-rose-800/60 shadow-xs">
              <span className="text-[10px] font-bold text-rose-700 dark:text-rose-400 block">Boss Hạ Gục</span>
              <span className="text-lg font-black text-rose-600">
                {progress.defeatedBossIds.length}
              </span>
            </div>
          </div>

          {/* Badges Collection Showcase */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Bộ Sưu Tập Huy Hiệu Danh Dự ({progress.unlockedBadgeIds.length}/{badges.length}):</span>
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-1">
              {badges.map((b) => {
                const isUnlocked = progress.unlockedBadgeIds.includes(b.id);

                return (
                  <div
                    key={b.id}
                    className={`p-3 rounded-2xl border-2 flex items-center gap-2.5 transition ${
                      isUnlocked
                        ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-45 grayscale'
                    }`}
                  >
                    <span className="text-2xl shrink-0">{b.icon}</span>
                    <div className="overflow-hidden">
                      <h4 className="font-black text-xs text-slate-800 dark:text-slate-200 truncate">
                        {b.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate font-semibold">{b.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reset progress & Close */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <button
              onClick={() => {
                if (confirm('Con có chắc muốn xóa toàn bộ tiến trình và làm lại từ đầu không?')) {
                  onResetProgress();
                  onClose();
                }
              }}
              className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-bold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Cài đặt lại</span>
            </button>

            <button
              onClick={onClose}
              className="btn-3d btn-3d-white font-black text-xs px-6 py-2.5 rounded-xl"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
