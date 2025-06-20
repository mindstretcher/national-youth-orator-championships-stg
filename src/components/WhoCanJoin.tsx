
import { motion } from "framer-motion";
import { GraduationCap, School, Award } from "lucide-react";

const WhoCanJoin = () => {
  const categories = [
    {
      icon: School,
      title: "Primary 1 to 6",
      description: "Primary school students ready to share their voices"
    },
    {
      icon: GraduationCap,
      title: "Secondary 1 to 4",
      description: "Secondary school students with growing perspectives"
    },
    {
      icon: Award,
      title: "Youth Open",
      description: "Open to all youths in JC, IB, University, Polytechnic, ITE"
    }
  ];

  return (
    <section className="bg-white py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Who Can Join?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            This contest is open to all students enrolled in Singapore schools, including:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-100 flex items-center justify-center rounded-full text-red-600 mb-4 mx-auto">
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {category.title}
              </h3>
              <p className="text-gray-600">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhoCanJoin;
