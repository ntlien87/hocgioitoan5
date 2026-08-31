import { Exam, Question } from '../../types/curriculum';
import { makeExamQuestions } from '../questionFactory';
import { englishChapters } from './chapters';

const all=englishChapters.flatMap(c=>c.lessons.flatMap(l=>l.questions));
const first10=englishChapters.filter(c=>c.semester===1).flatMap(c=>c.lessons.flatMap(l=>l.questions));
const last10=englishChapters.filter(c=>c.semester===2).flatMap(c=>c.lessons.flatMap(l=>l.questions));
function ex(id:string,title:string,semester:1|2,type:Exam['type'],desc:string,pool:Question[]):Exam{
 return {id,subjectId:'english',title,semester,type,durationMinutes:35,totalPoints:15,questions:makeExamQuestions(id,title,pool,15),description:desc};
}
export const englishExams:Exam[]=[
 ex('exam_eng_gk1','Mid-Term 1 – English 5',1,'mid-term-1','Củng cố Starter và Units 1–5: personal information, home, friends, free time and future jobs.',first10),
 ex('exam_eng_ck1','Final-Term 1 – English 5',1,'final-term-1','Củng cố Units 1–10: personal topics, school, classroom, outdoor activities and school trips.',first10),
 ex('exam_eng_gk2','Mid-Term 2 – English 5',2,'mid-term-2','Củng cố Units 11–15: family time, Tet, special days, healthy habits and health.',last10),
 ex('exam_eng_ck2','Final-Term 2 – English 5',2,'final-term-2','Củng cố Units 11–20: health, weather, stories, transport, places of interest and summer holidays.',last10),
 ex('exam_eng_g6','Advanced Transition Practice – Grade 6',2,'grade-6-prep','Đề luyện nâng cao chuyển tiếp; dùng như supplementary practice.',all),
];
