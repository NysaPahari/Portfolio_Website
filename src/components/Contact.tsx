import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "nysa.pahari@gmail.com",
      href: "mailto:nysa.pahari@gmail.com",
      color: "blue"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9810537112",
      href: "tel:+919810537112",
      color: "green"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/nysa-c-pahari/",
      href: "https://www.linkedin.com/in/nysa-c-pahari/",
      color: "blue"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/NysaPahari",
      href: "https://github.com/NysaPahari",
      color: "gray"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "LeetCode",
      value: "leetcode.com/u/Nysa_Pahari",
      href: "https://leetcode.com/u/Nysa_Pahari",
      color: "orange"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
      green: "bg-green-100 text-green-600 hover:bg-green-200",
      gray: "bg-gray-100 text-gray-600 hover:bg-gray-200",
      orange: "bg-orange-100 text-orange-600 hover:bg-orange-200",
      purple: "bg-purple-100 text-purple-600 hover:bg-purple-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <div key={index} className="group">
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg transition-colors duration-200 ${getColorClasses(contact.color)}`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {contact.label}
                      </h3>
                      <p className="text-gray-600 text-sm break-all">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(contact.color)}`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {contact.label}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="mailto:nysa.pahari@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;