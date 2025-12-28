import React from 'react';

const plans = [
  {
    name: 'MVP Launch',
    price: '30,000',
    description: 'Perfect for startups validating an idea. We build your core product in 4-8 weeks.',
    features: [
      'Cross-Platform App (Flutter)',
      'Supabase/Firebase Backend',
      'Basic Auth & User Profiles',
      '1 Month Post-Launch Support',
      'App Store Submission'
    ],
    cta: 'Start MVP',
    popular: false,
  },
  {
    name: 'Scale & AI',
    price: '90,000',
    description: 'For growing businesses needing AI integration, complex payments, and scalability.',
    features: [
      'Everything in MVP',
      'AI/LLM Integration (OpenAI)',
      'Advanced Payments (Stripe/M-Pesa)',
      'Admin Dashboard',
      '3 Months Priority Support'
    ],
    cta: 'Scale Up',
    popular: true, // This enables the glow effect
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale digital transformation, dedicated teams, and custom architecture.',
    features: [
      'Dedicated Dev Team',
      'Custom Microservices',
      'SLA & 24/7 Support',
      'Audit & Security Compliance',
      'On-Premise Deployment'
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Simple, Transparent Investment</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Choose the model that fits your growth stage. No hidden fees, just code that ships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-surface-dark/80 border-accent-blue/50 shadow-2xl shadow-accent-blue/10 scale-105 z-10' 
                  : 'glass-panel hover:border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-blue text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-display font-bold mb-4 text-white">
                {plan.price}
              </div>
              <p className="text-secondary-text text-sm mb-8 h-12">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-secondary-text">
                    <svg className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${
                  plan.popular
                    ? 'bg-accent-blue text-white hover:bg-accent-blue/90 shadow-lg'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};