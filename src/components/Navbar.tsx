
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToRegister = () => {
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", 
        isScrolled ? "bg-white shadow-sm" : "bg-red-600"
      )} 
      initial={{ opacity: 1, y: 0 }} 
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <h1 className={cn(
                "text-2xl font-bold transition-colors",
                isScrolled ? "text-red-600" : "text-white"
              )}>
                NYOC 2025
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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
                onClick={() => scrollToSection('who-can-join')} 
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" 
                    : "text-white hover:text-red-100 hover:bg-red-700"
                )}
              >
                Who Can Join
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
                Divisions
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
              <button 
                onClick={() => scrollToSection('faq')} 
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" 
                    : "text-white hover:text-red-100 hover:bg-red-700"
                )}
              >
                FAQ
              </button>
              <button 
                onClick={scrollToRegister}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors font-medium",
                  isScrolled 
                    ? "bg-red-600 text-white hover:bg-red-700" 
                    : "bg-white text-red-600 hover:bg-red-50"
                )}
              >
                Register Now
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
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
      <div className={cn(
        "md:hidden transition-all duration-300 overflow-hidden w-full",
        isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className={cn(
          "px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm",
          isScrolled ? "bg-white" : "bg-red-600"
        )}>
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
            onClick={() => scrollToSection('who-can-join')} 
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
              isScrolled 
                ? "text-gray-700 hover:bg-gray-50" 
                : "text-white hover:bg-red-700"
            )}
          >
            Who Can Join
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
            Divisions
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
          <button 
            onClick={() => scrollToSection('faq')} 
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
              isScrolled 
                ? "text-gray-700 hover:bg-gray-50" 
                : "text-white hover:bg-red-700"
            )}
          >
            FAQ
          </button>
          <button 
            onClick={scrollToRegister}
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
              isScrolled 
                ? "bg-red-600 text-white hover:bg-red-700" 
                : "bg-white text-red-600 hover:bg-red-50"
            )}
          >
            Register Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
