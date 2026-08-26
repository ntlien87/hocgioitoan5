import React from 'react';
import { SubjectId } from '../types/curriculum';
import { soundFx } from '../utils/audio';

interface SubjectSwitcherProps {
  currentSubject: SubjectId;
  onSelectSubject: (subject: SubjectId) => void;
}

export const SubjectSwitcher: React.FC<SubjectSwitcherProps> = ({
  currentSubject,
  onSelectSubject,
}) => {
  const subjects: {
    id: SubjectId;
    label: string;
    sublabel: string;
    icon: string;
    activeStyle: string;
    badge?: string;
  }[] = [
    {
      id: 'math',
      label: 'Toán Học 5',
      sublabel: 'Math Quest',
      icon: '📐',
      activeStyle: 'btn-3d-amber font-black shadow-lg',
      badge: 'Hot 🔥',
    },
    {
      id: 'vietnamese',
      label: 'Tiếng Việt',
      sublabel: 'Thần Bút Nhí',
      icon: '✍️',
      activeStyle: 'btn-3d-emerald font-black shadow-lg',
      badge: 'Văn Hay ⭐',
    },
    {
      id: 'english',
      label: 'Tiếng Anh 5',
      sublabel: 'English Quest',
      icon: '🇬🇧',
      activeStyle: 'btn-3d-blue font-black shadow-lg',
      badge: 'Mới 🚀',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 pt-2.5 pb-1 select-none">
      <div className="bg-slate-200/70 dark:bg-slate-800/70 p-1.5 rounded-3xl flex items-center gap-1.5 shadow-inner backdrop-blur-md border border-slate-300/50 dark:border-slate-700/50">
        {subjects.map((sub) => {
          const isActive = currentSubject === sub.id;
          return (
            <button
              key={sub.id}
              id={`subject-tab-${sub.id}`}
              onClick={() => {
                soundFx.playClick();
                onSelectSubject(sub.id);
              }}
              className={`relative flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2.5 transition-all duration-150 btn-3d active:scale-95 ${
                isActive
                  ? sub.activeStyle
                  : 'bg-white/60 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 border border-transparent font-extrabold'
              }`}
            >
              <span className="text-xl sm:text-2xl shrink-0 filter drop-shadow-xs">{sub.icon}</span>
              <div className="flex flex-col items-start leading-none text-left">
                <span className={`text-xs sm:text-sm font-black tracking-tight ${isActive ? 'text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                  {sub.label}
                </span>
                <span className={`text-[10px] hidden sm:inline font-semibold mt-0.5 ${isActive ? 'text-white/90' : 'text-slate-500 dark:text-slate-400'}`}>
                  {sub.sublabel}
                </span>
              </div>

              {sub.badge && (
                <span
                  className={`hidden md:inline-block text-[9px] font-black px-1.5 py-0.2 rounded-full shadow-xs ${
                    isActive
                      ? 'bg-white/30 text-white'
                      : 'bg-rose-500 text-white animate-pulse'
                  }`}
                >
                  {sub.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
