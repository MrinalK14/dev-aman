import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  isDarkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set status to submitting
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
    console.log('Form submitted:', formData);
      setFormStatus('success');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
      
      // Reset status after showing success message
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'amanahujajsr@gmail.com',
      link: 'mailto:amanahujajsr@gmail.com',
      color: 'text-modern-primary'
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: '+91 8102223631',
      link: 'tel:+918102223631',
      color: 'text-modern-secondary'
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/itsamanahuja',
      link: 'https://linkedin.com/in/itsamanahuja',
      color: 'text-modern-accent'
    },
    {
      icon: <Github size={18} />,
      label: 'GitHub',
      value: 'github.com/amandev-code',
      link: 'https://github.com/amandev-code',
      color: 'text-modern-error'
    }
  ];

  return (
    <section 
      id="contact" 
      className={`py-24 transition-all duration-200 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-modern-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <div className={`h-px w-8 bg-modern-primary`}></div>
            <span className={`text-sm uppercase tracking-wider font-medium text-modern-primary`}>Contact</span>
            <div className={`h-px w-8 bg-modern-primary`}></div>
          </div>
          <h2 className="section-title mb-4 animate-reveal-up text-center">Get In Touch</h2>
          <p className={`section-subtitle max-w-2xl mx-auto animate-reveal-up animate-delay-100 text-center ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
              <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 group ${
                    isDarkMode 
                      ? 'bg-gray-900/50 hover:bg-gray-800' 
                      : 'bg-white hover:shadow-md'
                  }`}
                >
                  <div className={`${item.color} p-2.5 rounded-full ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                    <p className="font-medium group-hover:text-modern-primary transition-colors text-sm sm:text-base break-all">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`p-5 rounded-2xl ${
                isDarkMode ? 'bg-gray-900/50' : 'bg-white'
              }`}
            >
              <h4 className="font-medium text-lg mb-3">Available for</h4>
              <div className="space-y-2.5">
                {[
                  { text: "Full-time opportunities", color: "bg-modern-primary" },
                  { text: "Freelance projects", color: "bg-modern-secondary" },
                  { text: "Consulting work", color: "bg-modern-accent" },
                  { text: "Technical mentoring", color: "bg-modern-error" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    className="flex items-center gap-2.5"
                  >
                    <div className={`w-2 h-2 rounded-full ${item.color} flex-shrink-0`}></div>
                    <span className="text-xs sm:text-sm lg:text-base">{item.text}</span>
                  </motion.div>
                ))}
            </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form 
              onSubmit={handleSubmit} 
              className={`p-5 sm:p-6 lg:p-8 rounded-2xl space-y-5 ${
                isDarkMode ? 'bg-gray-900/50' : 'bg-white shadow-sm'
              }`}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors duration-200 text-sm sm:text-base ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-modern-primary' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-modern-primary'
                  } focus:outline-none focus:ring-2 focus:ring-modern-primary/20`}
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors duration-200 text-sm sm:text-base ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-modern-primary' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-modern-primary'
                  } focus:outline-none focus:ring-2 focus:ring-modern-primary/20`}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  rows={4}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors duration-200 resize-none text-sm sm:text-base ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-modern-primary' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-modern-primary'
                  } focus:outline-none focus:ring-2 focus:ring-modern-primary/20`}
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  formStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : formStatus === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-modern-primary text-white hover:bg-modern-primary/90 hover:shadow-lg hover:shadow-modern-primary/20'
                }`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Spinner />
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckIcon />
                    Message Sent!
                  </>
                ) : formStatus === 'error' ? (
                  <>
                    <XIcon />
                    Error Sending
                  </>
                ) : (
                  <>
                    <Send size={18} />
                Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper components for form status
const Spinner = () => (
  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const XIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

export default ContactSection;
