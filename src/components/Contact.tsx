// src/components/Contact.tsx
import React from 'react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20">
            <div className="bg-surface-dark p-10 sm:p-16 rounded-xl shadow-2xl border border-accent-blue/20">
                <h2 className="text-4xl font-display font-bold text-accent-blue mb-4">
                    Ready to Launch Your Market-Ready MVP?
                </h2>
                <p className="text-xl text-primary-text/80 mb-10 max-w-3xl">
                    Waki Solutions delivers precision engineering with strategic velocity. Let's discuss your next high-impact project.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
                    
                    {/* Primary CTA Button */}
                    <a 
                        href="mailto:waruikiondo@gmail.com" 
                        className="w-full sm:w-auto px-8 py-3 text-lg font-semibold bg-accent-blue text-background-dark rounded-lg hover:bg-accent-blue/80 transition duration-300 shadow-xl"
                    >
                        Schedule Your Discovery Call
                    </a>

                    {/* Quick Contact Info */}
                    <div className="flex space-x-6 text-primary-text/70 text-lg">
                        <p className="font-medium">
                            <a href="mailto:waruikiondo@gmail.com" className="hover:text-accent-cyan transition duration-200">
                                waruikiondo@gmail.com
                            </a>
                        </p>
                        <p className="font-medium">
                            <a href="tel:+254703603110" className="hover:text-accent-cyan transition duration-200">
                                +254 703 603110
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};