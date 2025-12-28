import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 px-4 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent-blue mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
          </span>
          Accepting New Projects for Q1 2026
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8">
          We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary-text">digital empires</span> for bold startups.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-secondary-text max-w-2xl mx-auto mb-10 leading-relaxed">
          Waki Solutions is your strategic partner for high-velocity MVP development. We merge <span className="text-white">FinTech precision</span> with <span className="text-white">AI power</span> to launch market-ready apps in weeks.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-accent-blue text-white rounded-full font-semibold hover:bg-accent-blue/90 transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]">
            Start Your Project
          </a>
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-surface-dark border border-white/10 text-white rounded-full font-semibold hover:bg-surface-hover transition-all">
            View Our Work
          </a>
        </div>

      </div>
    </section>
  );
};