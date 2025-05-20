"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Education = {
  _id: string;
  degree: string;
  institution: string;
  description: string;
  startDate: string;
  endDate: string;
};

const dummyEducation: Education[] = [
  {
    _id: "1",
    degree: "B.Sc. in Computer Science",
    institution: "University of Innovation",
    description: "Focused on software engineering, data structures, and system design.",
    startDate: "2010-08-01",
    endDate: "2014-06-30",
  },
  {
    _id: "2",
    degree: "HSC (Science)",
    institution: "National College",
    description: "Studied core science subjects including Physics, Chemistry, and Math.",
    startDate: "2008-06-01",
    endDate: "2010-06-01",
  },
];

export const EducationSection = () => {
  const [educationList, setEducationList] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEducationList(dummyEducation);
      setLoading(false);
    }, 800); // simulate loading delay
    return () => clearTimeout(timeout);
  }, []);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });

  if (loading) {
    return <p className="text-center text-gray-500">Loading education...</p>;
  }

  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-950 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-sky-800 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.p
          className="text-center text-lg text-sky-800 dark:text-gray-400 my-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A journey of structured learning and intellectual growth.
        </motion.p>

        <div className="relative border-l-4 border-sky-500 dark:border-sky-400 mt-16 space-y-10 pl-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu._id}
              className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow transition hover:shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <div className="absolute -left-3 top-6 w-6 h-6 bg-sky-500 dark:bg-sky-400 rounded-full border-4 border-white dark:border-gray-950"></div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {edu.institution} • {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
