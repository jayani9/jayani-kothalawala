import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, Activity, Cpu, Database, Server, Smartphone, CheckCircle2 } from 'lucide-react';

const ARCHITECTURES = [
  {
    id: "fullstack",
    title: "Realtime Mobile & Web Platform",
    category: "Web & Cloud Architecture",
    description: "End-to-end data pipeline supporting mobile views, real-time database sync, and RESTful microservices.",
    nodes: [
      { id: "client", name: "React / Flutter Client", icon: Smartphone, detail: "Client UI handling state, optimistic updates, and WebSocket subscriptions." },
      { id: "api", name: "Node.js Microservices", icon: Server, detail: "Express API gateway validating payloads and routing client calls." },
      { id: "db", name: "Firebase Realtime DB", icon: Database, detail: "Document store enforcing security rules and streaming real-time mutations." }
    ]
  },
  {
    id: "robotics",
    title: "Autonomous Decision Loop",
    category: "Robotics & Telemetry",
    description: "Pipeline executing telemetry feature extraction, numerical path optimization, and motor drive commands.",
    nodes: [
      { id: "sensor", name: "Sensor Telemetry Feed", icon: Activity, detail: "High-frequency streaming inputs collecting spatial & diagnostic data." },
      { id: "solver", name: "Optimization Solver", icon: Cpu, detail: "Numerical algorithm computing optimal coordinate trajectories." },
      { id: "motor", name: "Motor Controller Node", icon: Layers, detail: "Hardware interface translating planned velocity paths into actuation commands." }
    ]
  }
];

export function ArchitectureViewer() {
  const [activeArchId, setActiveArchId] = useState(ARCHITECTURES[0].id);
  const [selectedNodeId, setSelectedNodeId] = useState(ARCHITECTURES[0].nodes[0].id);

  const currentArch = ARCHITECTURES.find(a => a.id === activeArchId) || ARCHITECTURES[0];
  const selectedNode = currentArch.nodes.find(n => n.id === selectedNodeId) || currentArch.nodes[0];

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>SYSTEM ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Interactive <span className="text-purple-400">System Flow</span>
        </h2>
      </div>

      {/* Selector Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {ARCHITECTURES.map((arch) => (
          <button
            key={arch.id}
            onClick={() => {
              setActiveArchId(arch.id);
              setSelectedNodeId(arch.nodes[0].id);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeArchId === arch.id
                ? "bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 shadow-lg shadow-cyan-950/30"
                : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            {arch.title}
          </button>
        ))}
      </div>

      {/* Main Glassmorphic Card */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
        <p className="text-xs sm:text-sm text-slate-400 mb-6 font-mono text-center">
          {currentArch.description}
        </p>

        {/* Node Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-8">
          {currentArch.nodes.map((node, index) => {
            const Icon = node.icon;
            const isSelected = selectedNodeId === node.id;

            return (
              <React.Fragment key={node.id}>
                <div
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-center relative ${
                    isSelected
                      ? "bg-cyan-950/30 border-cyan-500 text-white shadow-xl shadow-cyan-950/40 scale-105"
                      : "bg-slate-950/50 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                    isSelected ? "bg-cyan-500 text-slate-950" : "bg-slate-900 text-slate-400"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-mono font-bold">{node.name}</h4>

                  {isSelected && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-glow" />
                  )}
                </div>

                {index < currentArch.nodes.length - 1 && (
                  <div className="hidden md:flex justify-center text-slate-600">
                    <ArrowRight className="w-5 h-5 animate-pulse text-cyan-500/50" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Node Inspector Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-mono font-bold text-cyan-300">{selectedNode.name}</h5>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{selectedNode.detail}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}