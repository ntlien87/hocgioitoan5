import { ExamQuestion, Question } from '../types/curriculum';

export function mcq(
  id: string,
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
  hint?: string,
  topic?: string,
): Question | ExamQuestion {
  return {
    id,
    question,
    options,
    correctAnswer,
    explanation,
    ...(hint ? { hint } : {}),
    ...(topic ? { topic, points: 1 } : {}),
  } as Question | ExamQuestion;
}

// ─── Deterministic hash từ string ───────────────────────────────────────────
// Dùng để tạo seed khác nhau cho từng câu hỏi dựa trên id của nó.
function hashCode(str: string): number {
  let h = 2166136261; // FNV-1a 32-bit offset basis
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619); // FNV prime
  }
  return Math.abs(h >>> 0); // unsigned 32-bit
}

// ─── Shuffle options deterministric theo questionId ──────────────────────────
// Đảm bảo:
//   • Cùng câu hỏi → cùng thứ tự options mọi lần (reproducible)
//   • Các câu khác nhau → thứ tự options khác nhau
//   • correctAnswer vẫn là string match, không bị mất
function shuffleQuestionOptions<T extends Question>(q: T): T {
  if (!q.options || q.options.length <= 1) return q;
  const seed = hashCode(q.id + '|' + q.question.slice(0, 20));
  const opts = [...q.options];
  // Fisher-Yates deterministric
  for (let i = opts.length - 1; i > 0; i--) {
    // LCG: nextVal = (seed * A + C) % M, dùng i để tạo biến thể
    const j = ((seed * 1664525 + i * 22695477 + 1013904223) >>> 0) % (i + 1);
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return { ...q, options: opts };
}

// ─── Shuffle câu hỏi (không phải options) bằng seed số ─────────────────────
const shuffleByIndex = <T,>(items: T[], seed: number): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = (seed * 17 + i * 7) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// ─── buildQuestionSet ────────────────────────────────────────────────────────
export function buildQuestionSet(
  prefix: string,
  topic: string,
  items: Array<{ q: string; options: string[]; a: string; e: string; h?: string }>,
  count = 10,
): Question[] {
  if (items.length < count) {
    throw new Error(`Question bank ${prefix} must contain at least ${count} items.`);
  }
  return items.slice(0, count).map((item, index) =>
    shuffleQuestionOptions({
      id: `${prefix}_q${index + 1}`,
      question: item.q,
      options: item.options,
      correctAnswer: item.a,
      explanation: item.e,
      hint: item.h,
    })
  );
}

// ─── makeBossQuestions ───────────────────────────────────────────────────────
export function makeBossQuestions(
  prefix: string,
  topic: string,
  sourceQuestions: Question[],
  count = 10,
): Question[] {
  const selected = shuffleByIndex(sourceQuestions, prefix.length + count).slice(0, count);
  return selected.map((q, index) =>
    shuffleQuestionOptions({
      ...q,
      id: `${prefix}_q${index + 1}`,
      question: `⚔️ ${q.question.replace(/^⚔️\s*/, '')}`, // tránh prefix trùng
      explanation: `Boss ${topic}: ${q.explanation}`,
    })
  );
}

// ─── makeExamQuestions ───────────────────────────────────────────────────────
export function makeExamQuestions(
  prefix: string,
  topic: string,
  sourceQuestions: Question[],
  count = 15,
): ExamQuestion[] {
  const pool = sourceQuestions.length >= count ? sourceQuestions : [...sourceQuestions, ...sourceQuestions];
  return shuffleByIndex(pool, prefix.length + count)
    .slice(0, count)
    .map((q, index) =>
      shuffleQuestionOptions({
        ...q,
        id: `${prefix}_q${index + 1}`,
        points: 1,
        topic,
      } as ExamQuestion)
    );
}

// ─── makeLesson ──────────────────────────────────────────────────────────────
export function makeLesson(
  id: string,
  chapterId: string,
  title: string,
  subtitle: string,
  levelNumber: number,
  icon: string,
  theoryTitle: string,
  keyPoints: string[],
  questions: Question[],
  memoryTip: string,
): import('../types/curriculum').LessonLevel {
  if (questions.length < 10) {
    throw new Error(`Lesson ${id} must have at least 10 questions.`);
  }
  return {
    id,
    chapterId,
    title,
    subtitle,
    levelNumber,
    icon,
    xpReward: 30 + levelNumber * 5,
    coinReward: 15 + levelNumber * 3,
    theory: {
      title: theoryTitle,
      keyPoints,
      memoryTip,
    },
    questions,
  };
}
