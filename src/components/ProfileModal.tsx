import React, { useState } from 'react';
import { X, Trophy, Sparkles, RotateCcw, Check } from 'lucide-react';
import { UserProgress } from '../types/math';
import { calculatePlayerRank } from '../utils/storage';
import { badges } from '../data/badges';
import { soundFx } from '../utils/audio';

interface ProfileModalProps {
  progress: UserProgress;
  onClose: () => void;
  onUpdateName: (name: string) => void;
  onUpdateAvatar: (avatar: string) => void;
  onResetProgress: () => void;
}

const AVATAR_OPTIONS = ['🦁', '🦉', '🚀', '🧙‍♂️', '🦊', '🤖', '🦄', '🦖', '⚡', '👑'];

export const ProfileModal: React.FC<ProfileModalProps> = ({
  progress,
  onClose,
  onUpdateName,
  onUpdateAvatar,
  onResetProgress,
}) => {
  const [name, setName] = useState(progress.playerName);
  const [isEditingName, setIsEditingName] = useState(false);
  const rank = calculatePlayerRank(progress.xp);

  const handleSaveName = () => {
    if (!name.trim()) return;
    soundFx.playClick();
    onUpdateName(name.trim());
    setIsEditingName(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh] my-auto">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-200" />
            <h2 className="text-base sm:text-lg font-black">Hồ Sơ Hiệp Sĩ Toán Học</h2>
          </div>
          <button
            id="close-profile-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-black/10 hover:bg-black/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Avatar & Player Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-3xl border border-slate-200 dark:border-slate-700">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-4xl shadow-md shrink-0">
              {progress.avatar}
            </div>

            <div className="flex-1 text-center sm:text-left">
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl px-3 py-1 text-sm font-bold w-full"
                    maxLength={25}
                  />
                  <button
                    onClick={handleSaveName}
                    className="bg-emerald-600 text-white p-2 rounded-xl"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">
                    {progress.playerName}
                  </h3>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="text-xs text-blue-600 hover:underline font-semibold"
                  >
                    (Đổi tên)
                  </button>
                </div>
              )}

              <div className="inline-flex items-center gap-1.5 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-extrabold text-xs px-2.5 py-0.5 rounded-full mt-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cấp {rank.level} • {rank.rankName}</span>
              </div>

              {/* XP Progress */}
              <div className="mt-2.5">
                <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                  <span>Tiến độ lên cấp:</span>
                  <span>{progress.xp} / {rank.nextLevelXp} XP</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${rank.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Choose Avatar Grid */}
          <div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
              Chọn Biểu Tượng Linh Vật Đồng Hành:
            </span>
            <div className="flex flex-wrap gap-2">
              {AVATAR_OPTIONS.map((av) => (
                <button
                  key={av}
                  onClick={() => {
                    soundFx.playClick();
                    onUpdateAvatar(av);
                  }}
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl transition-all ${
                    progress.avatar === av
                      ? 'bg-amber-100 border-2 border-amber-500 scale-110 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-bold text-slate-500 block">Tổng XP</span>
              <span className="text-base font-black text-amber-600">{progress.xp}</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-bold text-slate-500 block">Xu Vàng</span>
              <span className="text-base font-black text-orange-600">{progress.coins}</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-bold text-slate-500 block">Ải Hoàn Thành</span>
              <span className="text-base font-black text-blue-600">
                {Object.keys(progress.completedLessonStars).length}
              </span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-bold text-slate-500 block">Trùm Boss Hạ</span>
              <span className="text-base font-black text-rose-600">
                {progress.defeatedBossIds.length}
              </span>
            </div>
          </div>

          {/* Badges Showcase */}
          <div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
              Bộ Sưu Tập Huy Hiệu Danh Dự ({progress.unlockedBadgeIds.length}/{badges.length}):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {badges.map((b) => {
                const isUnlocked = progress.unlockedBadgeIds.includes(b.id);

                return (
                  <div
                    key={b.id}
                    className={`p-3 rounded-2xl border flex items-center gap-2.5 transition ${
                      isUnlocked
                        ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800'
                        : 'bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 opacity-50 grayscale'
                    }`}
                  >
                    <span className="text-2xl shrink-0">{b.icon}</span>
                    <div className="overflow-hidden">
                      <h4 className="font-extrabold text-xs text-slate-800 dark:text-slate-200 truncate">
                        {b.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 truncate">{b.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reset progress */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <button
              onClick={() => {
                if (confirm('Con có chắc muốn xóa toàn bộ tiến trình và làm lại từ đầu không?')) {
                  onResetProgress();
                  onClose();
                }
              }}
              className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Cài đặt lại từ đầu</span>
            </button>

            <button
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-5 py-2 rounded-xl"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
