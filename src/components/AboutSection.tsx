import React from 'react';
import { Code, Globe, Lightbulb, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  const skills = [
    "JavaScript/TypeScript", 
    "React.js", 
    "Node.js", 
    "Next.js", 
    "TailwindCSS",
    "MongoDB",
    "AWS",
    "GraphQL"
  ];

  return (
    <section 
      id="about" 
      className={`py-20 transition-all duration-200 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-modern-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-modern-primary"></div>
            <span className="text-sm uppercase tracking-wider font-medium text-modern-primary">
              About me
            </span>
            <div className="h-px w-12 bg-modern-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I am</h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            {/* About Text */}
            <div className="space-y-6 mb-12">
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Born in Jamshedpur—fondly known as Tatanagar—I've always been curious about how technology shapes the world around us. That curiosity led me to pursue a Master's in Computer Applications from Lovely Professional University, where I discovered my passion for crafting thoughtful digital experiences.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I find joy in writing clean, purposeful code and exploring how design and logic come together to create something truly meaningful. For me, development isn't just about syntax—it's about solving real problems with clarity, elegance, and intent.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                When I'm not coding, you'll probably find me gaming, riding my bike on open roads, or discovering a new dish to obsess over. I believe creativity fuels everything we do whether it's in code, on a ride, or at the dinner table.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border border-gray-700/50' 
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <Code className="w-7 h-7 text-modern-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-modern-primary">1+</h3>
                  <p className={`text-base font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Years of Experience
                  </p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Building modern applications
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border border-gray-700/50' 
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <Lightbulb className="w-7 h-7 text-modern-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-modern-primary">6+</h3>
                  <p className={`text-base font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Skills Mastered
                  </p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Frontend & Backend
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:mt-0">
            <div className="relative w-full max-w-sm">
              {/* Image container */}
              <div className="overflow-hidden rounded-xl">
                <img 
                  src="/Aman2.png" 
                  alt="Aman Ahuja" 
                  className="w-full h-[450px] sm:h-[500px] lg:h-[520px] object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
