import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HipocampusProject() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-12 selection:bg-lime-400 selection:text-black">
      {/* BACK BUTTON */}
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 mb-12 uppercase tracking-widest text-sm font-bold">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      {/* CONTENT */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-lime-400 font-bold tracking-widest uppercase mb-4 block">Data Engineering</span>
        <h1 className="text-5xl md:text-7xl font-bold uppercase mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Automation & Impact Report
        </h1>
        <img 
          src="/hipocampus.jpg" 
          alt="Hipocampus Project" 
          className="w-full h-[400px] object-cover rounded-2xl mb-12 border border-zinc-800"
        />
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-zinc-300 leading-relaxed">
            This is where you will write your full case study about your time at Hipocampus. 
            You can describe the automation tools you built, the data pipelines you managed, 
            and the impact on the operations team.
          </p>
        </div>
      </motion.div>
    </div>
  );
}