import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface CertificationsSectionProps {
  isDarkMode: boolean;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'interests'>('achievements');

  const achievements = [
    {
      title: "Hackathon 2023",
      description: "Winner of Best Innovation Award for AI-powered accessibility tool"
    },
    {
      title: "Stack Overflow",
      description: "Top 1% contributor with over 15,000 reputation points"
    },
    {
      title: "DevCon 2022",
      description: "Featured speaker on 'Building Scalable Applications'"
    },
    {
      title: "Open Source",
      description: "Major contributor to 50+ GitHub repositories"
    }
  ];

  const interests = [
    {
      title: "Artificial Intelligence",
      description: "Passionate about machine learning and AI applications in web development"
    },
    {
      title: "Open Source",
      description: "Active contributor to various open source projects and communities"
    },
    {
      title: "UI/UX Design",
      description: "Enthusiastic about creating beautiful and intuitive user experiences"
    },
    {
      title: "Tech Innovation",
      description: "Always exploring new technologies and development methodologies"
    }
  ];

  return (
    <section 
      id="certifications" 
      className={`py-24 transition-all duration-200 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-modern-dark'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="apple-section text-center mb-12">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <div className={`h-px w-8 bg-modern-primary`}></div>
            <span className={`text-sm uppercase tracking-wider font-medium text-modern-primary`}>Credentials</span>
            <div className={`h-px w-8 bg-modern-primary`}></div>
          </div>
          <h2 className="section-title mb-4 animate-reveal-up text-center">Achievements & Interests</h2>
          <p className={`section-subtitle max-w-2xl mx-auto animate-reveal-up animate-delay-100 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Notable accomplishments and personal interests
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className={`inline-flex rounded-lg p-1 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`w-36 px-6 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === 'achievements' 
                    ? isDarkMode 
                      ? `bg-modern-primary text-white` 
                      : `bg-white shadow-sm text-modern-dark`
                    : isDarkMode
                      ? `text-gray-400 hover:text-gray-300`
                      : `text-gray-500 hover:text-gray-700`
                }`}
              >
                <span className="flex items-center gap-2 justify-center">
                  <Trophy size={18} />
                  <span>Achievements</span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab('interests')}
                className={`w-36 px-6 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === 'interests' 
                    ? isDarkMode 
                      ? `bg-modern-primary text-white` 
                      : `bg-white shadow-sm text-modern-dark`
                    : isDarkMode
                      ? `text-gray-400 hover:text-gray-300`
                      : `text-gray-500 hover:text-gray-700`
                }`}
              >
                <span className="flex items-center gap-2 justify-center">
                  <span>Interests</span>
                </span>
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="relative">
            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-900/50 hover:bg-gray-800' 
                        : 'bg-white hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-2 h-2 mt-2 rounded-full ${
                        index % 4 === 0 ? 'bg-modern-primary' : 
                        index % 4 === 1 ? 'bg-modern-secondary' :
                        index % 4 === 2 ? 'bg-modern-accent' : 'bg-modern-error'
                      }`}></div>
                      <div>
                        <h4 className="font-medium mb-1">{achievement.title}</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
            
            {/* Interests Tab */}
            {activeTab === 'interests' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-900/50 hover:bg-gray-800' 
                        : 'bg-white hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-2 h-2 mt-2 rounded-full ${
                        index % 4 === 0 ? 'bg-modern-primary' : 
                        index % 4 === 1 ? 'bg-modern-secondary' :
                        index % 4 === 2 ? 'bg-modern-accent' : 'bg-modern-error'
                      }`}></div>
                      <div>
                        <h4 className="font-medium mb-1">{interest.title}</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Trophy = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C11.56 18.75 12 19.6 12 20.5c0 .9-.44 1.75-1.03 2.29-.5.23-.97.71-.97 1.21"/>
    <path d="M14 14.66V17c0 .55-.47.98-.97 1.21C12.44 18.75 12 19.6 12 20.5c0 .9.44 1.75 1.03 2.29.5.23.97.71.97 1.21"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

export default CertificationsSection;
