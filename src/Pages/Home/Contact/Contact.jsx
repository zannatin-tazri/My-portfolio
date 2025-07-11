import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';

const contacts = [
    {
    name: 'Phone',
    icon: <FaPhone />,
    url: 'tel:+8801795579520',
  },
  {
    name: 'E-mail',
    icon: <FaEnvelope />,
    url: 'mailto:zannatintazrizan@gmail.com',
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/zannatin-tazri-a0b1a4297',
  },
  
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/zannatin-tazri',
  },
  
];

const Contact = () => {
  return (
    <section id='contact' className="bg-gradient-to-r from-blue-950 via-gray-800 to-cyan-950 text-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">
          Contact<span className="text-green-400">.</span>
        </h2>
        <p className="text-gray-400 text-sm mb-10">Contact me or follow my social media to connect with me</p>

        <div className="grid grid-cols-1 shadow-4xl md:grid-cols-2 gap-4">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-gray-700 hover:border-green-400 p-3 rounded-md text-sm shadow transition-all duration-300 transform hover:scale-105 hover:shadow-green-400/20"
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{contact.icon}</span>
                <span>{contact.name}</span>
              </div>
              <FaArrowRight className="text-green-400 text-xs" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
