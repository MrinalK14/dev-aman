import React from 'react';
import { Code, Database, Server, Wrench } from 'lucide-react';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

// Define a Technology interface
interface Technology {
  name: string;
  icon: string;
  type: 'skillicon' | 'custom';
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      color: "text-modern-primary",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Scss", "Shadcn", "Magic UI", "Canvas.js"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      color: "text-modern-secondary",
      skills: ["Next.js", "Node.js", "Express.js", "Python", "Flask"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      color: "text-modern-accent",
      skills: ["MongoDB", "SQL", "GraphQL", "DynamoDB", "Redis", "Bull.js"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench size={24} />,
      color: "text-modern-error",
      skills: ["Docker", "Azure", "AWS", "GCP", "GitHub", "GitHub Copilot", "Figma", "Cursor AI", "VS Code", "Canva", "ChatGPT", "Claude", "n8n", "RAG"]
    }
  ];

  // Technology categories with names and icons for desktop view
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "JavaScript", type: 'skillicon' as const, icon: "javascript" },
        { name: "React", type: 'skillicon' as const, icon: "react" },
        { name: "TypeScript", type: 'skillicon' as const, icon: "ts" },
        { name: "Tailwind CSS", type: 'skillicon' as const, icon: "tailwind" },
        { name: "Vue.js", type: 'skillicon' as const, icon: "vue" },
        { name: "SCSS", type: 'skillicon' as const, icon: "sass" },
        { name: "Shadcn", type: 'custom' as const, icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
        { name: "Canvas.js", type: 'custom' as const, icon: "https://canvasjs.com/wp-content/uploads/images/logo/canvasjs-logo-240x100.png" }
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Next.js", type: 'skillicon' as const, icon: "nextjs" },
        { name: "Node.js", type: 'skillicon' as const, icon: "nodejs" },
        { name: "Express.js", type: 'skillicon' as const, icon: "express" },
        { name: "Python", type: 'skillicon' as const, icon: "python" },
        { name: "Flask", type: 'skillicon' as const, icon: "flask" },
        { name: "Stripe", type: 'custom' as const, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" }
      ]
    },
    {
      title: "Database",
      technologies: [
        { name: "MongoDB", type: 'skillicon' as const, icon: "mongodb" },
        { name: "SQL", type: 'skillicon' as const, icon: "mysql" },
        { name: "GraphQL", type: 'skillicon' as const, icon: "graphql" },
        { name: "DynamoDB", type: 'skillicon' as const, icon: "dynamodb" },
        { name: "Redis", type: 'skillicon' as const, icon: "redis" },
        { name: "Bull.js", type: 'custom' as const, icon: "https://raw.githubusercontent.com/OptimalBits/bull/develop/support/logo%402x.png" }
      ]
    },
    {
      title: "DevOps & Tools",
      technologies: [
        { name: "Docker", type: 'skillicon' as const, icon: "docker" },
        { name: "Azure", type: 'skillicon' as const, icon: "azure" },
        { name: "AWS", type: 'skillicon' as const, icon: "aws" },
        { name: "GCP", type: 'skillicon' as const, icon: "gcp" },
        { name: "GitHub", type: 'skillicon' as const, icon: "github" },
        { name: "Git", type: 'skillicon' as const, icon: "git" },
        { name: "Figma", type: 'skillicon' as const, icon: "figma" },
        { name: "Cursor AI", type: 'custom' as const, icon: "https://cursor.sh/apple-touch-icon.png" },
        { name: "VS Code", type: 'skillicon' as const, icon: "vscode" },
        { name: "ChatGPT", type: 'custom' as const, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png" },
        { name: "n8n", type: 'custom' as const, icon: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },
      ]
    }
  ];

  // Helper function to render skill icon
  const renderSkillIcon = (tech: Technology) => {
    if (tech.type === 'skillicon') {
      return (
        <img
          src={`https://skillicons.dev/icons?i=${tech.icon}`}
          alt={tech.name}
          className="w-16 h-16"
          loading="lazy"
          decoding="async"
        />
      );
    } else {
      return (
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-16 h-16 object-contain rounded-xl"
          loading="lazy"
          decoding="async"
        />
      );
    }
  };

  return (
    <section id="skills" className={`py-24 transition-all duration-200 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-modern-dark'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <div className={`h-px w-8 bg-modern-primary`}></div>
            <span className={`text-sm uppercase tracking-wider font-medium text-modern-primary`}>My expertise</span>
            <div className={`h-px w-8 bg-modern-primary`}></div>
          </div>
          <h2 className="section-title mb-4 animate-reveal-up text-center">Skills & Technologies</h2>
          <p className={`section-subtitle max-w-2xl mx-auto animate-reveal-up animate-delay-100 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I've worked with a variety of technologies across the full stack development spectrum
          </p>
        </div>
        
        {/* Mobile view - categories with pills (original design) */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-800' 
                  : 'bg-white hover:shadow-lg border border-gray-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-medium">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode 
                        ? 'bg-gray-700/50 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop view - categories with icons */}
        <div className="hidden md:block">
          <div className="space-y-16 max-w-6xl mx-auto">
            {techCategories.map((category, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-display font-medium text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex items-center justify-center"
                      title={tech.name}
                    >
                      <div className="w-18 h-18 flex items-center justify-center">
                        {renderSkillIcon(tech)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
