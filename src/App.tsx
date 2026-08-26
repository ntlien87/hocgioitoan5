import React, { useState, useEffect } from 'react';
import { ActiveTab, Chapter, LessonLevel, UserProgress, SubjectId } from './types/curriculum';
import {
  loadUserProgress,
  saveUserProgress,
  addCompletedLesson,
  addDefeatedBoss,
  addExamScore,
  updateSpeedScore,
  resetAllProgress,
} from './utils/storage';
import { soundFx } from './utils/audio';
import { getChaptersBySubject } from './data/curriculum';

// Subcomponents
import { Navbar } from './components/Navbar';
import { SubjectSwitcher } from './components/SubjectSwitcher';
import { BottomNav } from './components/BottomNav';
import { QuestMap } from './components/QuestMap';
import { LessonModal } from './components/LessonModal';
import { BossBattleModal } from './components/BossBattleModal';
import { SpeedArena } from './components/SpeedArena';
import { MathLabs } from './components/MathLabs';
import { ExamArena } from './components/ExamArena';
import { AITutorChat } from './components/AITutorChat';
import { ProfileModal } from './components/ProfileModal';

// Writing Subcomponents
import { WritingLabs } from './components/writing/WritingLabs';
import { WritingArena } from './components/writing/WritingArena';

// English Subcomponents
import { EnglishLabs } from './components/english/EnglishLabs';
import { EnglishArena } from './components/english/EnglishArena';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress);
  const [currentSubject, setCurrentSubject] = useState<SubjectId>('vietnamese');
  const [activeTab, setActiveTab] = useState<ActiveTab>('quest');

  // Modal active states
  const [activeLessonData, setActiveLessonData] = useState<{
    lesson: LessonLevel;
    chapter: Chapter;
  } | null>(null);
  const [activeBossChapter, setActiveBossChapter] = useState<Chapter | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const currentChapters = getChaptersBySubject(currentSubject);

  // Sync sound setting to audio manager on mount/change
  useEffect(() => {
    soundFx.setEnabled(progress.soundEnabled);
  }, [progress.soundEnabled]);

  const handleToggleSound = () => {
    setProgress((prev) => {
      const next = { ...prev, soundEnabled: !prev.soundEnabled };
      saveUserProgress(next);
      return next;
    });
  };

  const handleUpdateName = (playerName: string) => {
    setProgress((prev) => {
      const next = { ...prev, playerName };
      saveUserProgress(next);
      return next;
    });
  };

  const handleUpdateAvatar = (avatar: string) => {
    setProgress((prev) => {
      const next = { ...prev, avatar };
      saveUserProgress(next);
      return next;
    });
  };

  const handleResetProgress = () => {
    const fresh = resetAllProgress();
    setProgress(fresh);
  };

  const handleSelectLesson = (lesson: LessonLevel, chapter: Chapter) => {
    setActiveLessonData({ lesson, chapter });
  };

  const handleCompleteLesson = (
    lessonId: string,
    stars: number,
    xpReward: number,
    coinReward: number
  ) => {
    // Find next lesson to unlock in current subject
    let nextLessonIdToUnlock: string | undefined;
    for (let c = 0; c < currentChapters.length; c++) {
      const ch = currentChapters[c];
      const idx = ch.lessons.findIndex((l) => l.id === lessonId);
      if (idx !== -1) {
        if (idx + 1 < ch.lessons.length) {
          nextLessonIdToUnlock = ch.lessons[idx + 1].id;
        }
        break;
      }
    }

    const updated = addCompletedLesson(
      lessonId,
      stars,
      xpReward,
      coinReward,
      nextLessonIdToUnlock
    );
    setProgress(updated);
  };

  const handleDefeatBoss = (
    bossId: string,
    badgeId: string,
    xpReward: number,
    coinReward: number
  ) => {
    let nextChapterFirstLesson: string | undefined;
    const chIdx = currentChapters.findIndex((c) => c.boss.id === bossId);
    if (chIdx !== -1 && chIdx + 1 < currentChapters.length) {
      nextChapterFirstLesson = currentChapters[chIdx + 1].lessons[0]?.id;
    }

    const updated = addDefeatedBoss(bossId, badgeId, xpReward, coinReward);
    if (nextChapterFirstLesson && !updated.unlockedLessonIds.includes(nextChapterFirstLesson)) {
      updated.unlockedLessonIds.push(nextChapterFirstLesson);
      saveUserProgress(updated);
    }
    setProgress(updated);
  };

  const handleUpdateHighScore = (score: number, xpGained: number, subject: SubjectId = 'math') => {
    const updated = updateSpeedScore(score, xpGained, subject);
    setProgress(updated);
  };

  const handleSaveExamScore = (examId: string, score: number, xpGained: number) => {
    const updated = addExamScore(examId, score, xpGained);
    setProgress(updated);
  };

  // Convert exam results array into best score per examId
  const examScoresMap: { [examId: string]: number } = {};
  progress.examResults.forEach((res) => {
    if (examScoresMap[res.examId] === undefined || res.score > examScoresMap[res.examId]) {
      examScoresMap[res.examId] = res.score;
    }
  });

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Fixed Header Navbar */}
      <Navbar
        progress={progress}
        currentSubject={currentSubject}
        onToggleSound={handleToggleSound}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Subject Switcher Segmented Bar */}
      <SubjectSwitcher
        currentSubject={currentSubject}
        onSelectSubject={(subject) => {
          setCurrentSubject(subject);
          setActiveLessonData(null);
          setActiveBossChapter(null);
        }}
      />

      {/* Main Tab Content Display */}
      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {activeTab === 'quest' && (
          <QuestMap
            progress={progress}
            chapters={currentChapters}
            subjectId={currentSubject}
            onSelectLesson={handleSelectLesson}
            onSelectBoss={(chapter) => setActiveBossChapter(chapter)}
          />
        )}

        {activeTab === 'arena' && (
          currentSubject === 'vietnamese' ? (
            <WritingArena
              highScore={progress.writingArenaHighScore || 0}
              onUpdateHighScore={(score, xp) => handleUpdateHighScore(score, xp, 'vietnamese')}
            />
          ) : currentSubject === 'english' ? (
            <EnglishArena
              highScore={progress.englishArenaHighScore || 0}
              onUpdateHighScore={(score, xp) => handleUpdateHighScore(score, xp, 'english')}
            />
          ) : (
            <SpeedArena
              highScore={progress.speedArenaHighScore}
              onUpdateHighScore={(score, xp) => handleUpdateHighScore(score, xp, 'math')}
            />
          )
        )}

        {activeTab === 'labs' && (
          currentSubject === 'vietnamese' ? (
            <WritingLabs />
          ) : currentSubject === 'english' ? (
            <EnglishLabs />
          ) : (
            <MathLabs />
          )
        )}

        {activeTab === 'exams' && (
          <ExamArena
            examScores={examScoresMap}
            currentSubject={currentSubject}
            onSaveExamScore={handleSaveExamScore}
          />
        )}

        {activeTab === 'tutor' && <AITutorChat currentSubject={currentSubject} />}
      </main>

      {/* Bottom Responsive Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        currentSubject={currentSubject}
        onSelectTab={(tab) => setActiveTab(tab)}
      />

      {/* Modals */}
      {activeLessonData && (
        <LessonModal
          lesson={activeLessonData.lesson}
          chapter={activeLessonData.chapter}
          onClose={() => setActiveLessonData(null)}
          onCompleteLesson={handleCompleteLesson}
        />
      )}

      {activeBossChapter && (
        <BossBattleModal
          chapter={activeBossChapter}
          onClose={() => setActiveBossChapter(null)}
          onDefeatBoss={handleDefeatBoss}
        />
      )}

      {isProfileOpen && (
        <ProfileModal
          progress={progress}
          currentSubject={currentSubject}
          onClose={() => setIsProfileOpen(false)}
          onUpdateName={handleUpdateName}
          onUpdateAvatar={handleUpdateAvatar}
          onResetProgress={handleResetProgress}
        />
      )}
    </div>
  );
}
