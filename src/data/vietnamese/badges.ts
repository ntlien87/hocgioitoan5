import { Badge } from '../../types/curriculum';
const themes=['Thế giới tuổi thơ','Thiên nhiên kì thú','Trên con đường học tập','Nghệ thuật muôn màu','Vẻ đẹp cuộc sống','Hương sắc trăm miền','Tiếp bước cha ông','Thế giới của chúng ta'];
export const vietnameseBadges:Badge[]=[
 {id:'badge_van_first_step',name:'Mở trang đầu tiên',description:'Hoàn thành ải Tiếng Việt đầu tiên.',icon:'📖',category:'adventure',subjectId:'vietnamese'},
 ...themes.map((name,i)=>({id:`badge_boss_ch_van_${i+1}`,name:`Thần Bút – ${name}`,description:`Đánh bại Boss của ${name}.`,icon:['🌈','🌿','📚','🎨','🌟','🪷','🛡️','🌍'][i],category:'writing' as const,subjectId:'vietnamese' as const})),
 {id:'badge_van_exam_master',name:'Ngôi sao Tiếng Việt 5',description:'Đạt kết quả xuất sắc trong các đề thi Tiếng Việt 5.',icon:'🏆',category:'exam',subjectId:'vietnamese'},
];
