import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, PenTool, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const SCUContentProject = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 p-6 md:p-12 font-sans selection:bg-lime-400 selection:text-black">
      <Link to="/" className="inline-flex items-center gap-2 text-lime-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          SCU Content <span className="text-lime-400">Strategy</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
          Spearheading international student recruitment through targeted content creation and CRM management.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["Slate CRM", "WeChat Marketing", "Copywriting", "Intercultural Communication"].map(skill => (
            <span key={skill} className="px-4 py-1.5 border border-zinc-700 bg-zinc-900/50 rounded-full text-xs font-bold uppercase tracking-wider text-lime-400">
              {skill}
            </span>
          ))}
        </div>

        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
          alt="Content Strategy" 
          className="w-full h-64 md:h-[500px] object-cover rounded-3xl mb-16 border border-zinc-800 shadow-2xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">The Goal</h3>
              <p className="leading-relaxed text-zinc-400">
                Santa Clara University needed to improve its reach with prospective students from East Asia. Language barriers and platform restrictions made traditional email marketing less effective.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Implementation</h3>
              <p className="leading-relaxed text-zinc-400">
                I launched and managed the university's official <strong>WeChat</strong> presence. I authored 10+ articles showcasing student life and academic rigor, specifically tailored for international parents. I also managed the backend <strong>Slate CRM</strong> to track lead conversion from these new channels.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-fit">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-zinc-700 pb-4">
              Key Impacts
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-lime-400/10 p-2 rounded-lg text-lime-400"><MessageCircle size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg">200+</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Followers in Q1</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-lime-400/10 p-2 rounded-lg text-lime-400"><PenTool size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg">10+ Articles</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Published & Distributed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SCUContentProject;