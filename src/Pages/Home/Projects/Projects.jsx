import React, { useEffect, useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1a002a] to-[#0d0a2b] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4">
          Recent Work
        </h2>
        <p className="text-center mb-12 text-gray-300">
          A collection of projects I've worked on.
        </p>

        {/* Projects */}
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Animation */}
                <motion.div
                  className="w-full md:w-[45%]"
                  initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-lg w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>

                {/* Description Animation */}
                <motion.div
                  className="w-full md:w-[45%]"
                  initial={{ opacity: 0, x: isReversed ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="text-sm text-cyan-400 font-medium mb-1">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="bg-[#3e2c5d] p-4 rounded-lg shadow-md text-sm leading-relaxed text-gray-200 mb-4">
                    {project.description}
                  </div>
                  <div className="flex space-x-4 text-xl">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.links.twitter && (
                      <a
                        href={project.links.twitter}
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                      >
                        <FaTwitter />
                      </a>
                    )}
                    {project.links.linkedin && (
                      <a
                        href={project.links.linkedin}
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                      >
                        <FaLinkedin />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
