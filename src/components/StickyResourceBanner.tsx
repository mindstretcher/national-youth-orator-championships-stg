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
        className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-pink-300 via-red-300 to-orange-400 text-white py-2.5 px-4 shadow-sm"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1">
                <span className="text-sm font-medium leading-tight">🎉 Free NYOC Resources!</span>
                <span className="text-xs text-pink-100 leading-tight">Speech samples & scripts available</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap"
              >
                Download
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white p-0.5 rounded transition-colors"
                aria-label="Close banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyResourceBanner;