
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold">MJ.DEV</span>
          </div>
          
          <div className="flex items-center gap-2 text-slate-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & TypeScript</span>
          </div>
          
          <div className="text-slate-400 text-sm mt-4 md:mt-0">
            © 2024 Mohamad Jawad Nassereddine. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
