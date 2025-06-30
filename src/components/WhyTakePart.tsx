import { motion } from "framer-motion";
import { MessageSquare, Users, Trophy, Video, Award } from "lucide-react";

const WhyTakePart = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: "Sharpen speaking skills",
      description: "Celebrate SG60 with your story and sharpen speaking skills"
    },
    {
      icon: Users,
      title: "Get mentored",
      description: "Semi-finalists get mentored by top Master Speakers coaches"
    },
    {
      icon: Trophy,
      title: "Win national recognition",
      description: "Awards, trophies, certificates and a national platform"
    },
    {
      icon: Video,
      title: "Be featured",
      description: "Appear in our SG60 highlight reel: 'Voices of SG60'"
    }
  ];

  return (
    <section id="why-take-part" className="bg-white py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Take Part?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Join Singapore's premier youth speaking competition and unlock opportunities for growth, recognition, and impact.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-lg text-red-600 mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Recognition Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-blue-800">All Participants Receive</h3>
            </div>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Certificate of Participation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Mentoring by top Master Speakers coaches (for semi-finalists)
              </li>
            </ul>
          </div>
          
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-amber-600 mr-3" />
              <h3 className="text-xl font-bold text-amber-800">Finalists Will Receive</h3>
            </div>
            <ul className="space-y-2 text-amber-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                Awards, Trophies & Finalist Certificates
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                Feature in "Voices of SG60" video
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTakePart;
