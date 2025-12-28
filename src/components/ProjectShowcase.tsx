import React from 'react';

const projects = [
  { 
    name: 'Muchemi Law', 
    role: 'Corporate Identity', 
    desc: 'A high-authority digital presence for a leading law firm.',
    tech: ['Next.js', 'CMS'],
    link: 'https://www.muchemilaw.com'
  },
  { 
    name: 'Proudly Laikipian', 
    role: 'Community Platform', 
    desc: 'Modern static application deployed on Vercel for high-speed performance.',
    tech: ['React', 'Tailwind'],
    link: 'https://proudly-laikipian-site.vercel.app/'
  },
  { 
    name: 'AskBiblically', 
    role: 'AI SaaS', 
    desc: 'Subscription-based AI platform with Stripe integration.',
    tech: ['Flutter', 'OpenAI'],
    link: '#'
  }
];

export const ProjectShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-surface-dark/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Work</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a 
              key={i} 
              href={project.link}
              target="_blank"
              rel="noreferrer" 
              className="group block bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden hover:border-accent-blue/30 transition-all duration-500"
            >
              {/* Fake Image Placeholder - Looks Professional */}
              <div className="h-48 bg-gradient-to-br from-[#111] to-[#000] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                 <span className="text-white/20 font-display text-2xl font-bold">{project.name}</span>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">{project.name}</h3>
                  <span className="text-xs font-mono text-accent-blue bg-accent-blue/10 px-2 py-1 rounded">{project.role}</span>
                </div>
                <p className="text-secondary-text mb-6 text-sm">{project.desc}</p>
                <div className="flex gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs text-white/40 border border-white/10 px-2 py-1 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};