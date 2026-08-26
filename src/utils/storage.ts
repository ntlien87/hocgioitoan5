import { UserProgress, SubjectId } from '../types/curriculum';

const STORAGE_KEY = 'mathquest_grade5_progress_v2';

function createInitialProgress(): UserProgress {
  return {
    playerName: 'Dũng Sĩ Nhí',
    avatar: '🦁',
    xp: 150,
    coins: 60,
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    unlockedLessonIds: ['ch1_l1', 'van_c1_l1', 'eng_c1_l1'],
    completedLessonStars: {},
    defeatedBossIds: [],
    unlockedBadgeIds: ['badge_first_step'],
    speedArenaHighScore: 0,
    writingArenaHighScore: 0,
    englishArenaHighScore: 0,
    examResults: [],
    soundEnabled: true,
  };
}

export const initialProgress: UserProgress = createInitialProgress();

export function loadUserProgress(): UserProgress {
  try {
    // Try current key first, fallback to v1 key
    let data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      data = localStorage.getItem('mathquest_grade5_progress_v1');
    }
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
    const unlocked = Array.isArray(parsed.unlockedLessonIds) ? [...parsed.unlockedLessonIds] : defaults.unlockedLessonIds;
    
    // Ensure initial lessons for all subjects are unlocked
    if (!unlocked.includes('ch1_l1')) unlocked.push('ch1_l1');
    if (!unlocked.includes('van_c1_l1')) unlocked.push('van_c1_l1');
    if (!unlocked.includes('eng_c1_l1')) unlocked.push('eng_c1_l1');

    return {
      ...defaults,
      ...parsed,
      unlockedLessonIds: unlocked,
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

  // Only award full XP / coins once or bonus for higher stars
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

export function updateSpeedScore(score: number, xpGained: number, subject: SubjectId = 'math'): UserProgress {
  const current = loadUserProgress();
  current.xp += xpGained;
  
  if (subject === 'vietnamese') {
    current.writingArenaHighScore = Math.max(current.writingArenaHighScore || 0, score);
    if (score >= 40 && !current.unlockedBadgeIds.includes('badge_van_arena_master')) {
      current.unlockedBadgeIds.push('badge_van_arena_master');
    }
  } else if (subject === 'english') {
    current.englishArenaHighScore = Math.max(current.englishArenaHighScore || 0, score);
    if (score >= 40 && !current.unlockedBadgeIds.includes('badge_eng_speed_master')) {
      current.unlockedBadgeIds.push('badge_eng_speed_master');
    }
  } else {
    current.speedArenaHighScore = Math.max(current.speedArenaHighScore || 0, score);
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
    localStorage.removeItem('mathquest_grade5_progress_v1');
  } catch (e) {
    // ignore
  }
  return createInitialProgress();
}

export function calculatePlayerRank(xp: number, subject: SubjectId = 'math'): {
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
      if (subject === 'vietnamese') {
        if (level >= 15) rankName = 'Đại Tông Sư Thần Bút 👑';
        else if (level >= 12) rankName = 'Kỳ Tài Ngôn Từ ⚡';
        else if (level >= 9) rankName = 'Đại Sứ Miêu Tả 🌟';
        else if (level >= 6) rankName = 'Hiệp Sĩ Câu Chữ ⚔️';
        else if (level >= 3) rankName = 'Thần Bút Nhí ✍️';
        else rankName = 'Bút Non Tập Sự ✏️';
      } else if (subject === 'english') {
        if (level >= 15) rankName = 'Global Master 👑';
        else if (level >= 12) rankName = 'Language Wizard ⚡';
        else if (level >= 9) rankName = 'English Champion 🌟';
        else if (level >= 6) rankName = 'Fluency Knight ⚔️';
        else if (level >= 3) rankName = 'Grammar Hero 🛡️';
        else rankName = 'Word Explorer 🔍';
      } else {
        if (level >= 15) rankName = 'Đại Tông Sư Toán 5 👑';
        else if (level >= 12) rankName = 'Pháp Sư Không Gian ⚡';
        else if (level >= 9) rankName = 'Hiệp Sĩ Chuyển Động ⚔️';
        else if (level >= 6) rankName = 'Thần Toán Thập Phân 💎';
        else if (level >= 3) rankName = 'Dũng Sĩ Phân Số 🛡️';
        else rankName = 'Tập Sự Số Học 📐';
      }

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
