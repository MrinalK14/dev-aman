import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface ExperienceSectionProps {
  isDarkMode: boolean;
}

interface TimelineEntry {
  title: string;
  period: string;
  company: string;
  content: React.ReactNode;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDarkMode }) => {
  const experiences: TimelineEntry[] = [
    {
      title: "Software Engineer",
      company: "IntelliCredence Pvt Ltd",
      period: "Jul 2024 - Present",
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

  return (
    <section 
      id="experience" 
      className={`py-24 transition-all duration-200 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-modern-dark'
      }`}
    >
      <Timeline data={experiences} isDarkMode={isDarkMode} />
    </section>
  );
};

const Timeline = ({ data, isDarkMode }: { data: TimelineEntry[], isDarkMode: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`w-full ${isDarkMode ? 'bg-black' : 'bg-white'} font-sans md:px-10`}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-12">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <div className={`h-px w-8 bg-modern-primary`}></div>
            <span className={`text-sm uppercase tracking-wider font-medium text-modern-primary`}>
              My journey
            </span>
            <div className={`h-px w-8 bg-modern-primary`}></div>
          </div>
          <h2 className="section-title mb-4 animate-reveal-up text-center">
            Professional Experience
          </h2>
          <p className={`section-subtitle max-w-2xl mx-auto animate-reveal-up animate-delay-100 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A timeline of my career path and key roles in the tech industry
          </p>
        </div>
      </div>
        
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className={`h-10 absolute left-3 md:left-3 w-10 rounded-full ${
                isDarkMode ? 'bg-black' : 'bg-white'
              } flex items-center justify-center`}>
                <div className={`h-4 w-4 rounded-full ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                } border ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-300'
                } p-2`} />
                </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-modern-primary">
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
              <div className={`p-6 rounded-xl ${
                isDarkMode 
                  ? 'bg-gray-800/50' 
                  : 'bg-white border border-gray-100 shadow-sm'
              }`}>
                {item.content}
              </div>
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
    </div>
  );
};

export default ExperienceSection;
