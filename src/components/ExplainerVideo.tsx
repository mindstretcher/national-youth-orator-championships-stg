
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useRef, useEffect } from "react";

const ExplainerVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(error => {
            console.error("Autoplay failed:", error);
          });
        } else if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Makes a Great Speech?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Learn from Master Speakers experts on how to deliver a compelling and memorable speech.
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900 rounded-xl aspect-video relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-800/20 pointer-events-none"></div>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="https://nyoc-sg.sgp1.cdn.digitaloceanspaces.com/2025_NYOC_draft02-1-render.mp4"
              title="What Makes a Great Speech?"
              controls
              playsInline
              muted
              loop
            ></video>
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <div className="flex items-center text-white">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Presented by Master Speakers</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplainerVideo;
