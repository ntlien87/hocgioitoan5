import { UserProgress } from '../types/math';

const STORAGE_KEY = 'mathquest_grade5_progress_v1';

function createInitialProgress(): UserProgress {
  return {
    playerName: 'Dũng Sĩ Nhí',
    avatar: '🦁',
    xp: 120,
    coins: 50,
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    unlockedLessonIds: ['ch1_l1'],
    completedLessonStars: {},
    defeatedBossIds: [],
    unlockedBadgeIds: ['badge_first_step'],
    speedArenaHighScore: 0,
    examResults: [],
    soundEnabled: true,
  };
}

export const initialProgress: UserProgress = createInitialProgress();

export function loadUserProgress(): UserProgress {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return createInitialProgress();
    const parsed = JSON.parse(data);

    // Calculate streak
    const today = new Date().toISOString().split('T')[0];
    const lastDate = parsed.lastActiveDate;
    if (lastDate && lastDate !== today) {
      const diffTime = new Date(today).getTime() - new Date(lastDate).getTime();
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        parsed.streakDays = (parsed.streakDays || 1) + 1;
      } else if (diffDays !== 0) {
        parsed.streakDays = 1;
      }
      parsed.lastActiveDate = today;
      saveUserProgress(parsed);
    }

    const defaults = createInitialProgress();
    return {
      ...defaults,
      ...parsed,
      unlockedLessonIds: Array.isArray(parsed.unlockedLessonIds) ? [...parsed.unlockedLessonIds] : defaults.unlockedLessonIds,
      completedLessonStars: parsed.completedLessonStars && typeof parsed.completedLessonStars === 'object' ? { ...parsed.completedLessonStars } : {},
      defeatedBossIds: Array.isArray(parsed.defeatedBossIds) ? [...parsed.defeatedBossIds] : defaults.defeatedBossIds,
      unlockedBadgeIds: Array.isArray(parsed.unlockedBadgeIds) ? [...parsed.unlockedBadgeIds] : defaults.unlockedBadgeIds,
      examResults: Array.isArray(parsed.examResults) ? [...parsed.examResults] : [],
    };
  } catch (e) {
    console.error('Failed to load user progress:', e);
    return createInitialProgress();
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

export function addCompletedLesson(
  lessonId: string,
  stars: number,
  xpReward: number,
  coinReward: number,
  nextLessonIdToUnlock?: string
): UserProgress {
  const current = loadUserProgress();
  const prevStars = current.completedLessonStars[lessonId] || 0;

  // Only award XP / coins once or bonus for higher stars
  const isFirstTime = prevStars === 0;
  const isImprovement = stars > prevStars;
  const earnedXp = isFirstTime ? xpReward : isImprovement ? Math.round(xpReward * 0.3) : 0;
  const earnedCoins = isFirstTime ? coinReward : isImprovement ? Math.round(coinReward * 0.3) : 0;

  current.completedLessonStars[lessonId] = Math.max(prevStars, stars);
  current.xp += earnedXp;
  current.coins += earnedCoins;

  if (nextLessonIdToUnlock && !current.unlockedLessonIds.includes(nextLessonIdToUnlock)) {
    current.unlockedLessonIds.push(nextLessonIdToUnlock);
  }

  saveUserProgress(current);
  return current;
}

export function addDefeatedBoss(
  bossId: string,
  badgeId: string,
  xpReward: number,
  coinReward: number
): UserProgress {
  const current = loadUserProgress();
  const isFirstTime = !current.defeatedBossIds.includes(bossId);

  if (isFirstTime) {
    current.defeatedBossIds.push(bossId);
    current.xp += xpReward;
    current.coins += coinReward;
    if (badgeId && !current.unlockedBadgeIds.includes(badgeId)) {
      current.unlockedBadgeIds.push(badgeId);
    }
  }

  saveUserProgress(current);
  return current;
}

export function addExamScore(
  examId: string,
  score: number,
  xpGained: number
): UserProgress {
  const current = loadUserProgress();
  current.examResults.push({
    examId,
    score,
    total: 10,
    date: new Date().toISOString(),
    timeSpentSeconds: 0,
  });
  current.xp += xpGained;

  if (score >= 10 && !current.unlockedBadgeIds.includes('badge_exam_master')) {
    current.unlockedBadgeIds.push('badge_exam_master');
  }

  saveUserProgress(current);
  return current;
}

export function updateSpeedScore(score: number, xpGained: number): UserProgress {
  const current = loadUserProgress();
  current.xp += xpGained;
  if (score > current.speedArenaHighScore) {
    current.speedArenaHighScore = score;
  }
  if (score >= 50 && !current.unlockedBadgeIds.includes('badge_speed_50')) {
    current.unlockedBadgeIds.push('badge_speed_50');
  }
  if (score >= 100 && !current.unlockedBadgeIds.includes('badge_speed_100')) {
    current.unlockedBadgeIds.push('badge_speed_100');
  }

  saveUserProgress(current);
  return current;
}

export function resetAllProgress(): UserProgress {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    // ignore
  }
  return createInitialProgress();
}

export function calculatePlayerRank(xp: number): {
  rankName: string;
  level: number;
  nextLevelXp: number;
  progressPercent: number;
} {
  // Levels: each level requires 150 * level XP
  let level = 1;
  let accumulated = 0;
  while (true) {
    const needed = level * 150;
    if (xp < accumulated + needed) {
      const currentLevelXp = xp - accumulated;
      const progressPercent = Math.min(100, Math.round((currentLevelXp / needed) * 100));
      let rankName = 'Tập Sự Số Học';
      if (level >= 15) rankName = 'Đại Tông Sư Toán 5 👑';
      else if (level >= 12) rankName = 'Pháp Sư Không Gian ⚡';
      else if (level >= 9) rankName = 'Hiệp Sĩ Chuyển Động ⚔️';
      else if (level >= 6) rankName = 'Thần Toán Thập Phân 💎';
      else if (level >= 3) rankName = 'Dũng Sĩ Phân Số 🛡️';

      return {
        rankName,
        level,
        nextLevelXp: accumulated + needed,
        progressPercent,
      };
    }
    accumulated += needed;
    level++;
  }
}
