import React from 'react';
import { Project } from '../types';

interface ProjectCommandCenterProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectCommandCenter: React.FC<ProjectCommandCenterProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <aside
        className="fixed z-[70] glass-card overflow-y-auto custom-scroll animate-slide-in-up md:animate-slide-in-right
          inset-x-0 bottom-0 top-auto max-h-[88vh] rounded-t-2xl border-t border-white/10 p-5 pb-8
          md:inset-x-auto md:top-0 md:right-0 md:bottom-0 md:left-auto md:max-h-none md:h-full md:w-full md:max-w-md md:rounded-none md:border-l md:border-t-0 md:p-8"
        style={{ borderTopColor: project.accentColor, borderTopWidth: 3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 liquid-glass-btn rounded-full flex items-center justify-center text-zinc-400 hover:text-white"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-4 md:hidden" />

        <div className="mt-2 md:mt-4 mb-5 md:mb-6">
          <span
            className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 md:mb-3 block"
            style={{ color: project.accentColor }}
          >
            Command Center
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 pr-10">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/10 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl overflow-hidden mb-5 md:mb-6 border border-white/10">
          <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover object-top" />
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed mb-6">{project.description}</p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">
              Impact Metrics
            </h3>
            <div className="space-y-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: project.accentColor, boxShadow: `0 0 8px ${project.accentColor}` }}
                  />
                  <span className="text-sm text-zinc-300">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-btn flex items-center justify-center gap-3 px-6 py-4 rounded-full text-[10px] font-black uppercase tracking-widest"
            >
              Live Demo <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-btn flex items-center justify-center gap-3 px-6 py-4 rounded-full text-[10px] font-black uppercase tracking-widest"
            >
              View Source <i className="fa-brands fa-github" />
            </a>
          )}
        </div>
      </aside>
    </>
  );
};

export default ProjectCommandCenter;
