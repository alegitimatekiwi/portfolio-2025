import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, ExternalLink, Globe, Linkedin, Users, BarChart3, 
  FileText, Search, Megaphone, CheckCircle, BookOpen, Presentation, 
  Instagram, ClipboardList, BrainCircuit, LineChart, MessageSquare, 
  TrendingUp, MousePointerClick, Eye
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function RealSeqProject() {
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
  const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.4, ease: "easeIn" } 
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
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

      {/* HEADER */}
      <motion.div 
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
            <span className="text-lime-400 font-bold tracking-widest uppercase mb-2 block text-xs md:text-sm">
                Project Management • Non-Profit Leadership
            </span>
            <h1 
                className="text-3xl md:text-5xl font-bold uppercase mb-4 leading-tight" 
                style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              GetVirtual: Digital Strategy
            </h1>
            <h2 className="text-xl text-zinc-400">RealSeq Biosciences & Hale.Nani.Kai</h2>
        </div>

        {/* TEAM BONDING PHOTO */}
        <motion.div 
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
        >
            <div className="relative group overflow-hidden rounded-xl border border-zinc-800">
                <img 
                    src="/beatthelock.jpg" 
                    alt="Team Bonding Escape Room" 
                    className="w-full h-auto object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6">
                    <p className="text-zinc-300 text-xs md:text-sm italic">
                        SCU GetVirtual team bonding event at "Beat The Lock" Escape Room — April 17th, 2025
                    </p>
                </div>
            </div>
        </motion.div>

        {/* 1. GETVIRTUAL: CHAPTER BUILDING & TRAINING */}
        <motion.div 
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl mb-12 relative overflow-hidden"
        >
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-lime-400/10 rounded-lg text-lime-400">
                        <Users size={24} />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        Building the SCU Chapter
                    </h3>
                </div>
                
                <p className="text-zinc-300 leading-relaxed mb-8 text-sm">
                    GetVirtual is a student-run organization that helps small businesses build their online presence, including but not limited to creating websites and strategizing social media posts for platforms like LinkedIn and Instagram.
                </p>

                {/* --- RESPONSIVE LAYOUT: 2x2 Grid on Mobile, 3-Col on Desktop --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                    
                    {/* Card 1 */}
                    <div className="bg-zinc-950/50 p-4 md:p-6 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full">
                        <div className="flex flex-col gap-3">
                            <BookOpen size={20} className="text-lime-400 shrink-0" />
                            <div>
                                <h4 className="text-white block text-sm mb-2 uppercase tracking-wide font-bold leading-tight">Chapter Restructuring</h4>
                                <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed">
                                    Restructured infrastructure by building the official website and developing a comprehensive Canvas training portal for onboarding.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-zinc-950/50 p-4 md:p-6 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full">
                        <div className="flex flex-col gap-3">
                            <Presentation size={20} className="text-lime-400 shrink-0" />
                            <div>
                                <h4 className="text-white block text-sm mb-2 uppercase tracking-wide font-bold leading-tight">Course Curriculum</h4>
                                <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed">
                                    Developed curriculum covering PM workflows (contracts, milestones) and technical skills: Wix, SEO, social algorithms, and Zapier.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-zinc-950/50 p-4 md:p-6 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full">
                        <div className="flex flex-col gap-3">
                            <Users size={20} className="text-lime-400 shrink-0" />
                            <div>
                                <h4 className="text-white block text-sm mb-2 uppercase tracking-wide font-bold leading-tight">Weekly Sessions</h4>
                                <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed">
                                    Hosted weekly workshops for mentorship, deliverable reviews, and client role-play to ensure readiness for live engagements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE ONLY IMAGE CELL (Bottom Right in 2x2 grid) */}
                    <div className="relative group flex justify-center items-center bg-zinc-950/50 rounded-xl border border-zinc-800 overflow-hidden md:hidden h-full">
                        <img 
                            src="/course.jpg" 
                            alt="GetVirtual Canvas Training Course" 
                            /* Added 'object-left' to align image to the left edge */
                            className="w-full h-full object-cover object-left opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all"
                        />
                    </div>
                </div>

                {/* DESKTOP ONLY FULL WIDTH IMAGE */}
                <div className="relative group hidden md:flex justify-center">
                    <img 
                        src="/course.jpg" 
                        alt="GetVirtual Canvas Training Course" 
                        className="w-full max-w-3xl h-auto object-contain rounded-xl border border-zinc-800 shadow-2xl bg-zinc-950"
                    />
                </div>
                
                <div className="mt-8 pt-6 border-t border-zinc-800">
                    <a 
                        href="https://scugetvirtual.wixsite.com/scugv" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400 hover:text-white transition-colors"
                    >
                        Visit SCU GetVirtual <ExternalLink size={12} />
                    </a>
                </div>
            </div>
        </motion.div>

        {/* 2. PROJECT MANAGER IMPACT */}
        <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            exit="exit"
            className="mb-20"
        >
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-8 border-l-4 border-lime-400 pl-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Project Manager Impact
            </h3>
            
            <p className="text-zinc-300 leading-relaxed mb-8 text-sm">
                As the Lead Project Manager for RealSeq Biosciences and Hale.Nani.Kai, I orchestrated the entire engagement lifecycle, bridging technical analysis with creative strategy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full">
                    <div className="flex flex-col items-start gap-3 mb-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                            <ClipboardList size={18} />
                        </div>
                        <h4 className="font-bold text-white text-xs uppercase leading-tight">Operational Infrastructure</h4>
                    </div>
                    <ul className="list-disc pl-3 text-[10px] text-zinc-400 space-y-2 leading-relaxed marker:text-zinc-600">
                        <li>Drafted contracts, proposals, and invoices.</li>
                        <li>Enforced rigorous task lists for team accountability.</li>
                    </ul>
                </div>

                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full">
                    <div className="flex flex-col items-start gap-3 mb-3">
                        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                            <BrainCircuit size={18} />
                        </div>
                        <h4 className="font-bold text-white text-xs uppercase leading-tight">Strategic Synthesis</h4>
                    </div>
                    <ul className="list-disc pl-3 text-[10px] text-zinc-400 space-y-2 leading-relaxed marker:text-zinc-600">
                        <li>Synthesized industry research into project roadmaps.</li>
                        <li>Translated business goals into weekly team tasks.</li>
                    </ul>
                </div>

                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full">
                    <div className="flex flex-col items-start gap-3 mb-3">
                        <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                            <MessageSquare size={18} />
                        </div>
                        <h4 className="font-bold text-white text-xs uppercase leading-tight">Diagnostic Consulting</h4>
                    </div>
                    <ul className="list-disc pl-3 text-[10px] text-zinc-400 space-y-2 leading-relaxed marker:text-zinc-600">
                        <li>Led interviews to uncover root causes of stagnation.</li>
                        <li>Identified pain points like low B2B engagement.</li>
                    </ul>
                </div>

                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors h-full">
                    <div className="flex flex-col items-start gap-3 mb-3">
                        <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                            <LineChart size={18} />
                        </div>
                        <h4 className="font-bold text-white text-xs uppercase leading-tight">Analytics & Reporting</h4>
                    </div>
                    <ul className="list-disc pl-3 text-[10px] text-zinc-400 space-y-2 leading-relaxed marker:text-zinc-600">
                        <li>Produced traffic reports to validate ROI.</li>
                        <li>Used data insights to pivot strategies in real-time.</li>
                    </ul>
                </div>

            </div>
        </motion.div>

        {/* ====================================================================================
            CLIENT 1: REALSEQ BIOSCIENCES
           ==================================================================================== */}
        <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            exit="exit"
            className="mb-24 relative"
        >
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800 hidden md:block"></div>

            <div className="md:pl-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-zinc-800 pb-4 gap-4">
                    <div>
                        <h3 className="text-3xl font-bold uppercase text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            RealSeq Biosciences
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                            <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
                                April 2024 — October 2024
                            </span>
                            <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                            <span className="text-zinc-400 text-xs italic">
                                Managed Team of 5
                            </span>
                        </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-900/30 border border-blue-800 text-blue-400 text-[10px] font-bold uppercase rounded-full w-fit">
                        B2B Marketing Strategy
                    </span>
                </div>

                <div className="space-y-8">
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-2">The Challenge</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            RealSeq is a biotech startup specializing in RNA fragmentomics. With a small team, they lacked the resources to maintain an active LinkedIn presence capable of connecting with technical B2B buyers and sponsors.
                        </p>
                    </div>
                    
                    <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                        <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-4">Strategic Execution</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <Search size={18} className="text-blue-400 shrink-0" />
                                <div>
                                    <span className="text-white block text-xs mb-1 uppercase tracking-wide font-bold">"ToFu/BoFu" Analysis</span>
                                    <p className="text-[10px] text-zinc-400">Analyzed Top-of-Funnel (awareness) vs. Bottom-of-Funnel (conversion) content strategies to effectively target niche biotech sales groups.</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Megaphone size={18} className="text-blue-400 shrink-0" />
                                <div>
                                    <span className="text-white block text-xs mb-1 uppercase tracking-wide font-bold">Technical Translation</span>
                                    <p className="text-[10px] text-zinc-400">Translated complex concepts like NGS and RNA fragments into accessible, storyboarded LinkedIn posts tailored for a professional audience.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex gap-4">
                        <a 
                            href="https://www.realseq.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs font-bold uppercase tracking-widest hover:border-blue-400 hover:text-blue-400 transition-colors"
                        >
                            <Globe size={14} /> Official Website
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/realseq-biosciences/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs font-bold uppercase tracking-widest hover:border-blue-400 hover:text-blue-400 transition-colors"
                        >
                            <Linkedin size={14} /> LinkedIn
                        </a>
                    </div>

                    <div className="border-l-4 border-lime-400 pl-6 py-2 italic text-zinc-300 text-sm leading-relaxed bg-zinc-900/30 p-4 rounded-r-lg">
                        "The GetVirtual team was able to effectively present RealSeq's biotechnology products and services which can be difficult to do for a general audience. We really enjoyed working with the energetic, professional, and talented SCU GetVirtual team!"
                        <br/>
                        <span className="text-lime-400 font-bold not-italic text-xs mt-3 block">— Anne Scholz, Co-founder/COO of RealSeq Biosciences</span>
                    </div>
                </div>
            </div>
        </motion.div>


        {/* ====================================================================================
            CLIENT 2: HALE.NANI.KAI
           ==================================================================================== */}
        <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            exit="exit"
            className="mb-12 relative"
        >
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800 hidden md:block"></div>

             <div className="md:pl-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-zinc-800 pb-4 gap-4">
                    <div>
                        <h3 className="text-3xl font-bold uppercase text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            Hale.Nani.Kai
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                            <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
                                October 2024 — August 2025
                            </span>
                            <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                            <span className="text-zinc-400 text-xs italic">
                                Managed Team of 3
                            </span>
                        </div>
                    </div>
                    <span className="px-3 py-1 bg-pink-900/30 border border-pink-800 text-pink-400 text-[10px] font-bold uppercase rounded-full w-fit">
                        Hospitality Management
                    </span>
                </div>

                {/* IMPACT STATS HEADER - 2x2 ON MOBILE, 4 COLS DESKTOP */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                        <TrendingUp size={20} className="text-pink-500 mb-2" />
                        <span className="text-xl md:text-2xl font-bold text-white mb-1">+212%</span>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 leading-tight">Reach</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                        <Eye size={20} className="text-pink-500 mb-2" />
                        <span className="text-xl md:text-2xl font-bold text-white mb-1">6,951</span>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 leading-tight">Views</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                        <Users size={20} className="text-pink-500 mb-2" />
                        <span className="text-xl md:text-2xl font-bold text-white mb-1">+21%</span>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 leading-tight">Growth</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                        <MousePointerClick size={20} className="text-pink-500 mb-2" />
                        <span className="text-xl md:text-2xl font-bold text-white mb-1">20</span>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 leading-tight">Clicks</span>
                    </div>
                </div>

                {/* VISUAL ANALYTICS - MOBILE ADJUSTMENT (2 side-by-side, then 1 full) */}
                <div className="mb-12 overflow-hidden">
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-6">Impact Visualization</h4>
                    
                    {/* Desktop View: Profile Left, Mobiles Right */}
                    <div className="hidden md:flex flex-row gap-4 items-end">
                        <div className="w-1/2">
                            <img 
                                src="/profile.jpg" 
                                alt="Profile Growth Analytics" 
                                className="rounded-lg border border-zinc-800 shadow-lg w-full h-auto object-cover block" 
                            />
                        </div>
                        <div className="w-1/2 grid grid-cols-2 gap-4">
                            <img 
                                src="/halenanikai1.jpg" 
                                alt="Mobile Engagement Stats" 
                                className="rounded-lg border border-zinc-800 shadow-lg w-full h-auto object-cover block" 
                            />
                            <img 
                                src="/halenanikai2.jpg" 
                                alt="Mobile Interaction Stats" 
                                className="rounded-lg border border-zinc-800 shadow-lg w-full h-auto object-cover block" 
                            />
                        </div>
                    </div>

                    {/* Mobile View: 2 Mobiles Top, Profile Bottom */}
                    <div className="flex md:hidden flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <img 
                                src="/halenanikai1.jpg" 
                                alt="Mobile Engagement Stats" 
                                className="rounded-lg border border-zinc-800 shadow-lg w-full h-auto object-cover block" 
                            />
                            <img 
                                src="/halenanikai2.jpg" 
                                alt="Mobile Interaction Stats" 
                                className="rounded-lg border border-zinc-800 shadow-lg w-full h-auto object-cover block" 
                            />
                        </div>
                        <div className="w-full">
                            <img 
                                src="/profile.jpg" 
                                alt="Profile Growth Analytics" 
                                className="rounded-lg border border-zinc-800 shadow-lg w-full h-auto object-cover block" 
                            />
                        </div>
                    </div>

                    <p className="text-center text-[10px] text-zinc-500 mt-4 italic">
                        *Analytics showing 21% follower increase and +212% account reach over 90 days.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-4">Context & The Core Challenge</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Hale.Nani.Kai is a luxury vacation rental on Kauai's south shore. Their primary struggle was low conversion rates for direct bookings and a lack of organic internet traffic, forcing a heavy reliance on third-party platforms.
                        </p>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            During the diagnostic phase, we also uncovered a significant anomaly: Google Analytics showed a massive volume of "Direct Traffic." I authored a report identifying this as "Dark Traffic" and proposed a UTM parameter strategy to track ROI, which they then handed off to their developers for implementation.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mt-6">
                            <a 
                                href="https://www.halenanikai.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs font-bold uppercase tracking-widest hover:border-pink-400 hover:text-pink-400 transition-colors"
                            >
                                <Globe size={14} /> Official Website
                            </a>
                            <a 
                                href="https://www.instagram.com/hale.nani.kai/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs font-bold uppercase tracking-widest hover:border-pink-400 hover:text-pink-400 transition-colors"
                            >
                                <Instagram size={14} /> Instagram
                            </a>
                        </div>
                    </div>
                    
                    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex flex-col justify-center">
                        <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-4 text-center">My Key Contributions</h4>
                        <ul className="space-y-3 text-xs text-zinc-400">
                            <li className="flex gap-2">
                                <CheckCircle size={14} className="text-lime-400 shrink-0" />
                                <span>Maintained a 16-page Instagram strategy document (content pillars, shot lists).</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle size={14} className="text-lime-400 shrink-0" />
                                <span>Led outreach for 2 tiers of influencers (TikTok/IG) & local photographers.</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle size={14} className="text-lime-400 shrink-0" />
                                <span>Secured collaborations with local businesses (e.g., food trucks) for visibility.</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle size={14} className="text-lime-400 shrink-0" />
                                <span>Delivered actionable Instagram UI and Website SEO audits.</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle size={14} className="text-lime-400 shrink-0" />
                                <span>Authored technical report proposing UTM tracking for dark traffic.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* DOCUMENTS / ARTIFACTS SECTION */}
                <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl">
                    <h4 className="font-bold text-white text-lg uppercase tracking-wide mb-6">
                        Strategic Documentation
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* DOC 1: INSTAGRAM STRATEGY */}
                        <a 
                            href="/strategy.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group p-4 bg-zinc-900 border border-zinc-700 hover:border-lime-400 rounded-lg transition-all flex items-start gap-4"
                        >
                            <div className="p-3 bg-zinc-800 rounded-md text-zinc-400 group-hover:text-lime-400 group-hover:bg-lime-400/10 transition-colors">
                                <BarChart3 size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-sm uppercase">Instagram Strategy Guide</h5>
                                <p className="text-[10px] text-zinc-400 mt-1 leading-relaxed">
                                    The comprehensive 16-page content pillar and shot list document delivered to the client.
                                </p>
                            </div>
                        </a>

                        {/* DOC 2: PROPOSAL */}
                        <a 
                            href="/proposal.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group p-4 bg-zinc-900 border border-zinc-700 hover:border-pink-500 rounded-lg transition-all flex items-start gap-4"
                        >
                            <div className="p-3 bg-zinc-800 rounded-md text-zinc-400 group-hover:text-pink-500 group-hover:bg-pink-500/10 transition-colors">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-sm uppercase">Paid Engagement Proposal</h5>
                                <p className="text-[10px] text-zinc-400 mt-1 leading-relaxed">
                                    The business proposal outlining the transition from our initial free audit to a paid strategic retainer.
                                </p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </motion.div>

        {/* BOTTOM NAVIGATION FOOTER - MOBILE OPTIMIZED */}
        <div className="mt-12 md:mt-24 border-t border-zinc-800 pt-8 md:pt-12 pb-24 md:pb-12 flex flex-row justify-between items-center gap-4">
            
            {/* LEFT: Previous Project */}
            <Link 
                to="/projects/hipocampus" 
                className="group flex items-center gap-2 md:gap-4 text-zinc-400 hover:text-white transition-colors cursor-pointer flex-1 justify-start w-auto"
            >
                <div className="p-2 md:p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all shrink-0">
                    <ArrowLeft size={16} className="md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col items-start min-w-0">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 truncate w-full text-left">Previous Project</span>
                    <span className="font-bold uppercase tracking-wider text-xs md:text-sm truncate w-full text-left">Hipocampus</span>
                </div>
            </Link>

            {/* RIGHT: Next Project */}
            <Link 
                to="/projects/tamales" 
                className="group flex items-center gap-2 md:gap-4 text-zinc-400 hover:text-white transition-colors cursor-pointer flex-1 justify-end w-auto text-right"
            >
                <div className="flex flex-col items-end min-w-0">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 truncate w-full text-right">Next Project</span>
                    <span className="font-bold uppercase tracking-wider text-xs md:text-sm truncate w-full text-right">Irving's Tamales</span>
                </div>
                <div className="p-2 md:p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all shrink-0">
                    <ArrowRight size={16} className="md:w-5 md:h-5" />
                </div>
            </Link>

        </div>

      </motion.div>
    </div>
  );
}