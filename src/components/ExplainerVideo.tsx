
import { motion } from "framer-motion";
import { Play, Users } from "lucide-react";

const ExplainerVideo = () => {
  const handlePlayVideo = () => {
    // Placeholder for video functionality
    console.log("Play explainer video");
  };

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
            What Makes a Great Speech?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Learn from Master Speakers experts on how to deliver a compelling and memorable speech.
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900 rounded-xl aspect-video relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-800/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={handlePlayVideo}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
              >
                <Play className="w-8 h-8 text-red-600 ml-1 group-hover:text-red-700" />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center text-white">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Presented by Master Speakers</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplainerVideo;
