import { Exam, Question } from '../../types/curriculum';
import { makeExamQuestions } from '../questionFactory';
import { ch1_ch2_chapters } from './chapters/ch1_ch2';
import { ch3_ch4_chapters } from './chapters/ch3_ch4';
import { ch5_ch6_ch7_chapters } from './chapters/ch5_ch6_ch7';

const mathChapters = [...ch1_ch2_chapters, ...ch3_ch4_chapters, ...ch5_ch6_ch7_chapters].map((c) => ({ ...c, subjectId: 'math' as const }));

const allQuestions = mathChapters.flatMap((chapter) => chapter.lessons.flatMap((lesson) => lesson.questions));
const semester1 = mathChapters.filter((c) => c.semester === 1).flatMap((c) => c.lessons.flatMap((l) => l.questions));
const semester2 = mathChapters.filter((c) => c.semester === 2).flatMap((c) => c.lessons.flatMap((l) => l.questions));

function exam(id:string,title:string,semester:1|2,type:Exam['type'],description:string,pool:Question[]):Exam{
 const questions=makeExamQuestions(id,title,pool,15);
 return {id,subjectId:'math',title,semester,type,durationMinutes:35,totalPoints:15,questions,description};
}

export const mathExams: Exam[] = [
 exam('exam_math_gk1','Đề kiểm tra giữa học kì 1 – Toán 5',1,'mid-term-1','Kiểm tra Chủ đề 1–3: số, phân số, số thập phân và đơn vị đo diện tích.',semester1),
 exam('exam_math_ck1','Đề kiểm tra cuối học kì 1 – Toán 5',1,'final-term-1','Kiểm tra tổng hợp học kì I theo Chủ đề 1–6.',semester1),
 exam('exam_math_gk2','Đề kiểm tra giữa học kì 2 – Toán 5',2,'mid-term-2','Kiểm tra Chủ đề 7–8 và phần đầu của các mạch học kì II.',semester2),
 exam('exam_math_ck2','Đề kiểm tra cuối học kì 2 – Toán 5',2,'final-term-2','Kiểm tra tổng hợp Chủ đề 7–12, gồm tỉ số, thể tích, chuyển động, thống kê và xác suất.',semester2),
 exam('exam_math_g6','Đề luyện nâng cao chuyển tiếp lớp 5 → lớp 6',2,'grade-6-prep','Đề bổ trợ nâng cao; không thuộc curriculum SGK lõi và dùng cho học sinh muốn luyện thêm.',allQuestions),
];
