import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';

interface ExperienceSectionProps {
  isDarkMode: boolean;
}

interface TimelineEntry {
  title: string;
  period: string;
  company: string;
  content: React.ReactNode;
  points: string[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const experiences: TimelineEntry[] = [
    {
      title: "Software Engineer",
      company: "IntelliCredence Pvt Ltd",
      period: "Jul 2024 - Present",
      points: [
        "Architected a scalable meet-up event management platform using Next.js and .NET Core, improving event scheduling, user registration, and real-time attendee engagement.",
        "Implemented role-based access for admins, users, organizers, venues, speakers, sponsors, and caterers, ensuring secure event management through Java microservices for authentication and Redis for real-time scheduling.",
        "Developed an HRMS CRM system for internal employee management, integrating AI-powered chatbots for onboarding, payroll, and attendance tracking, reducing HR workload by 40%.",
        "Streamlined key HR processes, including generating employee contracts and documents with OpenAI GPT-3 and DocuSign, improving process efficiency by 40%.",
        "Implemented ATS scanning and machine learning-based routing for recruitment and HR issues, enhancing efficiency and reducing resolution time by 45%."
      ],
      content: (
        <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <ul className="space-y-2 list-disc pl-5">
            <li>Architected a scalable meet-up event management platform using Next.js and .NET Core, improving event scheduling, user registration, and real-time attendee engagement.</li>
            <li>Implemented role-based access for admins, users, organizers, venues, speakers, sponsors, and caterers, ensuring secure event management through Java microservices for authentication and Redis for real-time scheduling.</li>
            <li>Developed an HRMS CRM system for internal employee management, integrating AI-powered chatbots for onboarding, payroll, and attendance tracking, reducing HR workload by 40%.</li>
            <li>Streamlined key HR processes, including generating employee contracts and documents with OpenAI GPT-3 and DocuSign, improving process efficiency by 40%.</li>
            <li>Implemented ATS scanning and machine learning-based routing for recruitment and HR issues, enhancing efficiency and reducing resolution time by 45%.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Software Engineer",
      company: "Book Luxury Yachts",
      period: "Feb 2023 - Jul 2024",
      points: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      ],
      content: (
        <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <ul className="space-y-2 list-disc pl-5">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Software Engineer (Contract)",
      company: "Stacksmith Consultency",
      period: "Feb 2022 - Jul 2022",
      points: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      ],
      content: (
        <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <ul className="space-y-2 list-disc pl-5">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Software Developer Intern ",
      company: "Stacksmith Consultency",
      period: "Nov 2021 - Jan 2022",
      points: [
        "Delivered defect-free web and mobile applications by adhering to rigorous testing standards and achieving 95% deployment accuracy.",
        "Documented comprehensive software and API processes, enhancing team collaboration and transition efficiency by 20%.",
        "Improved database query efficiency, reducing query execution time by 25%."
      ],
      content: (
        <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <ul className="space-y-2 list-disc pl-5">
            <li>Delivered defect-free web and mobile applications by adhering to rigorous testing standards and achieving 95% deployment accuracy.</li>
            <li>Documented comprehensive software and API processes, enhancing team collaboration and transition efficiency by 20%.</li>
            <li>Improved database query efficiency, reducing query execution time by 25%.</li>
          </ul>
        </div>
      )
    }
  ];

  const education: TimelineEntry[] = [
    {
      title: "Master of Computer Applications (MCA)",
      company: "Lovely Professional University",
      period: "2021 - 2023",
      points: [
        "Specialized in advanced software development, data structures, algorithms, and modern programming paradigms.",
        "Completed coursework in artificial intelligence, machine learning, database management, and web technologies.",
        "Developed multiple full-stack projects using React, Node.js, and Python during academic curriculum.",
        "Maintained excellent academic performance with focus on practical application of theoretical concepts.",
        "Participated in coding competitions and technical workshops to enhance problem-solving skills."
      ],
      content: (
        <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <ul className="space-y-2 list-disc pl-5">
            <li>Specialized in advanced software development, data structures, algorithms, and modern programming paradigms.</li>
            <li>Completed coursework in artificial intelligence, machine learning, database management, and web technologies.</li>
            <li>Developed multiple full-stack projects using React, Node.js, and Python during academic curriculum.</li>
            <li>Maintained excellent academic performance with focus on practical application of theoretical concepts.</li>
            <li>Participated in coding competitions and technical workshops to enhance problem-solving skills.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      company: "ARKA Jain University",
      period: "2018 - 2021",
      points: [
        "Comprehensive foundation in computer science fundamentals, programming languages, and software engineering principles.",
        "Studied core subjects including C/C++, Java, Data Structures, Computer Networks, and Database Management Systems.",
        "Completed hands-on projects in web development, mobile applications, and desktop software development.",
        "Achieved strong academic standing while developing practical coding and project management skills."
      ],
      content: (
        <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <ul className="space-y-2 list-disc pl-5">
            <li>Comprehensive foundation in computer science fundamentals, programming languages, and software engineering principles.</li>
            <li>Studied core subjects including C/C++, Java, Data Structures, Computer Networks, and Database Management Systems.</li>
            <li>Completed hands-on projects in web development, mobile applications, and desktop software development.</li>
            <li>Achieved strong academic standing while developing practical coding and project management skills.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section 
      id="experience" 
      className={`py-24 transition-all duration-200 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-modern-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <div className={`h-px w-8 bg-modern-primary`}></div>
            <span className={`text-sm uppercase tracking-wider font-medium text-modern-primary`}>
              My journey
            </span>
            <div className={`h-px w-8 bg-modern-primary`}></div>
          </div>
          <h2 className="section-title mb-4 animate-reveal-up text-center">
            Experience & Education
          </h2>
          <p className={`section-subtitle max-w-2xl mx-auto animate-reveal-up animate-delay-100 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My professional career path and educational background
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex rounded-xl p-1 ${
            isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'
          }`}>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'experience'
                  ? isDarkMode
                    ? 'bg-modern-primary text-white shadow-lg'
                    : 'bg-modern-primary text-white shadow-lg'
                  : isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'education'
                  ? isDarkMode
                    ? 'bg-modern-primary text-white shadow-lg'
                    : 'bg-modern-primary text-white shadow-lg'
                  : isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Education
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <AnimatePresence mode="wait">
        <Timeline 
          key={activeTab}
          data={activeTab === 'experience' ? experiences : education} 
          isDarkMode={isDarkMode} 
          isEducation={activeTab === 'education'}
        />
      </AnimatePresence>
    </section>
  );
};

const Timeline = ({ data, isDarkMode, isEducation }: { data: TimelineEntry[], isDarkMode: boolean, isEducation: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset expanded card when switching between tabs
  useEffect(() => {
    setExpandedCard(null);
  }, [isEducation]);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    // Initial height calculation
    updateHeight();

    // Set up ResizeObserver to track height changes during animations with throttling
    let resizeObserver: ResizeObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    
    if (ref.current) {
      resizeObserver = new ResizeObserver(() => {
        // Throttle resize observer calls to prevent excessive updates
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(updateHeight, 16); // ~60fps
      });
      resizeObserver.observe(ref.current);
    }

    // Multiple height updates during transitions for smoothness
    const intervals = [100, 200, 350, 500]; // Progressive updates during animation
    const timeouts: NodeJS.Timeout[] = [];
    
    intervals.forEach(delay => {
      const timeout = setTimeout(updateHeight, delay);
      timeouts.push(timeout);
    });

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [ref, expandedCard]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const toggleExpanded = async (index: number) => {
    // If clicking the same card, just toggle it
    if (expandedCard === index) {
      setExpandedCard(null);
      return;
    }

    // If another card is expanded, collapse it first, then expand the new one
    if (expandedCard !== null && expandedCard !== index) {
      setExpandedCard(null);
      // Wait for collapse animation to complete before expanding new card
      setTimeout(() => {
        setExpandedCard(index);
      }, 150); // Half the animation duration for smoother transition
    } else {
      // No card is expanded, directly expand the clicked one
      setExpandedCard(index);
    }
  };

  const renderCardContent = (item: TimelineEntry, index: number) => {
    if (!isMobile) {
      return item.content;
    }

    const isExpanded = expandedCard === index;
    const firstPoint = item.points[0];
    const remainingPoints = item.points.slice(1);

    return (
      <div className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        <ul className="space-y-2 list-disc pl-5">
          <li>{firstPoint}</li>
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                key="expanded-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                {remainingPoints.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto', 
                      marginTop: '0.5rem',
                      transition: { 
                        duration: 0.3, 
                        ease: 'easeInOut',
                        delay: pointIndex * 0.05 // Stagger animation for smoother effect
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0, 
                      marginTop: 0,
                      transition: { 
                        duration: 0.2, 
                        ease: 'easeInOut',
                        delay: (remainingPoints.length - pointIndex - 1) * 0.03 // Reverse stagger for collapse
                      }
                    }}
                  >
                    {point}
                  </motion.li>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </ul>
        
        {item.points.length > 1 && (
          <button
            onClick={() => toggleExpanded(index)}
            className={`mt-4 flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
              isDarkMode 
                ? 'text-modern-primary hover:text-blue-400' 
                : 'text-modern-primary hover:text-blue-600'
            }`}
          >
            {isExpanded ? (
              <>
                <span>View less</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span>View more ({remainingPoints.length} more)</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`w-full ${isDarkMode ? 'bg-black' : 'bg-white'} font-sans md:px-10`}
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="md:sticky flex flex-col md:flex-row z-40 items-center md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className={`h-10 absolute left-3 md:left-3 w-10 rounded-full ${
                isDarkMode ? 'bg-black' : 'bg-white'
              } flex items-center justify-center`}>
                <div className={`h-8 w-8 rounded-full ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                } border ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-300'
                } flex items-center justify-center`}>
                  {isEducation ? (
                    <GraduationCap className="h-4 w-4 text-modern-primary" />
                  ) : (
                    <Briefcase className="h-4 w-4 text-modern-primary" />
                  )}
                </div>
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-modern-primary">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="mb-2">
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-300' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {item.period}
                </span>
              </div>
              <h3 className="md:hidden block text-2xl mb-2 text-left font-bold text-modern-primary">
                {item.title}
              </h3>
              <p className={`text-lg font-medium mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {item.company}
              </p>
              <motion.div 
                className={`p-6 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gray-800/50' 
                    : 'bg-white border border-gray-100 shadow-sm'
                }`}
                layout="position"
                initial={false}
                animate={{ 
                  scale: expandedCard === index ? 1.02 : 1,
                  transition: { duration: 0.2, ease: 'easeInOut' }
                }}
                transition={{ 
                  layout: { duration: 0.3, ease: 'easeInOut' },
                  scale: { duration: 0.2, ease: 'easeInOut' }
                }}
              >
                {renderCardContent(item, index)}
              </motion.div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-modern-primary via-modern-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
