import React from "react";

const SkillCards = ({ title, image, description }) => {
  return (
    <div className="bg-[#15162b] text-white p-6 rounded-xl shadow-md w-full md:w-[260px] hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-12 h-12 object-contain mb-4"
      />
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-300 mb-3">{description}</p>
     
    </div>
  );
};

export default SkillCards;
