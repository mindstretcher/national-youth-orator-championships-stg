
import { motion } from "framer-motion";
import { Users, Award } from "lucide-react";

const OurJudges = () => {
  const judges = [
    {
      name: "Dr. Sarah Lim",
      designation: "Distinguished Toastmaster",
      description: "International speaking champion with 15+ years of experience in public speaking education.",
      organization: "Toastmasters International",
      image: "/placeholder.svg"
    },
    {
      name: "Mr. Raj Patel",
      designation: "Senior Master Speaker",
      description: "Award-winning educator specialising in youth communication development and oratory training.",
      organization: "Master Speakers",
      image: "/placeholder.svg"
    },
    {
      name: "Ms. Jennifer Wong",
      designation: "Education Specialist",
      description: "MOE curriculum developer with expertise in language arts and student engagement strategies.",
      organization: "Ministry of Education",
      image: "/placeholder.svg"
    },
    {
      name: "Mr. David Chen",
      designation: "National Debate Coach",
      description: "Experienced debate coach and mentor passionate about nurturing young voices and critical thinking.",
      organization: "National Debate Singapore Team",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="our-judges" className="bg-white py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Judges
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A distinguished panel of judges featuring top speakers from Master Speakers, Toastmasters & Singapore's National Debate Team.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {judge.name}
              </h3>
              <p className="text-red-600 font-medium text-sm mb-2">
                {judge.designation}
              </p>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {judge.description}
              </p>
              <div className="text-xs text-gray-500 font-medium">
                {judge.organization}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJudges;
