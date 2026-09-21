import React from 'react';
import { GitBranch, Star, ExternalLink, Terminal } from 'lucide-react';

const FEATURED_REPOS = [
  {
    name: "autonomous-path-optimizer",
    description: "Numerical optimization library executing greedy coordinate clustering and trajectory planning.",
    language: "Python",
    langColor: "bg-yellow-500",
    stars: 24,
    forks: 8,
    tag: "Machine Learning / Math",
    url: "https://github.com"
  },
  {
    name: "kyky-platform-ui",
    description: "Component architecture and real-time state management modules for web & mobile interfaces.",
    language: "TypeScript",
    langColor: "bg-cyan-400",
    stars: 18,
    forks: 5,
    tag: "Frontend / React",
    url: "https://github.com"
  },
  {
    name: "ros2-raspberrypi-telemetry",
    description: "ROS2 navigation setup and real-time telemetry processing routines for compact robotic hardware.",
    language: "C++ / Python",
    langColor: "bg-purple-500",
    stars: 31,
    forks: 12,
    tag: "Robotics & Embedded",
    url: "https://github.com"
  }
];

export function ProjectContributions() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>REPOSITORIES & WORK</span>
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Featured <span className="text-purple-400">Codebases</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURED_REPOS.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-purple-300">
                  {repo.tag}
                </span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>

              <h3 className="text-sm font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                {repo.name}
              </h3>

              <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                {repo.description}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                <span>{repo.language}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-yellow-500" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                  {repo.forks}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectContributions;