import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className="bg-gray-900 text-white py-16 px-6">
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
       Myself, a graduate from the IT field, with a strong foundation in full-stack development (MERN) and growing expertise in DevOps. I specialize in building dynamic web applications and optimizing workflows using CI/CD pipelines and Docker. I'm passionate about bridging development and operations while exploring cloud technologies, infrastructure as code, and scalable deployment solutions.        </motion.p>
      </div>
    </section>
  );
};

export default About;
