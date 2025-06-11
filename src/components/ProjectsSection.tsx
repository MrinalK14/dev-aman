import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, full-stack e-commerce solution built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and an admin dashboard for inventory management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      category: "Full Stack Application",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux", "Express.js"],
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://your-ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features. Built with Vue.js and Socket.io for seamless real-time communication and MongoDB for data persistence.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
      category: "Web Application",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Vuex", "JWT"],
      github: "https://github.com/yourusername/task-management",
      live: "https://your-task-app-demo.com"
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chatbot application powered by machine learning and natural language processing. Features include context-aware conversations, sentiment analysis, and integration with multiple AI models for enhanced user experience.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
      category: "Machine Learning",
      technologies: ["Python", "TensorFlow", "Flask", "React", "OpenAI API", "Redis"],
      github: "https://github.com/yourusername/ai-chat-app",
      live: "https://your-ai-chat-demo.com"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A comprehensive weather analytics dashboard that visualizes meteorological data using D3.js. Features interactive charts, weather pattern analysis, and predictive modeling for climate insights.",
      image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?auto=format&fit=crop&w=800&q=80",
      category: "Data Visualization",
      technologies: ["D3.js", "Python", "FastAPI", "PostgreSQL", "Chart.js", "Docker"],
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://your-weather-demo.com"
    },
    {
      title: "Fitness Tracker App",
      description: "A comprehensive fitness tracking application built with React Native. Features workout logging, progress tracking, social challenges, and integration with wearable devices for comprehensive health monitoring.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      category: "Mobile Application",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "HealthKit", "Google Fit"],
      github: "https://github.com/yourusername/fitness-tracker",
      live: "https://your-fitness-app-demo.com"
    },
    {
      title: "NFT Marketplace",
      description: "A decentralized NFT marketplace built on Ethereum blockchain. Features include NFT minting, trading, auction system, and wallet integration with MetaMask for secure transactions.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      category: "Blockchain",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "Hardhat"],
      github: "https://github.com/yourusername/nft-marketplace",
      live: "https://your-nft-demo.com"
    }
  ];

  // Map projects to card format
  const cards = projects.map((project, index) => (
    <Card 
      key={project.title}
      card={{
        category: project.category,
        title: project.title,
        src: project.image,
        technologies: project.technologies,
        github: project.github,
        live: project.live,
        content: (
          <div className="space-y-4">
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description}
            </p>
            {project.technologies && (
              <div>
                <h4 className="text-base font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className={`px-2.5 py-1 rounded-full text-xs ${
                        isDarkMode 
                          ? 'bg-neutral-800 text-neutral-300' 
                          : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex gap-3 mt-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-5 py-2.5 rounded-full bg-neutral-800 dark:bg-white text-white dark:text-neutral-800 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  View Code
                </a>
              )}
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-5 py-2.5 rounded-full bg-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )
      }}
      index={index}
      layout={true}
    />
  ));

  return (
    <section id="projects" className={`py-24 transition-all duration-200 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-modern-dark'
    }`}>
      {/* Section header with standard width */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <div className={`h-px w-8 bg-modern-primary`}></div>
            <span className={`text-sm uppercase tracking-wider font-medium text-modern-primary`}>My work</span>
            <div className={`h-px w-8 bg-modern-primary`}></div>
          </div>
          <h2 className="section-title mb-4 animate-reveal-up text-center">
            Featured Projects
          </h2>
          <p className={`section-subtitle max-w-2xl mx-auto animate-reveal-up animate-delay-100 text-center ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Showcasing my latest work and creations
          </p>
        </div>
      </div>
      
      {/* Expanded width container for carousel */}
      <div className="w-full max-w-[1400px] mx-auto">
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default ProjectsSection;
