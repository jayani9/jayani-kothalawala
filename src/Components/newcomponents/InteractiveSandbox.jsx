import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Play, Code2, Sparkles, Check } from 'lucide-react';

export function InteractiveSandbox() {
  const [dataPoints, setDataPoints] = useState(150);
  const [learningRate, setLearningRate] = useState(0.01);
  const [enableOptimization, setEnableOptimization] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  // Simulated metrics
  const computedLatency = Math.max(8, Math.round((200 - dataPoints * 0.5) * (enableOptimization ? 0.4 : 1.0)));
  const computedAccuracy = (Math.min(99.4, 82 + (dataPoints / 10) * 0.8 - learningRate * 50)).toFixed(1);

  const handleRunSimulation = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 800);
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-purple-400 mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>LIVE SIMULATOR</span>
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Algorithm & Model <span className="text-cyan-400">Sandbox</span>
        </h2>
      </div>

      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span>PARAMETER CONTROLS</span>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-slate-300">Dataset Size / Batch Count</span>
              <span className="text-cyan-400">{dataPoints} items</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="25"
              value={dataPoints}
              onChange={(e) => setDataPoints(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer bg-slate-950 rounded-lg h-2"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-slate-300">Learning Rate ($\alpha$)</span>
              <span className="text-purple-400">{learningRate}</span>
            </div>
            <input
              type="range"
              min="0.001"
              max="0.05"
              step="0.005"
              value={learningRate}
              onChange={(e) => setLearningRate(Number(e.target.value))}
              className="w-full accent-purple-400 cursor-pointer bg-slate-950 rounded-lg h-2"
            />
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-xs font-mono text-slate-300">Greedy Trajectory Optimization</span>
            <button
              onClick={() => setEnableOptimization(!enableOptimization)}
              className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${
                enableOptimization ? "bg-cyan-500" : "bg-slate-800"
              }`}
            >
              <div className={`w-4 h-4 rounded-full bg-slate-950 transition-transform absolute top-1 ${
                enableOptimization ? "left-5" : "left-1"
              }`} />
            </button>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={isRunning}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-mono text-xs font-bold flex items-center justify-center gap-2 transition hover:opacity-95 cursor-pointer disabled:opacity-50"
          >
            {isRunning ? (
              <Sparkles className="w-4 h-4 animate-spin" />
            ) : (
              <Play className="w-4 h-4 fill-slate-950" />
            )}
            <span>{isRunning ? "Re-computing Iterations..." : "Run Simulation Step"}</span>
          </button>
        </div>

        {/* Readout Display Column */}
        <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span className="text-[11px] font-mono text-slate-500 block mb-4">SIMULATED EXECUTION READOUT</span>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block">LATENCY</span>
                <span className="text-2xl font-bold text-cyan-400 font-mono">{computedLatency} ms</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block">MODEL ACCURACY</span>
                <span className="text-2xl font-bold text-purple-400 font-mono">{computedAccuracy}%</span>
              </div>
            </div>

            <div className="space-y-2 font-mono text-[11px]">
              <div className="flex items-center gap-2 text-slate-400">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Feature scaling & norm verified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Path solver status: Converged</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-900 text-[10px] font-mono text-slate-600 flex justify-between">
            <span>State: Active</span>
            <span>Engine: Client-side JS</span>
          </div>
        </div>
      </div>
    </section>
  );
}