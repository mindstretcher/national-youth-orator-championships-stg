
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Set navbar height CSS variable
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };
    
    // Set initial height
    updateNavbarHeight();
    
    // Update on resize or when menu opens/closes
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, [isMenuOpen]); // Re-run when menu opens/closes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for sticky banner (~44px) + navbar (~64px) + some padding
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL with hash for direct linking
      window.history.pushState(null, '', `/#${id}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      ref={navbarRef}
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300 w-full", 
        isScrolled ? "bg-white shadow-sm" : "bg-red-600"
      )} 
      style={{
        top: 'var(--banner-height, 0px)' // No banner by default
      }}
      initial={{ opacity: 1, y: 0 }} 
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:opacity-90 transition-opacity"
              >
                <h1 className={cn(
                  "text-2xl font-bold transition-colors",
                  isScrolled ? "text-red-600" : "text-white"
                )}>
                  NYOC 2025
                </h1>
              </button>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('stay-updated')} 
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" 
                    : "text-white hover:text-red-100 hover:bg-red-700"
                )}
              >
                Stay Updated
              </button>
              <button 
                onClick={() => scrollToSection('why-take-part')} 
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" 
                    : "text-white hover:text-red-100 hover:bg-red-700"
                )}
              >
                Why Take Part
              </button>
              <button 
                onClick={() => scrollToSection('divisions')} 
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" 
                    : "text-white hover:text-red-100 hover:bg-red-700"
                )}
              >
                Semi-Finals Topics
              </button>
              <button 
                onClick={() => scrollToSection('tips')} 
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" 
                    : "text-white hover:text-red-100 hover:bg-red-700"
                )}
              >
                Tips & Resources
              </button>
              <button 
                onClick={() => scrollToSection('our-judges')} 
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" 
                    : "text-white hover:text-red-100 hover:bg-red-700"
                )}
              >
                Judges
              </button>
              <button 
                onClick={() => scrollToSection('timeline')} 
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" 
                    : "text-white hover:text-red-100 hover:bg-red-700"
                )}
              >
                Timeline
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button 
              onClick={toggleMenu} 
              className={cn(
                "focus:outline-none",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          className="xl:hidden w-full overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={cn(
            "px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm",
            isScrolled ? "bg-white" : "bg-red-600"
          )}>
          <button 
            onClick={() => scrollToSection('stay-updated')} 
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
              isScrolled 
                ? "text-gray-700 hover:bg-gray-50" 
                : "text-white hover:bg-red-700"
            )}
          >
            Stay Updated
          </button>
          <button 
            onClick={() => scrollToSection('why-take-part')} 
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
              isScrolled 
                ? "text-gray-700 hover:bg-gray-50" 
                : "text-white hover:bg-red-700"
            )}
          >
            Why Take Part
          </button>
          <button 
            onClick={() => scrollToSection('divisions')} 
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
              isScrolled 
                ? "text-gray-700 hover:bg-gray-50" 
                : "text-white hover:bg-red-700"
            )}
          >
            Semi-Finals Topics
          </button>
          <button 
            onClick={() => scrollToSection('tips')} 
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
              isScrolled 
                ? "text-gray-700 hover:bg-gray-50" 
                : "text-white hover:bg-red-700"
            )}
          >
            Tips & Resources
          </button>
          <button 
            onClick={() => scrollToSection('our-judges')} 
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
              isScrolled 
                ? "text-gray-700 hover:bg-gray-50" 
                : "text-white hover:bg-red-700"
            )}
          >
            Judges
          </button>
          <button 
            onClick={() => scrollToSection('timeline')} 
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
              isScrolled 
                ? "text-gray-700 hover:bg-gray-50" 
                : "text-white hover:bg-red-700"
            )}
          >
            Timeline
          </button>
        </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
