import React from 'react';
import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "MailWave Technologies Pvt. Ltd.",
      position: "Software Development and AI Design Intern",
      period: "May 2025 – July 2025",
      type: "Internship",
      description: "Built modular, scalable front-end with optimized UI performance and automated templates for Email client. Integrated Jira via REST APIs with OAuth 2.0 via Atlassian Forge.",
      skills: ["React.js", "REST APIs", "OAuth 2.0", "UI/UX Design"]
    },
    {
      company: "PHoEnix Association (EEE Department, BPHC)",
      position: "IT Lead, Ex-Design Head",
      period: "June 2024 – Current",
      type: "Leadership Role",
      description: "Led design for LIVEWIRE magazine, newsletter, and official merchandise. Improved UI and added new features as part of full-stack development of the PHoEnix Association website.",
      skills: ["Leadership", "Full-stack Development", "Graphic Design", "Team Management"]
    },
    {
      company: "ACM – BPHC Chapter",
      position: "Frontend Developer",
      period: "Aug 2024 – Dec 2024",
      type: "Technical Role",
      description: "Contributed to the development of ACM website with focus on user experience and responsive design.",
      skills: ["Frontend Development", "Web Design", "JavaScript", "CSS"]
    },
    {
      company: "Kanodia Nutri-Agro",
      position: "Graphic Design Intern",
      period: "July 2024",
      type: "Internship",
      description: "Designed product packaging and marketing material for agro-products, focusing on brand identity and visual communication.",
      skills: ["Graphic Design", "Brand Identity", "Adobe Creative Suite", "Marketing Design"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-green-100 text-green-800';
      case 'Leadership Role':
        return 'bg-purple-100 text-purple-800';
      case 'Technical Role':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 lg:mb-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
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

export default Experience;