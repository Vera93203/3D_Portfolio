import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onSelect: (project: Project) => void;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isSelected, onSelect, featured }) => {
  const accent = project.accentColor ?? '#10b981';

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(project)}
      className={`project-card group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ${
        isSelected ? 'ring-2 scale-[1.01]' : 'hover:md:-translate-y-1'
      }`}
      style={{
        ['--accent' as string]: accent,
        ...(isSelected ? { ringColor: `${accent}80` } : {}),
      }}
    >
      <div
        className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none project-card-glow"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}18 0%, transparent 70%)` }}
      />

      {/* Two sections side-by-side from md+ */}
      <div className="relative bg-zinc-950/90 border border-white/[0.08] rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-xl md:flex md:items-stretch">
        {/* Left: browser + screenshot */}
        <div className="p-2 sm:p-3 pb-0 md:w-1/2 md:shrink-0 md:pb-3 md:pr-0 md:flex md:flex-col">
          <div className="rounded-lg sm:rounded-xl overflow-hidden border border-white/[0.06] bg-zinc-900 shadow-inner md:flex-1 md:flex md:flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 border-b border-white/[0.04] bg-zinc-950/90">
              <span className="hidden sm:flex w-2.5 h-2.5 rounded-full bg-red-500/60 shrink-0" />
              <span className="hidden sm:flex w-2.5 h-2.5 rounded-full bg-amber-500/60 shrink-0" />
              <span className="hidden sm:flex w-2.5 h-2.5 rounded-full bg-emerald-500/60 shrink-0" />
              <span className="flex sm:hidden w-2 h-2 rounded-full bg-zinc-600 shrink-0" />
              <span className="flex-1 mx-0.5 sm:mx-1 h-5 sm:h-6 rounded-md bg-white/[0.04] border border-white/[0.04] flex items-center px-2 sm:px-3 min-w-0">
                <i className="fa-solid fa-lock text-[7px] sm:text-[8px] text-zinc-600 mr-1.5 sm:mr-2 shrink-0" />
                <span className="text-[8px] sm:text-[10px] text-zinc-500 truncate font-mono">
                  {project.slug}.phonemyat.dev
                </span>
              </span>
            </div>

            <div
              className={`relative overflow-hidden bg-zinc-900 md:flex-1 ${
                featured
                  ? 'aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[220px] lg:min-h-[260px]'
                  : 'aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[200px] lg:min-h-[220px]'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-zinc-950/30" />

              {project.metrics && project.metrics.length > 0 && (
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex flex-wrap gap-1 sm:gap-1.5">
                  {project.metrics.slice(0, featured ? 3 : 2).map((metric) => (
                    <span
                      key={metric}
                      className="text-[8px] sm:text-[9px] font-semibold tracking-wide px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full backdrop-blur-md border max-w-full truncate"
                      style={{
                        color: accent,
                        borderColor: `${accent}40`,
                        backgroundColor: `${accent}15`,
                      }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}

              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-all duration-300">
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-md border border-white/10 bg-black/50 text-white/90">
                  Details →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: title, description, tags, buttons */}
        <div className="p-4 sm:p-5 pt-3 sm:pt-4 md:w-1/2 md:flex md:flex-col md:justify-center md:py-5 md:pl-4 md:pr-5 lg:py-6 lg:pr-6">
          <div className="flex items-start justify-between gap-2 sm:gap-3 mb-1.5 sm:mb-2">
            <h3
              className={`font-bold leading-tight group-hover:text-white transition-colors ${
                featured ? 'text-lg sm:text-xl lg:text-2xl' : 'text-lg sm:text-xl'
              }`}
            >
              {project.title}
            </h3>
            <span
              className="shrink-0 w-2 h-2 rounded-full mt-1.5 sm:mt-2"
              style={{ backgroundColor: accent, boxShadow: `0 0 10px ${accent}` }}
            />
          </div>

          <p
            className={`text-zinc-400 mb-3 sm:mb-4 leading-relaxed ${
              featured ? 'text-sm sm:text-base line-clamp-3 md:line-clamp-4' : 'text-sm line-clamp-2 md:line-clamp-3'
            }`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
            {project.tags.slice(0, featured ? 5 : 4).map((tag) => (
              <span
                key={tag}
                className="text-[8px] sm:text-[9px] font-medium uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-md text-zinc-500 bg-white/[0.04] border border-white/[0.04]"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > (featured ? 5 : 4) && (
              <span className="text-[8px] sm:text-[9px] font-medium text-zinc-600 px-1.5 sm:px-2 py-0.5">
                +{project.tags.length - (featured ? 5 : 4)}
              </span>
            )}
          </div>

          <div
            className="flex gap-2 pt-3 sm:pt-4 border-t border-white/[0.05] flex-col sm:flex-row mt-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-btn w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all"
                style={{
                  backgroundColor: `${accent}18`,
                  borderColor: `${accent}35`,
                  color: accent,
                  border: `1px solid ${accent}35`,
                }}
              >
                Live Demo
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto sm:shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/[0.08] bg-white/[0.03] hover:text-white hover:border-white/20 transition-all"
              >
                <i className="fa-brands fa-github" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
