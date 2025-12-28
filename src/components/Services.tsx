import React from 'react';

const services = [
  {
    title: 'MVP Engineering',
    description: 'Rapid cross-platform development using Flutter & Next.js to get you to market first.',
    icon: '🚀'
  },
  {
    title: 'AI Integration',
    description: 'Embedding LLMs (OpenAI/Claude) into your apps for intelligent, automated workflows.',
    icon: '🧠'
  },
  {
    title: 'FinTech Architecture',
    description: 'Secure payment gateways (Stripe, M-Pesa) and robust database design (Supabase).',
    icon: 'YZ'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What we do best</h2>
            <p className="text-secondary-text text-lg">We don't just write code. We architect scalable businesses.</p>
          </div>
          <div className="h-px bg-white/10 flex-1 ml-8 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-panel p-8 rounded-3xl card-hover group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-secondary-text leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};