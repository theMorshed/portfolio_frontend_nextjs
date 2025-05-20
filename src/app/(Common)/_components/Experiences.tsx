"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Experience = {
  _id: string;
  designation: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
};

export const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch("https://portfoliobackend-kappa.vercel.app/api/experience");
        const data = await res.json();
        setExperiences(data.data); // assuming { data: Experience[] }
      } catch (error) {
        console.error("Error fetching experience:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });

  if (loading) {
    return <p className="text-center text-gray-500">Loading experience...</p>;
  }

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <motion.h2
            className="text-4xl font-bold text-center text-sky-800 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
            Experiences
        </motion.h2>
        <motion.p
            className="text-center text-lg text-sky-800 dark:text-gray-400 my-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
        >
            Blending knowledge with hands-on expertise to drive innovation and excellence.
        </motion.p>

        <div className="space-y-6 mt-20">
          {experiences.map((exp) => (
            <div key={exp._id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{exp.designation}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.company} | {formatDate(exp.startDate)} - {(exp.endDate)? formatDate(exp.endDate) : 'Present'}
              </p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
