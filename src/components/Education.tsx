import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Birla Institute of Technology and Science, Hyderabad",
      degree: "B.E. in Electrical and Electronics Engineering",
      period: "2023 – 2027",
      location: "Hyderabad, India",
      grade: "Current Student",
      description: "Focusing on digital systems, machine learning, and embedded technologies"
    },
    {
      institution: "HMR International School",
      degree: "CBSE Grade XII",
      period: "2021 – 2023",
      location: "Bangalore, India",
      grade: "89%",
      description: "Science stream with Mathematics, Physics, Chemistry, and Computer Science"
    },
    {
      institution: "CMR National Public School",
      degree: "CBSE Grade X",
      period: "2018 – 2021",
      location: "Bangalore, India",
      grade: "98.2%",
      description: "Comprehensive secondary education with excellent academic performance"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 lg:mb-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">
                      {edu.degree}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-600 mb-2 lg:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2 lg:justify-end">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    {edu.grade}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;