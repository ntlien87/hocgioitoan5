import { Exam, Question } from '../../types/curriculum';
import { makeExamQuestions } from '../questionFactory';
import { vietnameseChapters } from './chapters';

const all = vietnameseChapters.flatMap(c=>c.lessons.flatMap(l=>l.questions));
const sem1 = vietnameseChapters.filter(c=>c.semester===1).flatMap(c=>c.lessons.flatMap(l=>l.questions));
const sem2 = vietnameseChapters.filter(c=>c.semester===2).flatMap(c=>c.lessons.flatMap(l=>l.questions));
function ex(id:string,title:string,semester:1|2,type:Exam['type'],desc:string,pool:Question[]):Exam{
 return {id,subjectId:'vietnamese',title,semester,type,durationMinutes:40,totalPoints:15,questions:makeExamQuestions(id,title,pool,15),description:desc};
}
export const vietnameseExams:Exam[]=[
 ex('exam_van_gk1','Đề giữa học kì 1 – Tiếng Việt 5',1,'mid-term-1','Đánh giá đọc hiểu, tiếng Việt, viết và giao tiếp trong các chủ điểm học kì I trước giữa kì.',sem1),
 ex('exam_van_ck1','Đề cuối học kì 1 – Tiếng Việt 5',1,'final-term-1','Đề tổng hợp bốn chủ điểm học kì I, gồm đọc hiểu, ngôn ngữ và kĩ năng tạo lập văn bản.',sem1),
 ex('exam_van_gk2','Đề giữa học kì 2 – Tiếng Việt 5',2,'mid-term-2','Đánh giá các mạch đọc, tiếng Việt, viết, nói và nghe trong giai đoạn đầu học kì II.',sem2),
 ex('exam_van_ck2','Đề cuối năm – Tiếng Việt 5',2,'final-term-2','Đề tổng hợp tám chủ điểm, ưu tiên năng lực đọc hiểu, dùng tiếng Việt và tạo lập văn bản.',all),
 ex('exam_van_g6','Đề luyện nâng cao chuyển tiếp lớp 5 → lớp 6 – Ngữ văn',2,'grade-6-prep','Đề bổ trợ đọc hiểu và viết nâng cao; không thay thế chương trình SGK lõi.',all),
];
