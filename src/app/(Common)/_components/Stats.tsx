"use client";

import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { title: "Years of Experience", value: "5+" },
    { title: "Projects Completed", value: "50+" },
    { title: "Happy Clients", value: "30+" },
    { title: "Reviews", value: "100+" },
  ];

  return (
    <section className="py-32 text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-sky-800 text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Achievements 🚀
        </motion.h2>
        <motion.p
          className="text-lg text-sky-800 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Celebrating my journey of success and innovation!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 rounded-xl shadow-sm flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.h3
                className="text-5xl font-bold text-sky-600 dark:text-sky-400"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-lg font-medium mt-2">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
