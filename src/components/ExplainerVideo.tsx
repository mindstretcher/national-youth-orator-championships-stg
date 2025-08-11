
import { motion } from "framer-motion";
import { Users, Download, FileText, Video } from "lucide-react";
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
            Tips & Resources
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Learn from Master Speakers experts and access free NYOC resources to help you prepare your winning speech.
          </p>
          
          {/* Free Resources Section */}
          <motion.div
            className="bg-gradient-to-br from-red-50 via-orange-50 to-red-100 rounded-xl p-6 mb-8 border border-red-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Download className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-red-800">Download NYOC Resources</h3>
            </div>
            
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We’ve prepared official sample speeches for every age category, so you can jump straight into recording your NYOC video submission. 
              These resources are used in our Master Speakers classes and are now available for everyone!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 text-gray-700">
                <FileText className="w-5 h-5 text-red-600" />
                <span>Use the speeches as they are</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Video className="w-5 h-5 text-red-600" />
                <span>Adapt them with your own experiences</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FileText className="w-5 h-5 text-red-600" />
                <span>Create a completely unique story from scratch</span>
              </div>
            </div>
            
            <button
              onClick={() => window.open('https://drive.google.com/drive/folders/1iQNhvmCu8rpd44hyRUiQzaz_N3Q6IBCF?usp=sharing', '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resources
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">What Makes a Great Speech?</h3>
            <p className="text-gray-600 text-center">Watch our expert tips from Master Speakers</p>
          </div>
          
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
