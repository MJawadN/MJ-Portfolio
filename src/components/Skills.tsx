import React from "react";
import {
  Code,
  Database,
  Cloud,
  Wrench,
  Palette,
  GitBranch,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Java",
        "C++",
        "C#",
        ".NET",
        "JavaScript",
        "TypeScript",
        "PHP",
        "Python",
        "LUA",
        "SQL",
      ],
    },
    {
      title: "Web Technologies",
      icon: <Palette className="w-6 h-6" />,
      skills: ["React.js", "Node.js", "JSP", "XML", "JSON", "HTML", "CSS"],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "MySQL",
        "Microsoft SQL Server",
        "Azure SQL",
        "Supabase",
        "PhpMyAdmin",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        "Microsoft Azure",
        "App Service",
        "Azure Functions",
        "Key Vault",
        "Virtual Networks",
        "Git & GitHub",
      ],
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        "VS Code",
        "Visual Studio Community",
        "Android Studio",
        "Eclipse IDE",
        "Anaconda Navigator",
        "Roblox Studio",
      ],
    },
    {
      title: "System Design",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        "Data Flow Diagrams",
        "Workflow Diagrams",
        "System Sequence Diagrams",
        "Use Case Diagrams",
        "Flowcharts",
        "EER Diagrams",
        "Normalization",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#00589A" }}
          >
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning modern web development, cloud
            technologies, and system design methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:border-cyan-200 transition-colors duration-200"
                  >
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
