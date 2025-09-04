import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const StickyResourceBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  
  // Update CSS variable when banner height changes
  useEffect(() => {
    const updateBannerHeight = () => {
      if (bannerRef.current) {
        const height = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      }
    };
    
    // Set initial height
    updateBannerHeight();
    
    // Update on resize
    window.addEventListener('resize', updateBannerHeight);
    return () => window.removeEventListener('resize', updateBannerHeight);
  }, []);
  
  const handleRegister = () => {
    // Open registration link in new tab
    window.open('https://luma.com/5n4sydhu', '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      ref={bannerRef}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400 text-white py-2.5 px-4 shadow-sm"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1">
              <span className="text-sm font-medium leading-tight">Register for 13 Sep Physical LIVE Event: Semi-Finalists Announcement</span>
              {/* <span className="text-xs text-purple-100 leading-tight">Physical LIVE Session</span> */}
            </div>
          </div>
          
          <button
            onClick={handleRegister}
            className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap"
          >
            Register
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyResourceBanner;