"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useOutsideClick } from "./use-outside-click";

interface CardProps {
  card: {
    category: string;
    title: string;
    src: string;
    content?: React.ReactNode;
    technologies?: string[];
    github?: string;
    live?: string;
  };
  index: number;
  layout?: boolean;
}

export const Card = ({ card, index, layout = false }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isOpen) {
      // Add a class to the body to prevent scrolling when the card is open
      document.body.style.overflow = "hidden";
    } else {
      // Remove the class when the card is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure body scroll is enabled when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        ref={ref}
        className={`relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer ${
          isOpen ? "z-50 fixed inset-0" : "relative z-0"
        }`}
        onClick={() => !isOpen && setIsOpen(true)}
        layout={layout}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          layout={layout}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            opacity: isOpen ? 0 : 1,
          }}
        />

        <motion.img
          src={card.src}
          alt={card.title}
          className="h-full w-full object-cover"
          layout={layout}
        />

        <motion.div
          className="absolute inset-0 p-8 flex flex-col justify-between"
          layout={layout}
        >
          <motion.div layout={layout}>
            <motion.div
              className="text-xs md:text-sm text-white/70 uppercase tracking-wider"
              layout={layout}
            >
              {card.category}
            </motion.div>
            <motion.h3
              className="text-xl md:text-3xl font-bold text-white mt-2"
              layout={layout}
            >
              {card.title}
            </motion.h3>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2"
            layout={layout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {card.technologies?.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex md:items-center md:justify-center items-end justify-center bg-black/80"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[90vh] md:max-h-[90vh] max-h-[85vh] md:mt-0 mt-16 overflow-y-auto scrollbar-hide bg-white dark:bg-neutral-900 md:rounded-3xl rounded-t-3xl md:mb-0 mb-0 shadow-2xl"
            >
              <div className="relative">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-[40vh] object-cover"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    {card.category}
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mt-1">
                    {card.title}
                  </h3>
                </div>

                {card.content && (
                  <div className="mt-4 text-neutral-600 dark:text-neutral-300">
                    {card.content}
                  </div>
                )}

                {!card.content && (
                  <div className="mt-4 text-neutral-600 dark:text-neutral-300">
                    <p className="mb-6">
                      This project showcases my skills in creating modern, responsive
                      applications with a focus on user experience and performance.
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {card.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 mt-8">
                      {card.github && (
                        <a
                          href={card.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full bg-neutral-800 dark:bg-white text-white dark:text-neutral-800 font-medium hover:opacity-90 transition-opacity"
                        >
                          View Code
                        </a>
                      )}
                      {card.live && (
                        <a
                          href={card.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const newPosition = container.scrollLeft;
        const max = container.scrollWidth - container.clientWidth;
        setScrollPosition(newPosition);
        setMaxScroll(max);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initialize values
      setMaxScroll(container.scrollWidth - container.clientWidth);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };
  
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mt-10 relative px-4 md:px-8">
      {/* Navigation buttons */}
      <div className="hidden md:block">
        <button 
          onClick={scrollPrev} 
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 dark:bg-black/80 shadow-lg flex items-center justify-center backdrop-blur-sm transition-opacity ${scrollPosition <= 5 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button 
          onClick={scrollNext} 
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 dark:bg-black/80 shadow-lg flex items-center justify-center backdrop-blur-sm transition-opacity ${scrollPosition >= maxScroll - 5 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
      
      {/* Carousel */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth gap-6"
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[80%] sm:w-[55%] md:w-[40%] lg:w-[32%] xl:w-[24%] snap-center"
          >
            {item}
          </div>
        ))}
      </div>
      
      {/* Scroll indicators - Mobile only */}
      <div className="flex justify-center mt-4 gap-2 md:hidden">
        {items.length > 0 && (
          <div className="flex gap-1.5">
            {Array.from({ length: items.length }).map((_, i) => {
              // Calculate which dot should be active based on scroll position
              const itemWidth = scrollContainerRef.current ? 
                scrollContainerRef.current.scrollWidth / items.length : 0;
              const activeIndex = Math.round(scrollPosition / itemWidth);
              
              return (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? 'w-6 bg-gray-800 dark:bg-white' 
                      : 'w-1.5 bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// Add global styles
const appleButtonStyles = `
.apple-button {
  background: linear-gradient(180deg, #1E88E5 0%, #1565C0 100%);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(21, 101, 192, 0.3);
  text-align: center;
}

.apple-button:hover {
  background: linear-gradient(180deg, #1976D2 0%, #0D47A1 100%);
  box-shadow: 0 4px 15px rgba(21, 101, 192, 0.4);
  transform: translateY(-1px);
}

.apple-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
}

.dark .section-subtitle {
  color: #9ca3af;
}

.animate-reveal-up {
  animation: revealUp 0.8s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.animate-delay-100 {
  animation-delay: 0.1s;
}

@keyframes revealUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

// Create a style element to inject the CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = appleButtonStyles;
  document.head.appendChild(style);
} 