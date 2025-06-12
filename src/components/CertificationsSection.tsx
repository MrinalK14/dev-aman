import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkPreview } from './ui/link-preview';

interface CertificationsSectionProps {
  isDarkMode: boolean;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'achievements'>('certifications');

  const certifications = [
    {
      title: "Learning REST APIs",
      issuer: "LinkedIn Learning",
      date: "2021",
      url: "https://www.linkedin.com/learning/learning-rest-apis",
      imageSrc: "/C1.jpg"
    },
    {
      title: "Become a Full-Stack Web Developer",
      issuer: "LinkedIn Learning",
      date: "2021",
      url: "https://www.linkedin.com/learning/paths/become-a-full-stack-web-developer",
      imageSrc: "/C2.jpg"
    },
    {
      title: "Learning SQL Programming",
      issuer: "LinkedIn Learning",
      date: "2021",
      url: "https://www.linkedin.com/learning/learning-sql-programming",
      imageSrc: "/C3.jpg"
    },
    {
      title: "Become a Software Developer",
      issuer: "LinkedIn Learning",
      date: "2021",
      url: "https://www.linkedin.com/learning/paths/become-a-software-developer",
      imageSrc: "/C4.jpg"
    }
  ];

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
          <h2 className="section-title mb-4 animate-reveal-up text-center">Certifications & Achievements</h2>
          <p className={`section-subtitle max-w-2xl mx-auto animate-reveal-up animate-delay-100 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Professional certifications and notable accomplishments
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className={`inline-flex rounded-lg p-1 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`w-36 px-6 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === 'certifications' 
                    ? isDarkMode 
                      ? `bg-modern-primary text-white` 
                      : `bg-white shadow-sm text-modern-dark`
                    : isDarkMode
                      ? `text-gray-400 hover:text-gray-300`
                      : `text-gray-500 hover:text-gray-700`
                }`}
              >
                <span className="flex items-center gap-2 justify-center">
                  <Award size={18} />
                  <span>Certifications</span>
                </span>
              </button>
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
            </div>
          </div>
          
          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <div className="relative">
              {/* Certifications Tab */}
              {activeTab === 'certifications' && (
                <motion.div 
                  key="certifications"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {certifications.map((certification, index) => (
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
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <LinkPreview
                              url={certification.url}
                              className="font-medium hover:text-modern-primary transition-colors duration-200 cursor-pointer"
                              isStatic={true}
                              imageSrc={certification.imageSrc}
                              width={300}
                              height={200}
                            >
                              <h4 className="font-medium">{certification.title}</h4>
                            </LinkPreview>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {certification.date}
                            </span>
                          </div>
                          <p className={`text-sm font-medium mb-1 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {certification.issuer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
              
              {/* Achievements Tab */}
              {activeTab === 'achievements' && (
                <motion.div 
                  key="achievements"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
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
            </div>
          </AnimatePresence>
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
