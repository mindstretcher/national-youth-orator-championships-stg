
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useRef, useEffect } from "react";

const ExplainerVideo = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load YouTube API if not already loaded
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    let player: any = null;
    let observer: IntersectionObserver | null = null;
    
    // Function to create the YouTube player
    const createYouTubePlayer = () => {
      if (!videoRef.current) return;
      
      // Create YouTube player
      player = new (window as any).YT.Player(videoRef.current, {
        videoId: 'u-3lyOMtmYM',
        playerVars: {
          'autoplay': 0,
          'mute': 1,
          'controls': 1,
          'rel': 0,
          'modestbranding': 1,
          'enablejsapi': 1,
          'hd': 1,
          'vq': 'hd1080'
        },
        events: {
          'onReady': (event: any) => {
            // Set up intersection observer once player is ready
            observer = new IntersectionObserver(
              (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && player && player.playVideo) {
                  player.playVideo();
                } else if (!entry.isIntersecting && player && player.pauseVideo) {
                  player.pauseVideo();
                }
              },
              { threshold: 0.3 }
            );

            // Observe the section element instead of the iframe
            if (sectionRef.current) {
              observer.observe(sectionRef.current);
            }
          }
        }
      });
    };

    // Initialize when YouTube API is ready
    if ((window as any).YT && (window as any).YT.Player) {
      createYouTubePlayer();
    } else {
      // Set up callback for when API loads
      const previousCallback = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (previousCallback) previousCallback();
        createYouTubePlayer();
      };
    }

    return () => {
      // Cleanup
      if (observer) {
        observer.disconnect();
      }
      if (player && player.destroy) {
        player.destroy();
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
            <iframe
              ref={videoRef as any}
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/u-3lyOMtmYM?enablejsapi=1&mute=1"
              title="What Makes a Great Speech?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
