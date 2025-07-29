
import { ArrowRight, Calendar, Users } from "lucide-react";
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
  
  const openRegistrationForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://forms.gle/XSuzJ3eyVqQT6viG7', '_blank');
  };
  
  return (
    <motion.div className="relative w-full pt-14" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container relative overflow-hidden min-h-[100vh] md:min-h-[100vh] md:h-[850px] w-full">
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
        
        <div className="banner-overlay bg-transparent pt-4 pb-10 sm:pt-28 sm:pb-16 md:py-24 w-full h-full flex items-center">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="w-full max-w-5xl mx-auto text-center" variants={itemVariants}>
              <motion.div className="mt-0 sm:mt-0 mb-2 flex flex-row items-center justify-center gap-2" variants={itemVariants}>
                <span className="text-sm font-medium text-white mr-2">In Support of</span>
                <img src="/lovable-uploads/sg60-logo.png" alt="SG60 Logo" className="h-10 w-auto" />
              </motion.div>
              
              <motion.h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 leading-tight px-2" variants={itemVariants}>
                National Youth Orator Championships 2025
              </motion.h1>
              
              <motion.div className="mb-3" variants={itemVariants}>
                <h2 className="text-white text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3">
                  SG60 Edition: My Singapore
                </h2>
                <div className="flex flex-col gap-2 text-white mt-2">
                  <div className="flex items-center justify-center text-base sm:text-base">
                    <Calendar className="w-5 h-5 sm:w-5 sm:h-5 mr-2" />
                    <span className="font-medium">Submission Deadline: 31 August 2025</span>
                  </div>
                  <div className="flex items-center justify-center text-base sm:text-base">
                    <Users className="w-5 h-5 sm:w-5 sm:h-5 mr-2" />
                    <span className="font-medium">Primary to University students</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-4 font-light px-2" variants={itemVariants}>
                A national platform to empower the youths of our next generation — to become confident communicators, bold critical thinkers, and leaders who speak with clarity and conviction.
              </motion.p>
              
              <motion.div className="flex flex-col sm:flex-row gap-3 mt-3 justify-center items-center px-2" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[52px] px-6 py-3 bg-white text-red-700 rounded-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-base font-bold"
                  onClick={openRegistrationForm}
                >
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[52px] px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-700 transition-all shadow-lg flex items-center justify-center group text-base font-medium"
                  onClick={() => {
                    const divisionsSection = document.getElementById('divisions');
                    if (divisionsSection) {
                      divisionsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Categories & Themes
                </button>
              </motion.div>
              
              {/* Partners moved to horizontal strip below hero section */}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Partners horizontal strip */}
      <div className="relative z-10 w-full bg-white shadow-md py-6 md:py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-800 font-semibold text-lg md:text-xl mb-6">Organiser & Supporting Partners</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            <a href="https://masterspeakers.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity group">
              <div className="w-20 h-14 md:w-24 md:h-16 bg-white rounded-lg p-2 flex items-center justify-center border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                <img src="/images/msp-logo.png" alt="Master Speakers Logo" className="max-w-full max-h-full w-auto h-auto object-contain" />
              </div>
              <div className="text-center h-12 flex flex-col justify-start">
                <span className="text-gray-800 font-bold text-sm md:text-base leading-tight">Master Speakers</span>
                <span className="text-gray-500 text-xs md:text-sm">(Organiser)</span>
              </div>
            </a>
            
            <a href="https://www.mindstretcher.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity group">
              <div className="w-20 h-14 md:w-24 md:h-16 bg-white rounded-lg p-2 flex items-center justify-center border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                <img src="/images/ms-logo.png" alt="Mind Stretcher Logo" className="max-w-full max-h-full w-auto h-auto object-contain" />
              </div>
              <div className="text-center h-12 flex flex-col justify-start">
                <span className="text-gray-800 font-bold text-sm md:text-base leading-tight">Mind Stretcher</span>
              </div>
            </a>
            
            <a href="https://www.goodenglish.org.sg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity group">
              <div className="w-20 h-14 md:w-24 md:h-16 bg-white rounded-lg p-2 flex items-center justify-center border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                <img src="/images/sgem-logo.png" alt="Speak Good English Movement Logo" className="max-w-full max-h-full w-auto h-auto object-contain" />
              </div>
              <div className="text-center h-12 flex flex-col justify-start">
                <span className="text-gray-800 font-bold text-sm md:text-base leading-tight">Speak Good English<br />Movement</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-3 mb-4 sm:mt-4 sm:mb-6 bg-white rounded-2xl shadow-xl p-3 sm:p-6 md:p-8 max-w-4xl mx-auto border-t-4 border-red-600" variants={containerVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }}>
          <motion.p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center" variants={itemVariants}>
          In this SG60 Edition, NYOC 2025 invites students from Primary to University levels to take the stage and speak from the heart. On the theme <span className="font-bold text-red-700">"My Singapore"</span>, students will reflect on our nation’s past, share what it means to be Singaporean today, and voice their hopes for the future.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
