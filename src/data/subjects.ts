import { SubjectId } from '../types/curriculum';

export interface SubjectMeta {
  id: SubjectId;
  nameVi: string;
  nameEn: string;
  shortLabel: string;
  icon: string;
  activeStyle: string;
  badge?: string;
}

export const SUBJECTS: SubjectMeta[] = [
  {
    id: 'math',
    nameVi: 'Toán Học 5',
    nameEn: 'Math Quest',
    shortLabel: 'Toán',
    icon: '📐',
    activeStyle: 'btn-3d-amber font-black shadow-lg',
    badge: 'Hot 🔥',
  },
  {
    id: 'vietnamese',
    nameVi: 'Tiếng Việt',
    nameEn: 'Thần Bút Nhí',
    shortLabel: 'Tiếng Việt',
    icon: '✍️',
    activeStyle: 'btn-3d-emerald font-black shadow-lg',
    badge: 'Văn Hay ⭐',
  },
  {
    id: 'english',
    nameVi: 'Tiếng Anh 5',
    nameEn: 'English Quest',
    shortLabel: 'Tiếng Anh',
    icon: '🇬🇧',
    activeStyle: 'btn-3d-blue font-black shadow-lg',
    badge: 'Mới 🚀',
  },
];

export function getSubjectMeta(subjectId: SubjectId): SubjectMeta {
  return SUBJECTS.find((subject) => subject.id === subjectId) ?? SUBJECTS[0];
}
