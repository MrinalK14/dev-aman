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
      className={`py-24 transition-all duration-200 relative overflow-hidden ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-modern-dark'
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient background */}
        <div className={`absolute top-0 right-0 w-full h-64 opacity-30 ${
          isDarkMode ? 'bg-gradient-to-b from-modern-primary/10 to-transparent' : 'bg-gradient-to-b from-modern-primary/5 to-transparent'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section heading with minimal design */}
          <div className="mb-12 text-center">
            <div className="flex items-center gap-2 mb-3 justify-center">
              <div className={`h-px w-8 bg-modern-primary`}></div>
              <span className={`text-sm uppercase tracking-wider font-medium text-modern-primary`}>About me</span>
              <div className={`h-px w-8 bg-modern-primary`}></div>
            </div>
            <h2 className="section-title mb-4 animate-reveal-up text-center">Who I am</h2>
          </div>
          
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Left column - About text */}
            <div className="md:col-span-7 space-y-6">
              <div className={`space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="text-lg leading-relaxed">
                  Born in Jamshedpur—fondly known as Tatanagar—I've always been curious about how technology shapes the world around us. That curiosity led me to pursue a Master's in Computer Applications from Lovely Professional University, where I discovered my passion for crafting thoughtful digital experiences. 
                </p>
                <p className="text-lg leading-relaxed">
                  I find joy in writing clean, purposeful code and exploring how design and logic come together to create something truly meaningful. For me, development isn't just about syntax—it's about solving real problems with clarity, elegance, and intent.
                </p>
                <p className="text-lg leading-relaxed">
                 When I'm not coding, you'll probably find me gaming, riding my bike on open roads, or discovering a new dish to obsess over. I believe creativity fuels everything we do whether it's in code, on a ride, or at the dinner table.
                </p>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="md:col-span-5">
              {/* Profile image with modern styling */}
              <div className="relative mb-8 -mt-8">
                {/* Image container with no visible borders */}
                <div className="overflow-hidden" style={{ borderRadius: '16px' }}>
                  <div className="relative w-full h-[500px] overflow-hidden">
                    <img 
                      src="/Aman2.png" 
                      alt="Aman Ahuja" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
