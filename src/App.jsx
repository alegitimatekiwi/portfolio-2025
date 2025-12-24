import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Linkedin, FileText, ArrowRight, Github } from "lucide-react";
import { Routes, Route, Link } from "react-router-dom"; 
// ^ Keep this if you have the router installed

import HipocampusProject from "./HipocampusProject"; 
// ^ Keep this if you created the file

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
      className={`relative block overflow-hidden whitespace-nowrap text-6xl md:text-8xl font-bold uppercase leading-[0.9] ${className}`}
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
      className="relative block overflow-hidden text-sm font-medium uppercase tracking-wider text-zinc-400 transition-colors hover:text-lime-400"
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
  SUBTITLE COMPONENT (Updated Style: Italic, Normal Case, De-emphasized)
  =============================================================================
*/
const Subtitle = ({ children }) => (
  <motion.h4 
    className="text-lime-400 font-medium italic text-lg mb-2 cursor-default inline-block"
    whileHover={{ scale: 1.05, originX: 0 }} 
    transition={{ type: "spring", stiffness: 300 }}
  >
    {children}
  </motion.h4>
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
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white border border-white/10 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-white mb-2 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        {linkTo ? (
            <Link to={linkTo} className="mt-auto flex items-center gap-2 text-lime-400 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer">
                Read More <ArrowRight size={14} />
            </Link>
        ) : (
            <div className="mt-auto flex items-center gap-2 text-lime-400 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer">
                Read More <ArrowRight size={14} />
            </div>
        )}
      </div>
    </motion.div>
  );
};

/* =============================================================================
  HOME PAGE COMPONENT
  =============================================================================
*/
function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

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
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    // 'md:cursor-none' hides cursor only on desktop. 'cursor-auto' restores touch scrolling on mobile.
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-lime-400 selection:text-black md:cursor-none cursor-auto overflow-x-hidden w-full">
      
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
      ></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-start gap-16 px-8 py-6 md:px-12 bg-zinc-950/90 backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-bold uppercase tracking-tighter" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Elaine Zhang<span className="text-lime-400">.</span>
        </div>
        <div className="hidden md:flex gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#organizations">Organizations</NavLink>
          <NavLink href="#interests">Interests</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="relative z-10 flex min-h-screen flex-col justify-center pt-24 md:flex-row md:items-center md:pt-0">
        <motion.div 
          className="flex flex-col justify-center px-6 md:w-1/2 md:pl-24 lg:pl-32"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-lime-400 font-serif italic text-xl">Business & Technology</p>

          <div className="flex flex-col items-start space-y-2 mb-8">
            <FlipLink href="#projects">Projects</FlipLink>
            <FlipLink href="#experience">Experience</FlipLink>
            <FlipLink href="#involvements">Involvements</FlipLink>
          </div>

          <p className="max-w-md text-zinc-400 leading-relaxed mb-8">
            I am Elaine, a business student passionate about shaping the future of technology and organizations through storytelling & problem solving! I build actionable strategies from complex data. Check out more of my projects and involvements below!
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="z-50 pointer-events-auto flex items-center gap-2 border border-zinc-700 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-lime-400 hover:text-black hover:border-lime-400 rounded-full"
            >
              Resume <FileText size={16} />
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/elainezhang2027" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="z-50 pointer-events-auto flex items-center gap-2 border border-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-400 transition-all hover:text-white rounded-full"
            >
              Linkedin <Linkedin size={16} />
            </motion.a>

            <motion.a 
              href="https://github.com/alegitimatekiwi?tab=repositories" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="z-50 pointer-events-auto flex items-center gap-2 border border-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-400 transition-all hover:text-white rounded-full"
            >
              GitHub <Github size={16} />
            </motion.a>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center px-6 md:mt-0 md:w-1/2 md:justify-center md:pr-12">
          <motion.div 
            className="relative h-[400px] w-[300px] md:h-[600px] md:w-[450px]"
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
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12 bg-zinc-950">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 items-start">
            
            {/* LEFT SIDEBAR */}
            <div className="w-64 md:w-80 flex flex-col gap-8 shrink-0 relative sticky top-32">
                
                {/* Photo */}
                <motion.div 
                    className="w-64 h-64 md:w-80 md:h-80 relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-lime-400 rounded-full blur-3xl opacity-20"></div>
                    <motion.img 
                        src="/flowers.jpg" 
                        alt="About Me" 
                        whileHover={{ scale: 1.05 }} 
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full object-cover rounded-full border-2 border-zinc-800"
                    />
                </motion.div>

                {/* INVOLVEMENTS (Sidebar) */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.2 }}
                    className="hidden md:block"
                >
                    <Subtitle>Involvements</Subtitle>
                    <ul className="text-zinc-400 text-sm space-y-2 mb-6 mt-2">
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>Undergraduate Student Ambassador</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>BUSN70 (Lead TA)</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>Miller Center Data Intern</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>SCU INFORMS (President)</li>
                        {/* UPDATED: Redwood Yearbook */}
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>Redwood Yearbook (Managing Editor)</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>The Santa Clara (Photographer)</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>IS Network (Dir. Marketing)</li>
                        <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>GetVirtual (Project Manager)</li>
                    </ul>

                    <motion.a 
                      href="#organizations" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-lime-400 px-6 py-3 text-xs font-bold uppercase tracking-widest text-black rounded-full pointer-events-auto"
                    >
                      Read More <ArrowRight size={14} />
                    </motion.a>
                </motion.div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-lime-400 font-serif italic text-xl mb-2">About Me.</h2>
                    <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        Elaine Zhang.
                    </h3>
                </motion.div>

                <motion.p 
                    className="text-zinc-400 leading-relaxed text-lg max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    I am always up for a hike or spending time outside. I have a love for nature and sustainability. 
                    My passion lies in the intersection of social responsibility, technology, and innovation. 
                    If there are any projects you are working on around this area, please contact me and I'd love to collaborate!
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                    {/* Education + Honors */}
                    <div className="space-y-8">
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
                            <Subtitle>Education</Subtitle>
                            <div className="space-y-2 text-zinc-400 text-sm">
                                <p className="text-lg text-white">Santa Clara University</p>
                                <div className="flex gap-2">
                                    <strong className="text-white shrink-0">Major:</strong>
                                    <span>Accounting Information Systems & <br />Economics (Data Analysis)</span>
                                </div>
                                <p><strong className="text-white">Minors:</strong> Japanese Studies</p>
                                <p><strong className="text-white">Major GPA:</strong> 3.921 | <strong className="text-white">Overall GPA:</strong> 3.958</p>
                                <p><strong className="text-white">Expected Graduation:</strong> June 12, 2027</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} transition={{ delay: 0.2 }}>
                            <Subtitle>Honors</Subtitle>
                            <ul className="text-zinc-400 text-sm space-y-2">
                                <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>University Honors Program (top 5%)</li>
                                <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>ACE Program (top 25 of class)</li>
                                <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>Leavey Scholars Program (top 10% GPA)</li>
                                <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>Beta Gamma Sigma</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Skills + Relevant Coursework */}
                    <div className="space-y-8">
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} transition={{ delay: 0.3 }}>
                             <Subtitle>Skills</Subtitle>
                             <div className="flex flex-wrap gap-2">
                                {["Tableau", "Excel Modeling", "SQL", "R", "Python", "SAP (ERP)", "Generative AI", "ARGUS Enterprise"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-300">
                                        {skill}
                                    </span>
                                ))}
                             </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} transition={{ delay: 0.4 }}>
                            <Subtitle>Relevant Coursework</Subtitle>
                            {/* UPDATED: One course per line format */}
                            <div className="text-zinc-400 text-sm space-y-6">
                                <div>
                                    <p className="text-white font-bold text-xs uppercase tracking-wider mb-2">Data Architecture & Informatics</p>
                                    <ul className="space-y-1 list-none">
                                        <li>Database Management Systems (OMIS 105)</li>
                                        <li>Accounting Data Analysis (ACTG 120)</li>
                                        <li>Applied Econometrics (ECON 173)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-xs uppercase tracking-wider mb-2">Financial Rigor & Modeling</p>
                                    <ul className="space-y-1 list-none">
                                        <li>Intermediate Financial Accounting (ACTG 130)</li>
                                        <li>Financial Management (FNCE 121S)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-xs uppercase tracking-wider mb-2">Strategic Ventures & Research</p>
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

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative z-10 min-h-screen px-6 py-12 bg-zinc-950 flex flex-col justify-center">
        <div className="max-w-6xl w-full mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-lime-400 font-serif italic text-xl mb-2">My Work.</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Projects & Analysis.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              delay={0.1}
              title="Automation & Impact Report" 
              category="Data Engineering" 
              description="Operations & Analytics Intern at Hipocampus Centros de Aprendizaje, Summer 2025."
              image="/hipocampus.jpg"
              linkTo="/projects/hipocampus" 
            />
            
            <ProjectCard 
              delay={0.3}
              title="Global Impact" 
              category="Management" 
              description="Strategic operational overhaul for a non-profit organization, increasing donor retention by 25% over 6 months."
              image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
            />

            <ProjectCard 
              delay={0.5}
              title="Tech Innovation" 
              category="Research" 
              description="Research paper on the integration of Generative AI in modern accounting practices, published in the university journal."
              image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* SCROLL TO TOP BUTTON (Updated to ArrowUp) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-zinc-900/50 backdrop-blur-md border border-zinc-800 text-lime-400 hover:bg-lime-400 hover:text-black transition-all group"
      >
        <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* CUSTOM CURSOR: Hidden on Mobile (md:block) */}
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

// ==========================================================
// ROOT APP COMPONENT (DEFINES ROUTES)
// ==========================================================
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/hipocampus" element={<HipocampusProject />} />
    </Routes>
  );
}