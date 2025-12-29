import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, FileVideo, Quote, ExternalLink, Globe, 
  HeartHandshake, Brain, Database, FileSpreadsheet, Users, Lightbulb, Presentation, FileText, Table, SearchCheck
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function HipocampusProject() {
  const navigate = useNavigate();

  // --- CURSOR LOGIC ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    const handleMouseOver = (e) => {
        const tagName = e.target.tagName.toLowerCase();
        const isClickable = 
            tagName === 'a' || 
            tagName === 'button' || 
            e.target.closest('a') || 
            e.target.closest('button') ||
            e.target.closest('.group');
        setIsHoveringLink(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // --- ANIMATION VARIANTS ---
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      transition: { duration: 0.4, ease: "easeIn" } 
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-12 selection:bg-lime-400 selection:text-black cursor-none overflow-x-hidden">
      
      {/* CUSTOM CURSOR */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: isHoveringLink ? 2.5 : 1,
        }}
        transition={{ ease: "backOut", duration: 0.15 }}
      />

      {/* TOP NAV */}
      <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 mb-12 uppercase tracking-widest text-xs md:text-sm font-bold transition-colors bg-transparent border-none cursor-pointer p-0"
      >
        <ArrowLeft size={16} /> Back
      </button>

      {/* HEADER & HERO */}
      <motion.div 
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
            <span className="text-lime-400 font-bold tracking-widest uppercase mb-2 block text-xs md:text-sm">
                Social Enterprise • Mexico (Remote)
            </span>
            <h1 
                className="text-3xl md:text-5xl font-bold uppercase mb-4 leading-tight" 
                style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Data Engineering & Automation
            </h1>
            <h2 className="text-xl text-zinc-400">Hipocampus Centros de Aprendizaje</h2>
        </div>

        <img 
          src="/hipocampus.jpg" 
          alt="Hipocampus Project" 
          className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl mb-12 border border-zinc-800"
        />
        
        <div className="prose prose-invert prose-lg max-w-none text-zinc-300 space-y-12">
          
          {/* 1. OVERVIEW */}
          <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            className="border-b border-zinc-800 pb-12"
          >
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Mission: Closing the Education Gap
            </h3>
            <p className="leading-relaxed mb-8">
                <strong>Hipocampus Centros de Aprendizaje</strong> is a social enterprise based in Mexico that provides affordable, high-quality childcare and education for children aged 0–6. 
                They target low-income families, specifically factory workers earning minimum wage, to bridge the socioeconomic gap in early childhood development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                            <HeartHandshake size={20} />
                        </div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wide">The B2B Model</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                        Hipocampus partners with corporations (like Danone and Grupo Bimbo) to establish on-site centers. 
                        The company pays &gt;70% of the cost, making it affordable for employees (~€35/month).
                    </p>
                </div>

                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
                            <Users size={20} />
                        </div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wide">Community Impact</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                        Beyond childcare, they employ and train local marginalized women as community educators, providing them with a career plan and economic independence.
                    </p>
                </div>
            </div>
            
             <div className="flex flex-wrap gap-4 mt-8">
                <a href="https://www.hipocampus.mx" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs font-bold uppercase tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors">
                    <Globe size={14} /> Official Website
                </a>
            </div>
          </motion.div>

          {/* 2. SUMMER: IMPACT REPORTING */}
          <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            className="border-b border-zinc-800 pb-12"
          >
            <span className="text-lime-400 font-bold tracking-widest uppercase mb-2 block text-xs">Phase 1: Summer Internship</span>
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Data Cleaning & Impact Reporting
            </h3>
            <p className="leading-relaxed mb-6">
                During the summer, my primary objective was to produce a comprehensive <strong>Impact Report</strong>. 
                Before visualizing the data, I had to address significant data hygiene issues, such as manual entry errors 
                where the same student was recorded twice due to accent variations.
            </p>
            
            <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 mt-1 shrink-0">
                        <Brain size={20} />
                    </div>
                    <div>
                        <strong className="text-white block mb-1">Advanced Data Engineering (ETL)</strong>
                        <span className="text-sm text-zinc-400">
                            Cleaned and transformed <strong>1,610 CEDI evaluation records</strong> (16 variables) and merged them with <strong>7 years of attendance files</strong> (~70-80 children/year).
                            I incorporated ETL skills and validation checks to solve duplicated records caused by inconsistent naming conventions.
                        </span>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400 mt-1 shrink-0">
                        <SearchCheck size={20} />
                    </div>
                    <div>
                        <strong className="text-white block mb-1">Research & Synthesis</strong>
                        <span className="text-sm text-zinc-400">
                           Synthesized ~10 research papers on Mexico’s demographics and early childcare education theories. 
                           This allowed me to tailor explanations to the relevant audience, translating technical metrics into a compelling narrative that proved Hipocampus students bridge the developmental gap.
                        </span>
                    </div>
                </li>
            </ul>

            <div className="mt-8">
                <a 
                    href="https://www.canva.com/design/DAGwiSODb8c/4HtFJNsLLGgoSUm07ZGx8g/view?utm_content=DAGwiSODb8c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h30aa04e2f5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
                >
                    <Presentation size={16} /> View Final Impact Report
                </a>
            </div>
          </motion.div>

          {/* 3. FALL: AUTOMATION & OPS */}
          <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            className="mb-12 border-b border-zinc-800 pb-12"
          >
            <span className="text-lime-400 font-bold tracking-widest uppercase mb-2 block text-xs">Phase 2: Fall Internship</span>
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Operational Automation
            </h3>
            <p className="leading-relaxed mb-6">
                Moving into the Fall, I focused on preventing inconsistent data at the source. The existing manual Excel workflows resulted 
                in version control chaos and lack of referential integrity. 
                To address this, I restructured a relational database and created IDs as well as drop down lists so recording can be as easy as clicking options.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-lime-400/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                            <FileSpreadsheet size={24} />
                        </div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wide">AppSheet Automation</h4>
                    </div>
                    <ul className="list-disc pl-5 text-xs text-zinc-400 space-y-2">
                        <li>Built a custom Google AppSheet app allowing educators to scan QR codes to auto-fill student data.</li>
                        <li>Eliminated manual data entry errors by implementing dropdown logic based on cohorts and age groups.</li>
                    </ul>
                </div>

                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-lime-400/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                            <Database size={24} />
                        </div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wide">Database Integrity (SQL)</h4>
                    </div>
                    <ul className="list-disc pl-5 text-xs text-zinc-400 space-y-2">
                        <li>Restructured the database schema to include unique Student IDs, enforcing referential integrity.</li>
                        <li>Solved the "duplicate record" issue permanently by ensuring every child is uniquely identified across all tables.</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-2">Project Artifacts</h4>
                
                <a 
                    href="https://docs.google.com/spreadsheets/d/1SVG-ee6_uaIEoLlg31zDoT-c9R3mgYb6gt_PayOvWRI/edit?usp=sharing"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-green-500/50 transition-all group"
                >
                    <div className="p-3 bg-green-500/10 rounded-lg text-green-400 group-hover:bg-green-500 group-hover:text-black transition-colors">
                        <Table size={24} />
                    </div>
                    <div>
                        <h5 className="font-bold text-white text-sm uppercase">Restructured Data Dictionary</h5>
                        <p className="text-xs text-zinc-400 mt-1">View the schema definitions used to standardize the database.</p>
                    </div>
                </a>

                <a 
                    href="/omis105.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all group"
                >
                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                        <FileText size={24} />
                    </div>
                    <div>
                        <h5 className="font-bold text-white text-sm uppercase">Database Management (SQL) Project</h5>
                        <p className="text-xs text-zinc-400 mt-1">
                           A class group project modeled off of Hipocampus data, conducting SQL queries to demonstrate how to utilize the restructured data.
                        </p>
                    </div>
                </a>
            </div>
          </motion.div>

          {/* --- VIDEO EMBED SECTION --- */}
          <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                <div className="p-2 bg-lime-400/10 rounded-lg text-lime-400">
                    <FileVideo size={24} />
                </div>
                <h3 className="text-white text-2xl font-bold uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    Final Presentation
                </h3>
            </div>
            
            <div className="w-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl relative group mb-8">
                <video 
                    className="w-full h-auto aspect-video" 
                    controls 
                    preload="metadata"
                    poster="/hipocampus.jpg" 
                >
                    <source src="/Fall Intern Final Presentations.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="text-sm text-zinc-500 mt-4 mb-8 italic text-center">
                *Watch my Miller Center fall quarter presentation introducing the automation workflow and data analysis methodology. <br/>
                Recorded on December 10, 2024 (In-person presentation captured via Zoom).
            </p>

            <div className="bg-zinc-900/30 rounded-xl p-8 border border-zinc-800/50">
                <h4 className="font-bold text-white text-lg uppercase mb-6">Key Challenges & Learnings</h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {/* Card 1 */}
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full group">
                        <div className="flex flex-col items-start gap-3 mb-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                <Presentation size={18} />
                            </div>
                            <h4 className="font-bold text-white text-xs uppercase leading-tight">Technical Storytelling</h4>
                        </div>
                        <p className="text-[10px] text-zinc-400 leading-relaxed">
                            Translated dense technical data into accessible narratives, connecting complex findings directly to business value for stakeholders.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full group">
                        <div className="flex flex-col items-start gap-3 mb-3">
                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                <Lightbulb size={18} />
                            </div>
                            <h4 className="font-bold text-white text-xs uppercase leading-tight">Navigating Ambiguity</h4>
                        </div>
                        <p className="text-[10px] text-zinc-400 leading-relaxed">
                            Self-directed in ambiguous environments, defining project scope and proactively restructuring the entire data infrastructure without prompting.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full group">
                        <div className="flex flex-col items-start gap-3 mb-3">
                            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                                <Database size={18} />
                            </div>
                            <h4 className="font-bold text-white text-xs uppercase leading-tight">Contextualizing Data</h4>
                        </div>
                        <p className="text-[10px] text-zinc-400 leading-relaxed">
                            Learned "clean data" isn't enough; maintained constant dialogue with founders to ensure metrics strictly aligned with educational standards.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full group">
                        <div className="flex flex-col items-start gap-3 mb-3">
                            <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                                <Globe size={18} />
                            </div>
                            <h4 className="font-bold text-white text-xs uppercase leading-tight">Technical Constraints</h4>
                        </div>
                        <p className="text-[10px] text-zinc-400 leading-relaxed">
                            Vetted tools against environmental constraints, selecting Google AppSheet specifically for its robust offline capabilities in rural areas.
                        </p>
                    </div>
                </div>

                <h4 className="font-bold text-white text-lg uppercase mb-4 border-t border-zinc-800 pt-8">Q&A Highlights</h4>
                <div className="space-y-6">
                    <div>
                        <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-1">Q: Scale of Implementation</p>
                        <p className="text-sm text-zinc-300 italic">"Are you working with someone to implement this?"</p>
                        <p className="text-sm text-zinc-400 mt-1">
                           Yes, I am working directly with the founder. Hipocampus currently operates <strong>11 centers</strong>. Once the model is finalized, the founder plans to roll out this automation across all locations immediately.
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-1">Q: Operational Impact</p>
                        <p className="text-sm text-zinc-300 italic">"How does this automation help the organization?"</p>
                        <p className="text-sm text-zinc-400 mt-1">
                           By automating the backend data entry, I am removing hours of manual administrative overhead. This allows the operations team to pivot their focus from spreadsheets to outward-facing tasks that directly benefit the families and children.
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-1">Q: Retrospective</p>
                        <p className="text-sm text-zinc-300 italic">"What would you change?"</p>
                        <p className="text-sm text-zinc-400 mt-1">
                           In the beginning, due to the lack of a structured onboarding process, we spent a lot of time trying to gather context. If I were to do this again, I would immediately schedule regular check-in meetings, ask deeper questions, and not be afraid to request access to necessary materials.
                        </p>
                    </div>
                </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM NAVIGATION FOOTER - MOBILE OPTIMIZED */}
        <div className="mt-12 md:mt-24 border-t border-zinc-800 pt-8 md:pt-12 pb-24 md:pb-12 flex flex-row justify-between items-center gap-4">
            
            {/* LEFT: Go Back */}
            <button 
                onClick={() => navigate(-1)} 
                className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none text-left w-auto"
            >
                <div className="p-2 md:p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all shrink-0">
                    <ArrowLeft size={16} className="md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col items-start min-w-0">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500">Go</span>
                    <span className="font-bold uppercase tracking-wider text-xs md:text-sm">Back</span>
                </div>
            </button>

            {/* RIGHT GROUP: Next Internship + Next Project */}
            <div className="flex flex-row gap-2 md:gap-8 items-center justify-end">
                
                {/* Next Internship */}
                <Link 
                    to="/internships/teamlink" 
                    className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer justify-end"
                >
                    <div className="flex flex-col items-end min-w-0">
                        <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 text-right">Internship</span>
                        <span className="font-bold uppercase tracking-wider text-xs md:text-sm text-right">TeamLink</span>
                    </div>
                </Link>

                {/* Vertical Divider for Mobile */}
                <div className="w-[1px] h-6 bg-zinc-800"></div>

                {/* Next Project */}
                <Link 
                    to="/projects/realseq" 
                    className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer justify-end"
                >
                    <div className="flex flex-col items-end min-w-0">
                        <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 text-right">Project</span>
                        <span className="font-bold uppercase tracking-wider text-xs md:text-sm text-right">GetVirtual</span>
                    </div>
                    <div className="p-2 md:p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all shrink-0">
                        <ArrowRight size={16} className="md:w-5 md:h-5" />
                    </div>
                </Link>
            </div>

        </div>

      </motion.div>
    </div>
  );
}