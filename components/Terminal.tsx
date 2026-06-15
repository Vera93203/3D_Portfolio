import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PROJECTS } from '../constants';
import { Project, Section } from '../types';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: Section) => void;
  onOpenProject: (project: Project) => void;
}

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success';
  text: string;
}

const PROJECT_ALIASES: Record<string, string> = {
  saas: 'saas-dashboard',
  dashboard: 'saas-dashboard',
  realtime: 'realtime-workspace',
  collaboration: 'realtime-workspace',
  api: 'rest-api-studio',
  rest: 'rest-api-studio',
  ecommerce: 'ecommerce',
  shop: 'ecommerce',
  envault: 'envault',
  forge: 'forge-ui',
  analytics: 'analytics-dashboard',
  zay: 'zaychintaung',
};

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose, onNavigate, onOpenProject }) => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'success', text: 'Phone Myat Min — Dev Terminal v1.0' },
    { type: 'output', text: 'Type "help" for available commands. Press Esc to close.' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [lines]);

  const findProject = useCallback((query: string): Project | undefined => {
    const normalized = query.toLowerCase().trim();
    const slug = PROJECT_ALIASES[normalized] ?? normalized;
    return PROJECTS.find(
      (p) =>
        p.slug === slug ||
        p.slug.includes(normalized) ||
        p.title.toLowerCase().includes(normalized)
    );
  }, []);

  const runCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();
      const parts = cmd.split(/\s+/);
      const command = parts[0];
      const arg = parts.slice(1).join(' ');

      const append = (...newLines: TerminalLine[]) => {
        setLines((prev) => [...prev, { type: 'input', text: `> ${raw}` }, ...newLines]);
      };

      switch (command) {
        case '':
          setLines((prev) => [...prev, { type: 'input', text: '> ' }]);
          break;

        case 'help':
          append(
            { type: 'output', text: 'Available commands:' },
            { type: 'output', text: '  whoami          — about me' },
            { type: 'output', text: '  ls projects     — list all projects' },
            { type: 'output', text: '  open <slug>     — open project command center' },
            { type: 'output', text: '  goto <section>  — home | portfolio | about | resume | contact' },
            { type: 'output', text: '  github          — open GitHub profile' },
            { type: 'output', text: '  email           — copy email address' },
            { type: 'output', text: '  clear           — clear terminal' },
          );
          break;

        case 'whoami':
          append(
            { type: 'success', text: 'Phone Myat Min' },
            { type: 'output', text: 'Full Stack Developer · London, UK' },
            { type: 'output', text: 'React · TypeScript · Node.js · 3 years commercial experience' },
            { type: 'output', text: 'First Class Honours · BSc Computing with AI · 2025' },
          );
          break;

        case 'ls':
          if (arg === 'projects' || !arg) {
            append(
              { type: 'output', text: 'projects/' },
              ...PROJECTS.map((p) => ({
                type: 'output' as const,
                text: `  ${p.slug.padEnd(22)} ${p.title}`,
              }))
            );
          } else {
            append({ type: 'error', text: `ls: ${arg}: No such directory` });
          }
          break;

        case 'open': {
          if (!arg) {
            append({ type: 'error', text: 'Usage: open <project-slug>' });
            break;
          }
          const project = findProject(arg);
          if (project) {
            append({ type: 'success', text: `Opening ${project.title}...` });
            onOpenProject(project);
            onNavigate('portfolio');
          } else {
            append({ type: 'error', text: `Project not found: ${arg}` });
          }
          break;
        }

        case 'goto':
        case 'cd': {
          const sections: Section[] = ['home', 'portfolio', 'about', 'resume', 'contact'];
          const target = arg as Section;
          if (sections.includes(target)) {
            append({ type: 'success', text: `Navigating to ${target}...` });
            onNavigate(target);
          } else {
            append({ type: 'error', text: `Unknown section: ${arg}. Try: home, portfolio, about, resume, contact` });
          }
          break;
        }

        case 'github':
          window.open('https://github.com/Vera93203', '_blank', 'noopener,noreferrer');
          append({ type: 'success', text: 'Opening GitHub profile...' });
          break;

        case 'email':
          navigator.clipboard?.writeText('pmmcoc1212@gmail.com');
          append({ type: 'success', text: 'Email copied: pmmcoc1212@gmail.com' });
          break;

        case 'clear':
          setLines([]);
          break;

        default:
          append({ type: 'error', text: `Command not found: ${command}. Type "help" for options.` });
      }
    },
    [findProject, onNavigate, onOpenProject]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="terminal-window relative w-full max-w-2xl rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl animate-terminal-in">
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/90 border-b border-white/5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
            pmm@portfolio ~ terminal
          </span>
          <button
            onClick={onClose}
            className="ml-auto text-zinc-500 hover:text-white text-sm"
            aria-label="Close terminal"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div ref={scrollRef} className="h-72 md:h-80 overflow-y-auto p-4 font-mono text-sm custom-scroll bg-[#0a0a0a]">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`mb-1 ${
                line.type === 'input'
                  ? 'text-emerald-400'
                  : line.type === 'error'
                  ? 'text-red-400'
                  : line.type === 'success'
                  ? 'text-emerald-300'
                  : 'text-zinc-400'
              }`}
            >
              {line.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 bg-zinc-900/90 border-t border-white/5">
          <span className="text-emerald-400 font-mono text-sm shrink-0">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-emerald-300 font-mono text-sm outline-none placeholder-zinc-600"
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
