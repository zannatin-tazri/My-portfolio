import React, { useEffect, useState } from "react";
import SkillCards from "./SkillCards";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skill.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-r from-blue-900 via-gray-700 to-cyan-900 py-16 px-4">
      {/* Animated Heading */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-white to-indigo-500 bg-clip-text text-transparent animate-pulse">
          My Skills
        </h2>
      </motion.div>

      {/* Scroll-Triggered Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <SkillCards
                title={skill.title}
                image={skill.image}
                description={skill.description}
                level={skill.level}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
