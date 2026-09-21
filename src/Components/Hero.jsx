import React from "react";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import { HERO_CONTENT } from "../constants";
import jayani from "./../assets/jay.jpg";
import resumePdf from "./../assets/jayani-cv.pdf";

// --- Custom Pure SVG Icons (No external package dependencies) ---
const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-4 h-4 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const TerminalIcon = () => (
  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
  </svg>
);

// --- Component ---
const Hero = () => {
  const handleDownload = () => {
    saveAs(resumePdf, "jayani-cv.pdf");
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "mailto:jayani@example.com";
    }
  };

  return (
    <section className="relative min-h-screen bg-[#07090e] text-slate-100 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-12 lg:py-20 selection:bg-cyan-500 selection:text-slate-950">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/20"
            >
              <SparklesIcon />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for New Roles & Engineering Projects</span>
            </motion.div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none mb-4 text-white">
              Jayani <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">
                Kothalawala
              </span>
            </h1>

            {/* IT Specialization Titles */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 font-mono text-sm sm:text-base">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-purple-300">
                <TerminalIcon />
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-cyan-300">
                <CpuIcon />
                <span>ML & Data Analyst Engineer</span>
              </div>
            </div>

            {/* Summary Bio */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed max-w-xl mb-8">
              {HERO_CONTENT}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>Hire Me / Get In Touch</span>
                <SendIcon />
              </button>

              <button
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 cursor-pointer active:scale-95"
              >
                <DownloadIcon />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                CONNECT //
              </span>
              <a
                href="#github"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
                title="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="#linkedin"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 hover:text-blue-400 transition-all duration-200"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>

          {/* Right Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] group">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 opacity-40 blur-xl group-hover:opacity-75 transition duration-500" />

              {/* Glass Frame Container */}
              <div className="relative rounded-2xl p-3 bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl">
                <div className="relative overflow-hidden rounded-xl bg-slate-950">
                  <img
                    src={jayani}
                    alt="Jayani Kothalawala"
                    className="w-full h-[360px] sm:h-[440px] object-cover object-top transform group-hover:scale-105 transition duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Overlay Identity Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md">
                    <div className="text-sm font-bold text-slate-100 flex items-center justify-between">
                      <span>Jayani Kothalawala</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                        ENGINEER
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Full Stack & Machine Learning
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;