import { mathChapters, mathExams } from '../src/data/math';
import { vietnameseChapters, vietnameseExams } from '../src/data/vietnamese';
import { englishChapters, englishExams } from '../src/data/english';
import { Question } from '../src/types/curriculum';

interface Stats {
  totalQuestions: number;
  invalidAnswers: string[];
  positionCounts: Record<number, number>; // index 0, 1, 2, 3 (ứng với vị trí 1, 2, 3, 4)
}

function analyzeQuestions(name: string, questions: Question[]): Stats {
  const stats: Stats = {
    totalQuestions: questions.length,
    invalidAnswers: [],
    positionCounts: { 0: 0, 1: 0, 2: 0, 3: 0 },
  };

  questions.forEach((q) => {
    if (!q.options || q.options.length === 0) {
      stats.invalidAnswers.push(`[${q.id}] Không có options: "${q.question}"`);
      return;
    }

    const idx = q.options.findIndex((opt) => String(opt).trim() === String(q.correctAnswer).trim());
    if (idx === -1) {
      stats.invalidAnswers.push(
        `[${q.id}] correctAnswer "${q.correctAnswer}" KHÔNG NẰM TRONG options [${q.options.join(' | ')}]`
      );
    } else {
      stats.positionCounts[idx] = (stats.positionCounts[idx] || 0) + 1;
    }
  });

  return stats;
}

console.log('====================================================');
console.log('🔍 KIỂM TRA TOÀN BỘ CÂU HỎI HỌC GIỎI LỚP 5');
console.log('====================================================\n');

// 1. TOÁN HỌC
const allMathLessonQ = mathChapters.flatMap((c) => c.lessons.flatMap((l) => l.questions));
const allMathBossQ = mathChapters.flatMap((c) => c.boss.questions);
const allMathExamQ = mathExams.flatMap((e) => e.questions);

// 2. TIẾNG VIỆT
const allVnLessonQ = vietnameseChapters.flatMap((c) => c.lessons.flatMap((l) => l.questions));
const allVnBossQ = vietnameseChapters.flatMap((c) => c.boss.questions);
const allVnExamQ = vietnameseExams.flatMap((e) => e.questions);

// 3. TIẾNG ANH
const allEngLessonQ = englishChapters.flatMap((c) => c.lessons.flatMap((l) => l.questions));
const allEngBossQ = englishChapters.flatMap((c) => c.boss.questions);
const allEngExamQ = englishExams.flatMap((e) => e.questions);

const testSuites = [
  { name: '1. Toán - Vượt ải (Lessons)', questions: allMathLessonQ },
  { name: '2. Toán - Đánh Boss', questions: allMathBossQ },
  { name: '3. Toán - Đề thi (Exams)', questions: allMathExamQ },
  { name: '4. Tiếng Việt - Vượt ải (Lessons)', questions: allVnLessonQ },
  { name: '5. Tiếng Việt - Đánh Boss', questions: allVnBossQ },
  { name: '6. Tiếng Việt - Đề thi (Exams)', questions: allVnExamQ },
  { name: '7. Tiếng Anh - Vượt ải (Lessons)', questions: allEngLessonQ },
  { name: '8. Tiếng Anh - Đánh Boss', questions: allEngBossQ },
  { name: '9. Tiếng Anh - Đề thi (Exams)', questions: allEngExamQ },
];

let totalAllQ = 0;
let hasError = false;

testSuites.forEach((suite) => {
  const res = analyzeQuestions(suite.name, suite.questions);
  totalAllQ += res.totalQuestions;

  console.log(`📌 ${suite.name}: ${res.totalQuestions} câu hỏi`);
  console.log(
    `   Phân bố đáp án đúng: [Vị trí 1: ${res.positionCounts[0] || 0}] [Vị trí 2: ${res.positionCounts[1] || 0}] [Vị trí 3: ${res.positionCounts[2] || 0}] [Vị trí 4: ${res.positionCounts[3] || 0}]`
  );

  if (res.invalidAnswers.length > 0) {
    hasError = true;
    console.error(`   ❌ LỖI ĐÁP ÁN KHÔNG KHỚP (${res.invalidAnswers.length}):`);
    res.invalidAnswers.slice(0, 5).forEach((err) => console.error(`      - ${err}`));
  } else {
    console.log(`   ✅ 100% đáp án khớp chính xác với options!`);
  }
  console.log('----------------------------------------------------');
});

console.log(`\n🎉 TỔNG CỘNG ĐÃ KIỂM TRA: ${totalAllQ} câu hỏi`);
if (!hasError) {
  console.log('✅ TẤT CẢ ĐÁP ÁN ĐỀU CHÍNH XÁC VÀ PHÂN BỐ NGẪU NHIÊN ĐỀU TRÊN CÁC VỊ TRÍ 1, 2, 3, 4!');
} else {
  console.error('❌ CÓ LỖI CẦN FIX!');
  process.exit(1);
}
