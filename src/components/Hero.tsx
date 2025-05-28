
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-purple-800/20 animate-pulse"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            MOHAMAD JAWAD NASSEREDDINE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            Computer Science Student & Full-Stack Developer
          </p>
          <p className="text-lg mb-12 text-slate-400 max-w-2xl mx-auto">
            Passionate about building innovative web applications and cloud solutions. 
            Currently pursuing BS in Computer Science with a focus on modern development technologies.
          </p>
          
          <div className="flex justify-center items-center gap-6 mb-12 text-slate-400">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>mjnassereddine@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+961 03 655 689</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Beirut, Lebanon</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="#projects" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
