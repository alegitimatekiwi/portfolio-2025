import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, DollarSign, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const TShirtProject = () => {
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
          T-Shirt Startup <span className="text-lime-400">&</span> Philanthropy
        </h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
          An e-commerce venture combining original comic art with social impact in rural Sichuan.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["Entrepreneurship", "E-Commerce", "Supply Chain", "Social Impact", "Graphic Design"].map(skill => (
            <span key={skill} className="px-4 py-1.5 border border-zinc-700 bg-zinc-900/50 rounded-full text-xs font-bold uppercase tracking-wider text-lime-400">
              {skill}
            </span>
          ))}
        </div>

        <img 
          src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2669&auto=format&fit=crop" 
          alt="T-Shirt Design & Production" 
          className="w-full h-64 md:h-[500px] object-cover rounded-3xl mb-16 border border-zinc-800 shadow-2xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">The Vision</h3>
              <p className="leading-relaxed text-zinc-400">
                I founded an online store featuring original comic-style artwork. The goal was to create a self-sustaining business model where creativity could fund educational initiatives.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Operations</h3>
              <p className="leading-relaxed text-zinc-400">
                I managed the end-to-end product lifecycle. This included collaborating with local artists for designs, sourcing high-quality materials, managing the online storefront, and handling logistics/shipping.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-fit">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-zinc-700 pb-4">
              Key Impacts
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-lime-400/10 p-2 rounded-lg text-lime-400"><DollarSign size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg">Profitable</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Within 6 Months</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-lime-400/10 p-2 rounded-lg text-lime-400"><Heart size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg">100% Donated</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">To Rural Sichuan Education</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-lime-400/10 p-2 rounded-lg text-lime-400"><PenTool size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg">50 Students</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Funded with School Supplies</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TShirtProject;