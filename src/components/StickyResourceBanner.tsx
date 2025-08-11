import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const StickyResourceBanner = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/drive/folders/1iQNhvmCu8rpd44hyRUiQzaz_N3Q6IBCF?usp=sharing', '_blank');
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-300 via-red-400 to-orange-300 text-white py-2.5 px-4 shadow-sm"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1">
              <span className="text-sm font-medium leading-tight">🎉 Free NYOC Resources!</span>
              <span className="text-xs text-red-100 leading-tight">Speech samples & scripts available</span>
            </div>
          </div>
          
          <button
            onClick={handleDownload}
            className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap"
          >
            Download
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyResourceBanner;