
import { motion } from "framer-motion";
import { CheckCircle, Upload, Video, Calendar, FileText, Clock } from "lucide-react";

const HowToJoin = () => {
  const steps = [
    {
      icon: FileText,
      title: "Choose your theme",
      description: "Based on your category, choose 1 out of 3 themes"
    },
    {
      icon: Clock,
      title: "Record your speech video",
      description: "Follow the video duration for your category"
    },
    {
      icon: Upload,
      title: "Submit via our online form",
      description: "Submit your video by 31 August 2025"
    }
  ];

  const recordingTips = [
    "Landscape orientation",
    "MP4 format",
    "Face & whole body of the speaker must be visible",
    "No editing of the video is allowed (record as one continuous speech)",
    "Dress in school uniform (for Uni & Poly students, dress in smart casual)",
    "Use of notes or cue cards is strictly not allowed – good speakers can engage without written aids"
  ];

  return (
    <section id="how-to-join" className="bg-gray-50 py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            How to Join
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8">
            <Calendar className="w-6 h-6 text-red-600" />
            <span className="text-lg sm:text-xl font-semibold text-red-700 text-center">
              Deadline for submission: 31 August 2025
            </span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-lg text-red-600 mb-4 mx-auto mt-4">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {index === 0 ? (
                  <>
                    Based on your <a href="#" onClick={(e) => {
                      e.preventDefault();
                      const divisionsSection = document.getElementById('divisions');
                      if (divisionsSection) {
                        divisionsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }} className="text-red-600 hover:underline">category</a>
                  </>
                ) : (
                  step.description
                )}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-green-50 border border-green-200 rounded-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-green-800 mb-4">Recording Tips</h3>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recordingTips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{tip}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-gray-700 text-center text-sm sm:text-base">
                <span className="font-semibold text-yellow-800">Important:</span> Adhere to the <a href="#divisions" onClick={(e) => {
                  e.preventDefault();
                  const divisionsSection = document.getElementById('divisions');
                  if (divisionsSection) {
                    const yOffset = -80; // Adjust for header height
                    const y = divisionsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({top: y, behavior: 'smooth'});
                  }
                }} className="text-red-600 hover:underline">video duration</a> for your category.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToJoin;
