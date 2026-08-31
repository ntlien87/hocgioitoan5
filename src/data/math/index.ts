import { Chapter } from '../../types/curriculum';
import { ch1_ch2_chapters } from './chapters/ch1_ch2';
import { ch3_ch4_chapters } from './chapters/ch3_ch4';
import { ch5_ch6_ch7_chapters } from './chapters/ch5_ch6_ch7';

export { mathExams } from './exams';
export { mathBadges } from './badges';

export const mathChapters: Chapter[] = [
  ...ch1_ch2_chapters,
  ...ch3_ch4_chapters,
  ...ch5_ch6_ch7_chapters,
].map((chapter) => ({ ...chapter, subjectId: 'math' as const }));
