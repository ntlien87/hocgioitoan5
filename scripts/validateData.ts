import { mathChapters, mathExams, vietnameseChapters, vietnameseExams, englishChapters, englishExams } from '../src/data';

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(message);
}

const sets = [
  ['math', mathChapters, mathExams, 12],
  ['vietnamese', vietnameseChapters, vietnameseExams, 8],
  ['english', englishChapters, englishExams, 20],
] as const;

for (const [subject, chapters, exams, expectedChapters] of sets) {
  assert(chapters.length === expectedChapters, `${subject}: expected ${expectedChapters} chapters/units, got ${chapters.length}`);
  const lessonCounts = chapters.flatMap((c) => c.lessons.map((l) => l.questions.length));
  const bossCounts = chapters.map((c) => c.boss.questions.length);
  const examCounts = exams.map((e) => e.questions.length);
  assert(Math.min(...lessonCounts) >= 10, `${subject}: a lesson has fewer than 10 questions`);
  assert(Math.min(...bossCounts) >= 10, `${subject}: a boss has fewer than 10 questions`);
  assert(Math.min(...examCounts) >= 10, `${subject}: an exam has fewer than 10 questions`);
  assert(exams.every((e) => e.totalPoints === e.questions.reduce((s, q) => s + q.points, 0)), `${subject}: exam totalPoints mismatch`);

  const ids = chapters.flatMap((c) => [c.id, c.boss.id, ...c.lessons.map((l) => l.id), ...c.lessons.flatMap((l) => l.questions.map((q) => q.id))]);
  const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
  assert(dup.length === 0, `${subject}: duplicate curriculum/boss/lesson/question ids: ${dup.slice(0, 5).join(', ')}`);
  console.log(`${subject}: chapters=${chapters.length}, lessons=${lessonCounts.length}, minLessonQ=${Math.min(...lessonCounts)}, minBossQ=${Math.min(...bossCounts)}, exams=${exams.length}, minExamQ=${Math.min(...examCounts)}`);
}

const examIds = [...mathExams, ...vietnameseExams, ...englishExams].map((e) => e.id);
assert(new Set(examIds).size === examIds.length, 'Duplicate exam IDs found');
console.log('All data validation checks passed.');
