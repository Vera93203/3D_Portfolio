
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Scene from './components/Scene';
import Navigation from './components/Navigation';
import FloatingOverlay from './components/FloatingOverlay';
import ProjectCommandCenter from './components/ProjectCommandCenter';
import Terminal from './components/Terminal';
import { Section, Project } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.2,
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        if (terminalOpen) setTerminalOpen(false);
        else if (selectedProject) setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen, selectedProject]);

  const handleSectionChange = useCallback((section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleOpenProject = useCallback((project: Project) => {
    setSelectedProject(project);
    setTerminalOpen(false);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-[#050505] overflow-hidden">
      {/* Branding HUD */}
      <div className="fixed top-8 left-8 z-50 flex items-center gap-4 pointer-events-none">
        <div className="w-10 h-10 liquid-glass-btn rounded-xl flex items-center justify-center pointer-events-auto overflow-hidden p-1.5">
          <img src="/favicon.svg" alt="PMM" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold tracking-widest uppercase text-xs">Phone Myat Min</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-tighter">Full Stack Developer</span>
        </div>
      </div>

      <div className="fixed top-8 right-8 z-50 flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 liquid-glass-btn px-4 py-2 rounded-full pointer-events-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
            Open to roles · United Kingdom
          </span>
        </div>
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
        <FloatingOverlay
          onProjectSelect={handleOpenProject}
          selectedProjectSlug={selectedProject?.slug ?? null}
        />
      </div>

      {/* HUD Controls */}
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Project Command Center */}
      <ProjectCommandCenter project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Terminal Easter Egg */}
      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onNavigate={handleSectionChange}
        onOpenProject={handleOpenProject}
      />

      {/* Bottom info */}
      <div className="fixed bottom-8 left-8 z-50 hidden md:block pointer-events-none">
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 text-zinc-500 text-xs uppercase tracking-widest pointer-events-auto">
            <a href="https://facebook.com/Vera93203" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">FB</a>
            <a href="https://instagram.com/phone_myat_minm/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">IG</a>
            <a href="https://www.linkedin.com/in/phone-myat" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">LI</a>
            <a href="https://github.com/Vera93203" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">GH</a>
          </div>
          <p className="text-[10px] text-zinc-700 font-medium">© 2026 Phone Myat Min. All Rights Reserved.</p>
        </div>
      </div>

      {/* Terminal hint */}
      <button
        onClick={() => setTerminalOpen(true)}
        className="fixed bottom-8 right-8 z-50 hidden md:flex items-center gap-2 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors font-mono"
      >
        <kbd className="px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-500">⌘K</kbd>
        <span>terminal</span>
      </button>

      {/* Decorative gradients */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-20" />
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default App;
