
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import WhyTakePart from '@/components/WhyTakePart';
import HowToJoin from '@/components/HowToJoin';
import Divisions from '@/components/Divisions';
import OurJudges from '@/components/OurJudges';
import Timeline from '@/components/Timeline';
import FAQ from '@/components/FAQ';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Handle hash navigation on initial page load
  useEffect(() => {
    // Function to handle scrolling to the element
    const scrollToHashElement = () => {
      // Get the hash from the URL (e.g., #how-to-join)
      const hash = window.location.hash;
      
      if (hash) {
        // Remove the # symbol
        const id = hash.substring(1);
        
        // Try to find the element
        const element = document.getElementById(id);
        if (element) {
          // Add a small delay to ensure the page is fully rendered
          setTimeout(() => {
            // Scroll to the element
            element.scrollIntoView({ behavior: 'smooth' });
            
            // For mobile browsers that might have issues with initial scroll
            setTimeout(() => {
              // Ensure we're at the right position by scrolling again if needed
              const elementPosition = element.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({
                top: elementPosition - 80, // Adjust for header height
                behavior: 'smooth'
              });
            }, 100);
          }, 300);
        }
      }
    };
    
    // Execute on initial load
    scrollToHashElement();
    
    // Also handle hash changes during navigation
    window.addEventListener('hashchange', scrollToHashElement);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('hashchange', scrollToHashElement);
    };
  }, []);
  
  return (
    <PageLayout>
      <SEO 
        title="National Youth Orator Championships 2025 - SG60 Edition" 
        description="A national platform empowering Singapore's youth to become confident communicators. Join the SG60 Edition: My Singapore. Finals: 13 September 2025."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['speaking competition', 'Singapore youth', 'SG60', 'oratory', 'public speaking', 'national competition', 'Mind Stretcher', 'Master Speakers']}
      />
      <Hero />
      <div id="why-take-part">
        <WhyTakePart />
      </div>
      <div id="how-to-join">
        <HowToJoin />
      </div>
      <div id="divisions">
        <Divisions />
      </div>
      <div id="our-judges">
        <OurJudges />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </PageLayout>
  );
};

export default Index;
