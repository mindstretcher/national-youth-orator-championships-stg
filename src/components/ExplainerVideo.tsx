import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ExplainerVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      title: "Du Xuan (Harvard & Oxford Alumni) - Judging Feedback Online Preliminary Round",
      type: "facebook",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1281474359919323&show_text=false&width=560"
    },
    {
      title: "Alvin Kuek (Lead Coach at Master Speakers) - Judging Feedback Online Preliminary Round",
      type: "facebook",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D737491795949071&show_text=false&width=560"
    },
    {
      title: "Raymond Zhang (Master Speakers Coach) - Judging Feedback Online Preliminary Round",
      type: "facebook",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D3878359009131904&show_text=false&width=560"
    },
    {
      title: "What Makes A Great Speech",
      type: "youtube",
      videoId: "u-3lyOMtmYM"
    },
    {
      title: "Building Strong Portfolios & Profiles with Public Speaking",
      type: "youtube",
      videoId: "AoE0JK5fISI"
    }
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const currentVideoData = videos[currentVideo];

  return (
    <section className="bg-white py-16 w-full">
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
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Watch expert tips and judging feedback from Master Speakers coaches
          </p>
        </motion.div>
        
        {/* Video Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevVideo}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white hover:bg-gray-50 text-red-600 rounded-full p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextVideo}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white hover:bg-gray-50 text-red-600 rounded-full p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Video Container */}
          <motion.div
            key={currentVideo}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center px-4">
              {currentVideoData.title}
            </h3>
            
            <div className="bg-gray-900 rounded-xl aspect-video relative overflow-hidden shadow-2xl">
              {currentVideoData.type === "youtube" ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${currentVideoData.videoId}`}
                  title={currentVideoData.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={currentVideoData.embedUrl}
                  title={currentVideoData.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </motion.div>

          {/* Video Indicators */}
          <div className="flex justify-center gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentVideo
                    ? "w-8 bg-red-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplainerVideo;