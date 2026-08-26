import { Chapter, SubjectId } from '../types/curriculum';
import { ch1_ch2_chapters } from './chapters/ch1_ch2';
import { ch3_ch4_chapters } from './chapters/ch3_ch4';
import { ch5_ch6_ch7_chapters } from './chapters/ch5_ch6_ch7';
import { vietnameseChapters } from './vietnameseCurriculum';
import { englishChapters } from './englishCurriculum';

export const mathChapters: Chapter[] = [
  ...ch1_ch2_chapters,
  ...ch3_ch4_chapters,
  ...ch5_ch6_ch7_chapters,
].map((ch) => ({ ...ch, subjectId: 'math' as SubjectId }));

export { vietnameseChapters, englishChapters };

// Default for backward compatibility
export const chapters: Chapter[] = mathChapters;

export function getChaptersBySubject(subjectId: SubjectId): Chapter[] {
  switch (subjectId) {
    case 'vietnamese':
      return vietnameseChapters;
    case 'english':
      return englishChapters;
    case 'math':
    default:
      return mathChapters;
  }
}
