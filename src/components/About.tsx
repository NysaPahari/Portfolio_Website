import React from 'react';
import { Brain, Cpu, Globe, Palette } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and AI applications"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hardware Design",
      description: "FPGA development, embedded systems, and SNN accelerators"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description: "Full-stack development with modern frameworks"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a sophomore at BITS Hyderabad pursuing Electrical and Electronics Engineering, 
              with a passion for bridging the gap between hardware and software innovation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey spans from designing neural network accelerators on FPGAs to building 
              scalable web applications. I thrive on solving complex problems and creating 
              solutions that make a real impact.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Beyond academics, I'm actively involved in various clubs and organizations, 
              contributing to design, development, and leadership roles while continuously 
              exploring new technologies and creative pursuits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-blue-600 mb-3">
                  {interest.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;