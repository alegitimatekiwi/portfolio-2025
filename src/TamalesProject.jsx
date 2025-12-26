import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Search, Code } from "lucide-react";
import { Link } from "react-router-dom";

const TamalesProject = () => {
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
          Irving's <span className="text-lime-400">Chicken Tamales</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
          Digitizing a local culinary staple through web development and local SEO optimization.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["Web Development", "Local SEO", "UX Design", "Small Business Consulting"].map(skill => (
            <span key={skill} className="px-4 py-1.5 border border-zinc-700 bg-zinc-900/50 rounded-full text-xs font-bold uppercase tracking-wider text-lime-400">
              {skill}
            </span>
          ))}
        </div>

        <img 
          src="/tamales.jpg" 
          alt="Website Mockup" 
          className="w-full h-64 md:h-[500px] object-cover rounded-3xl mb-16 border border-zinc-800 shadow-2xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
              <p className="leading-relaxed text-zinc-400">
                Irving's Chicken Tamales had a loyal local following but zero digital footprint. Customers struggled to find the menu, pricing, or ordering information online, limiting growth to word-of-mouth.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Role</h3>
              <p className="leading-relaxed text-zinc-400">
                I built a responsive, mobile-first website to serve as the central hub for the business. I also set up their Google My Business profile to capture local search traffic ("tamales near me").
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-fit">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-zinc-700 pb-4">
              Key Impacts
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-lime-400/10 p-2 rounded-lg text-lime-400"><ShoppingBag size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg">30%</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">New Customer Acquisition</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-lime-400/10 p-2 rounded-lg text-lime-400"><Search size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg">500+ Views</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Google Business Profile (Month 1)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TamalesProject;