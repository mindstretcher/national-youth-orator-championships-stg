import { useState } from 'react';
import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyResourceBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDownload = () => {
    window.open('https://drive.google.com/drive/folders/1iQNhvmCu8rpd44hyRUiQzaz_N3Q6IBCF?usp=sharing', '_blank');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-4 shadow-sm"
      >
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3 flex-1">
            <Download className="w-4 h-4 flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 min-w-0">
              <span className="text-sm font-medium">🎉 Free NYOC Resources Available!</span>
              <span className="text-xs sm:text-sm text-green-100">Speech samples & scripts to help you prepare</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
            >
              Download Now
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyResourceBanner;