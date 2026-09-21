import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from "framer-motion"

// --- Pure SVG Icons ---
const AcademicCapIcon = () => (
  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Education = () => {
  return (
    <section className="relative py-24 bg-[#07090e] text-slate-100 overflow-hidden border-b border-slate-900 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Lighting Halos */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950/20">
            <AcademicCapIcon />
            <span>ACADEMIC BACKGROUND</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Educa<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">tion</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Formal academic degrees, specialized coursework, and core foundation in computer science and technology.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION.map((element, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-6 sm:p-8 bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-xl hover:border-slate-700 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Gradient Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 opacity-30 group-hover:opacity-100 transition duration-500" />
              
              {/* Background Glow */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition duration-500 pointer-events-none" />

              <div>
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-cyan-400 shadow-inner group-hover:scale-105 transition duration-300">
                    <BookIcon />
                  </div>

                  {element.year && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono font-semibold text-cyan-300">
                      <CalendarIcon />
                      {element.year}
                    </span>
                  )}
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {element.title || element.degree}
                </h3>

                {/* Institution Name */}
                {element.institution && (
                  <p className="text-xs font-mono text-purple-300 font-semibold mb-4">
                    @ {element.institution}
                  </p>
                )}

                {/* Description */}
                {element.description && (
                  <p className="text-slate-300 text-sm leading-relaxed font-normal mb-6">
                    {element.description}
                  </p>
                )}
              </div>

              {/* Coursework & Technologies Badges */}
              {element.technologies && element.technologies.length > 0 && (
                <div className="pt-6 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-3">
                    Focus Areas & Subjects:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {element.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-900 transition duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education