
import React from 'react';
import { ExternalLink, Github, Database, Cloud, Users, ShoppingCart, FileText, Smartphone, Building } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Student-X",
      description: "A comprehensive web application for university students featuring buy/sell marketplace, tutoring services, dorm finding, and real-time chatting.",
      tech: ["React", "JavaScript", "Node.js", "SQL", "Supabase"],
      category: "Web Application",
      icon: <Users className="w-6 h-6" />,
      liveUrl: "https://student-x.com/",
      githubUrl: "https://github.com/Mahmoudhijazii/Acadex",
      features: ["Marketplace", "Tutoring System", "Dorm Finder", "Real-time Chat"],
      hosting: "Hostinger (Frontend), Render (Backend), Supabase (Chat & Storage)"
    },
    {
      title: "AI CV Builder",
      description: "An intelligent CV builder that creates ATS-optimized professional resumes using OpenAI API integration.",
      tech: ["React", "Node.js", "OpenAI API", "PHP", "MySQL"],
      category: "AI Application",
      icon: <FileText className="w-6 h-6" />,
      liveUrl: "https://buildmycv.student-x.com/",
      githubUrl: "https://github.com/MIF20009/cv-builder",
      features: ["ATS Optimization", "AI-Powered Content", "Professional Templates", "Real-time Preview"]
    },
    {
      title: "Serverless Secure PaaS",
      description: "A fully serverless, network-isolated web application on Azure demonstrating enterprise-grade security and scalability.",
      tech: ["Azure", "App Service", "Functions", "Azure SQL", "Key Vault", "VNet"],
      category: "Cloud Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      githubUrl: "",
      features: ["Network Isolation", "Managed Identities", "Private Endpoints", "Azure Bastion"],
      hosting: "Microsoft Azure"
    },
    {
      title: "Toy Store E-commerce",
      description: "Complete e-commerce solution for an online toy store with modern frontend and robust backend architecture.",
      tech: ["React", "TypeScript", "C#", "LINQ", "SQL", "MySQL"],
      category: "E-commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      githubUrl: "https://github.com/MJawadN/TORISE",
      features: ["Product Catalog", "Shopping Cart", "User Management", "Order Processing"],
      ide: "Visual Studio Code"
    },
    {
      title: "EFAM Engineering Website",
      description: "Professional frontend website showcasing EFAM's engineering services, company profile, and business portfolio.",
      tech: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
      category: "Corporate Website",
      icon: <Building className="w-6 h-6" />,
      githubUrl: "https://github.com/MJawadN/EFAM",
      features: ["Company Profile", "Services Showcase", "Business Portfolio", "Responsive Design"]
    },
    {
      title: "Sports Registration System",
      description: "Mobile application for finding and booking nearby sports courts with user type-based functionality.",
      tech: ["Java", "Android Studio", "MySQL"],
      category: "Mobile Application",
      icon: <Smartphone className="w-6 h-6" />,
      githubUrl: "https://github.com/MJawadN/SportSpot",
      features: ["Location-based Search", "Court Booking", "Multi-sport Support", "User Management"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#00589A' }}>
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my development work spanning web applications, cloud infrastructure, 
            mobile apps, and AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
                      {project.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-800">{project.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gradient-to-r from-cyan-100 to-blue-100 text-slate-700 px-2 py-1 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-slate-300 text-slate-600 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>

                {project.hosting && (
                  <div className="mt-3 text-xs text-slate-500">
                    <span className="font-medium">Hosting:</span> {project.hosting}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
