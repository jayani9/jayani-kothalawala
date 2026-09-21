import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Assets Imports (Preserved from original project) ---
import pythonlogo from "../assets/pythonlogo.svg";
import sqlimg from "../assets/sql.svg";
import androidimg from "../assets/android.png";
import flutterimg from "../assets/flutter.png";

// --- Pure SVG Components for Web, Cloud, DevOps & DB Icons ---
const ReactIcon = () => (
  <svg className="w-12 h-12 text-cyan-400 animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const NextjsIcon = () => (
  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 16.03l-7.26-9.82v9.82H9.5V8.02h2.24l7.18 9.71V8.02h2.16v10.01h-.16z" />
  </svg>
);

const MongodbIcon = () => (
  <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C11.6 2 11.2 2.3 11.2 2.7c0 3.8-2.6 7.2-2.6 11.3 0 3.8 2.6 6.8 5.4 6.8s5.4-3 5.4-6.8c0-4.1-2.6-7.5-2.6-11.3 0-.4-.4-.7-.8-.7h-4zm0 2.2c1.7 3.3 3.6 6.1 3.6 9.8 0 2.6-1.6 4.8-3.6 4.8s-3.6-2.2-3.6-4.8c0-3.7 1.9-6.5 3.6-9.8z" />
  </svg>
);

const NodejsIcon = () => (
  <svg className="w-12 h-12 text-green-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7.7v8.6L12 22l10-5.7V7.7L12 2zm7.8 13.2L12 19.6l-7.8-4.4V8.8L12 4.4l7.8 4.4v6.4zM12 7.5L6.5 10.6v3.2L12 16.9l5.5-3.1v-3.2L12 7.5z" />
  </svg>
);

const MachineLearningIcon = () => (
  <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.93 4.93l4.24 4.24M19.07 4.93l-4.24 4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24" />
  </svg>
);

const DockerIcon = () => (
  <svg className="w-12 h-12 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-2.258h2.119a.186.186 0 00.186-.186V6.747a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.186.186v1.887c0 .103.083.186.186.186zm0 2.258h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.186.186v1.887c0 .102.083.185.186.185zm-2.954 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.075a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.258h2.119a.186.186 0 00.186-.186V6.747a.186.186 0 00-.186-.186H8.075a.186.186 0 00-.185.186v1.887c0 .103.083.186.185.186zm-2.955 0h2.119a.186.186 0 00.186-.186V6.747a.186.186 0 00-.186-.186H5.12a.186.186 0 00-.186.186v1.887c0 .103.083.186.186.186zm0 2.258h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.12a.185.185 0 00-.186.186v1.887c0 .102.083.185.186.185zm-2.954 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H2.166a.185.185 0 00-.186.186v1.887c0 .102.083.185.186.185zm18.52 1.341c-.328-.215-.815-.316-1.393-.215a4.01 4.01 0 00-.916.287c-.287.135-.61.32-.962.535l-.123.076a5.795 5.795 0 01-2.029.743c-.22.038-.44.057-.66.057H.168a.168.168 0 00-.168.168 8.91 8.91 0 001.378 4.707c1.398 2.052 3.75 3.327 6.273 3.327 6.326 0 11.233-3.86 12.63-9.528a3.67 3.67 0 001.442-.149 1.49 1.49 0 00.324-1.004z" />
  </svg>
);

const GcpIcon = () => (
  <svg className="w-12 h-12 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
  </svg>
);

const FirebaseIcon = () => (
  <svg className="w-12 h-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.89 15.672L6.255.885A.536.536 0 017.18.658l3.142 5.868-6.432 9.146zm16.322 1.503l-2.03-12.78a.537.537 0 00-.913-.298L3.25 17.175l7.917 4.457a1.69 1.69 0 001.666 0l7.379-4.457zm-6.096-7.85l-2.112-4.015a.536.536 0 00-.949 0l-7.3 13.792 10.361-9.777z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-4 h-4 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

// --- Technology Items Dataset ---
const TECH_ITEMS = [
  {
    id: "ml",
    name: "Machine Learning",
    category: "ai",
    tag: "AI & Data Mining",
    level: 90,
    color: "from-purple-500 via-indigo-500 to-cyan-400",
    glow: "shadow-purple-500/20",
    border: "group-hover:border-purple-400",
    icon: <MachineLearningIcon />,
    desc: "Supervised Learning, Feature Engineering, Evaluation Metrics & Model Deployment."
  },
  {
    id: "python",
    name: "Python",
    category: "ai",
    tag: "ML & Data Science",
    level: 92,
    color: "from-yellow-400 via-amber-500 to-blue-600",
    glow: "shadow-yellow-500/20",
    border: "group-hover:border-yellow-400",
    icon: <img src={pythonlogo} alt="Python" className="w-12 h-12 object-contain" />,
    desc: "PyTorch, TensorFlow, Scikit-Learn, Gymnasium, Pandas & NumPy, OpenCV, YOLO."
  },
  {
    id: "docker",
    name: "Docker",
    category: "cloud",
    tag: "Containerization",
    level: 88,
    color: "from-blue-400 via-cyan-500 to-sky-600",
    glow: "shadow-blue-500/20",
    border: "group-hover:border-blue-400",
    icon: <DockerIcon />,
    desc: "Container Orchestration, Dockerfiles, Microservices & CI/CD Pipelines."
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: "cloud",
    tag: "Cloud Infrastructure",
    level: 85,
    color: "from-amber-400 via-red-500 to-blue-500",
    glow: "shadow-amber-500/20",
    border: "group-hover:border-amber-400",
    icon: <GcpIcon />,
    desc: "Compute Engine, Cloud Storage, Serverless Functions & IAM Management."
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "backend",
    tag: "BaaS & Serverless",
    level: 89,
    color: "from-amber-500 via-orange-500 to-yellow-400",
    glow: "shadow-orange-500/20",
    border: "group-hover:border-orange-400",
    icon: <FirebaseIcon />,
    desc: "Firestore, Authentication, Cloud Functions & Production Deployment."
  },
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    tag: "UI Library",
    level: 95,
    color: "from-cyan-500 via-blue-500 to-indigo-500",
    glow: "shadow-cyan-500/20",
    border: "group-hover:border-cyan-400",
    icon: <ReactIcon />,
    desc: "Component Architecture, Virtual DOM, Custom Hooks & Redux state."
  },
  {
    id: "next",
    name: "Next.js",
    category: "frontend",
    tag: "React Framework",
    level: 88,
    color: "from-slate-200 via-slate-400 to-slate-600",
    glow: "shadow-slate-400/20",
    border: "group-hover:border-slate-300",
    icon: <NextjsIcon />,
    desc: "SSR, SSG, Server Actions, App Router & API Routes."
  },
  {
    id: "node",
    name: "Node.js",
    category: "backend",
    tag: "Backend Runtime",
    level: 90,
    color: "from-green-400 via-emerald-500 to-teal-600",
    glow: "shadow-green-500/20",
    border: "group-hover:border-green-400",
    icon: <NodejsIcon />,
    desc: "Express.js, REST APIs, Microservices & Event Loop Optimization."
  },
  {
    id: "sql",
    name: "SQL & Analytics",
    category: "backend",
    tag: "Relational DB",
    level: 94,
    color: "from-blue-400 via-cyan-500 to-sky-600",
    glow: "shadow-blue-500/20",
    border: "group-hover:border-blue-400",
    icon: <img src={sqlimg} alt="SQL" className="w-12 h-12 object-contain" />,
    desc: "Complex Joins, Query Optimization, PostgreSQL & Data Modeling."
  },
  {
    id: "mongo",
    name: "MongoDB",
    category: "backend",
    tag: "NoSQL DB",
    level: 86,
    color: "from-emerald-400 via-green-500 to-lime-600",
    glow: "shadow-emerald-500/20",
    border: "group-hover:border-emerald-400",
    icon: <MongodbIcon />,
    desc: "Document Aggregation, Schema Design & Mongoose ORM."
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "frontend",
    tag: "Cross-Platform",
    level: 85,
    color: "from-cyan-400 via-sky-500 to-blue-600",
    glow: "shadow-cyan-400/20",
    border: "group-hover:border-cyan-300",
    icon: <img src={flutterimg} alt="Flutter" className="w-12 h-12 object-contain" />,
    desc: "Dart Language, Provider/Bloc State, iOS & Android Deployment."
  },
  {
    id: "android",
    name: "Android Dev",
    category: "frontend",
    tag: "Native Mobile",
    level: 82,
    color: "from-emerald-400 via-teal-500 to-cyan-600",
    glow: "shadow-emerald-400/20",
    border: "group-hover:border-emerald-300",
    icon: <img src={androidimg} alt="Android" className="w-12 h-12 object-contain" />,
    desc: "Kotlin, Android Studio, Material Design & Device APIs."
  }
];

const CATEGORIES = [
  { id: "all", label: "All Stack" },
  { id: "ai", label: "AI & ML" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "frontend", label: "Frontend & Mobile" },
  { id: "backend", label: "Backend & Database" }
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredItems = activeCategory === "all" 
    ? TECH_ITEMS 
    : TECH_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="relative py-24 bg-[#07090e] text-slate-100 overflow-hidden border-b border-slate-900 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950/20">
            <SparklesIcon />
            <span>ENGINEERING ARSENAL</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Techno<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">logies</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
            A comprehensive suite of modern frameworks, cloud platforms, and machine learning tools utilized in production environments.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'text-white shadow-lg'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/40 border border-slate-800/60'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-2xl p-6 bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Ambient Highlight Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.color} opacity-30 group-hover:opacity-100 transition duration-500`} />
                
                {/* Background Aura */}
                <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Icon & Category Tag Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-inner group-hover:scale-110 group-hover:border-slate-700 transition duration-300">
                      {item.icon}
                    </div>

                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>
                </div>

               

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}