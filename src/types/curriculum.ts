export type SubjectId = 'math' | 'vietnamese' | 'english';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuestionType = 'multiple-choice' | 'fill-blank' | 'true-false' | 'matching' | 'sentence-upgrade' | 'word-selection';

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
    imageType?: 'pizza' | 'grid' | 'shapes' | 'race' | 'writing-scenery' | 'writing-portrait' | 'writing-nature';
    writingHelper?: {
      baseSentence?: string;
      targetUpgrades?: string[];
      sensoryTag?: 'sight' | 'sound' | 'smell' | 'touch' | 'emotion';
    };
  };
}

export interface WritingSensoryGuide {
  sight?: string[];    // Thị giác (màu sắc, hình dáng)
  sound?: string[];    // Thính giác (âm thanh)
  smell?: string[];    // Khứu giác (mùi vị)
  touch?: string[];    // Xúc giác (nhiệt độ, cảm giác)
  emotion?: string[];  // Cảm xúc & tình cảm
}

export interface WritingVocabularyGems {
  vividWords: string[]; // Từ láy, từ gợi cảm
  metaphors: string[];  // Câu so sánh / nhân hóa mẫu
  goldenPhrases: string[]; // Cụm từ đắt giá
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
    sensoryGuide?: WritingSensoryGuide;
    vocabularyGems?: WritingVocabularyGems;
    examples?: { problem: string; solution: string; tag?: string }[];
    memoryTip?: string;
  };
  questions: Question[];
  xpReward: number;
  coinReward: number;
}

export interface Chapter {
  id: string;
  subjectId?: SubjectId;
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

export interface EssaySection {
  prompt: string;
  genre: 'scenery' | 'portrait' | 'object-nature' | 'open';
  guidelines: string[];
  suggestedOutlines: {
    intro: string;
    body: string;
    conclusion: string;
  };
  sampleEssay: string;
  maxPoints: number;
}

export interface EssayGradingResult {
  score: number; // 0 to 10
  structureScore: number; // 0 to 2 (Bố cục 3 phần rõ ràng)
  contentScore: number; // 0 to 4 (Nội dung miêu tả sinh động, quan sát có hồn)
  languageScore: number; // 0 to 2.5 (Từ láy, so sánh, nhân hóa, tránh lặp từ)
  emotionScore: number; // 0 to 1.5 (Cảm xúc & liên hệ)
  overallComment: string; // Lời phê của cô giáo
  strengths: string[]; // Điểm sáng của bài văn
  weaknesses: string[]; // Điểm cần cải thiện
  sentenceUpgrades: { original: string; upgraded: string; reason: string }[]; // Gợi ý nâng cấp câu
}

export interface Exam {
  id: string;
  subjectId?: SubjectId;
  title: string;
  semester: 1 | 2;
  type: 'mid-term-1' | 'final-term-1' | 'mid-term-2' | 'final-term-2' | 'grade-6-prep' | 'writing-mastery';
  durationMinutes: number;
  totalPoints: number;
  questions: ExamQuestion[];
  essaySection?: EssaySection;
  description: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'adventure' | 'speed' | 'exam' | 'special' | 'writing';
  subjectId?: SubjectId;
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
  writingArenaHighScore?: number;
  englishArenaHighScore?: number;
  examResults: {
    examId: string;
    score: number;
    total: number;
    date: string;
    timeSpentSeconds: number;
    essayGrading?: EssayGradingResult;
  }[];
  soundEnabled: boolean;
}

export type ActiveTab = 'quest' | 'arena' | 'labs' | 'exams' | 'tutor';
