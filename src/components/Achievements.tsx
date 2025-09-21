import React from 'react';
import { Trophy, Award, Star, Users, BookOpen } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Flipkart Grid 7.0",
      description: "Reached Semifinals",
      icon: <Trophy className="w-6 h-6" />,
      category: "Competition",
      color: "yellow"
    },
    {
      title: "Google STEP 2024",
      description: "Qualified Round 1",
      icon: <Star className="w-6 h-6" />,
      category: "Competition",
      color: "blue"
    },
    {
      title: "ICP Ideathon 2023",
      description: "Qualified Round 1",
      icon: <Award className="w-6 h-6" />,
      category: "Competition",
      color: "purple"
    },
    {
      title: "UGEE 2023",
      description: "AIR Top 300",
      icon: <BookOpen className="w-6 h-6" />,
      category: "Academic",
      color: "green"
    }
  ];

  const certifications = [
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI, Coursera",
      year: "2025",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Supervised Machine Learning",
      issuer: "Coursera",
      year: "2024",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Blockchain Basics",
      issuer: "Coursera",
      year: "2024",
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  const campusEngagement = [
    "BlockSoc: Blockchain Development club",
    "GDSC: UI/UX and Web Development",
    "Shades (Fine Arts Club): Member Artist",
    "Crimson Curtain (Dramatics Club): Member Actor"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: "bg-yellow-100 text-yellow-800",
      blue: "bg-blue-100 text-blue-800",
      purple: "bg-purple-100 text-purple-800",
      green: "bg-green-100 text-green-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconBg = (color: string) => {
    const colors = {
      yellow: "bg-yellow-100 text-yellow-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Activities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Competitive Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${getIconBg(achievement.color)}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-bold text-gray-900">
                          {achievement.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(achievement.color)}`}>
                          {achievement.category}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campus Engagement */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Previous Memberships</h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Previous Memberships
                </h4>
              </div>
              <div className="space-y-3">
                {campusEngagement.map((activity, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;