import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, ShoppingBag, Search, Code, 
  ExternalLink, Globe, MapPin, Users, DollarSign, BookOpen, 
  ChefHat, CheckCircle, TrendingUp, Video, FileText
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function TamalesProject() {
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
                Neighborhood Prosperity Initiative (BUSN 188)
            </span>
            <h1 
                className="text-3xl md:text-5xl font-bold uppercase mb-4 leading-tight" 
                style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Irving's <span className="text-lime-400">Chicken Tamales</span>
            </h1>
            <h2 className="text-xl text-zinc-400">Sole Proprietorship Consulting</h2>
        </div>

        {/* HERO IMAGE: CLIENT DINNER */}
        <motion.div 
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
        >
            <div className="relative group overflow-hidden rounded-xl border border-zinc-800">
                <img 
                    src="/tamales.jpg" 
                    alt="Team J-RAE Dinner with Irving" 
                    className="w-full h-auto object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6">
                    <p className="text-zinc-300 text-xs md:text-sm italic">
                        First client dinner with our team (J-RAE) at Akita Sushi with Irving. <br className="md:hidden" />
                        From left to right: James, Ryan, Irving, Adrian, and Me.
                    </p>
                </div>
            </div>
        </motion.div>

        {/* CONTEXT & CHALLENGE */}
        <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            exit="exit"
            className="border-b border-zinc-800 pb-12 mb-12"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-lime-400/10 rounded-lg text-lime-400">
                    <MapPin size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    The Context
                </h3>
            </div>
            
            <p className="leading-relaxed text-zinc-300 mb-8">
                This project was part of the Neighborhood Prosperity Initiative course. We partnered with a local tamales vendor operating at a gas station and farmers market. Despite a loyal customer base, his lack of digital presence limited growth beyond his immediate vicinity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-2">Winter Quarter: Diagnosis</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                        We conducted site visits and interviews to understand his motivations. We identified that his lack of an online presence was the primary bottleneck to growth.
                    </p>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-2">Spring Quarter: Execution</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                        We transitioned to execution by implementing a marketing plan, building a website, and navigating real world crises such as the sudden loss of his industrial kitchen.
                    </p>
                </div>
            </div>
        </motion.div>

        {/* STRATEGIC EXECUTION GRID */}
        <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            exit="exit"
            className="mb-16"
        >
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-8 border-l-4 border-lime-400 pl-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Digital Marketing Strategy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. LOCAL SEO */}
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 w-fit">
                            <Search size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm uppercase mb-2">Local SEO & Presence</h4>
                            <ul className="list-disc list-inside md:list-outside pl-0 md:pl-4 text-xs text-zinc-400 space-y-2">
                                <li>Set up Google My Business and Yelp pages to capture local search traffic.</li>
                                <li>Guided Irving through the mandatory video verification process to activate his Google profile.</li>
                                <li>Linked all profiles to Instagram to cross pollinate traffic.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2. STORYTELLING WEBSITE */}
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 w-fit">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm uppercase mb-2">Wix Website & Branding</h4>
                            <ul className="list-disc list-inside md:list-outside pl-0 md:pl-4 text-xs text-zinc-400 space-y-2">
                                <li>Walked Irving through the entire Wix setup process and gathered necessary documentation.</li>
                                <li>Built a bilingual site focused on storytelling to connect with his diverse customer base.</li>
                                <li>Integrated Square for seamless payment processing.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. SOCIAL EXPANSION */}
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-colors">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
                        <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400 w-fit">
                            <Users size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm uppercase mb-2">Photography & Content</h4>
                            <ul className="list-disc list-inside md:list-outside pl-0 md:pl-4 text-xs text-zinc-400 space-y-2">
                                <li>Captured high quality photography of his dishes to make the website aesthetically appealing.</li>
                                <li>Produced video content and bio variations for Instagram.</li>
                                <li>Created a Facebook page to reach older local demographics.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
                <a 
                    href="https://chikenstamales.wixsite.com/home" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-black text-xs font-bold uppercase tracking-widest hover:bg-lime-400 transition-colors shadow-lg justify-center"
                >
                    <Globe size={16} /> Visit Live Website
                </a>
            </div>
        </motion.div>

        {/* VISUAL GALLERY - GRID ADJUSTED FOR ASPECT RATIOS */}
        <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            exit="exit"
            className="mb-20"
        >
            <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-8 border-l-4 border-lime-400 pl-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Content Creation & Visuals
            </h3>
            
            {/* Desktop: 3-column grid. Mobile: 1 column stack. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* VIDEO: Horizontal (Spans 2 columns on desktop) */}
                <div className="md:col-span-2 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 h-64 md:h-80 relative group">
                    <video 
                        className="w-full h-full object-cover" 
                        controls 
                        playsInline
                        poster="/tamales.jpg"
                    >
                        <source src="/filming.MOV" type="video/quicktime" />
                        <source src="/filming.MOV" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 rounded-md flex items-center gap-1">
                        <Video size={12} className="text-white" />
                        <span className="text-[10px] font-bold text-white uppercase">Behind the Scenes</span>
                    </div>
                </div>

                {/* TAMALE PHOTO: Vertical (Takes 1 column, full height) */}
                <div className="relative group rounded-xl overflow-hidden border border-zinc-800 h-64 md:h-80 md:col-span-1">
                    <img 
                        src="/tamale.jpg" 
                        alt="Product shot of tamale" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                </div>

                {/* IRVING PHOTO: Horizontal (Spans 2 columns on desktop) */}
                <div className="md:col-span-2 relative group rounded-xl overflow-hidden border border-zinc-800 h-64 md:h-64">
                    <img 
                        src="/irving1.jpg" 
                        alt="Client site visit" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* LOGO: Square (Takes 1 column) */}
                <div className="md:col-span-1 relative group rounded-xl overflow-hidden border border-zinc-800 h-64 md:h-64 bg-zinc-900 flex items-center justify-center p-4">
                    <img 
                        src="/logo.jpg" 
                        alt="Rebranding logo concepts" 
                        className="w-full h-full object-contain" 
                    />
                </div>

            </div>
            <p className="text-center text-[10px] text-zinc-500 mt-4 italic">
                Capturing content on-site at the Farmers Market and developing visual assets for the rebrand.
            </p>
        </motion.div>

        {/* SUMMARY: REFLECTION (UPDATED) */}
        <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            exit="exit"
            className="mb-20 bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden"
        >
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-lime-400/10 rounded-lg text-lime-400">
                        <FileText size={24} />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        Reflection Summary
                    </h3>
                </div>
                
                <div className="prose prose-invert prose-sm text-zinc-300 max-w-2xl">
                    <p className="mb-4 leading-relaxed">
                        This experience broadened my understanding of poverty and inequality beyond theoretical coursework. Interacting directly with a small business owner like Irving revealed challenges I had not anticipated, such as the precariousness of permits and supply chains. It taught me that small business ownership has no fixed end time and requires constant adaptation.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        A critical moment occurred when Irving's industrial kitchen went bankrupt in week 7 of spring quarter. We had to pivot our entire $3,000 grant budget from marketing materials to a down payment for a new kitchen space. This crisis underscored a vital lesson: survival comes before strategy.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        Working with my team (J-RAE) was a highlight of my academic career. We balanced our distinct roles effectively, from Adrian's storytelling to James's permit research and Ryan's long term planning. It reinforced that the best way to learn business is to throw yourself into it and work it out as you go.
                    </p>
                    
                    <div className="mt-6">
                        <a 
                            href="/npireflection.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400 hover:text-white transition-colors"
                        >
                            <BookOpen size={14} /> Read Full Reflection PDF
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>

      </motion.div>

      {/* BOTTOM NAVIGATION FOOTER */}
      <div className="mt-12 md:mt-24 border-t border-zinc-800 pt-8 md:pt-12 pb-24 md:pb-12">
          <div className="max-w-4xl mx-auto flex flex-row justify-between items-center gap-4 md:gap-8">
              
              {/* LEFT: Previous Project (RealSeq) */}
              <Link 
                  to="/projects/realseq" 
                  className="group flex items-center gap-2 md:gap-4 text-zinc-400 hover:text-white transition-colors cursor-pointer flex-1 justify-start w-auto"
              >
                  <div className="p-2 md:p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all shrink-0">
                      <ArrowLeft size={16} className="md:w-5 md:h-5" />
                  </div>
                  <div className="flex flex-col items-start min-w-0">
                      <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 truncate w-full text-left">Previous Project</span>
                      <span className="font-bold uppercase tracking-wider text-xs md:text-sm truncate w-full text-left">RealSeq</span>
                  </div>
              </Link>

              {/* RIGHT: Next Project (Econometrics) */}
              <Link 
                  to="/projects/econometrics" 
                  className="group flex items-center gap-2 md:gap-4 text-zinc-400 hover:text-white transition-colors cursor-pointer flex-1 justify-end w-auto text-right"
              >
                  <div className="flex flex-col items-end min-w-0">
                      <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 truncate w-full text-right">Next Project</span>
                      <span className="font-bold uppercase tracking-wider text-xs md:text-sm truncate w-full text-right">Econometrics Paper</span>
                  </div>
                  <div className="p-2 md:p-3 rounded-full border border-zinc-800 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all shrink-0">
                      <ArrowRight size={16} className="md:w-5 md:h-5" />
                  </div>
              </Link>

          </div>
      </div>
    </div>
  );
}