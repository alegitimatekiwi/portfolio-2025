import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; 

const Hipocampus = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12 font-sans selection:bg-lime-400 selection:text-black">
      {/* Back Button */}
      <Link 
        to="/#experiences" 
        className="inline-flex items-center text-zinc-400 hover:text-lime-400 mb-12 transition-colors duration-200 uppercase text-xs font-bold tracking-widest"
      >
        <ArrowLeft className="mr-2" size={16} />
        Back to Ventures
      </Link>

      <div className="max-w-3xl mx-auto animate-fadeIn">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Operations & Analytics
          </h1>
          <h2 className="text-2xl text-lime-400 font-medium italic font-serif">
            Hipocampus Centros de Aprendizaje
          </h2>
        </div>

        {/* Metadata (Date & Location) */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-zinc-400 mb-10 border-b border-zinc-800 pb-8 text-sm tracking-wide">
          <span className="flex items-center">
            📍 Santa Clara, CA
          </span>
          <span className="hidden md:block text-zinc-600">•</span>
          <span className="flex items-center">
            🗓 July 2025 - Ongoing
          </span>
        </div>

        {/* Image Placeholder */}
        <div className="mb-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
            alt="Hipocampus Work Environment" 
            className="relative w-full h-auto rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* The Story Content */}
        <div className="space-y-8 text-lg text-zinc-300 leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">The Challenge</h3>
            <p>
              Education requires efficiency to scale. At Hipocampus, I don't just track operational metrics; 
              I look for the narrative behind resource allocation. The organization was facing a complex challenge:
              how to expand learning centers while maintaining the quality of education with limited resources.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">The Insight</h3>
            <p>
              By analyzing key organizational datasets, I identify patterns that others miss. 
              I realized that the data wasn't just numbers—it was a map of student engagement. 
              My goal is to streamline the 'how' so the organization can focus on the 'why'—delivering 
              better learning outcomes to the community.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">The Impact</h3>
            <p>
              Through this role, I am developing dashboards that allow directors to see real-time efficiency metrics,
              reducing administrative overhead. It is a perfect blend of my technical data skills and my passion for social impact.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hipocampus;