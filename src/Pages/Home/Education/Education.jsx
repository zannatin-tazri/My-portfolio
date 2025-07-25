import React, { useEffect, useState } from 'react';

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch('/data/education.json')
      .then((res) => res.json())
      .then((data) => setEducationData(data));
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-950 via-gray-900 to-blue-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Education Timeline</h2>

        <div className="relative border-l-4 border-gray-600 ml-4">
          {educationData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="mb-10 ml-4 flex flex-col md:flex-row md:items-center">
                {/* Left card */}
                <div className="w-full md:w-1/2 md:pr-6">
                  {isEven && (
                    <div className="bg-[#ffffff0a] p-4 rounded-md shadow-md text-sm max-w-md">
                      <h3 className="font-semibold text-base">{item.title}</h3>
                      <p className="text-gray-300">{item.institution}</p>
                      <p className="italic text-gray-400">{item.result}</p>
                    </div>
                  )}
                </div>

                {/* Center Timeline */}
                <div className="relative flex flex-col items-center">
                  <div className="bg-[#1a002a] border-2 border-dotted border-green-400 text-green-400 text-xs font-semibold rounded-full px-3 py-1 mb-2 z-10">
                    {item.year}
                  </div>
                  <div className="h-full w-1 bg-gray-600 hidden md:block"></div>
                </div>

                {/* Right card */}
                <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
                  {!isEven && (
                    <div className="bg-[#ffffff0a] p-4 rounded-md shadow-md text-sm max-w-md">
                      <h3 className="font-semibold text-base">{item.title}</h3>
                      <p className="text-gray-300">{item.institution}</p>
                      <p className="italic text-gray-400">{item.result}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
