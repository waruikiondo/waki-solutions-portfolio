// src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface-dark border-t border-background-dark mt-32 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-primary-text/60">
        
        <h3 className="text-2xl font-display font-bold text-accent-blue mb-4">Waki Solutions</h3>
        
        <p className="max-w-xl mx-auto mb-6">
          Strategic Full-Stack Engineering and High-Velocity MVP Delivery.
        </p>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="mailto:waruikiondo@gmail.com" className="hover:text-accent-cyan transition duration-200">Email</a>
          <a href="https://www.linkedin.com/in/kelvin-warui-51b57315b/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition duration-200">LinkedIn</a>
          {/* Add link to your GitHub if desired */}
        </div>

        <p className="text-sm">
          &copy; {currentYear} Waki Solutions. All rights reserved. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};