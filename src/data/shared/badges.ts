import { Badge } from '../../types/curriculum';

export const sharedBadges: Badge[] = [
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
