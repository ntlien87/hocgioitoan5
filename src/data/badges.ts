import { Badge } from '../types/curriculum';

export const badges: Badge[] = [
  // --- Math Badges ---
  {
    id: 'badge_first_step',
    name: 'Khởi Đầu Nan',
    description: 'Bắt đầu hành trình khám phá Toán Lớp 5',
    icon: '🌱',
    category: 'adventure',
    subjectId: 'math'
  },
  {
    id: 'badge_boss_ch1',
    name: 'Dũng Sĩ Phân Số',
    description: 'Đánh bại Vua Rồng Phân Số Ignis (Chương 1)',
    icon: '🍰',
    category: 'adventure',
    subjectId: 'math'
  },
  {
    id: 'badge_boss_ch2',
    name: 'Bậc Thầy Thập Phân',
    description: 'Thu phục Golem Thập Phân Decimus (Chương 2)',
    icon: '🔮',
    category: 'adventure',
    subjectId: 'math'
  },
  {
    id: 'badge_boss_ch3',
    name: 'Vua Héc-ta & Diện Tích',
    description: 'Chinh phục Thần Rừng Silva (Chương 3)',
    icon: '🌲',
    category: 'adventure',
    subjectId: 'math'
  },
  {
    id: 'badge_boss_ch4',
    name: 'Pháp Sư 4 Phép Tính',
    description: 'Chiến thắng Pháp Sư Thập Phân Aurelius (Chương 4)',
    icon: '⚡',
    category: 'adventure',
    subjectId: 'math'
  },
  {
    id: 'badge_boss_ch5',
    name: 'Bậc Thầy Hình Phẳng',
    description: 'Vượt qua Chúa Tể Hình Phẳng Geo (Chương 5)',
    icon: '📐',
    category: 'adventure',
    subjectId: 'math'
  },
  {
    id: 'badge_boss_ch6',
    name: 'Thủ Khoa Học Kỳ 1',
    description: 'Đánh bại Giám Khảo Tối Cao Học Kỳ 1 (Chương 6)',
    icon: '🎖️',
    category: 'adventure',
    subjectId: 'math'
  },
  {
    id: 'badge_boss_ch7',
    name: 'Triệu Phú Phần Trăm',
    description: 'Chinh phục Thần Tài Tỉ Số Cento (Chương 7)',
    icon: '📊',
    category: 'adventure',
    subjectId: 'math'
  },

  // --- Vietnamese / Văn Thần Bút Badges ---
  {
    id: 'badge_van_nature_master',
    name: 'Thần Bút Thiên Nhiên',
    description: 'Đánh bại Quái Vật Khô Khan - Làm chủ nghệ thuật tả cảnh 5 giác quan',
    icon: '🌿',
    category: 'writing',
    subjectId: 'vietnamese'
  },
  {
    id: 'badge_van_portrait_master',
    name: 'Đại Sứ Miêu Tả Người',
    description: 'Hạ gục Rồng Văn Mẫu - Tả người thân chân thực và sâu sắc',
    icon: '✨',
    category: 'writing',
    subjectId: 'vietnamese'
  },
  {
    id: 'badge_van_object_master',
    name: 'Phù Thủy Thổi Hồn',
    description: 'Đánh bại Thần Cây Ngủ Say - Tả đồ vật & cây cối gắn với kỷ niệm',
    icon: '🌸',
    category: 'writing',
    subjectId: 'vietnamese'
  },
  {
    id: 'badge_van_grand_master',
    name: 'Đại Tông Sư Thần Bút',
    description: 'Hạ gục Chúa Tể Lười Nghĩ - Mở bài gián tiếp & Kết bài mở rộng đỉnh cao',
    icon: '👑',
    category: 'writing',
    subjectId: 'vietnamese'
  },
  {
    id: 'badge_van_arena_master',
    name: 'Bút Vàng Siêu Tốc',
    description: 'Đạt điểm xuất sắc trong Đấu Trường Nâng Cấp Câu 60s',
    icon: '⚡',
    category: 'writing',
    subjectId: 'vietnamese'
  },

  // --- English Badges ---
  {
    id: 'badge_eng_starter',
    name: 'English Explorer',
    description: 'Defeat Vocabulary Dragon (Unit 1-5 Daily Routines & Jobs)',
    icon: '🐲',
    category: 'special',
    subjectId: 'english'
  },
  {
    id: 'badge_eng_past_master',
    name: 'Past-Tense Master',
    description: 'Conquer Past-Tense Sphinx (Unit 6-10 School & Trips)',
    icon: '🦁',
    category: 'special',
    subjectId: 'english'
  },
  {
    id: 'badge_eng_wizard',
    name: 'Grammar Wizard',
    description: 'Defeat Grammar Wizard (Unit 11-15 Health, Safety & Stories)',
    icon: '🧙‍♂️',
    category: 'special',
    subjectId: 'english'
  },
  {
    id: 'badge_eng_champion',
    name: 'English Champion 5',
    description: 'Conquer Master Titan (Unit 16-20 Weather, Nature & Holidays)',
    icon: '⚡',
    category: 'special',
    subjectId: 'english'
  },
  {
    id: 'badge_eng_speed_master',
    name: 'Speed Vocab Hero',
    description: 'Score high in the English Speed Arena challenge',
    icon: '🏆',
    category: 'speed',
    subjectId: 'english'
  },

  // --- General & Exam Badges ---
  {
    id: 'badge_speed_50',
    name: 'Đôi Tay Siêu Tốc',
    description: 'Đạt trên 50 điểm trong Đấu Trường Tính Nhanh',
    icon: '⚡',
    category: 'speed'
  },
  {
    id: 'badge_speed_100',
    name: 'Vua Tốc Độ 100+',
    description: 'Đạt trên 100 điểm trong Đấu Trường Tính Nhanh',
    icon: '🔥',
    category: 'speed'
  },
  {
    id: 'badge_exam_master',
    name: 'Thủ Khoa Kỳ Thi',
    description: 'Đạt điểm tuyệt đối 10/10 trong bất kỳ bài thi nào',
    icon: '🎓',
    category: 'exam'
  },
  {
    id: 'badge_lab_explorer',
    name: 'Nhà Bác Học Nhí',
    description: 'Khám phá tất cả các Phòng Thí Nghiệm Học Tập',
    icon: '🧪',
    category: 'special'
  },
  {
    id: 'badge_streak_3',
    name: 'Chăm Chỉ 3 Ngày',
    description: 'Duy trì chuỗi học tập 3 ngày liên tiếp',
    icon: '🔥',
    category: 'special'
  }
];
