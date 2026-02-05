
import React, { useState, useEffect, useRef } from 'react';
import Scene from './components/Scene';
import Navigation from './components/Navigation';
import FloatingOverlay from './components/FloatingOverlay';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.2
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as Section);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleSectionChange = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-screen h-screen bg-[#050505] overflow-hidden">
      {/* Branding HUD */}
      <div className="fixed top-8 left-8 z-50 flex items-center gap-4 pointer-events-none">
        <div className="w-10 h-10 liquid-glass-btn rounded-xl flex items-center justify-center pointer-events-auto">
          <span className="text-white font-black text-xl">P</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold tracking-widest uppercase text-xs">Phone Myat Min</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-tighter">Creative Developer</span>
        </div>
      </div>

      <div className="fixed top-8 right-8 z-50">
        <button 
          onClick={() => handleSectionChange('contact')}
          className="liquid-glass-btn px-6 py-2.5 text-[10px] font-black tracking-[0.2em] uppercase rounded-full"
        >
          Let's Talk
        </button>
      </div>

      {/* 3D Canvas Layer (Fixed) */}
      <div className="fixed inset-0 z-0">
        <Scene activeSection={activeSection} />
      </div>

      {/* Scrollable Content Layer */}
      <div 
        ref={scrollContainerRef}
        className="relative z-10 h-screen overflow-y-auto custom-scroll snap-y snap-proximity"
      >
        <FloatingOverlay />
      </div>

      {/* HUD Controls */}
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />

      {/* Bottom info */}
      <div className="fixed bottom-8 left-8 z-50 hidden md:block pointer-events-none">
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 text-zinc-500 text-xs uppercase tracking-widest pointer-events-auto">
            <a href="https://facebook.com/Vera93203" target="_blank" className="hover:text-emerald-400">FB</a>
            <a href="https://instagram.com/phone_myat_minm/" target="_blank" className="hover:text-emerald-400">IG</a>
            <a href="https://www.linkedin.com/in/phone-myat" target="_blank" className="hover:text-emerald-400">LI</a>
            <a href="https://github.com/Vera93203" target="_blank" className="hover:text-emerald-400">GH</a>
          </div>
          <p className="text-[10px] text-zinc-700 font-medium">© 2024 Phone Myat Min. All Rights Reserved.</p>
        </div>
      </div>
      
      {/* Decorative gradients */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-20" />
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default App;
