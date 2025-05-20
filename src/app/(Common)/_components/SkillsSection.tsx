"use client";

import { useEffect, useState } from "react";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import { IconType } from "react-icons";

type Skill = {
  _id: string;
  name: string;
  icon: string;
  experience?: number;
  projectsLink?: string;
};

const iconMap: Record<string, IconType> = {
  javascript: SiJavascript,
  react: SiReact,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  // Add more icons as needed
};

const SkillsSection = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("https://portfoliobackend-kappa.vercel.app/api/skills");
        const data = await res.json();
        setSkills(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch skills", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 dark:text-gray-400">Loading skills...</p>;
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-800 dark:text-gray-200 mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon.toLowerCase()];
            return (
              <div
                key={skill._id}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all text-center"
              >
                {Icon ? <Icon className="text-4xl text-sky-600 mb-2" /> : <div className="h-10" />}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                {skill.experience && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.experience} {skill.experience === 1 ? "year" : "years"}
                  </p>
                )}
                {skill.projectsLink && (
                  <a
                    href={skill.projectsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sky-500 mt-2 hover:underline"
                  >
                    Projects →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
