import React, { useState } from 'react';
import { Star, Lock, CheckCircle2, Swords, Sparkles, BookOpen, ChevronRight, Trophy, Award, Flame, Filter, Compass } from 'lucide-react';
import { Chapter, LessonLevel, UserProgress } from '../types/math';
import { chapters } from '../data/curriculum';
import { soundFx } from '../utils/audio';

interface QuestMapProps {
  progress: UserProgress;
  onSelectLesson: (lesson: LessonLevel, chapter: Chapter) => void;
  onSelectBoss: (chapter: Chapter) => void;
}

export const QuestMap: React.FC<QuestMapProps> = ({
  progress,
  onSelectLesson,
  onSelectBoss,
}) => {
  const [selectedSemester, setSelectedSemester] = useState<0 | 1 | 2>(0); // 0 = all, 1 = term 1, 2 = term 2
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<string>('all');

  const filteredChapters = chapters.filter((ch) => {
    if (selectedSemester !== 0 && ch.semester !== selectedSemester) {
      return false;
    }
    if (selectedChapterFilter !== 'all' && ch.id !== selectedChapterFilter) {
      return false;
    }
    return true;
  });

  // Calculate overall stats
  const totalAvailableLessons = chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
  const totalCompletedLessons = chapters.reduce(
    (acc, ch) =>
      acc +
      ch.lessons.filter((l) => (progress.completedLessonStars[l.id] || 0) > 0).length,
    0
  );
  const totalBossesDefeated = progress.defeatedBossIds.length;
  const totalStars = (Object.values(progress.completedLessonStars) as number[]).reduce((sum, stars) => sum + stars, 0);

  return (
    <div className="w-full pb-24 max-w-5xl mx-auto px-3 sm:px-4 pt-3 space-y-6">
      {/* Welcome Banner & Overview Hero */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-5 sm:p-7 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-amber-300 mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Toán Lớp 5 Toàn Diện • 12 Chủ Đề Chuẩn SGK Mới</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight">
              Bản Đồ Thám Hiểm Vương Quốc Toán 5
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed font-medium">
              Chinh phục 12 Chủ Đề Toán Học (từ Bài 1 đến 75), làm chủ các bí kíp tính nhanh, mở khóa huy hiệu và đánh bại 12 Đại Boss!
            </p>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mt-4">
              <div className="bg-black/25 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 border border-white/15">
                <Trophy className="w-4 h-4 text-amber-300" />
                <span>Tiến Độ: {totalCompletedLessons}/{totalAvailableLessons} Ải</span>
              </div>
              <div className="bg-black/25 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 border border-white/15">
                <Swords className="w-4 h-4 text-rose-300" />
                <span>Hạ Gục: {totalBossesDefeated}/12 Boss</span>
              </div>
              <div className="bg-black/25 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 border border-white/15">
                <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>{totalStars} ⭐ Thu Thập</span>
              </div>
            </div>
          </div>

          {/* Semester Switcher Pill */}
          <div className="flex flex-col gap-2 self-start md:self-auto shrink-0">
            <span className="text-[11px] font-black uppercase tracking-wider text-white/80">
              Chọn Học Kỳ
            </span>
            <div className="flex items-center bg-black/30 backdrop-blur-md p-1 rounded-2xl border border-white/20">
              <button
                id="filter-all-semester"
                onClick={() => {
                  soundFx.playClick();
                  setSelectedSemester(0);
                  setSelectedChapterFilter('all');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                  selectedSemester === 0
                    ? 'bg-white text-blue-900 shadow-md'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Cả Năm (12 Chủ Đề)
              </button>
              <button
                id="filter-semester-1"
                onClick={() => {
                  soundFx.playClick();
                  setSelectedSemester(1);
                  setSelectedChapterFilter('all');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                  selectedSemester === 1
                    ? 'bg-white text-blue-900 shadow-md'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Học Kỳ 1 (CĐ 1-6)
              </button>
              <button
                id="filter-semester-2"
                onClick={() => {
                  soundFx.playClick();
                  setSelectedSemester(2);
                  setSelectedChapterFilter('all');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                  selectedSemester === 2
                    ? 'bg-white text-blue-900 shadow-md'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Học Kỳ 2 (CĐ 7-12)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Topic Jump Navigator */}
      <div className="bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
        <div className="flex items-center justify-between text-xs font-black text-slate-700 dark:text-slate-300 px-1">
          <span className="flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-blue-600" />
            <span>Mục Lục Nhanh 12 Chủ Đề:</span>
          </span>
          {selectedChapterFilter !== 'all' && (
            <button
              onClick={() => {
                soundFx.playClick();
                setSelectedChapterFilter('all');
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline font-bold"
            >
              Hiện tất cả chủ đề
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <button
            onClick={() => {
              soundFx.playClick();
              setSelectedChapterFilter('all');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              selectedChapterFilter === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Tất Cả
          </button>
          {chapters
            .filter((ch) => (selectedSemester === 0 ? true : ch.semester === selectedSemester))
            .map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedChapterFilter(ch.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                  selectedChapterFilter === ch.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                <span>{ch.icon}</span>
                <span>{ch.title.split(':')[0]}</span>
              </button>
            ))}
        </div>
      </div>

      {/* Chapters list */}
      <div className="space-y-8">
        {filteredChapters.map((chapter) => {
          // Calculate chapter stats
          const totalLessons = chapter.lessons.length;
          const completedLessonsCount = chapter.lessons.filter((l) =>
            (progress.completedLessonStars[l.id] || 0) > 0
          ).length;
          const isBossDefeated = progress.defeatedBossIds.includes(chapter.boss.id);
          const isBossUnlocked = completedLessonsCount >= totalLessons;

          return (
            <div
              key={chapter.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden transition hover:shadow-xl"
            >
              {/* Chapter Header */}
              <div className={`p-4 sm:p-6 bg-gradient-to-r ${chapter.color} text-white relative shadow-inner`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-md ring-2 ring-white/30">
                      {chapter.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-black uppercase tracking-wider bg-white/25 px-2.5 py-0.5 rounded-full text-white">
                          {chapter.semester === 1 ? 'Học kỳ 1' : 'Học kỳ 2'}
                        </span>
                        <span className="text-xs font-bold text-white/90">
                          {chapter.title}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-black mt-0.5">
                        {chapter.vietnameseTitle}
                      </h2>
                    </div>
                  </div>

                  {/* Progress Counter Badge */}
                  <div className="text-right">
                    <div className="text-xs font-black bg-white/25 backdrop-blur-md px-3.5 py-1.5 rounded-2xl inline-flex items-center gap-1.5 shadow-sm border border-white/20">
                      <span>{completedLessonsCount}/{totalLessons} Ải Bài Học</span>
                    </div>
                  </div>
                </div>

                <p className="text-white/95 text-xs sm:text-sm mt-3 max-w-2xl leading-relaxed font-medium">
                  {chapter.description}
                </p>

                {/* Progress bar under header */}
                <div className="w-full h-2 bg-black/25 rounded-full mt-4 overflow-hidden">
                  <div
                    className="h-full bg-amber-300 rounded-full transition-all duration-500 shadow-sm"
                    style={{
                      width: `${(completedLessonsCount / totalLessons) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Levels Grid */}
              <div className="p-4 sm:p-6 bg-slate-50/60 dark:bg-slate-900/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                  {chapter.lessons.map((lesson) => {
                    const isUnlocked = progress.unlockedLessonIds.includes(lesson.id);
                    const stars = progress.completedLessonStars[lesson.id] || 0;
                    const isPassed = stars > 0;

                    return (
                      <div
                        key={lesson.id}
                        id={`lesson-card-${lesson.id}`}
                        onClick={() => {
                          if (isUnlocked) {
                            soundFx.playClick();
                            onSelectLesson(lesson, chapter);
                          }
                        }}
                        className={`group relative p-4 rounded-3xl border-2 transition-all duration-200 flex flex-col justify-between ${
                          isUnlocked
                            ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md cursor-pointer active:scale-[0.98]'
                            : 'bg-slate-100/80 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-65 cursor-not-allowed'
                        }`}
                      >
                        {/* Top row: Level tag & Stars / Lock */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{lesson.icon}</span>
                            <span className="text-[11px] font-black px-2.5 py-0.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                              Ải {lesson.levelNumber}
                            </span>
                          </div>

                          {isUnlocked ? (
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3].map((starIdx) => (
                                <Star
                                  key={starIdx}
                                  className={`w-4 h-4 ${
                                    starIdx <= stars
                                      ? 'text-amber-400 fill-amber-400 animate-in zoom-in-50'
                                      : 'text-slate-300 dark:text-slate-600'
                                  }`}
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-500">
                              <Lock className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </div>

                        {/* Title & Subtitle */}
                        <div className="my-1">
                          <h3 className="font-black text-slate-800 dark:text-slate-100 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-1">
                            {lesson.title}
                          </h3>
                          <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 mt-1 font-medium leading-relaxed">
                            {lesson.subtitle}
                          </p>
                        </div>

                        {/* Bottom action info */}
                        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700/60 text-xs font-bold">
                          <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1">
                            <span>+{lesson.xpReward} XP</span>
                          </span>

                          {isUnlocked ? (
                            <span className="text-blue-600 dark:text-blue-400 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform font-black">
                              {isPassed ? 'Luyện lại' : 'Vào Ải'}
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          ) : (
                            <span className="text-slate-400 text-[11px] font-semibold">Chưa mở</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Boss Gate Section */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                  <div
                    id={`boss-gate-${chapter.boss.id}`}
                    onClick={() => {
                      if (isBossUnlocked) {
                        soundFx.playClick();
                        onSelectBoss(chapter);
                      }
                    }}
                    className={`p-4 sm:p-5 rounded-3xl border-2 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 ${
                      isBossDefeated
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-700 cursor-pointer shadow-xs'
                        : isBossUnlocked
                        ? 'bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/40 dark:to-orange-950/40 border-rose-500 dark:border-rose-600 shadow-md animate-pulse cursor-pointer hover:scale-[1.01]'
                        : 'bg-slate-100/70 dark:bg-slate-800/40 border-slate-300 dark:border-slate-700 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center gap-4 text-center sm:text-left">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-3xl shadow-lg ring-2 ring-white/60">
                          {chapter.boss.avatar}
                        </div>
                        {isBossDefeated && (
                          <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-1 shadow-md">
                            <Trophy className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <span className="bg-rose-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs">
                            Đại Boss Ải
                          </span>
                          <span className="text-xs font-black text-rose-600 dark:text-rose-400">
                            HP: {chapter.boss.maxHp}
                          </span>
                        </div>
                        <h4 className="font-black text-slate-900 dark:text-slate-100 text-base sm:text-lg mt-0.5">
                          {chapter.boss.name}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md line-clamp-1 font-medium">
                          {chapter.boss.title} • {chapter.boss.story}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {isBossDefeated ? (
                        <div className="flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 px-4 py-2 rounded-2xl text-xs font-black shadow-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Đã Thu Phục (Đấu lại)</span>
                        </div>
                      ) : isBossUnlocked ? (
                        <button className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-black text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-lg active:scale-95 transition">
                          <Swords className="w-4 h-4" />
                          <span>Quyết Đấu Ngay!</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-bold bg-white dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Vượt hết ải để mở Boss</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
