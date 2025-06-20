
import { ArrowRight, Calendar, Users, Trophy } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <motion.div className="relative w-full pt-14" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container relative overflow-hidden min-h-[100vh] md:h-[850px] w-full">
        {/* Singapore skyline background image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat" 
          style={{
            backgroundImage: 'url("/images/singapore-skyline-red.png")',
            backgroundPosition: '50% 35%' // Position to show more of the skyline (higher up)
          }}
        >
          {/* Balanced overlay for text readability while preserving image visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-900/40 to-red-800/30"></div>
          
          {/* Text area overlay with radial gradient for better contrast around text */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 100%)'
          }}></div>
          
          {/* Water reflection effect - reduced height */}
          <div className="absolute bottom-0 left-0 right-0 h-1/6 opacity-50" 
            style={{
              backgroundImage: 'url("/images/singapore-skyline-red.png")',
              backgroundPosition: '50% 35%',
              backgroundSize: 'cover',
              transform: 'scaleY(-1)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)'
            }}>
            {/* Reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent"></div>
          </div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-24 pb-12 sm:pt-28 sm:pb-16 md:py-24 w-full h-full flex items-center">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="w-full max-w-5xl mx-auto text-center" variants={itemVariants}>
              <motion.div className="mt-8 sm:mt-0 mb-6 flex flex-col sm:flex-row items-center justify-center gap-2" variants={itemVariants}>
                <span className="text-sm font-medium text-red-100">Presented by</span>
                <span className="text-sm font-bold bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">Mind Stretcher & Master Speakers</span>
              </motion.div>
              
              <motion.h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight px-2" variants={itemVariants}>
                National Youth Orator Championships 2025
              </motion.h1>
              
              <motion.div className="mb-6" variants={itemVariants}>
                <h2 className="text-red-100 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3">
                  SG60 Edition: My Singapore
                </h2>
                <div className="flex flex-col gap-2 text-red-100 mt-4">
                  <div className="flex items-center justify-center text-sm sm:text-base">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="font-medium">Finals: 13 September 2025</span>
                  </div>
                  <div className="flex items-center justify-center text-sm sm:text-base">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="font-medium">Primary to University students</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.p className="text-red-100 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 font-light px-4" variants={itemVariants}>
                A national platform to empower the youths of our next generation — to become confident communicators, bold critical thinkers, and leaders who speak with clarity and conviction.
              </motion.p>
              
              <motion.div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center px-4" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[52px] px-6 py-3 bg-white text-red-700 rounded-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-base font-bold"
                  onClick={scrollToRegister}
                >
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[52px] px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-700 transition-all shadow-lg flex items-center justify-center group text-base font-medium"
                  onClick={() => {
                    const whySection = document.getElementById('why-take-part');
                    if (whySection) {
                      whySection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More
                  <Trophy className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 mb-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto border-t-4 border-red-600" variants={containerVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }}>
          <motion.p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center" variants={itemVariants}>
            In this SG60 Edition, students across Singapore are invited to take the stage and speak from the heart. From stories of the past to hopes for the future, participants will deliver a speech on the theme <span className="font-bold text-red-700">"My Singapore"</span> — reflecting on what the nation means to them.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
