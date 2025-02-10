/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Laboratory Engineer",
    company: "Clinical Laboratory",
    duration: "2014 - Present",
    description: "Performing tests, signing reports, and ensuring accuracy in medical diagnostics.",
    icon: <FaBriefcase />,
  },
  {
    title: "Software Engineer",
    company: "Tech Solutions Ltd.",
    duration: "2020 - Present",
    description: "Developing scalable web applications, optimizing backend services, and implementing authentication systems.",
    icon: <FaBriefcase />,
  },
];

const education = [
  {
    title: "Bachelor's in Engineering",
    institution: "Your University",
    duration: "2010 - 2014",
    description: "Specialized in laboratory technology and diagnostics.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Bachelor's in Computer Science",
    institution: "Tech University",
    duration: "2016 - 2020",
    description: "Focused on algorithms, software development, and full-stack engineering.",
    icon: <FaGraduationCap />,
  },
];

const TimelineItem = ({ item }: { item: any }) => (
  <motion.div
    className="relative pl-12 pb-12 border-l-4 border-sky-600 dark:border-sky-400"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute left-[-22px] top-2 bg-sky-600 dark:bg-sky-400 text-white p-3 rounded-full shadow-lg">
      {item.icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.company || item.institution} — {item.duration}</p>
    <p className="text-gray-700 dark:text-gray-300 mt-3">{item.description}</p>
  </motion.div>
);

const ExperienceEducationSection = () => {
  return (
    <section className=" bg-gray-100 dark:bg-gray-900 py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-4xl font-bold text-center text-sky-800 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>
        <motion.p
          className="text-center text-lg text-sky-800 dark:text-gray-400 my-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Blending knowledge with hands-on expertise to drive innovation and excellence.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <TimelineItem key={index} item={exp} />
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-6">Education</h3>
            {education.map((edu, index) => (
              <TimelineItem key={index} item={edu} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
