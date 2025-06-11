import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Heart, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/amandev-code',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/itsamanahuja',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/itsaman.ahuja/',
      icon: Instagram,
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/Amanahuja0657',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:amandev.code@gmail.com',
      icon: Mail,
    },
  ];

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`relative ${
      isDarkMode ? 'bg-black border-t border-gray-800' : 'bg-white border-t border-gray-200'
    }`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-modern-dark'
              }`}>
                Aman <span className="text-modern-primary">Ahuja</span>
              </h3>
              <p className={`mt-2 text-base ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Software Engineer
              </p>
            </div>
            <p className={`text-base leading-relaxed max-w-md ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionate about creating modern, scalable web applications with clean code and innovative solutions. 
              Let's build something amazing together.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className={`w-4 h-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <a 
                  href="mailto:amandev.code@gmail.com"
                  className={`text-sm transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-modern-primary' 
                      : 'text-gray-600 hover:text-modern-primary'
                  }`}
                >
                  amandev.code@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className={`w-4 h-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <span className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Jamshedpur, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-modern-dark'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm transition-colors hover:translate-x-1 transform transition-transform duration-200 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-modern-primary' 
                        : 'text-gray-600 hover:text-modern-primary'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-modern-dark'
            }`}>
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-sm transition-colors group ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-modern-primary' 
                        : 'text-gray-600 hover:text-modern-primary'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>{social.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                );
              })}
            </div>
            
            {/* Resume Download */}
            <div className="mt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isDarkMode
                    ? 'bg-modern-primary/10 text-modern-primary hover:bg-modern-primary/20 border border-modern-primary/20'
                    : 'bg-modern-primary/10 text-modern-primary hover:bg-modern-primary/20 border border-modern-primary/20'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${
        isDarkMode ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              © {currentYear} Aman Ahuja. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-sm">
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                Built with
              </span>
              <Heart className={`w-4 h-4 text-red-500 ${
                isDarkMode ? 'fill-red-500' : 'fill-red-500'
              }`} />
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                using React & TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 