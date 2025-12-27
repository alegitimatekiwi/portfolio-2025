import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function HipocampusProject() {
  const navigate = useNavigate();

  // Force the page to start at the top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-12 selection:bg-lime-400 selection:text-black">
      
      {/* TOP NAV: Acts like Browser Back (Command + [) */}
      <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 mb-12 uppercase tracking-widest text-xs md:text-sm font-bold transition-colors bg-transparent border-none cursor-pointer p-0"
      >
        <ArrowLeft size={16} /> Back
      </button>

      {/* CONTENT */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-lime-400 font-bold tracking-widest uppercase mb-4 block text-xs md:text-sm">
            Data Engineering
        </span>
        
        <h1 
            className="text-3xl md:text-5xl font-bold uppercase mb-8 leading-tight" 
            style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Automation & Impact Report
        </h1>

        <img 
          src="/hipocampus.jpg" 
          alt="Hipocampus Project" 
          className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl mb-12 border border-zinc-800"
        />
        
        <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
          <p className="leading-relaxed">
            This is where you will write your full case study about your time at Hipocampus. 
            You can describe the automation tools you built, the data pipelines you managed, 
            and the impact on the operations team.
          </p>
          <p>
            (Add more content here about specific challenges, the "story" behind the data, and your results.)
          </p>
        </div>

        {/* BOTTOM NAVIGATION FOOTER */}
        <div className="mt-24 border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* LEFT: Go Back */}
            <button 
                onClick={() => navigate(-1)} 
                className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none text-left w-full md:w-auto"
            >
                <div className="p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
                    <ArrowLeft size={20} />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">Go</span>
                    <span className="font-bold uppercase tracking-wider text-sm">Back</span>
                </div>
            </button>

            {/* RIGHT GROUP: Next Internship + Next Project */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:w-auto justify-end">
                
                {/* Next Internship (TeamLink) */}
                <Link 
                    to="/internships/teamlink" 
                    className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors cursor-pointer justify-end"
                >
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Next Internship</span>
                        <span className="font-bold uppercase tracking-wider text-sm">TeamLink</span>
                    </div>
                    <div className="p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
                        <ArrowRight size={20} />
                    </div>
                </Link>

                {/* Next Project (RealSeq) */}
                <Link 
                    to="/projects/realseq" 
                    className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors cursor-pointer justify-end"
                >
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Next Project</span>
                        <span className="font-bold uppercase tracking-wider text-sm">RealSeq</span>
                    </div>
                    <div className="p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
                        <ArrowRight size={20} />
                    </div>
                </Link>
            </div>

        </div>

      </motion.div>
    </div>
  );
}