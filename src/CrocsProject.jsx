import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, ShoppingBag, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function CrocsProject() {
  const navigate = useNavigate();
  
  // Force scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-12 selection:bg-lime-400 selection:text-black">
      
      {/* TOP NAV: Back Button (History) */}
      <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 mb-12 uppercase tracking-widest text-xs md:text-sm font-bold transition-colors bg-transparent border-none cursor-pointer p-0"
      >
        <ArrowLeft size={16} /> Back
      </button>

      {/* HEADER & HERO */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
            <span className="text-lime-400 font-bold tracking-widest uppercase mb-2 block text-xs md:text-sm">
                Retail & E-Commerce • Shanghai, China
            </span>
            <h1 
                className="text-3xl md:text-5xl font-bold uppercase mb-4 leading-tight" 
                style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              E-Commerce Operations & Strategy
            </h1>
            <h2 className="text-xl text-zinc-400">Crocs Asia</h2>
        </div>

        {/* Hero Image */}
        <img 
          src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?q=80&w=2670&auto=format&fit=crop" 
          alt="Shanghai Skyline" 
          className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl mb-12 border border-zinc-800"
        />
        
        {/* STORY CONTENT */}
        <div className="prose prose-invert prose-lg max-w-none text-zinc-300 space-y-12">
          
          {/* Section 1: The Role */}
          <div>
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                The Market: Fast-Paced Retail
            </h3>
            <p className="leading-relaxed">
              Shanghai is the beating heart of Asian commerce. During my summer at Crocs Asia, I stepped into the 
              E-Commerce (EC) department during a pivotal growth period. My role wasn't just about observation; 
              it was about understanding how a global brand localizes its strategy for the highly competitive Chinese market.
            </p>
          </div>

          {/* Section 2: Key Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                  <TrendingUp className="text-lime-400 mb-4" size={24} />
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Data Analysis</h4>
                  <p className="text-sm text-zinc-400">
                      Tracked weekly sell-through rates and analyzed SKU performance across major platforms like Tmall and JD.com to optimize inventory allocation.
                  </p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                  <ShoppingBag className="text-lime-400 mb-4" size={24} />
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Merchandising</h4>
                  <p className="text-sm text-zinc-400">
                      Assisted in visual merchandising strategies for digital storefronts, ensuring brand consistency while adapting to local trends and festivals.
                  </p>
              </div>
          </div>

          {/* Section 3: The Impact */}
          <div>
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Operational Efficiency
            </h3>
            <p className="leading-relaxed">
               I worked closely with the operations team to streamline the reporting process for end-of-month sales reviews. 
               By automating parts of the data entry process using Excel, I helped reduce the time spent on manual reporting, 
               allowing the team to focus more on strategic planning for the upcoming seasons.
            </p>
            <p className="leading-relaxed mt-4">
               This experience gave me a granular understanding of supply chain logistics and the importance of 
               agile decision-making in retail.
            </p>
          </div>

        </div>

        {/* BOTTOM NAVIGATION FOOTER */}
        <div className="mt-24 border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* GO BACK (Bottom Left) */}
            <button 
                onClick={() => navigate(-1)} 
                className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none text-left"
            >
                <div className="p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
                    <ArrowLeft size={20} />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">Go</span>
                    <span className="font-bold uppercase tracking-wider text-sm">Back</span>
                </div>
            </button>

            {/* Next Stop: Home */}
            <Link 
                to="/" 
                className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors text-right"
            >
                <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">Next Stop</span>
                    <span className="font-bold uppercase tracking-wider text-sm">Home</span>
                </div>
                <div className="p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
                    <ArrowRight size={20} />
                </div>
            </Link>

        </div>

      </motion.div>
    </div>
  );
}