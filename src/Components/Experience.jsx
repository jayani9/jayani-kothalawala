import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"

// --- Pure SVG Icons ---
const BriefcaseIcon = () => (
  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CheckArrowIcon = () => (
  <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Experience = () => {
  return (
    <section className="relative py-24 bg-[#07090e] text-slate-100 overflow-hidden border-b border-slate-900 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Lighting Halos */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Matrix Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950/20">
            <BriefcaseIcon />
            <span>CAREER PATHWAY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Experience</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
            A chronological timeline of my professional roles, engineering contributions, and key technical achievements.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-32 lg:ml-48 space-y-12">
          
          {EXPERIENCES.map((experience, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Glowing Node Dot on Timeline Line */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300" />

              {/* Date Label on Left Side (Desktop view) */}
              <div className="sm:absolute sm:-left-36 md:sm:-left-48 sm:top-1 sm:text-right sm:w-32 mb-3 sm:mb-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono font-semibold text-cyan-300">
                  <CalendarIcon />
                  <span>{experience.year}</span>
                </div>
              </div>

              {/* Glassmorphic Content Card */}
              <div className="relative rounded-2xl p-6 sm:p-8 bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-xl hover:border-slate-700 transition-all duration-500">
                
                {/* Top Glowing Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 rounded-t-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Role and Company */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {experience.role}
                  </h3>
                  <span className="text-sm font-mono font-medium px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300">
                    @ {experience.company}
                  </span>
                </div>

                {/* Bullet Points / Description */}
                <div className="space-y-2.5 text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-6">
                  {Array.isArray(experience.description) ? (
                    <ul className="space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckArrowIcon />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-300">{experience.description}</p>
                  )}
                </div>

                {/* Optional Tech Stack Badges */}
                {experience.technologies && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                    {experience.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Experience