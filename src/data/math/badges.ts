import { Badge } from '../../types/curriculum';

const topicNames = [
  'Ôn tập và bổ sung','Số thập phân','Đơn vị đo diện tích','Các phép tính với số thập phân',
  'Hình phẳng – chu vi và diện tích','Ôn tập học kì 1','Tỉ số và các bài toán liên quan',
  'Thể tích và đơn vị đo thể tích','Diện tích và thể tích hình khối','Thời gian – vận tốc – chuyển động',
  'Thống kê và xác suất','Ôn tập cuối năm',
];

export const mathBadges: Badge[] = [
  { id:'badge_math_first_step', name:'Khởi đầu Toán 5', description:'Hoàn thành ải đầu tiên của hành trình Toán 5.', icon:'🌱', category:'adventure', subjectId:'math' },
  ...topicNames.map((name,i)=>({id:`badge_boss_ch${i+1}`,name:`Dũng sĩ ${name}`,description:`Đánh bại Boss của ${name}.`,icon:['🍰','🔢','📏','⚙️','📐','🏰','📊','🧊','🧱','🏎️','📈','🏆'][i],category:'adventure' as const,subjectId:'math' as const})),
  { id:'badge_math_exam_master', name:'Thủ khoa Toán 5', description:'Đạt kết quả xuất sắc trong các kỳ thi Toán 5.', icon:'🎓', category:'exam', subjectId:'math' },
];
