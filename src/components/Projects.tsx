import React from 'react';
import { ExternalLink, Github, Cpu, Mail, Camera, BookOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Modular AI-Integrated Email Client",
      company: "MailWave Technologies Pvt. Ltd.",
      description: "Built a modular, scalable front-end with optimized UI performance and automated templates. Integrated Jira via REST APIs with OAuth 2.0 via Atlassian Forge, designing secure and maintainable system flows.",
      technologies: ["React.js", "REST APIs", "OAuth 2.0", "Jira Integration", "UI/UX"],
      icon: <Mail className="w-6 h-6" />,
      category: "Web Development"
    },
    {
      title: "FireFly: SNN Accelerator Architecture",
      description: "Engineered scalable dataflow and memory optimization systems for real-time spiking neural network inference. Applied parallelism and modular design principles, effectively validating scalability with Verilog and Vivado on FPGA.",
      technologies: ["Verilog", "FPGA", "Vivado", "Neural Networks", "Hardware Design"],
      icon: <Cpu className="w-6 h-6" />,
      category: "Hardware/AI"
    },
    {
      title: "Object Detection on ESP32-CAM",
      description: "Deployed a real-time machine learning object detection model using Edge Impulse and ESP32-CAM. Used grayscale image preprocessing and optimized for embedded inference.",
      technologies: ["ESP32", "Edge Impulse", "Machine Learning", "Embedded Systems", "Computer Vision"],
      icon: <Camera className="w-6 h-6" />,
      category: "IoT/ML"
    },
    {
      title: "Library Management System",
      description: "Built using Python with MySQL integration for effective database management. Implemented book inventory, issuance, return, and user account modules with a clean, intuitive interface.",
      technologies: ["Python", "MySQL", "Database Design", "GUI Development"],
      icon: <BookOpen className="w-6 h-6" />,
      category: "Software Development"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development':
        return 'bg-blue-100 text-blue-800';
      case 'Hardware/AI':
        return 'bg-purple-100 text-purple-800';
      case 'IoT/ML':
        return 'bg-green-100 text-green-800';
      case 'Software Development':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  {project.company && (
                    <p className="text-blue-600 font-semibold mb-2">
                      {project.company}
                    </p>
                  )}
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
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

export default Projects;