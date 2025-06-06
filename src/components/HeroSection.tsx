import React, { useEffect, useState } from 'react';
import { ArrowDown, Linkedin, FileText, Github } from 'lucide-react';
import { FlipWords } from './ui/FlipWords';

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  // Array of adjectives for the description
  const adjectiveWords = [
    "modern",
    "responsive",
    "user-friendly",
    "scalable",
    "accessible",
    "performant"
  ];
  
  // Animated dots state
  const [dots, setDots] = useState<Array<{x: number, y: number, size: number, delay: number}>>([]);
  
  useEffect(() => {
    // Generate random dots for the background
    const newDots = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5
    }));
    setDots(newDots);
  }, []);

  return (
    <section 
      id="home" 
      className={`min-h-screen flex flex-col justify-center relative overflow-hidden transition-all duration-200 ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Grid background with radial fade */}
      <div
        className="absolute inset-0 [background-size:20px_20px]"
        style={{
          backgroundImage: isDarkMode 
            ? 'linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)' 
            : 'linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)'
        }}
      />
      
      {/* Radial gradient for the container to give a faded look */}
      <div 
        className={`pointer-events-none absolute inset-0 flex items-center justify-center ${
          isDarkMode ? 'bg-black' : 'bg-white'
        } [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`}
      />

      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-20">
        <div className="max-w-3xl mx-auto">
          {/* Mobile view - left aligned layout */}
          <div className="sm:hidden space-y-6 text-left px-2">
            <div>
              <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${
                isDarkMode 
                  ? 'bg-modern-primary/20 text-modern-primary' 
                  : 'bg-modern-primary/10 text-modern-primary'
              }`}>
            Software Engineer
              </span>
            </div>
            
            <div className="space-y-1">
              <h1 className="text-4xl font-display font-semibold tracking-tight animate-fade-in">
                <div className={isDarkMode ? 'text-white' : 'text-modern-dark'}>
                  Hi,
                </div>
                <div className={isDarkMode ? 'text-white' : 'text-modern-dark'}>
                  I'm <span className="text-modern-primary">Aman</span> Ahuja
                </div>
          </h1>
              <p className={`text-xl font-light ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className="italic">Transforming ideas into digital reality</span>
              </p>
            </div>
            
            <div className={`text-lg font-light ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
            } space-y-1 mt-4`}>
              <div className="flex items-center">
                <span>I build</span>
                <span className="ml-2">
                  <FlipWords 
                    words={adjectiveWords} 
                    duration={2500}
                    className={`font-medium ${isDarkMode ? 'text-modern-primary' : 'text-modern-primary'}`}
                  />
                </span>
              </div>
              <div>
                applications with clean code and innovative solutions.
              </div>
            </div>
            
            <div className="flex flex-row flex-wrap gap-3 pt-4">
              <a 
                href="https://linkedin.com/in/itsamanahuja" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-3 py-2 rounded-full font-medium transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-modern-primary text-white hover:bg-modern-primary/90' 
                    : 'bg-modern-primary text-white hover:bg-modern-primary/90'
                }`}
              >
                <Linkedin size={14} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/amandev-code" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-3 py-2 rounded-full font-medium border transition-all duration-200 ${
                  isDarkMode 
                    ? 'border-gray-700 text-white hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Github size={14} />
                <span className="text-sm">GitHub</span>
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-3 py-2 rounded-full font-medium border transition-all duration-200 ${
                  isDarkMode 
                    ? 'border-gray-700 text-white hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}
              >
                <FileText size={14} />
                <span className="text-sm">Resume</span>
              </a>
            </div>
          </div>

          {/* Desktop view - original layout */}
          <div className="hidden sm:block space-y-6 text-left">
            <div>
              <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${
                isDarkMode 
                  ? 'bg-modern-primary/20 text-modern-primary' 
                  : 'bg-modern-primary/10 text-modern-primary'
              }`}>
                Software Engineer
              </span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight animate-fade-in">
                <span className={isDarkMode ? 'text-white' : 'text-modern-dark'}>
                  Hi, I'm <span className="text-modern-primary">Aman</span> Ahuja
                </span>
              </h1>
              <p className={`mt-4 text-2xl md:text-3xl font-light ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className="italic">Transforming ideas into digital reality</span>
              </p>
            </div>
            
            <div className={`text-xl md:text-2xl font-light max-w-2xl ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            } min-h-[3rem]`}>
              <span className="inline-flex flex-wrap">
                I build 
                <span className="relative mx-2 inline-flex items-center justify-center">
                  <FlipWords 
                    words={adjectiveWords} 
                    duration={2500}
                    className={`font-medium ${isDarkMode ? 'text-modern-primary' : 'text-modern-primary'}`}
                  />
                </span>
                applications with clean code and innovative solutions.
              </span>
            </div>
            
            <div className="flex flex-row gap-4 justify-start pt-4">
              <a 
                href="https://linkedin.com/in/itsamanahuja" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-modern-primary text-white hover:bg-modern-primary/90' 
                    : 'bg-modern-primary text-white hover:bg-modern-primary/90'
                }`}
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/amandev-code" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium border transition-all duration-200 ${
                  isDarkMode 
                    ? 'border-gray-700 text-white hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium border transition-all duration-200 ${
                isDarkMode 
                    ? 'border-gray-700 text-white hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}
            >
                <FileText size={18} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      

      
      <div className="absolute bottom-8 left-0 right-0 mx-auto flex justify-center animate-bounce z-20">
        <button 
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className={`p-2 rounded-full ${
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="sm:hidden" />
          <ArrowDown size={24} className="hidden sm:block" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
