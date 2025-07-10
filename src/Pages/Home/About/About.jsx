import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-md leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          I am an IT graduate with a solid foundation in full-stack development and a growing expertise in DevOps and automation. Skilled in building dynamic web applications using the MERN stack and experienced in streamlining development workflows through CI/CD pipelines and Docker containerization. Successfully completed projects that integrate backend and frontend development with automated deployment processes. Passionate about bridging the gap between development and operations, and continuously learning cloud technologies, infrastructure as code, and scalable deployment solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
