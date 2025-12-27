import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Quote, Linkedin, ExternalLink, Globe, Instagram, 
  BarChart3, Users, LayoutTemplate, Camera, Building2, Briefcase, Smartphone 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function TeamLinkProject() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-12 selection:bg-lime-400 selection:text-black">
      
      {/* TOP NAV: Back Button */}
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
                Proptech • Sydney, Australia
            </span>
            <h1 
                className="text-3xl md:text-5xl font-bold uppercase mb-4 leading-tight" 
                style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Digital Marketing & Strategy
            </h1>
            <h2 className="text-xl text-zinc-400">TeamLink</h2>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop" 
          alt="Sydney Skyline" 
          className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl mb-12 border border-zinc-800"
        />
        
        <div className="prose prose-invert prose-lg max-w-none text-zinc-300 space-y-12">
          
          {/* 1. WHAT IS TEAMLINK? (Clean Grid - No Cards) */}
          <div className="border-b border-zinc-800 pb-12">
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                What is TeamLink?
            </h3>
            <p className="leading-relaxed mb-10 text-zinc-300">
                TeamLink is an AI-driven SaaS platform that unifies the fragmented real estate ecosystem into a single super-app, digitizing workflows to connect every stakeholder in real-time.
            </p>
            
            {/* Functional Grid - NO CARD BACKGROUNDS, Perfect Alignment */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Developers */}
                <div className="flex gap-4">
                    <div className="shrink-0 p-2 bg-blue-500/10 rounded-lg text-blue-400 h-fit mt-1">
                        <Building2 size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">Developers</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            End-to-end settlement management, finance tracking, and automated sales reporting for total project visibility.
                        </p>
                    </div>
                </div>

                {/* Agencies */}
                <div className="flex gap-4">
                    <div className="shrink-0 p-2 bg-lime-400/10 rounded-lg text-lime-400 h-fit mt-1">
                        <Briefcase size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">Agencies</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            Streamlined inventory control with real-time stock allocation and automated workflow management.
                        </p>
                    </div>
                </div>

                {/* Agents */}
                <div className="flex gap-4">
                    <div className="shrink-0 p-2 bg-orange-500/10 rounded-lg text-orange-400 h-fit mt-1">
                        <Smartphone size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">Agents</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            AI-Driven CRM for pipeline monitoring, commission tracking, and real-time deal status alerts.
                        </p>
                    </div>
                </div>

            </div>

            {/* COMPANY LINKS */}
            <div className="flex flex-wrap gap-4 mt-10">
                <a 
                    href="https://www.teamlink.com.au/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs font-bold uppercase tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors"
                >
                    <Globe size={14} /> Official Website
                </a>
                <a 
                    href="https://www.instagram.com/teamlink.au/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs font-bold uppercase tracking-widest hover:border-pink-500 hover:text-pink-500 transition-colors"
                >
                    <Instagram size={14} /> Instagram
                </a>
            </div>
          </div>

          {/* 2. MY IMPACT (Aligned Bullet Points) */}
          <div>
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>
                My Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Card 1: Data */}
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-lime-400/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-lime-400/10 rounded-lg text-lime-400">
                            <BarChart3 size={24} />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm">Data & Analytics</h4>
                    </div>
                    {/* Changed list-inside to pl-5 for correct indentation alignment */}
                    <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-2">
                        <li>Segmented complex user data based on past purchasing behaviors.</li>
                        <li>Executed targeted email marketing campaigns (EDMs) with improved engagement.</li>
                    </ul>
                </div>

                {/* Card 2: UX */}
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-lime-400/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                            <LayoutTemplate size={24} />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm">UX Optimization</h4>
                    </div>
                    <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-2">
                        <li>Created comprehensive process maps to identify workflow gaps.</li>
                        <li>Optimized platform user experience for developer and agency clients.</li>
                    </ul>
                </div>

                {/* Card 3: Content */}
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-lime-400/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                            <Users size={24} />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm">Content Strategy</h4>
                    </div>
                    <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-2">
                        <li>Designed and managed company social media profiles and digital assets.</li>
                        <li>Ensured consistent brand messaging across all digital channels.</li>
                    </ul>
                </div>

                {/* Card 4: Project Mgmt */}
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-lime-400/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                            <Camera size={24} />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm">Project Coordination</h4>
                    </div>
                    <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-2">
                        <li>Led communications with CGI vendors regarding pricing and logistics.</li>
                        <li>Facilitated the launch of a new project marketing proposal.</li>
                    </ul>
                </div>

            </div>
          </div>

          {/* 3. THE LENS (Photography Side Quest) */}
          <div>
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Beyond the Role
            </h3>
            <p className="leading-relaxed">
               I also stepped in as the official photographer for the <strong>Marquet & Mary Agent Day</strong>, 
               one of the company's largest events attended by over 250 agents. This offered a unique opportunity to observe 
               how digital strategy translates into real-world community building.
            </p>
          </div>

          {/* RECOMMENDATION CARD (THEO) */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden group hover:border-lime-400/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Quote size={80} />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-zinc-800 overflow-hidden border-2 border-zinc-700 shrink-0">
                    <img src="/TheoA.jpg" alt="Theo Adricula" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg leading-none">Theo Adricula</h4>
                    <p className="text-xs text-lime-400 uppercase tracking-widest mt-1">Group Marketing Manager</p>
                </div>
            </div>

            <p className="italic text-zinc-300 leading-relaxed relative z-10">
              "Elaine stood out for her initiative, collaboration, and analytical skills... Her ability to analyse data, provide actionable insights, and propose optimisations for platform processes made her an indispensable part of the program. Elaine demonstrated a rare combination of strategic thinking and hands-on execution... Her contributions had a lasting impact on the success of the program."
            </p>

            <div className="mt-6 pt-6 border-t border-zinc-800 flex justify-between items-center">
                 <span className="text-xs text-zinc-500">October 15, 2024</span>
                 <a 
                    href="https://www.linkedin.com/in/theoadricula/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                 >
                    View Profile <ExternalLink size={12} />
                 </a>
            </div>
          </div>

          {/* Section 4 */}
          <div>
             <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Continuous Growth
            </h3>
            <p className="leading-relaxed text-sm text-zinc-400">
                During this period, I also dedicated 50+ hours to self-study, achieving my <strong>ARGUS Enterprise Certification</strong> 
                to deepen my proficiency in commercial real estate financial flow.
            </p>
          </div>

          {/* AESTHETIC LINKEDIN POST */}
          <div className="mt-16 pt-8 border-t border-zinc-800">
             <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-8 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Read more from my linkedin post
             </h3>
             
             {/* THE ENTIRE CARD IS A LINK */}
             <a 
                href="https://www.linkedin.com/posts/elainezhang2027_teamlink-proptech-marketingintern-activity-7244203186608074752--q-b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcVUK0BD-8w_CFKXOKWum3KqNubf1K6UFQ"
                target="_blank" 
                rel="noopener noreferrer"
                className="block max-w-xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-500 hover:scale-[1.01] transition-all duration-300 shadow-2xl cursor-pointer group"
             >
                 
                 {/* Header */}
                 <div className="p-4 flex gap-3 items-start border-b border-zinc-800/50 group-hover:bg-zinc-800/50 transition-colors">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-zinc-800">
                        <img src="/ezheadshot.jpg" alt="Elaine" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                             <div>
                                <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Elaine Zhang</h4>
                                <p className="text-[10px] text-zinc-400 truncate">Accounting & Information Systems</p>
                                <div className="flex items-center gap-1 text-[10px] text-zinc-500 mt-0.5">
                                    <span>1y • </span>
                                    <span>Edited</span>
                                </div>
                             </div>
                             <Linkedin size={16} className="text-[#0077b5]" />
                        </div>
                    </div>
                 </div>

                 {/* Content Body */}
                 <div className="p-4 text-sm text-zinc-300 leading-relaxed space-y-3 bg-zinc-900 group-hover:bg-zinc-900/80 transition-colors">
                    <p>
                        🌍 <span className="font-bold text-white">Taking my career journey across continents!</span> 🇦🇺
                    </p>
                    <p>
                        This summer, I had the amazing opportunity to intern in NSW Sydney, Australia, as a Digital Marketing Intern at Teamlink, a diverse proptech startup!
                    </p>
                    <p>
                        For me, my 5 weeks at Teamlink was a special opportunity to work beyond the traditional marketing campaigns...
                    </p>
                    <p className="opacity-80">
                         My role involved optimizing customer journey maps, analyzing user data for email automations...
                    </p>
                 </div>

                 {/* 3-IMAGE COLLAGE LAYOUT */}
                 <div className="grid grid-cols-2 gap-0.5 bg-black h-64 md:h-80 w-full border-y border-zinc-800/50 opacity-90 group-hover:opacity-100 transition-opacity">
                    {/* Image 1 (Large Left) */}
                    <div className="h-full w-full relative overflow-hidden">
                        <img 
                            src="/teamlink1.jpg" 
                            alt="TeamLink 1" 
                            className="absolute inset-0 w-full h-full object-cover" 
                        />
                    </div>
                    
                    {/* Right Column (Stacked 2 & 3) */}
                    <div className="grid grid-rows-2 gap-0.5 h-full w-full">
                        <div className="relative w-full h-full overflow-hidden">
                             <img 
                                src="/teamlink2.jpg" 
                                alt="TeamLink 2" 
                                className="absolute inset-0 w-full h-full object-cover" 
                             />
                        </div>
                        <div className="relative w-full h-full overflow-hidden">
                             <img 
                                src="/teamlink3.jpg" 
                                alt="TeamLink 3" 
                                className="absolute inset-0 w-full h-full object-cover" 
                             />
                        </div>
                    </div>
                 </div>

                 {/* Action Bar (Visual only) */}
                 <div className="px-4 py-3 border-t border-zinc-800/50 flex justify-between items-center bg-zinc-900 group-hover:bg-zinc-800/50 transition-colors">
                    <span className="text-xs font-bold text-lime-400 uppercase tracking-widest flex items-center gap-2">
                        Read Full Post <ExternalLink size={12} />
                    </span>
                 </div>
             </a>

          </div>

        </div>

        {/* BOTTOM NAVIGATION FOOTER */}
        <div className="mt-24 border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* LEFT: Previous Internship */}
            <Link 
                to="/projects/hipocampus" 
                className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors cursor-pointer w-full md:w-auto justify-start"
            >
                <div className="p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
                    <ArrowLeft size={20} />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">Previous Internship</span>
                    <span className="font-bold uppercase tracking-wider text-sm">Hipocampus</span>
                </div>
            </Link>

            {/* RIGHT: Next Internship */}
            <Link 
                to="/internships/crocs" 
                className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors cursor-pointer w-full md:w-auto justify-end"
            >
                <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">Next Internship</span>
                    <span className="font-bold uppercase tracking-wider text-sm">Crocs Asia</span>
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