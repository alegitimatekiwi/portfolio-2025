import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Linkedin, FileText, ArrowRight, Github, ChevronDown, Camera, Mail, MapPin } from "lucide-react"; 
import { Routes, Route, Link } from "react-router-dom"; 

import HipocampusProject from "./HipocampusProject"; 

/* =============================================================================
  FLIP LINK COMPONENT
  =============================================================================
*/
const FlipLink = ({ children, href, className = "" }) => {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden whitespace-nowrap text-4xl md:text-8xl font-bold uppercase leading-[0.9] ${className}`}
      style={{ fontFamily: "'Oswald', sans-serif" }} 
    >
      <motion.div
        variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 text-lime-400"
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

const NavLink = ({ children, href }) => {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden text-[10px] md:text-sm font-medium uppercase tracking-wider text-zinc-400 transition-colors hover:text-lime-400 shrink-0"
    >
      <motion.div
        variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 text-lime-400"
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

/* =============================================================================
  NAV DROPDOWN COMPONENT
  =============================================================================
*/
const NavDropdown = ({ title, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-start shrink-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className="flex items-center gap-1 text-[10px] md:text-sm font-medium uppercase tracking-wider text-zinc-400 transition-colors hover:text-lime-400">
        {title}
        <ChevronDown 
            size={14} 
            className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-lime-400" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:absolute md:top-full md:left-0 md:mt-4 md:w-48 flex flex-col gap-3 p-4 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-xl z-50 fixed left-6 right-6 top-20 md:fixed-none md:static md:mx-0 shadow-2xl md:shadow-none"
          >
            {items.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => onSelect(item.filterId)}
                className="block text-left text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-lime-400 transition-colors whitespace-nowrap w-full"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* =============================================================================
  SECTION TITLE COMPONENT
  =============================================================================
*/
const SectionTitle = ({ title }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
    className="flex items-center justify-center mb-12 mt-4"
  >
    <h4 className="text-3xl md:text-4xl font-serif italic text-white text-center">
      {title}
    </h4>
  </motion.div>
);

/* =============================================================================
  SUBTITLE COMPONENT
  =============================================================================
*/
const Subtitle = ({ children, className = "" }) => (
  <motion.h4 
    className={`text-lime-400 font-bold uppercase tracking-widest text-xs mb-4 cursor-default inline-block ${className}`}
    whileHover={{ scale: 1.1, originX: 0 }} 
    transition={{ type: "spring", stiffness: 300 }}
  >
    {children}
  </motion.h4>
);

/* =============================================================================
  EXPERIENCE CARD COMPONENT
  =============================================================================
*/
const ExperienceCard = ({ role, org, image, location, period }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
    className="flex flex-row items-stretch gap-0 bg-zinc-900/50 border border-zinc-800 rounded-xl transition-colors group cursor-pointer hover:border-zinc-700 h-full overflow-hidden"
  >
    {/* Image: Fixed width, responsive */}
    <div className="w-24 md:w-32 shrink-0 relative">
        <img 
            src={image} 
            alt={typeof org === 'string' ? org : "Organization"} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
    </div>
    
    {/* Text: min-w-0 prevents flex items from overflowing container */}
    <div className="flex flex-col justify-center p-4 w-full min-w-0">
        <h5 className="text-white font-bold text-xs md:text-sm uppercase leading-tight md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
            {role}
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-lime-400 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h5>
        
        <div className="text-lime-400 font-bold text-xs md:text-sm mt-1 tracking-wide leading-tight" style={{ fontFamily: "'Lato', sans-serif" }}>
            {org}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 text-[10px] md:text-xs">
            <span className="text-zinc-400 font-medium">{location}</span>
            <span className="text-zinc-700 hidden md:inline">•</span>
            <span className="text-zinc-500 italic">{period}</span>
        </div>
    </div>
  </motion.div>
);

/* =============================================================================
  PROJECT CARD COMPONENT
  =============================================================================
*/
const ProjectCard = ({ title, category, description, image, delay, linkTo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ scale: 1.02 }} 
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 w-full"
    >
      <div className="relative h-32 md:h-40 overflow-hidden">
        <div className="hidden md:block absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <img 
          src={image} 
          alt={typeof title === 'string' ? title : "Project Image"} 
          className="h-full w-full object-cover transition-transform duration-700 grayscale-0 group-hover:scale-110"
        />
        <div className="absolute bottom-2 left-2 z-20">
          <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/10 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-6">
        <h3 className="text-sm md:text-lg font-bold text-white mb-2 uppercase leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {title}
        </h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-400 text-[10px] md:text-xs leading-relaxed mb-4"
        >
          {description}
        </motion.p>
        
        {linkTo ? (
            <Link to={linkTo} className="mt-auto flex items-center gap-2 text-lime-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer">
                Read More <ArrowRight size={12} />
            </Link>
        ) : (
            <div className="mt-auto flex items-center gap-2 text-lime-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer">
                Read More <ArrowRight size={12} />
            </div>
        )}
      </div>
    </motion.div>
  );
};

/* =============================================================================
  INTEREST CARD COMPONENT
  =============================================================================
*/
const InterestCard = ({ name, image }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5 }}
    viewport={{ once: false }}
    transition={{ duration: 0.4 }}
    className="group relative overflow-hidden rounded-2xl aspect-square"
  >
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
    <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute bottom-4 left-4 z-20">
      <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>
        {name}
      </h3>
    </div>
  </motion.div>
);

/* =============================================================================
  HOME PAGE COMPONENT
  =============================================================================
*/
function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const photos = ["/ezheadshot.jpg", "/hobby1.jpg", "/hobby2.jpg", "/hobby3.jpg"];

  useEffect(() => {
    let interval;
    if (isPhotoHovered) {
      interval = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 2000);
    } else {
      setCurrentPhotoIndex(0);
    }
    return () => clearInterval(interval);
  }, [isPhotoHovered, photos.length]);

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (isDesktop) {
        const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', updateMousePosition);

        const handleMouseEnter = () => setIsHoveringLink(true);
        const handleMouseLeave = () => setIsHoveringLink(false);

        const clickableElements = document.querySelectorAll('a, button, img, h4, .group');
        clickableElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            clickableElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }
  }, []);

  const bodyTextAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Nav Selection Handler
  const handleNavSelection = (category) => {
    setFilter(category);
    const element = document.getElementById(category === 'internship' ? "internships" : category === 'job' ? "campus-jobs" : "clubs");
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-lime-400 selection:text-black md:cursor-none cursor-auto overflow-x-hidden w-full">
      
      <div className="hidden md:block pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
      ></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
        
        html, body {
            overflow-x: hidden;
            width: 100%;
            -webkit-overflow-scrolling: touch;
        }
        ::-webkit-scrollbar { display: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-center bg-zinc-950/90 md:backdrop-blur-md border-b border-white/5">
        <div className="flex w-full items-center gap-4 px-6 py-4 md:px-12 justify-center md:justify-start">
            <div className="hidden md:block text-xl font-bold uppercase tracking-tighter shrink-0 mr-8" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Elaine Zhang<span className="text-lime-400">.</span>
            </div>
            
            <div className="flex flex-1 overflow-x-auto md:overflow-visible gap-3 md:gap-5 items-center justify-between md:justify-start no-scrollbar relative pr-12 md:pr-0">
              <NavLink href="#projects">Projects</NavLink>
              
              <NavDropdown 
                title="Experiences" 
                onSelect={handleNavSelection}
                items={[
                    { label: "Internships", filterId: "internship" },
                    { label: "On-Campus Jobs", filterId: "job" },
                    { label: "Club Involvements", filterId: "involvement" }
                ]}
              />

              <NavLink href="#interests">Interests</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
        </div>
        
        {/* PROGRESS BAR */}
        <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-lime-400 origin-left z-50"
            style={{ scaleX }}
        />
      </nav>

      {/* HERO SECTION */}
      <main className="relative z-10 flex md:min-h-screen flex-col justify-center pt-20 pb-4 md:flex-row md:items-center md:pt-0 md:pb-0">
        
        <div className="flex flex-col items-center justify-center px-6 mb-2 md:mb-0 md:w-1/2 md:justify-center md:pr-12 md:order-2">
            
            <div className="md:hidden flex flex-col items-center justify-center mb-6 w-full">
               <motion.h1 
                 initial={{ y: 50, opacity: 0, scale: 0.9 }}
                 whileInView={{ y: 0, opacity: 1, scale: 1 }}
                 viewport={{ once: false, amount: 0.5 }}
                 transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                 className="text-5xl font-bold uppercase leading-none text-white tracking-tighter text-center"
                 style={{ fontFamily: "'Oswald', sans-serif" }}
               >
                 Elaine <span className="text-lime-400">Zhang</span>
               </motion.h1>
            </div>

            <motion.div 
                className="relative h-64 w-48 md:h-[600px] md:w-[450px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                onMouseEnter={() => { setIsPhotoHovered(true); setCurrentPhotoIndex(1); }}
                onMouseLeave={() => setIsPhotoHovered(false)}
            >
                <div className="absolute inset-0 bg-lime-400 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 rounded-[2rem]" />
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-zinc-800">
                    {photos.map((src, index) => (
                        <motion.img 
                            key={src} src={src} alt="Portfolio"
                            className="absolute inset-0 h-full w-full object-cover" 
                            animate={{ opacity: currentPhotoIndex === index ? 1 : 0 }}
                            transition={{ duration: 0.8 }} 
                        />
                    ))}
                </div>
            </motion.div>

            <div className="md:hidden mt-8 mb-2 flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400">
                <a href="#projects">Projects</a>
                <span className="text-zinc-600">|</span>
                <a href="#experience">Experience</a>
                <span className="text-zinc-600">|</span>
                <a href="#involvements">Involvements</a>
            </div>
        </div>

        <motion.div 
          className="flex flex-col justify-center px-6 md:w-1/2 md:pl-24 lg:pl-32 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hidden md:flex flex-col items-start space-y-2 mb-8">
            <FlipLink href="#projects">Projects</FlipLink>
            <FlipLink href="#experience">Experience</FlipLink>
            <FlipLink href="#involvements">Involvements</FlipLink>
          </div>

          <p className="mb-4 text-lime-400 font-serif italic text-xl hidden md:block">Business & Technology</p>

          <motion.p 
            variants={bodyTextAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="max-w-md text-zinc-400 leading-relaxed mb-8 text-center md:text-left"
          >
            I am Elaine, a business student passionate about shaping the future of technology and organizations through storytelling & problem solving! I build actionable strategies from complex data. Check out more of my projects and involvements below!
          </motion.p>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <motion.a 
              href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="pointer-events-auto flex items-center gap-2 border border-zinc-700 bg-transparent px-3 py-2 md:px-6 md:py-3 text-[10px] md:text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-lime-400 hover:text-black hover:border-lime-400 rounded-full whitespace-nowrap"
            >
              Resume <FileText size={14} />
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/elainezhang2027" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="pointer-events-auto flex items-center gap-2 border border-transparent px-3 py-2 md:px-6 md:py-3 text-[10px] md:text-sm font-bold uppercase tracking-widest text-zinc-400 transition-all hover:text-blue-400 hover:border-blue-400 rounded-full whitespace-nowrap"
            >
              Linkedin <Linkedin size={14} />
            </motion.a>

            <motion.a 
              href="https://github.com/alegitimatekiwi?tab=repositories" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="pointer-events-auto flex items-center gap-2 border border-transparent px-3 py-2 md:px-6 md:py-3 text-[10px] md:text-sm font-bold uppercase tracking-widest text-zinc-400 transition-all hover:text-purple-400 hover:border-purple-400 rounded-full whitespace-nowrap"
            >
              GitHub <Github size={14} />
            </motion.a>
          </div>
        </motion.div>
      </main>

      <div className="flex justify-center pb-8 pt-2 md:py-8">
          <div className="w-16 h-1 bg-lime-400 rounded-full"></div>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 flex items-center justify-center px-6 py-6 md:py-12 bg-zinc-950">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            
            <div className="w-full md:w-80 flex flex-col gap-8 shrink-0 relative md:sticky md:top-32">
                <div className="flex flex-col gap-4">
                    <motion.div 
                        className="hidden md:block w-80 h-80 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }} 
                        transition={{ duration: 0.4 }}
                    >
                        <div className="absolute inset-0 bg-lime-400 rounded-full blur-3xl opacity-20"></div>
                        <img src="/flowers.jpg" alt="About Me" className="relative w-full h-full object-cover rounded-full border-2 border-zinc-800" />
                    </motion.div>

                    <div className="md:hidden flex flex-col w-full">
                        <div className="text-center mb-6">
                            <h2 className="text-lime-400 font-serif italic text-lg mb-1">About Me.</h2>
                            <h3 className="text-3xl font-bold uppercase tracking-tighter text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                                Elaine Zhang.
                            </h3>
                        </div>

                        <motion.div 
                            variants={bodyTextAnim}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            className="text-zinc-400 text-sm leading-relaxed text-center px-10 flex flex-col items-center"
                        >
                            <p className="mb-4">
                              I am always up for a hike or spending time outside. I have a love for nature and sustainability.
                            </p>
                            <p className="mb-6">
                              My passion lies in the intersection of social responsibility, technology, and innovation. 
                              If there are any projects you are working on around this area, please contact me and I'd love to collaborate!
                            </p>

                            <motion.a 
                              href="https://ezhang2.myportfolio.com/" target="_blank" rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                              className="pointer-events-auto flex items-center gap-2 border border-zinc-700 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-300 transition-all hover:text-white hover:border-white rounded-full whitespace-nowrap"
                            >
                              Photography Portfolio <Camera size={14} />
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }}
                    className="hidden md:block"
                >
                    <Subtitle>Involvements</Subtitle>
                    <ul className="text-zinc-400 text-sm space-y-2 mb-6 mt-2">
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>Undergraduate Student Ambassador</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>BUSN70 (Lead TA)</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>Miller Center Data Intern</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>SCU INFORMS (President)</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>Redwood Yearbook (Managing Editor)</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>The Santa Clara (Photographer)</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>IS Network (Dir. Marketing)</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>GetVirtual (Project Manager)</li>
                    </ul>
                    <motion.a 
                      href="#experiences" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-lime-400 px-6 py-3 text-xs font-bold uppercase tracking-widest text-black rounded-full pointer-events-auto"
                    >
                      Read More <ArrowRight size={14} />
                    </motion.a>
                </motion.div>
            </div>

            <div className="flex-1 space-y-8 w-full">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="hidden md:block"
                >
                    <h2 className="text-lime-400 font-serif italic text-xl mb-2">About Me.</h2>
                    <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        Elaine Zhang.
                    </h3>
                </motion.div>

                <motion.div 
                    variants={bodyTextAnim}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="hidden md:block"
                >
                    <p className="text-zinc-400 leading-relaxed text-lg w-full mb-6">
                        I am always up for a hike or spending time outside. I have a love for nature and sustainability. 
                        My passion lies in the intersection of social responsibility, technology, and innovation. 
                        If there are any projects you are working on around this area, please contact me and I'd love to collaborate!
                    </p>

                    <motion.a 
                      href="https://ezhang2.myportfolio.com/" target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-300 transition-all hover:text-white hover:border-white rounded-full whitespace-nowrap"
                    >
                      Photography Portfolio <Camera size={16} />
                    </motion.a>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                    <div className="space-y-8">
                        <motion.div variants={bodyTextAnim} initial="hidden" whileInView="visible" viewport={{ once: false }} className="text-center md:text-left">
                            <Subtitle>Education</Subtitle>
                            <div className="space-y-3 text-zinc-400 text-sm md:text-left text-center flex flex-col items-center md:items-start">
                                <p className="text-lg text-white font-bold mb-1">Santa Clara University</p>
                                <div className="text-center md:text-left">
                                    <div className="md:hidden mb-2">
                                        <strong className="text-white block mb-1">Major:</strong>
                                        <span className="block">Accounting Information Systems</span>
                                        <span className="block">Economics (Data Analysis)</span>
                                    </div>
                                    
                                    <div className="hidden md:flex gap-2 justify-start">
                                        <strong className="text-white shrink-0">Major:</strong>
                                        <span>Accounting Information Systems & <br />Economics (Data Analysis)</span>
                                    </div>

                                    <p className="mt-3">
                                        <strong className="text-white block mb-1 md:inline md:mb-0">Minors:</strong> 
                                        <span className="block md:inline"> Japanese Studies</span>
                                    </p>
                                    
                                    <p className="mt-3"><strong className="text-white">Major GPA:</strong> 3.921 | <strong className="text-white">Overall GPA:</strong> 3.958</p>
                                    <p className="mt-3"><strong className="text-white">Expected Graduation:</strong> June 12, 2027</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={bodyTextAnim} initial="hidden" whileInView="visible" viewport={{ once: false }} className="text-center md:text-left">
                            <Subtitle>Honors</Subtitle>
                            <ul className="text-zinc-400 text-sm space-y-2 md:text-left text-center">
                                <li className="flex items-start gap-2 justify-center md:justify-start"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>University Honors Program (top 5%)</li>
                                <li className="flex items-start gap-2 justify-center md:justify-start"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>ACE Program (top 25 of class)</li>
                                <li className="flex items-start gap-2 justify-center md:justify-start"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>Leavey Scholars Program (top 10% GPA)</li>
                                <li className="flex items-start gap-2 justify-center md:justify-start"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>Beta Gamma Sigma</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="space-y-8">
                        <motion.div variants={bodyTextAnim} initial="hidden" whileInView="visible" viewport={{ once: false }} className="text-center md:text-left">
                             <Subtitle>Skills</Subtitle>
                             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {["Tableau", "Excel Modeling", "SQL", "R", "Python", "SAP (ERP)", "Generative AI", "ARGUS Enterprise"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-300">
                                        {skill}
                                    </span>
                                ))}
                             </div>
                        </motion.div>

                        <motion.div variants={bodyTextAnim} initial="hidden" whileInView="visible" viewport={{ once: false }} className="text-center md:text-left">
                            <Subtitle>Relevant Coursework</Subtitle>
                            <div className="text-zinc-400 text-xs space-y-4 text-center md:text-left pl-0 md:pl-0">
                                <div>
                                    <p className="text-white font-medium italic text-sm mb-1">Data Architecture & Informatics</p>
                                    <ul className="space-y-1 list-none">
                                        <li>Database Management Systems (OMIS 105)</li>
                                        <li>Accounting Data Analysis (ACTG 120)</li>
                                        <li>Applied Econometrics (ECON 173)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-white font-medium italic text-sm mb-1">Financial Rigor & Modeling</p>
                                    <ul className="space-y-1 list-none">
                                        <li>Intermediate Financial Accounting (ACTG 130)</li>
                                        <li>Financial Management (FNCE 121S)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-white font-medium italic text-sm mb-1">Strategic Ventures & Research</p>
                                    <ul className="space-y-1 list-none">
                                        <li>Venture Capitalist Essentials (MGMT 167)</li>
                                        <li>Santa Clara Urban Issues Research Lab (ECON 192)</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SEPARATOR BETWEEN ABOUT AND PROJECTS - Reduced Padding */}
      <div className="flex justify-center pb-4 pt-2 md:pb-4 md:pt-4">
          <div className="w-16 h-1 bg-lime-400 rounded-full"></div>
      </div>

      {/* PROJECTS SECTION - EXPANDED CONTAINER for 6 Cards */}
      <section id="projects" className="relative z-10 min-h-screen px-6 pt-0 pb-12 md:pb-12 bg-zinc-950 flex flex-col justify-start md:justify-center">
        {/* CHANGED: max-w-7xl makes the cards less wide (more standard) */}
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-8 md:mb-16"
          >
            <h2 className="text-lime-400 font-serif italic text-xl mb-2">My Work.</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Projects & Analyses.
            </h3>
          </motion.div>

          {/* CHANGED: Grid layout to 2 columns on mobile (2:2:2) and 3 on desktop (3:3) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              delay={0.1}
              title={<>Automation &<br />Impact Report</>}
              category="Data Engineering" 
              description="Operations & Analytics Intern at Hipocampus Centros de Aprendizaje, Summer 2025."
              image="/hipocampus.jpg"
              linkTo="/projects/hipocampus" 
            />
            
            <ProjectCard 
              delay={0.2}
              title="Project Managing"
              category="Social Media"
              description="Strategizing for RealSeq BioTech and Hale.Nani.Kai Vacation Rental."
              image="/getvirtual.jpg"
            />

            <ProjectCard 
              delay={0.3}
              title="Brand Strategies"
              category="Website Building"
              description="Business optimization for Irving's Chicken Tamales Sole Proprietorship."
              image="/tamales.jpg"
            />

            <ProjectCard 
              delay={0.4}
              title={<>Econometric<br />Projects & Reports</>}
              category="Research"
              description="Impact of minimum wage, sporting events and crime rates, gender equality in Africa etc."
              image="/econometrics.jpg"
            />

            {/* NEW CARD ADDED HERE */}
            <ProjectCard 
              delay={0.45}
              title="SCU Content Creation"
              category="Marketing & CRM"
              description="Created 10+ unique articles, administered Slate CRM, and spearheaded a WeChat platform launch for international student recruitment."
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
            />

            <ProjectCard 
              delay={0.5}
              title="T-Shirt Startup"
              category="Entrepreneurship"
              description="Founded an online store for original comic T-shirts. Donated 100% of profits to support gender equality in rural Sichuan."
              image="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2669&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* SEPARATOR BETWEEN PROJECTS AND EXPERIENCES */}
      <div className="flex justify-center pb-4 pt-2 md:pb-8 md:pt-4">
          <div className="w-16 h-1 bg-lime-400 rounded-full"></div>
      </div>

      {/* EXPERIENCES SECTION */}
      <section id="experiences" className="relative z-10 min-h-screen px-6 py-12 bg-zinc-950 flex flex-col justify-start md:justify-center border-t-0 border-zinc-800/50">
        <div className="max-w-6xl w-full mx-auto">
            {/* Header Spacing Reduced */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mb-12"
            >
                <h2 className="text-lime-400 font-serif italic text-xl mb-2">My Journey.</h2>
                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    Experiences & Involvements.
                </h3>
            </motion.div>

            <div className="space-y-16">
                {/* INTERNSHIPS - COMPACT GRID LAYOUT */}
                {/* ADDED scroll-mt-28 to fix jump offset */}
                <div id="internships" className="scroll-mt-28">
                    {/* Centered Title with Bars */}
                    <SectionTitle title="Internships" />
                    
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ExperienceCard 
                            role="Operations & Analytics"
                            // CHANGED: Added line break for multi-line layout
                            org={<>Hipocampus Centros<br/>de Aprendizaje</>}
                            location="Santa Clara, CA"
                            period="July 2025 - Ongoing"
                            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                        />
                        <ExperienceCard 
                            role="Digital Marketing"
                            org="TeamLink"
                            location="Sydney, Australia"
                            period="June 2024 - July 2024"
                            image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                        />
                        <ExperienceCard 
                            role="EC Department Intern"
                            org="Crocs Asia"
                            location="Shanghai, China"
                            period="July 2023 - Aug 2023"
                            image="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=2615&auto=format&fit=crop"
                        />
                    </div>
                </div>

                {/* JOBS */}
                <div id="campus-jobs" className="scroll-mt-28">
                    {/* Centered Title with Bars */}
                    <SectionTitle title="On-Campus Jobs" />

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ExperienceCard 
                            role="Lead TA (BUSN70)"
                            org="Santa Clara University"
                            location="Santa Clara, CA"
                            period="March 2025 - Ongoing"
                            image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2574&auto=format&fit=crop"
                        />
                        <ExperienceCard 
                            role="Ugrad Ambassador"
                            org="SCU Undergraduate Admissions"
                            location="Santa Clara, CA"
                            period="April 2024 - Ongoing"
                            image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
                        />
                        <ExperienceCard 
                            role="International Intern"
                            org="SCU Undergraduate Admissions"
                            location="Santa Clara, CA"
                            period="Jan 2025 - Ongoing"
                            image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop"
                        />
                        <ExperienceCard 
                            role="Managing Editor"
                            org="The Redwood Yearbook"
                            location="Santa Clara, CA"
                            period="March 2025 - Ongoing"
                            image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
                        />
                        <ExperienceCard 
                            role="Photographer"
                            org="The Santa Clara Newspaper"
                            location="Santa Clara, CA"
                            period="Sept 2025 - Ongoing"
                            image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2528&auto=format&fit=crop"
                        />
                    </div>
                </div>

                {/* CLUBS */}
                <div id="clubs" className="scroll-mt-28">
                    {/* Centered Title with Bars */}
                    <SectionTitle title="Club & Other Involvements" />

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ExperienceCard 
                            role="President"
                            org="SCU INFORMS"
                            location="Santa Clara, CA"
                            period="March 2025 - Ongoing"
                            image="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop"
                        />
                        <ExperienceCard 
                            role="Director of Marketing"
                            org="IS Network"
                            location="Santa Clara, CA"
                            period="Feb 2025 - Ongoing"
                            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
                        />
                        <ExperienceCard 
                            role="Fellow/Member"
                            org="Civil Society Institute"
                            location="Santa Clara, CA"
                            period="Present"
                            image="https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=2670&auto=format&fit=crop"
                        />
                        <ExperienceCard 
                            role="Member"
                            org="Japanese Conversation Table"
                            location="Santa Clara, CA"
                            period="Present"
                            image="https://images.unsplash.com/photo-1528164344705-475426879893?q=80&w=2669&auto=format&fit=crop"
                        />
                        <ExperienceCard 
                            role="Fellow"
                            org="Possible"
                            location="Remote"
                            period="Jan 2025 - Mar 2025"
                            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* NEW: SEPARATOR BETWEEN EXPERIENCES AND INTERESTS */}
      <div className="flex justify-center pb-4 pt-2 md:pb-8 md:pt-4">
          <div className="w-16 h-1 bg-lime-400 rounded-full"></div>
      </div>

      {/* NEW: INTERESTS SECTION (Removed top/bottom padding for tight fit) */}
      <section id="interests" className="relative z-10 min-h-screen px-6 pb-12 pt-0 md:pb-12 bg-zinc-950 flex flex-col justify-start md:justify-center border-t-0 border-zinc-800/50">
        <div className="max-w-6xl w-full mx-auto">
            <SectionTitle title="Interests & Hobbies" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <InterestCard name="Hiking & Nature" image="/hobby1.jpg" />
                <InterestCard name="Photography" image="/hobby2.jpg" />
                <InterestCard name="Travel" image="/hobby3.jpg" />
                <InterestCard name="Sustainability" image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2613&auto=format&fit=crop" />
            </div>
        </div>
      </section>

      {/* NEW: SEPARATOR BETWEEN INTERESTS AND CONTACT */}
      <div className="flex justify-center pb-4 pt-0 md:pb-8 md:pt-0">
          <div className="w-16 h-1 bg-lime-400 rounded-full"></div>
      </div>

      {/* NEW: CONTACT SECTION (Removed top padding) */}
      <section id="contact" className="relative z-10 px-6 pt-0 pb-24 bg-zinc-950 flex flex-col justify-center items-center border-t-0 border-zinc-800/50">
        <div className="max-w-4xl w-full text-center">
            <SectionTitle title="Let's Connect" />
            <p className="text-zinc-400 mb-12 max-w-lg mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just chatting about data and sustainability.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
                <a href="mailto:ezhang2@scu.edu" className="flex items-center gap-3 text-white hover:text-lime-400 transition-colors group">
                    <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-lime-400 transition-colors">
                        <Mail size={24} />
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest">Email</p>
                        <p className="font-bold">ezhang2@scu.edu</p>
                    </div>
                </a>

                <a href="https://linkedin.com/in/elainezhang2027" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors group">
                    <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-blue-400 transition-colors">
                        <Linkedin size={24} />
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest">LinkedIn</p>
                        <p className="font-bold">Elaine Zhang</p>
                    </div>
                </a>

                <div className="flex items-center gap-3 text-white">
                    <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800">
                        <MapPin size={24} />
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest">Location</p>
                        <p className="font-bold">Santa Clara, CA</p>
                    </div>
                </div>
            </div>

            <a 
                href="mailto:ezhang2@scu.edu"
                className="inline-flex items-center gap-2 bg-lime-400 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
                Get In Touch <ArrowRight size={16} />
            </a>
        </div>
      </section>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-zinc-900/50 backdrop-blur-md border border-zinc-800 text-lime-400 hover:bg-lime-400 hover:text-black transition-all group"
      >
        <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: isHoveringLink ? 2.5 : 1,
        }}
        transition={{ ease: "backOut", duration: 0.1 }}
      />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/hipocampus" element={<HipocampusProject />} />
    </Routes>
  );
}