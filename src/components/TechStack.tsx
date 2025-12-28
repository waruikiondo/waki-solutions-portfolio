// src/components/TechStack.tsx
import React from 'react';

const techCategories = [
    { title: 'Frontend & Web', icons: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Backend & Data', icons: ['Node.js/Express', 'Supabase', 'Firebase', 'PostgreSQL'] },
    { title: 'Cross-Platform App', icons: ['Flutter', 'Dart', 'FlutterFlow'] },
    { title: 'Integrations & CMS', icons: ['OpenAI API', 'Stripe', 'WordPress', 'WooCommerce'] },
];

export const TechStack: React.FC = () => {
    return (
        <section id="tech-stack" className="py-20 text-center">
            <h2 className="text-4xl font-display font-bold mb-16">
                The Waki Solutions Technology Stack
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {techCategories.map((category, index) => (
                    <div key={index} className="bg-surface-dark p-6 rounded-xl border border-surface-dark/50 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-accent-blue">{category.title}</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {category.icons.map((icon, i) => (
                                <span key={i} className="px-3 py-1 text-sm font-medium bg-background-dark text-accent-cyan rounded-full border border-accent-cyan/30">
                                    {icon}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};