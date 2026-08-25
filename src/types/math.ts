export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuestionType = 'multiple-choice' | 'fill-blank' | 'true-false' | 'matching';

export interface Question {
  id: string;
  question: string;
  type?: QuestionType;
  options?: string[];
  correctAnswer: string | number | boolean;
  explanation: string;
  hint?: string;
  visualData?: {
    fraction?: { numerator: number; denominator: number };
    geometry?: { shape: string; params: Record<string, number> };
    imageType?: 'pizza' | 'grid' | 'shapes' | 'race';
  };
}

export interface LessonLevel {
  id: string;
  chapterId: string;
  title: string;
  subtitle: string;
  levelNumber: number;
  icon: string;
  theory: {
    title: string;
    keyPoints: string[];
    formula?: string;
    examples: { problem: string; solution: string }[];
    memoryTip?: string;
  };
  questions: Question[];
  xpReward: number;
  coinReward: number;
}

export interface Chapter {
  id: string;
  title: string;
  vietnameseTitle: string;
  description: string;
  semester: 1 | 2;
  color: string;
  bgGradient: string;
  icon: string;
  boss: {
    id: string;
    name: string;
    avatar: string;
    title: string;
    maxHp: number;
    story: string;
    questions: Question[];
    rewardBadgeId: string;
  };
  lessons: LessonLevel[];
}

export interface ExamQuestion extends Question {
  points: number;
  topic: string;
}

export interface Exam {
  id: string;
  title: string;
  semester: 1 | 2;
  type: 'mid-term-1' | 'final-term-1' | 'mid-term-2' | 'final-term-2' | 'grade-6-prep';
  durationMinutes: number;
  totalPoints: number;
  questions: ExamQuestion[];
  description: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'adventure' | 'speed' | 'exam' | 'special';
  unlockedAt?: string;
}

export interface UserProgress {
  playerName: string;
  avatar: string;
  xp: number;
  coins: number;
  streakDays: number;
  lastActiveDate: string;
  unlockedLessonIds: string[];
  completedLessonStars: Record<string, number>; // lessonId -> 1, 2, 3 stars
  defeatedBossIds: string[];
  unlockedBadgeIds: string[];
  speedArenaHighScore: number;
  examResults: {
    examId: string;
    score: number;
    total: number;
    date: string;
    timeSpentSeconds: number;
  }[];
  soundEnabled: boolean;
}

export type ActiveTab = 'quest' | 'arena' | 'labs' | 'exams' | 'tutor';
