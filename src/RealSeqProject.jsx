import React from "react";
import { ArrowUp } from 'lucide-react';
import { motion } from "framer-motion";
import { ArrowLeft, BarChart, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const RealSeqProject = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 p-6 md:p-12 font-sans selection:bg-lime-400 selection:text-black">
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-2 text-lime-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Title Section */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Project Managing <span className="text-lime-400">Strategies</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
          Driving digital engagement for RealSeq BioTech (Genomics) and Hale.Nani.Kai (Hospitality) through data-driven content strategies.
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["Project Management", "Social Media Strategy", "Data Analytics", "SEO", "Content Marketing"].map(skill => (
            <span key={skill} className="px-4 py-1.5 border border-zinc-700 bg-zinc-900/50 rounded-full text-xs font-bold uppercase tracking-wider text-lime-400">
              {skill}
            </span>
          ))}
        </div>

        {/* Main Image */}
        <img 
          src="/getvirtual.jpg" 
          alt="Strategy Dashboard" 
          className="w-full h-64 md:h-[500px] object-cover rounded-3xl mb-16 border border-zinc-800 shadow-2xl"
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Column: Context */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="text-lime-400" size={24}/> The Overview
              </h3>
              <p className="leading-relaxed text-zinc-400">
                I served as a Project Manager for GetVirtual, engaging with two distinct clients. 
                <strong>RealSeq BioTech</strong> needed to translate complex genomic sequencing data into digestible content for investors and scientists. 
                <strong>Hale.Nani.Kai</strong> required a competitive edge in the saturated Hawaiian vacation rental market.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
              <p className="leading-relaxed text-zinc-400 mb-4">
                We adopted a data-first approach. For RealSeq, we focused on LinkedIn thought leadership. For Hale.Nani.Kai, we leveraged visual storytelling on Instagram combined with SEO keywords.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>Developed a 3-month content calendar for consistent posting.</li>
                <li>Conducted A/B testing on hashtags and posting times.</li>
                <li>Standardized brand voice across web and social channels.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Key Impacts */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-fit">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-zinc-700 pb-4">
              Key Impacts
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-lime-400/10 p-2 rounded-lg text-lime-400"><BarChart size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg">200%</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Increase in Post Consistency</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-lime-400/10 p-2 rounded-lg text-lime-400"><Users size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg">15% Growth</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Organic Reach</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-lime-400/10 p-2 rounded-lg text-lime-400"><ArrowUp size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg">Top 3</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Google Ranking for Keywords</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Gallery / Extra Photos */}
        <div className="mt-16 pt-16 border-t border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-8">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-64 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 text-zinc-500">
                    [Photo: Analytics Dashboard Screenshot]
                </div>
                <div className="h-64 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 text-zinc-500">
                    [Photo: Social Media Feed Layout]
                </div>
            </div>
        </div>

      </motion.div>
    </div>
  );
};

export default RealSeqProject;