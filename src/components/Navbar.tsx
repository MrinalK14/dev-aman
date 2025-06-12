import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interests', href: '#interests' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine which section is currently in view
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.substring(1));
    }
    setIsMobileMenuOpen(false);
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          scrolled ? 'backdrop-blur-md shadow-lg py-3' : 'py-5'
        } ${
          isDarkMode 
            ? 'bg-modern-surface-dark/90 border-gray-800' 
            : 'bg-modern-surface/90 border-gray-100'
        } ${scrolled ? 'border-b' : 'border-b-0'}`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="group flex items-center"
              >
                <div className="mr-2 h-8 w-8 rounded-full bg-modern-primary flex items-center justify-center text-white font-bold">
                  A
                </div>
                <h1 className={`text-xl font-display font-medium ${
                  isDarkMode ? 'text-white' : 'text-modern-dark'
                } group-hover:text-modern-primary transition-colors duration-200`}>
                  <span className="text-modern-primary">Aman</span> Ahuja
            </h1>
              </a>
          </div>

          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? isDarkMode
                          ? 'text-modern-primary'
                          : 'text-modern-primary'
                        : isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-modern-primary rounded-full" />
                    )}
                </button>
                );
              })}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-200 ${
                isDarkMode
                    ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700 hover:text-yellow-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
                aria-label="Toggle dark mode"
            >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isDarkMode 
                      ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                  aria-label="Toggle menu"
              >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - moved outside of nav to avoid positioning issues */}
      <div 
        className={`md:hidden fixed inset-0 pt-16 z-40 transition-all duration-200 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md`}
      >
        <div className="flex flex-col h-full justify-start items-center space-y-6 p-8 pt-12">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                className={`text-center px-6 py-3 text-lg font-medium transition-colors duration-200 relative ${
                  isActive
                    ? `text-modern-primary font-semibold`
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-gray-900'
                }`}
                >
                  {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-modern-primary rounded-full" />
                )}
                </button>
            );
          })}
          </div>
      </div>
    </>
  );
};

export default Navbar;
