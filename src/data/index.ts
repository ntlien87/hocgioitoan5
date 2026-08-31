import { Badge, Chapter, Exam, SubjectId } from '../types/curriculum';
import { mathBadges, mathChapters, mathExams } from './math';
import { vietnameseBadges, vietnameseChapters, vietnameseExams } from './vietnamese';
import { englishBadges, englishChapters, englishExams } from './english';
import { sharedBadges } from './shared/badges';

export { SUBJECTS, getSubjectMeta } from './subjects';
export type { SubjectMeta } from './subjects';

export { mathChapters, mathExams, mathBadges } from './math';
export {
  vietnameseChapters,
  vietnameseExams,
  vietnameseBadges,
  sentenceUpgradeData,
  sensoryPaletteData,
  indirectIntroTemplates,
} from './vietnamese';
export { englishChapters, englishExams, englishBadges, SENTENCE_TASKS, IRREGULAR_VERBS } from './english';
export { sharedBadges } from './shared/badges';

export interface SubjectContent {
  chapters: Chapter[];
  exams: Exam[];
  badges: Badge[];
}

const SUBJECT_CONTENT: Record<SubjectId, SubjectContent> = {
  math: {
    chapters: mathChapters,
    exams: mathExams,
    badges: mathBadges,
  },
  vietnamese: {
    chapters: vietnameseChapters,
    exams: vietnameseExams,
    badges: vietnameseBadges,
  },
  english: {
    chapters: englishChapters,
    exams: englishExams,
    badges: englishBadges,
  },
};

export function getSubjectContent(subjectId: SubjectId): SubjectContent {
  return SUBJECT_CONTENT[subjectId];
}

export function getChaptersBySubject(subjectId: SubjectId): Chapter[] {
  return SUBJECT_CONTENT[subjectId].chapters;
}

export function getExamsBySubject(subjectId: SubjectId): Exam[] {
  return SUBJECT_CONTENT[subjectId].exams;
}

export function getBadgesBySubject(subjectId: SubjectId): Badge[] {
  return [...SUBJECT_CONTENT[subjectId].badges, ...sharedBadges];
}

/** Ải đầu tiên của mỗi môn — mở sẵn, không phụ thuộc tiến độ môn khác. */
export function getStarterLessonIds(): string[] {
  return (Object.keys(SUBJECT_CONTENT) as SubjectId[])
    .map((id) => SUBJECT_CONTENT[id].chapters[0]?.lessons[0]?.id)
    .filter((lessonId): lessonId is string => Boolean(lessonId));
}

export const badges: Badge[] = [
  ...mathBadges,
  ...vietnameseBadges,
  ...englishBadges,
  ...sharedBadges,
];

/** @deprecated Dùng getChaptersBySubject('math') */
export const chapters: Chapter[] = mathChapters;

export const exams: Exam[] = [...mathExams, ...vietnameseExams, ...englishExams];
