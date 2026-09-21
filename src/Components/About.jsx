import React from 'react'
import aboutImg from "../assets/aboutme.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

// --- Pure SVG Icon Components ---
const UserIcon = () => (
  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const About = () => {
  return (
    <section className="relative py-20 bg-[#07090e] text-slate-100 overflow-hidden border-b border-slate-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 sm:w-[400px] sm:h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 sm:w-[400px] sm:h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 mb-4">
            <UserIcon />
            <span>BACKGROUND & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Bio<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">graphy</span>
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] group">
              {/* Glow Aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-600 opacity-30 blur-xl group-hover:opacity-60 transition duration-500" />
              
              {/* Glass Frame */}
              <div className="relative rounded-2xl p-3 bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl">
                <div className="relative overflow-hidden rounded-xl bg-slate-950">
                  <img 
                    className="w-full h-[350px] sm:h-[420px] object-cover object-center transform group-hover:scale-105 transition duration-700 ease-out" 
                    src={aboutImg} 
                    alt="Jayani Kothalawala - About Me" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md">
                    <div className="text-xs font-mono text-cyan-400 font-semibold">
                      // CONTINUOUS LEARNER & BUILDER
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description Text & Tech Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Main Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl mb-8 relative">
              <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-t-2xl" />
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                {typeof ABOUT_TEXT === 'string' ? ABOUT_TEXT : ABOUT_TEXT?.description}
              </p>
            </div>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-800/40">
                  <CodeIcon />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-200">Full-Stack Dev</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">React, Node.js, Web Apps</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40">
                  <CpuIcon />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-200">Machine Learning</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Python, PyTorch, AI Models</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40">
                  <DatabaseIcon />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-200">Data Engineering</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">SQL, Pipelines, Analytics</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About