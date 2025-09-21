import React from 'react';
import { Github, Linkedin, Mail, Code, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Nysa
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Electrical & Electronics Engineering Student at BITS Hyderabad
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Passionate about AI, blockchain, and full-stack development. 
                Building innovative solutions at the intersection of hardware and software.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:nysa.pahari@gmail.com"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium"
              >
                <Code size={20} />
                View Projects
              </a>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/NysaPahari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nysa-c-pahari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/Nysa_Pahari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-72 h-72 bg-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                  alt="Nysa Charan Pahari" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;