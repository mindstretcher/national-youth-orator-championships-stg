import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div className="relative w-full pt-[6rem] md:pt-28" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md lg:mx-0">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight"
            >
              Speak, Innovate, Inspire: Unleash Your Voice at NYOC 2025!
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg"
            >
              Join the National Youth Oratorical Competition and showcase your public speaking skills.
              Compete for recognition, prizes, and the chance to inspire audiences nationwide.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-6">
              <a
                href="https://forms.gle/XSuzJ3eyVqQT6viG7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
          <div className="mt-8 lg:mt-0">
            <motion.div variants={itemVariants} className="relative">
              <img
                src="/hero-image.webp"
                alt="NYOC Competition"
                className="rounded-lg shadow-lg object-cover object-center w-full h-auto aspect-[16/9]"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>June 9-13, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Nationwide</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
