import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const handleScroll = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-slate-100/30 animate-pulse"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="My Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            MOHAMAD JAWAD
            <br />
            NASSEREDDINE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-700">
            Computer Science Student & Full-Stack Developer
          </p>
          <p className="text-lg mb-12 text-slate-600 max-w-2xl mx-auto">
            Passionate about building innovative web applications and cloud
            solutions. Currently pursuing BS in Computer Science with a focus on
            modern development technologies.
          </p>

          <div className="flex justify-center items-center gap-6 mb-12 text-slate-600">
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
            <button
              onClick={() => handleScroll("contact")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ borderColor: "#00589A", color: "#00589A" }}
            >
              Contact Me
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#00589A" }}
            >
              View Projects
            </button>
            <a
              href={`${import.meta.env.BASE_URL}CV.pdf`}
              download
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 ml-4 hover:scale-105 shadow-lg"
              style={{ borderColor: "#00589A", color: "#00589A" }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
