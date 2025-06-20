
import { motion } from "framer-motion";
import { Calendar, Users, Trophy, Video, Award, Upload } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      date: "1 July 2025",
      title: "Launch",
      description: "Competition officially opens for submissions",
      icon: Calendar,
      type: "launch"
    },
    {
      date: "By 1 August 2025",
      title: "Submission Deadline",
      description: "Submit your video speech",
      icon: Upload,
      type: "preliminary"
    },
    {
      date: "29 August 2025",
      title: "Finalist Announcement",
      description: "Selected finalists will be notified",
      icon: Users,
      type: "announcement"
    },
    {
      date: "6–12 September 2025",
      title: "Workshops",
      description: "Coaching sessions with top Master Speakers coaches",
      icon: Award,
      type: "workshop"
    },
    {
      date: "13 September 2025",
      title: "Finals (Live)",
      description: "Grand finale event with live speeches",
      icon: Trophy,
      type: "final"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "launch": return "bg-blue-100 text-blue-600";
      case "preliminary": return "bg-amber-100 text-amber-600";
      case "announcement": return "bg-purple-100 text-purple-600";
      case "workshop": return "bg-green-100 text-green-600";
      case "final": return "bg-red-100 text-red-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section id="timeline" className="bg-gray-50 py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Competition Timeline
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Important dates and milestones for NYOC 2025.
          </p>
        </motion.div>

        {/* Mobile Timeline */}
        <div className="block md:hidden space-y-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${getTypeColor(milestone.type)}`}>
                  <milestone.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{milestone.title}</h3>
                  <p className="text-red-600 font-medium text-sm mb-2">{milestone.date}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-6' : 'text-left pl-6'}`}>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${getTypeColor(milestone.type)} ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                      <milestone.icon className="w-4 h-4" />
                    </div>
                    <h3 className={`text-base font-semibold text-gray-900 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-red-600 font-medium text-sm mb-2">{milestone.date}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-md"></div>
            </motion.div>
          ))}
        </div>

        {/* Competition Format Summary */}
        <motion.div
          className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Competition Format</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
              <Video className="w-10 h-10 text-amber-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-amber-800 mb-2">Preliminaries</h4>
              <p className="text-amber-700 mb-2">Submit video speech</p>
              <p className="text-sm text-amber-600">Deadline: 1 August 2025</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
              <Trophy className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-red-800 mb-2">Finals</h4>
              <p className="text-red-700 mb-2">Live speeches at venue</p>
              <p className="text-sm text-red-600">Date: 13 September 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
