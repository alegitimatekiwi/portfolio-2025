import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, BookOpen, Database } from "lucide-react";
import { Link } from "react-router-dom";

const EconometricsProject = () => {
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
          Econometric <span className="text-lime-400">Analysis</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
          Quantitative research investigating the impact of minimum wage policies and social events on economic indicators.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["R Programming", "Stata", "Regression Modeling", "Data Cleaning", "Quantitative Research"].map(skill => (
            <span key={skill} className="px-4 py-1.5 border border-zinc-700 bg-zinc-900/50 rounded-full text-xs font-bold uppercase tracking-wider text-lime-400">
              {skill}
            </span>
          ))}
        </div>

        <img 
          src="/econometrics.jpg" 
          alt="Data Visualization" 
          className="w-full h-64 md:h-[500px] object-cover rounded-3xl mb-16 border border-zinc-800 shadow-2xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-4">Minimum Wage & Employment</h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                    Analyzed 10 years of labor data across 50 US states using a fixed-effects model to control for state-specific heterogeneity.
                </p>
                <div className="flex items-center gap-3 text-lime-400 text-sm font-bold uppercase tracking-wide">
                    <Database size={16} /> 10-Year Dataset
                </div>
            </div>
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-4">Sports Events & Crime</h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                    Investigated the temporal correlation between major sporting events in Chicago and local property crime rates using time-series analysis.
                </p>
                <div className="flex items-center gap-3 text-lime-400 text-sm font-bold uppercase tracking-wide">
                    <TrendingUp size={16} /> 5% Temp. Spike Identified
                </div>
            </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-white mb-4">Methodology & Skills</h3>
            <p className="text-zinc-400 leading-relaxed">
                These projects required extensive data wrangling in <strong>R</strong> to handle missing values and outliers. I applied tests for <strong>heteroskedasticity</strong> and <strong>multicollinearity</strong> to ensure model robustness. The final outputs included technical reports interpreting regression coefficients for policy recommendations.
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default EconometricsProject;