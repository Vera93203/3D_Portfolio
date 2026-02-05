
import React from 'react';
import { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const items: { id: Section; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'fa-house' },
    { id: 'portfolio', label: 'Works', icon: 'fa-shapes' },
    { id: 'about', label: 'About', icon: 'fa-user' },
    { id: 'resume', label: 'Path', icon: 'fa-file-lines' },
    { id: 'contact', label: 'Mail', icon: 'fa-envelope' }
  ];

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="liquid-glass-btn flex items-center gap-1.5 p-1.5 rounded-[2rem] shadow-2xl">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`
                relative px-5 py-3.5 rounded-[1.5rem] flex items-center gap-3 transition-all duration-500
                ${isActive 
                  ? 'bg-white/10 text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]' 
                  : 'text-zinc-500 hover:text-white hover:bg-white/5'}
              `}
            >
              <i className={`fa-solid ${item.icon} text-sm ${isActive ? 'text-emerald-400' : ''}`}></i>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 ${isActive ? 'max-w-[100px] opacity-100' : 'max-w-0 opacity-0'}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
