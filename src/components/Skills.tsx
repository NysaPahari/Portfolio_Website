import React from 'react';
import { Code, Wrench, Layers, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C", "C++", "Java", "JavaScript", "Solidity", "Verilog"],
      color: "blue"
    },
    {
      title: "Web Technologies",
      icon: <Layers className="w-6 h-6" />,
      skills: ["HTML", "CSS", "React.js", "Node.js", "MySQL", "REST APIs", "OAuth 2.0"],
      color: "green"
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Figma", "GitHub", "VS Code", "Arduino", "Vivado", "Microsoft Office", "Unix System"],
      color: "purple"
    },
    {
      title: "Areas of Expertise",
      icon: <Award className="w-6 h-6" />,
      skills: ["Data Structures & Algorithms", "Web Development", "UI/UX Design", "Blockchain", "Machine Learning", "System Design"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-${category.color}-100`}>
                  <div className={getIconColor(category.color)}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;