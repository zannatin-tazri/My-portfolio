import React from 'react';
import ebsImage from '../../../assets/ebs.PNG';
import phImage from '../../../assets/ph.PNG';

const Certification = () => {
  const certificates = [
    {
      id: '1',
      title: 'Complete Web Development by Programming Hero',
      description: 'Complete Web Development Course by Jhankar Mahbub in Programming hero',
      image: phImage
    },
    {
      id: '2',
      title: 'AWS Elastic Block Store Primer',
      description: 'Completed the AWS EBS Primer course from Amazon Web Services.',
      image: ebsImage
    }
  ];

  return (
    <div className=" bg-gradient-to-r from-blue-900 via-gray-700 to-cyan-900 px-4 py-8">
      {/* Headline */}
      <h2 className="text-3xl font-bold text-white text-center mb-8">Certifications</h2>

      {/* Carousel */}
      <div className="carousel w-full">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            id={`item${index + 1}`}
            className="carousel-item w-full flex flex-col items-center text-center"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full sm:w-3/4 md:w-1/2 rounded-lg max-h-96 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-white font-semibold mt-4">{cert.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Buttons */}
      <div className="flex w-full justify-center gap-2 py-4">
        {certificates.map((_, index) => (
          <a key={index} href={`#item${index + 1}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certification;
