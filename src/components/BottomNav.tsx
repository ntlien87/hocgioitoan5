import React from 'react';
import { Map, Zap, FlaskConical, GraduationCap, Bot } from 'lucide-react';
import { ActiveTab, SubjectId } from '../types/curriculum';
import { soundFx } from '../utils/audio';

interface BottomNavProps {
  activeTab: ActiveTab;
  currentSubject?: SubjectId;
  onSelectTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  currentSubject = 'math',
  onSelectTab,
}) => {
  const getTabsConfig = () => {
    if (currentSubject === 'vietnamese') {
      return [
        {
          id: 'quest' as ActiveTab,
          label: 'Ải Văn',
          icon: Map,
          badge: null,
          color: 'text-emerald-600 dark:text-emerald-400',
          bgActive: 'bg-emerald-500 text-white',
        },
        {
          id: 'arena' as ActiveTab,
          label: 'Đấu Trường',
          icon: Zap,
          badge: '60s',
          color: 'text-rose-600 dark:text-rose-400',
          bgActive: 'bg-rose-500 text-white',
        },
        {
          id: 'labs' as ActiveTab,
          label: 'Xưởng Văn',
          icon: FlaskConical,
          badge: 'Hot',
          color: 'text-teal-600 dark:text-teal-400',
          bgActive: 'bg-teal-500 text-white',
        },
        {
          id: 'exams' as ActiveTab,
          label: 'Phòng Thi',
          icon: GraduationCap,
          badge: null,
          color: 'text-indigo-600 dark:text-indigo-400',
          bgActive: 'bg-indigo-500 text-white',
        },
        {
          id: 'tutor' as ActiveTab,
          label: 'Thần Bút AI',
          icon: Bot,
          badge: 'AI',
          color: 'text-purple-600 dark:text-purple-400',
          bgActive: 'bg-purple-500 text-white',
        },
      ];
    }

    if (currentSubject === 'english') {
      return [
        {
          id: 'quest' as ActiveTab,
          label: 'Quests',
          icon: Map,
          badge: null,
          color: 'text-blue-600 dark:text-blue-400',
          bgActive: 'bg-blue-600 text-white',
        },
        {
          id: 'arena' as ActiveTab,
          label: 'Arena',
          icon: Zap,
          badge: 'Speed',
          color: 'text-rose-600 dark:text-rose-400',
          bgActive: 'bg-rose-500 text-white',
        },
        {
          id: 'labs' as ActiveTab,
          label: 'Word Lab',
          icon: FlaskConical,
          badge: null,
          color: 'text-teal-600 dark:text-teal-400',
          bgActive: 'bg-teal-500 text-white',
        },
        {
          id: 'exams' as ActiveTab,
          label: 'Exams',
          icon: GraduationCap,
          badge: null,
          color: 'text-indigo-600 dark:text-indigo-400',
          bgActive: 'bg-indigo-500 text-white',
        },
        {
          id: 'tutor' as ActiveTab,
          label: 'Leo AI',
          icon: Bot,
          badge: 'AI',
          color: 'text-purple-600 dark:text-purple-400',
          bgActive: 'bg-purple-500 text-white',
        },
      ];
    }

    return [
      {
        id: 'quest' as ActiveTab,
        label: 'Ải Toán',
        icon: Map,
        badge: null,
        color: 'text-amber-600 dark:text-amber-400',
        bgActive: 'bg-amber-500 text-white',
      },
      {
        id: 'arena' as ActiveTab,
        label: 'Đấu Trường',
        icon: Zap,
        badge: 'Hot',
        color: 'text-rose-600 dark:text-rose-400',
        bgActive: 'bg-rose-500 text-white',
      },
      {
        id: 'labs' as ActiveTab,
        label: 'Thí Nghiệm',
        icon: FlaskConical,
        badge: null,
        color: 'text-teal-600 dark:text-teal-400',
        bgActive: 'bg-teal-500 text-white',
      },
      {
        id: 'exams' as ActiveTab,
        label: 'Phòng Thi',
        icon: GraduationCap,
        badge: null,
        color: 'text-indigo-600 dark:text-indigo-400',
        bgActive: 'bg-indigo-500 text-white',
      },
      {
        id: 'tutor' as ActiveTab,
        label: 'Thầy Cú AI',
        icon: Bot,
        badge: 'AI',
        color: 'text-purple-600 dark:text-purple-400',
        bgActive: 'bg-purple-500 text-white',
      },
    ];
  };

  const tabs = getTabsConfig();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-t border-slate-200/80 dark:border-slate-800/80 shadow-2xl pb-safe">
      <div className="max-w-2xl mx-auto px-2 py-1.5 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`tab-btn-${tab.id}`}
              onClick={() => {
                soundFx.playClick();
                onSelectTab(tab.id);
              }}
              className={`relative flex flex-col items-center justify-center py-1 px-3 sm:px-4 rounded-2xl transition-all duration-150 active:scale-90 select-none ${
                isActive
                  ? 'scale-105'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 opacity-75 hover:opacity-100'
              }`}
            >
              {/* Active Icon Pill Background */}
              <div
                className={`relative w-10 h-7 sm:w-12 sm:h-8 rounded-2xl flex items-center justify-center transition-all ${
                  isActive ? `${tab.bgActive} shadow-md` : 'bg-transparent'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />

                {tab.badge && (
                  <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.2 rounded-full shadow-sm animate-bounce">
                    {tab.badge}
                  </span>
                )}
              </div>

              <span
                className={`text-[10px] sm:text-[11px] font-black mt-1 tracking-tight ${
                  isActive ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
