import { Badge } from '../../types/curriculum';
const units=['All about me!','Our homes','My foreign friends','Our free-time activities','My future job','Our school rooms','Our favourite school activities','In our classroom','Our outdoor activities','Our school trip','Family time','Our Tet holiday','Our special days','Staying healthy','Our health','Seasons and the weather','Stories for children','Means of transport','Places of interest','Our summer holidays'];
export const englishBadges:Badge[]=[
 {id:'badge_eng_first_step',name:'English Explorer',description:'Hoàn thành Unit 1.',icon:'🌱',category:'adventure',subjectId:'english'},
 ...units.map((name,i)=>({id:`badge_boss_ch_eng_${i+1}`,name:`Unit ${i+1} Guardian Slayer`,description:`Defeat the Guardian of Unit ${i+1}: ${name}.`,icon:['👤','🏠','🌏','⚽','🚀','🏫','🎒','🧩','🏕️','🚌','👨‍👩‍👧','🧧','🎉','❤️','🏃','☁️','📖','🚆','🏞️','🏖️'][i],category:'adventure' as const,subjectId:'english' as const})),
 {id:'badge_eng_exam_master',name:'English Quest Champion',description:'Đạt kết quả xuất sắc trong các đề thi Tiếng Anh 5.',icon:'🏆',category:'exam',subjectId:'english'},
 {id:'badge_eng_speed_master',name:'Speed Vocab Hero',description:'Đạt điểm cao trong English Speed Arena.',icon:'⚡',category:'speed',subjectId:'english'},
];
