import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Palette, 
  Rocket, 
  BikeIcon, 
  Gamepad2, 
} from 'lucide-react';

interface InterestsSectionProps {
  isDarkMode: boolean;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ isDarkMode }) => {
    const interests = [
      {
        title: "Tech Innovation",
        description: "Always exploring new technologies, frameworks, and development methodologies",
        icon: Rocket,
        color: "bg-orange-500"
      },
    {
      title: "UI/UX Design",
      description: "Enthusiastic about creating beautiful and intuitive user experiences and interfaces",
      icon: Palette,
      color: "bg-purple-500"
    },
    {
        title: "Bike Riding",
        description: "Exploring new routes and enjoying the freedom of riding through scenic landscapes",
        icon: BikeIcon,
        color: "bg-amber-600"
      },
    {
      title: "Gaming",
      description: "Exploring virtual worlds and enjoying strategic and adventure games",
      icon: Gamepad2,
      color: "bg-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="interests" 
      className={`py-24 transition-all duration-200 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-modern-dark'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <div className={`h-px w-8 bg-modern-primary`}></div>
            <span className={`text-sm uppercase tracking-wider font-medium text-modern-primary`}>
              Personal Passions
            </span>
            <div className={`h-px w-8 bg-modern-primary`}></div>
          </div>
          <h2 className="section-title mb-4 animate-reveal-up text-center">
            Interests & Hobbies
          </h2>
          <p className={`section-subtitle max-w-2xl mx-auto animate-reveal-up animate-delay-100 text-center ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            What drives my passion beyond coding and development
          </p>
        </div>

        {/* Interests Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`group relative p-6 rounded-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-900/50 hover:bg-gray-800/70 border border-gray-800 hover:border-gray-700' 
                    : 'bg-white hover:shadow-xl border border-gray-100 hover:border-gray-200'
                }`}
              >
                {/* Icon */}
                <div className={`relative mb-4 w-12 h-12 rounded-xl ${interest.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent 
                    size={24} 
                    className="text-white" 
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className={`font-semibold text-lg mb-2 group-hover:text-modern-primary transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {interest.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {interest.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-modern-primary/5 to-transparent' 
                    : 'bg-gradient-to-br from-modern-primary/5 to-transparent'
                }`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            These interests keep me creative and motivated in my professional journey
          </p>
          <div className={`mt-4 w-24 h-px mx-auto ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection; 