import React, { useState } from 'react';
import { Star, Lock, CheckCircle2, Swords, Sparkles, ChevronRight, Trophy, Compass, Zap, Flame } from 'lucide-react';
import { Chapter, LessonLevel, UserProgress, SubjectId } from '../types/curriculum';
import { soundFx } from '../utils/audio';

interface QuestMapProps {
  progress: UserProgress;
  chapters: Chapter[];
  subjectId: SubjectId;
  onSelectLesson: (lesson: LessonLevel, chapter: Chapter) => void;
  onSelectBoss: (chapter: Chapter) => void;
}

export const QuestMap: React.FC<QuestMapProps> = ({
  progress,
  chapters,
  subjectId,
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

  // Stats calculation
  const totalAvailableLessons = chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
  const totalCompletedLessons = chapters.reduce(
    (acc, ch) =>
      acc +
      ch.lessons.filter((l) => (progress.completedLessonStars[l.id] || 0) > 0).length,
    0
  );
  const chapterBossIds = chapters.map((c) => c.boss.id);
  const totalBossesDefeated = progress.defeatedBossIds.filter((bId) => chapterBossIds.includes(bId)).length;

  const lessonIds = chapters.flatMap((c) => c.lessons.map((l) => l.id));
  const totalStars = lessonIds.reduce(
    (sum, lId) => sum + (progress.completedLessonStars[lId] || 0),
    0
  );

  const subjectThemes = {
    math: {
      heroBg: 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600',
      badge: 'Toán Lớp 5 Toàn Diện • 7 Chương Chuẩn SGK Mới',
      title: 'Bản Đồ Thám Hiểm Vương Quốc Toán 5 📐',
      desc: 'Chinh phục các ải phân số, số thập phân, hình học và chuyển động đều để thu phục các Đại Boss!',
      btnLessonPassed: 'text-amber-700 bg-amber-100 hover:bg-amber-200 dark:bg-amber-950 dark:text-amber-300',
    },
    vietnamese: {
      heroBg: 'bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600',
      badge: 'Thần Bút Nhí 5 • Luyện Siêu Tả Văn & Mở Bài Gián Tiếp',
      title: 'Bản Đồ Thám Hiểm Xứ Sở Thần Bút 5 ✍️',
      desc: 'Đánh thức 5 giác quan, mở khóa từ láy đắt giá và đánh bại Quái Vật Khô Khan cùng Rồng Văn Mẫu!',
      btnLessonPassed: 'text-emerald-700 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950 dark:text-emerald-300',
    },
    english: {
      heroBg: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600',
      badge: 'English Quest 5 • Global Success Primary Units 1-20',
      title: 'English Adventure Kingdom 5 🇬🇧',
      desc: 'Master daily vocabulary, conquer past simple tense, explore phonics and defeat the Vocabulary Dragon!',
      btnLessonPassed: 'text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-950 dark:text-blue-300',
    },
  };

  const theme = subjectThemes[subjectId] || subjectThemes.math;

  return (
    <div className="w-full pb-28 max-w-5xl mx-auto px-3 sm:px-5 pt-3 space-y-6 select-none">
      {/* Welcome Gamified Hero Card */}
      <div className={`${theme.heroBg} rounded-3xl p-5 sm:p-7 text-white shadow-xl relative overflow-hidden`}>
        <div className="absolute -right-6 -bottom-6 w-44 h-44 bg-white/15 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-amber-200 mb-2 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{theme.badge}</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight drop-shadow-xs">
              {theme.title}
            </h1>
            <p className="text-white/95 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed font-bold opacity-90">
              {theme.desc}
            </p>

            {/* Quick Stat Pill Row */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <div className="bg-black/25 backdrop-blur-md px-3 py-1.5 rounded-2xl text-xs font-black flex items-center gap-1.5 border border-white/20">
                <Trophy className="w-4 h-4 text-amber-300" />
                <span>Ải Đạt: {totalCompletedLessons}/{totalAvailableLessons}</span>
              </div>
              <div className="bg-black/25 backdrop-blur-md px-3 py-1.5 rounded-2xl text-xs font-black flex items-center gap-1.5 border border-white/20">
                <Swords className="w-4 h-4 text-rose-300" />
                <span>Boss Hạ: {totalBossesDefeated}/{chapters.length}</span>
              </div>
              <div className="bg-black/25 backdrop-blur-md px-3 py-1.5 rounded-2xl text-xs font-black flex items-center gap-1.5 border border-white/20">
                <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>{totalStars} ⭐ Thu Thập</span>
              </div>
            </div>
          </div>

          {/* Semester Selector Segment */}
          <div className="flex flex-col gap-1.5 self-start md:self-auto shrink-0">
            <span className="text-[11px] font-black uppercase tracking-wider text-white/90">
              Chọn Học Kỳ
            </span>
            <div className="flex items-center bg-black/30 backdrop-blur-md p-1 rounded-2xl border border-white/25">
              <button
                id="filter-all-semester"
                onClick={() => {
                  soundFx.playClick();
                  setSelectedSemester(0);
                  setSelectedChapterFilter('all');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all btn-3d ${
                  selectedSemester === 0
                    ? 'btn-3d-white text-slate-900 shadow-md'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Cả Năm
              </button>
              <button
                id="filter-semester-1"
                onClick={() => {
                  soundFx.playClick();
                  setSelectedSemester(1);
                  setSelectedChapterFilter('all');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all btn-3d ${
                  selectedSemester === 1
                    ? 'btn-3d-white text-slate-900 shadow-md'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Học Kỳ 1
              </button>
              <button
                id="filter-semester-2"
                onClick={() => {
                  soundFx.playClick();
                  setSelectedSemester(2);
                  setSelectedChapterFilter('all');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all btn-3d ${
                  selectedSemester === 2
                    ? 'btn-3d-white text-slate-900 shadow-md'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Học Kỳ 2
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Chapter Pill Navigator */}
      <div className="bg-white/90 dark:bg-slate-900/90 p-3 sm:p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
        <div className="flex items-center justify-between text-xs font-black text-slate-700 dark:text-slate-300 px-1">
          <span className="flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-amber-500" />
            <span>Mục Lục Các Chương ({chapters.length} Thế Giới):</span>
          </span>
          {selectedChapterFilter !== 'all' && (
            <button
              onClick={() => {
                soundFx.playClick();
                setSelectedChapterFilter('all');
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline font-bold"
            >
              Hiện tất cả
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          <button
            onClick={() => {
              soundFx.playClick();
              setSelectedChapterFilter('all');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition btn-3d ${
              selectedChapterFilter === 'all'
                ? 'btn-3d-amber shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Tất Cả
          </button>
          {chapters
            .filter((ch) => (selectedSemester === 0 ? true : ch.semester === selectedSemester))
            .map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedChapterFilter(ch.id);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition flex items-center gap-1.5 btn-3d ${
                  selectedChapterFilter === ch.id
                    ? 'btn-3d-amber shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <span className="text-base">{ch.icon}</span>
                <span>{ch.title.split(':')[0]}</span>
              </button>
            ))}
        </div>
      </div>

      {/* Chapters World Cards */}
      <div className="space-y-8">
        {filteredChapters.map((chapter) => {
          const totalLessons = chapter.lessons.length;
          const completedLessonsCount = chapter.lessons.filter((l) =>
            (progress.completedLessonStars[l.id] || 0) > 0
          ).length;
          const isBossDefeated = progress.defeatedBossIds.includes(chapter.boss.id);
          const isBossUnlocked = completedLessonsCount >= totalLessons;

          return (
            <div
              key={chapter.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden game-card"
            >
              {/* World Header */}
              <div className={`p-4 sm:p-6 bg-gradient-to-r ${chapter.color} text-white relative shadow-inner`}>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl sm:text-4xl shadow-md ring-2 ring-white/40 shrink-0">
                      {chapter.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-black/20 px-2.5 py-0.5 rounded-full text-white/95">
                          {chapter.semester === 1 ? 'Học kỳ 1' : 'Học kỳ 2'}
                        </span>
                        <span className="text-xs font-bold text-white/90">
                          {chapter.title}
                        </span>
                      </div>
                      <h2 className="text-base sm:text-xl font-black mt-0.5 tracking-tight drop-shadow-xs">
                        {chapter.vietnameseTitle}
                      </h2>
                    </div>
                  </div>

                  {/* Progress Counter Badge */}
                  <div className="text-right shrink-0">
                    <div className="text-xs sm:text-sm font-black bg-black/25 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-1.5 rounded-2xl inline-flex items-center gap-1.5 border border-white/20 shadow-xs">
                      <span>{completedLessonsCount}/{totalLessons} Ải</span>
                    </div>
                  </div>
                </div>

                <p className="text-white/95 text-xs sm:text-sm mt-3 max-w-2xl leading-relaxed font-bold opacity-90">
                  {chapter.description}
                </p>

                {/* Golden World Progress bar */}
                <div className="w-full h-2.5 bg-black/30 rounded-full mt-4 overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-amber-300 to-yellow-200 rounded-full transition-all duration-500 shadow-sm"
                    style={{
                      width: `${(completedLessonsCount / totalLessons) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Lesson Quests Grid (Touch Friendly for iPhone/iPad) */}
              <div className="p-4 sm:p-6 bg-slate-50/70 dark:bg-slate-900/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                        className={`relative p-4 sm:p-5 rounded-3xl border-2 transition-all duration-150 flex flex-col justify-between btn-3d select-none ${
                          isUnlocked
                            ? isPassed
                              ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 hover:border-emerald-500 shadow-sm cursor-pointer'
                              : 'bg-white dark:bg-slate-800 border-amber-300 dark:border-amber-700 hover:border-amber-500 shadow-md cursor-pointer ring-2 ring-amber-400/30'
                            : 'bg-slate-100/70 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60 cursor-not-allowed'
                        }`}
                      >
                        {/* Top row: Icon, Level Badge & Star Rating */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{lesson.icon}</span>
                            <span className="text-[11px] font-black px-2.5 py-0.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                              Ải {lesson.levelNumber}
                            </span>
                          </div>

                          {isUnlocked ? (
                            <div className="flex items-center gap-1">
                              {[1, 2, 3].map((starIdx) => (
                                <Star
                                  key={starIdx}
                                  className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${
                                    starIdx <= stars
                                      ? 'text-amber-400 fill-amber-400 drop-shadow-xs'
                                      : 'text-slate-300 dark:text-slate-600'
                                  }`}
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-500">
                              <Lock className="w-4 h-4" />
                            </div>
                          )}
                        </div>

                        {/* Title & Subtitle */}
                        <div className="my-1">
                          <h3 className="font-black text-slate-900 dark:text-slate-100 text-sm sm:text-base line-clamp-1">
                            {lesson.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 mt-1 font-semibold leading-relaxed">
                            {lesson.subtitle}
                          </p>
                        </div>

                        {/* Bottom action info */}
                        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 text-xs font-bold">
                          <span className="text-amber-600 dark:text-amber-400 font-black flex items-center gap-1">
                            <span>+{lesson.xpReward} XP</span>
                          </span>

                          {isUnlocked ? (
                            <span className={`px-3 py-1 rounded-xl text-xs font-black flex items-center gap-1 transition shadow-xs ${
                              isPassed
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                                : 'bg-amber-500 text-white shadow-amber-500/30 animate-bounce'
                            }`}>
                              {isPassed ? 'Ôn Lại' : 'Vào Ải ⚔️'}
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          ) : (
                            <span className="text-slate-400 text-[11px] font-bold">Chưa mở 🔒</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Boss Battle Gate Arena */}
                <div className="mt-7 pt-5 border-t-2 border-dashed border-slate-200 dark:border-slate-800">
                  <div
                    id={`boss-gate-${chapter.boss.id}`}
                    onClick={() => {
                      if (isBossUnlocked) {
                        soundFx.playClick();
                        onSelectBoss(chapter);
                      }
                    }}
                    className={`p-4 sm:p-5 rounded-3xl border-2 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 btn-3d ${
                      isBossDefeated
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-700 cursor-pointer shadow-md'
                        : isBossUnlocked
                        ? 'bg-gradient-to-r from-rose-50 via-orange-50 to-red-50 dark:from-rose-950/40 dark:to-orange-950/40 border-rose-500 dark:border-rose-600 shadow-xl cursor-pointer ring-4 ring-rose-400/30 animate-pulse'
                        : 'bg-slate-100/80 dark:bg-slate-800/40 border-slate-300 dark:border-slate-700 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center gap-4 text-center sm:text-left">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-3xl bg-gradient-to-tr from-rose-500 via-red-500 to-amber-500 flex items-center justify-center text-4xl sm:text-5xl shadow-xl ring-2 ring-white/80">
                          {chapter.boss.avatar}
                        </div>
                        {isBossDefeated && (
                          <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-1 shadow-lg animate-bounce">
                            <Trophy className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <span className="bg-rose-600 text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-xs">
                            Đại Boss Quyết Định 👑
                          </span>
                          <span className="text-xs font-black text-rose-600 dark:text-rose-400">
                            HP: {chapter.boss.maxHp}
                          </span>
                        </div>
                        <h4 className="font-black text-slate-900 dark:text-slate-100 text-base sm:text-lg mt-0.5">
                          {chapter.boss.name}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md line-clamp-1 font-bold">
                          {chapter.boss.title} • {chapter.boss.story}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {isBossDefeated ? (
                        <div className="flex items-center gap-1.5 bg-emerald-600 text-white px-5 py-2.5 rounded-2xl text-xs font-black shadow-md">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                          <span>Đã Thu Phục (Đấu lại)</span>
                        </div>
                      ) : isBossUnlocked ? (
                        <button className="flex items-center gap-2 btn-3d btn-3d-rose text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-xl active:scale-95 transition">
                          <Swords className="w-4 h-4 text-amber-200" />
                          <span>Quyết Đấu Ngay! 🔥</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-bold bg-white dark:bg-slate-800 px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-slate-700">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Hoàn thành các ải để mở Boss</span>
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
