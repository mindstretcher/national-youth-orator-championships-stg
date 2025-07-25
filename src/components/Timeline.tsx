
import { motion } from "framer-motion";
import { Calendar, Users, Trophy, Video, Award, Upload, Clock, Flag } from "lucide-react";

const Timeline = () => {
  // Key dates from the competition timeline
  const keyDates = [
    {
      milestone: "Competition Launch",
      date: "7 July 2025",
      icon: Calendar,
      category: "all",
      type: "launch",
      isKeyDate: false
    },
    {
      milestone: "Online Submission Deadline",
      date: "31 August 2025",
      icon: Upload,
      category: "all",
      type: "deadline",
      isKeyDate: true
    },
    {
      milestone: "Announcement of Semi-Finalists",
      date: "4 September 2025",
      icon: Users,
      category: "semi",
      type: "announcement",
      isKeyDate: false
    },
    {
      milestone: "Coaching Weeks",
      date: "6-14 September & 1-7 November 2025",
      icon: Award,
      category: "semi",
      type: "coaching",
      isKeyDate: false
    },
    {
      milestone: "Live Semi-Finals",
      date: "8-9 November 2025",
      icon: Users, // Changed from Video to Users (audience/people icon)
      category: "semi",
      type: "event",
      isKeyDate: true
    },
    {
      milestone: "Announcement of Finalists",
      date: "12 November 2025",
      icon: Users,
      category: "finals",
      type: "announcement",
      isKeyDate: false
    },
    {
      milestone: "Live Grand Finals",
      date: "15 November 2025",
      icon: Trophy,
      category: "finals",
      type: "final",
      isKeyDate: true
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "all": return "bg-blue-50 border-blue-200";
      case "semi": return "bg-amber-50 border-amber-200";
      case "finals": return "bg-red-50 border-red-200";
      default: return "bg-gray-50 border-gray-200";
    }
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case "launch": return "bg-blue-100 text-blue-600";
      case "deadline": return "bg-amber-100 text-amber-600";
      case "announcement": return "bg-purple-100 text-purple-600";
      case "coaching": return "bg-indigo-100 text-indigo-600";
      case "event": return "bg-green-100 text-green-600";
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

        {/* Key Dates Table - Mobile */}
        <div className="block md:hidden">
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-red-50 p-4 border-b border-red-200">
              <h3 className="text-lg font-bold text-gray-900">Key Dates</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {keyDates.map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-4 bg-white`}
                  style={item.isKeyDate ? { borderLeft: '6px solid #dc2626' } : {}}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full ${getTypeColor(item.type)}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.milestone}</p>
                        <p className="text-sm font-bold text-red-600">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Dates Table - Desktop */}
        <div className="hidden md:block">
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="bg-red-50 border-b border-red-200">
                  <th className="py-4 px-6 text-left text-lg font-bold text-gray-900">Milestone</th>
                  <th className="py-4 px-6 text-left text-lg font-bold text-gray-900">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* All Participants Section */}
                <tr className="bg-gray-100">
                  <td colSpan={2} className="py-3 px-4 font-semibold text-gray-800">All Participants</td>
                </tr>
                {keyDates.filter(item => item.category === "all").map((item, index) => (
                  <motion.tr
                    key={`all-${index}`}
                    className={`hover:bg-gray-50`}
                    style={item.isKeyDate ? { borderLeft: '6px solid #dc2626' } : {}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${getTypeColor(item.type)}`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-900">{item.milestone}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-bold text-red-600">{item.date}</td>
                  </motion.tr>
                ))}
                
                {/* Semi-Finalists Section */}
                <tr className="bg-gray-100">
                  <td colSpan={2} className="py-3 px-4 font-semibold text-gray-800">Semi-Finalists</td>
                </tr>
                {keyDates.filter(item => item.category === "semi").map((item, index) => (
                  <motion.tr
                    key={`semi-${index}`}
                    className={`hover:bg-gray-50`}
                    style={item.isKeyDate ? { borderLeft: '6px solid #dc2626' } : {}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${getTypeColor(item.type)}`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-900">{item.milestone}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-bold text-red-600">{item.date}</td>
                  </motion.tr>
                ))}
                
                {/* Finals Section */}
                <tr className="bg-gray-100">
                  <td colSpan={2} className="py-3 px-4 font-semibold text-gray-800">Finals</td>
                </tr>
                {keyDates.filter(item => item.category === "finals").map((item, index) => (
                  <motion.tr
                    key={`finals-${index}`}
                    className={`hover:bg-gray-50`}
                    style={item.isKeyDate ? { borderLeft: '6px solid #dc2626' } : {}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${getTypeColor(item.type)}`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-900">{item.milestone}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-bold text-red-600">{item.date}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Upload className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Online Submissions</h4>
              <p className="text-blue-700 mb-2">Submit video speech</p>
              <p className="text-sm text-blue-600">Deadline: 31 August 2025</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
              <Video className="w-10 h-10 text-amber-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-amber-800 mb-2">Semi-Finals</h4>
              <p className="text-amber-700 mb-2">Semi-finals live speeches</p>
              <p className="text-sm text-amber-600">8-9 November 2025</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
              <Trophy className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-red-800 mb-2">Grand Finals</h4>
              <p className="text-red-700 mb-2">Grand finals live speeches</p>
              <p className="text-sm text-red-600">15 November 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
