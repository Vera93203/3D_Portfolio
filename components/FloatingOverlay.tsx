
import React from 'react';
import { PROJECTS, EXPERIENCES, EDUCATION, TOOLS, TYPEWRITER_PHRASES } from '../constants';
import { useTypewriter } from '../hooks/useTypewriter';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface FloatingOverlayProps {
  onProjectSelect: (project: Project) => void;
  selectedProjectSlug: string | null;
}

const FloatingOverlay: React.FC<FloatingOverlayProps> = ({ onProjectSelect, selectedProjectSlug }) => {
  const typewriterText = useTypewriter(TYPEWRITER_PHRASES);

  return (
    <div className="flex flex-col w-full">
      {/* HOME SECTION */}
      <section id="home" className="min-h-screen flex flex-col justify-center snap-start">
        <div className="container mx-auto px-8 md:px-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-emerald-400 font-medium tracking-widest uppercase text-xs">
              <span className="w-8 h-[1px] bg-emerald-400"></span>
              <span>Full Stack Developer</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              I'm Phone <span className="text-zinc-500">Myat Min</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-4 max-w-lg leading-relaxed min-h-[1.75rem]">
              <span className="text-emerald-400/90">{typewriterText}</span>
              <span className="animate-blink text-emerald-400">|</span>
            </p>
            <p className="text-zinc-500 text-sm mb-10 max-w-lg leading-relaxed">
              3 years commercial experience — React, TypeScript, and Node.js end to end. Based in London, UK.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="liquid-glass-btn px-10 py-4 font-bold rounded-full text-white"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="liquid-glass-btn px-10 py-4 font-bold rounded-full bg-transparent border-white/10"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen py-32 flex items-center snap-start">
        <div className="container mx-auto px-8 md:px-20">
          <div className="glass-card w-full max-w-4xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="flex flex-col md:flex-row gap-12 mb-12">
              <div className="w-full md:w-1/3 glass-card overflow-hidden border-emerald-400/20 p-2 flex justify-center">
                <img
                  src="/images/cv.png"
                  alt="Profile"
                  className="w-full max-w-[280px] md:max-w-[360px] lg:max-w-[420px] h-auto object-cover transition-all duration-700 rounded-xl"
                />
              </div>

              <div className="w-full md:w-2/3">
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  I'm a Full Stack Developer with 3 years of commercial experience. I build with React, TypeScript, and Node.js—end to end, from database schema to deployed UI—across SaaS, edtech, and manufacturing.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  I've shipped features used by thousands of people, built component libraries adopted across teams, and delivered measurable impact: 40% faster dev cycles, 50% fewer production bugs, and Lighthouse scores in the 90s. I graduated with First Class Honours in 2025.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="/images/result.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 text-center bg-white/[0.02] w-full max-w-[160px] hover:scale-105 transition"
                  >
                    <div className="text-3xl font-bold text-emerald-400 mb-2">Result</div>
                    <div className="text-xs uppercase text-zinc-500 tracking-widest font-bold mb-3">Degree</div>
                    <p className="text-emerald-400 text-sm underline">View PDF</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-8 text-center bg-white/[0.02]">
                <div className="text-5xl font-bold text-emerald-400 mb-2">20+</div>
                <div className="text-xs uppercase text-zinc-500 tracking-widest font-bold">Happy Clients</div>
              </div>
              <div className="glass-card p-8 text-center bg-white/[0.02]">
                <div className="text-5xl font-bold text-emerald-400 mb-2">3+</div>
                <div className="text-xs uppercase text-zinc-500 tracking-widest font-bold">Years Experience</div>
              </div>
              <div className="glass-card p-8 text-center bg-white/[0.02]">
                <div className="text-5xl font-bold text-emerald-400 mb-2">10+</div>
                <div className="text-xs uppercase text-zinc-500 tracking-widest font-bold">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="min-h-screen py-20 sm:py-32 flex items-center snap-start relative">
        <div className="container mx-auto px-4 sm:px-8 md:px-20">
          <div className="glass-card w-full max-w-5xl p-5 sm:p-8 md:p-12 bg-zinc-950/75 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/50">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div>
                <p className="text-emerald-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] mb-2 sm:mb-3">Portfolio</p>
                <h2 className="text-3xl sm:text-4xl font-bold">Selected Works</h2>
              </div>
              <p className="text-zinc-500 text-xs sm:text-sm max-w-xs md:text-right">
                Click any project to explore details, metrics, and links.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
              {PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  isSelected={selectedProjectSlug === project.slug}
                  onSelect={onProjectSelect}
                  featured={index === 3}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESUME SECTION */}
      <section id="resume" className="min-h-screen py-32 flex items-center snap-start">
        <div className="container mx-auto px-8 md:px-20">
          <div className="glass-card w-full max-w-5xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                  <i className="fa-solid fa-graduation-cap text-emerald-400"></i> Education
                </h2>
                <div className="space-y-10">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="relative pl-8 border-l-2 border-zinc-800">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                      <div className="text-emerald-400 text-xs font-black mb-1 uppercase tracking-widest">{edu.year}</div>
                      <h4 className="font-bold text-xl leading-tight mb-1">{edu.title}</h4>
                      <div className="text-zinc-400 text-sm mb-4 font-medium uppercase tracking-tighter">{edu.institution}</div>
                      <p className="text-zinc-500 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                  <i className="fa-solid fa-briefcase text-emerald-400"></i> Experience
                </h2>
                <div className="space-y-10">
                  {EXPERIENCES.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 border-l-2 border-zinc-800">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                      <div className="text-emerald-400 text-xs font-black mb-1 uppercase tracking-widest">{exp.year}</div>
                      <h4 className="font-bold text-xl leading-tight mb-1">{exp.title}</h4>
                      <div className="text-zinc-400 text-sm mb-4 font-medium uppercase tracking-tighter">{exp.source}</div>
                      <p className="text-zinc-500 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/5">
              <h3 className="text-2xl font-bold mb-8">Expertise & Tools</h3>
              <div className="flex flex-wrap gap-4">
                {TOOLS.map((tool, idx) => (
                  <div key={idx} className="liquid-glass-btn px-6 py-3 rounded-xl flex items-center gap-4 text-xs font-bold transition-all cursor-default group">
                    <i className={`${tool.icon} text-xl text-zinc-500 group-hover:text-emerald-400 transition-colors`}></i>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen py-32 flex items-center snap-start">
        <div className="container mx-auto px-8 md:px-20">
          <div className="glass-card w-full max-w-4xl p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-6xl font-bold mb-6">Let's <span className="text-emerald-400">Connect</span></h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Have a vision for a project or looking for a full-stack partner?
                I'm currently available for freelance work and new opportunities in London and beyond.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <a href="mailto:pmmcoc1212@gmail.com" className="liquid-glass-btn p-8 rounded-[2rem] group block">
                  <div className="text-zinc-500 text-[10px] uppercase font-bold mb-3 tracking-widest">Send Email</div>
                  <div className="text-lg font-bold group-hover:text-white transition-colors truncate">
                    pmmcoc1212@gmail.com
                  </div>
                </a>
                <a href="tel:+447774413249" className="liquid-glass-btn p-8 rounded-[2rem] group block">
                  <div className="text-zinc-500 text-[10px] uppercase font-bold mb-3 tracking-widest">Call Me</div>
                  <div className="text-lg font-bold group-hover:text-white transition-colors">
                    +44 7774 413249
                  </div>
                </a>
              </div>

              <div className="flex gap-6">
                {[
                  { icon: 'fa-github', link: 'https://github.com/Vera93203' },
                  { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/phone-myat' },
                  { icon: 'fa-instagram', link: 'https://instagram.com/phone_myat_minm/' },
                  { icon: 'fa-facebook', link: 'https://facebook.com/Vera93203' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 liquid-glass-btn flex items-center justify-center text-2xl rounded-2xl"
                  >
                    <i className={`fa-brands ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};

export default FloatingOverlay;
