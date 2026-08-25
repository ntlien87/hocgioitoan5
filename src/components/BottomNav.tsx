import React from 'react';
import { Map, Zap, FlaskConical, GraduationCap, Bot } from 'lucide-react';
import { ActiveTab } from '../types/math';
import { soundFx } from '../utils/audio';

interface BottomNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    {
      id: 'quest' as ActiveTab,
      label: 'Ải Học Tập',
      icon: Map,
      badge: null,
      color: 'text-amber-600 dark:text-amber-400',
    },
    {
      id: 'arena' as ActiveTab,
      label: 'Đấu Trường',
      icon: Zap,
      badge: 'Hot',
      color: 'text-rose-600 dark:text-rose-400',
    },
    {
      id: 'labs' as ActiveTab,
      label: 'Thí Nghiệm',
      icon: FlaskConical,
      badge: null,
      color: 'text-teal-600 dark:text-teal-400',
    },
    {
      id: 'exams' as ActiveTab,
      label: 'Phòng Thi',
      icon: GraduationCap,
      badge: null,
      color: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      id: 'tutor' as ActiveTab,
      label: 'Thầy Cú AI',
      icon: Bot,
      badge: 'AI',
      color: 'text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg pb-safe">
      <div className="max-w-xl mx-auto px-2 py-1.5 flex items-center justify-around">
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
              className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 ${
                isActive
                  ? 'scale-105 font-bold'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium opacity-80 hover:opacity-100'
              }`}
            >
              {/* Active Glow Pill Indicator */}
              {isActive && (
                <span className="absolute -top-1 w-8 h-1 bg-blue-600 rounded-full shadow-xs" />
              )}

              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? `${tab.color} scale-110` : 'text-slate-400'
                  }`}
                />
                {tab.badge && (
                  <span className="absolute -top-1.5 -right-2.5 bg-rose-500 text-white text-[9px] font-extrabold px-1 rounded-full animate-bounce">
                    {tab.badge}
                  </span>
                )}
              </div>

              <span
                className={`text-[11px] mt-0.5 whitespace-nowrap ${
                  isActive ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500'
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
