import { motion } from "framer-motion";
import { Facebook, Instagram, ChevronLeft, ChevronRight, Upload, Video, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const SocialUpdates = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useIsMobile();
  const postsPerPage = isMobile ? 1 : 3;

  const posts = [
    {
      url: "https://www.facebook.com/masterspeakersacademy/posts/pfbid0CEKBXpshkf8avPHWFeAVNNMumsPrsCTqZcSotKwvJCmsvyZMA27r3cLhgYgbxgE5l",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterspeakersacademy%2Fposts%2Fpfbid0CEKBXpshkf8avPHWFeAVNNMumsPrsCTqZcSotKwvJCmsvyZMA27r3cLhgYgbxgE5l&show_text=true&width=350",
      title: "NYOC Update 1"
    },
    {
      url: "https://www.facebook.com/reel/797583576067267",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F797583576067267&show_text=true&width=350",
      title: "NYOC Update 2"
    },
    {
      url: "https://www.facebook.com/masterspeakersacademy/posts/pfbid0V9M9qA25TRLvjFdp7CBUgicryBaK1fZUDnEKbrD5tXHL4wbf4zyF5sLR9YSSANcRl",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterspeakersacademy%2Fposts%2Fpfbid0V9M9qA25TRLvjFdp7CBUgicryBaK1fZUDnEKbrD5tXHL4wbf4zyF5sLR9YSSANcRl&show_text=true&width=350",
      title: "NYOC Update 3"
    },
    {
      url: "https://www.facebook.com/watch/?v=3878359009131904",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D3878359009131904&show_text=true&width=350",
      title: "NYOC Update 4"
    },
    {
      url: "https://www.facebook.com/watch/?v=737491795949071",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D737491795949071&show_text=true&width=350",
      title: "NYOC Update 5"
    },
    {
      url: "https://www.facebook.com/watch/?v=664839779973184",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D664839779973184&show_text=true&width=350",
      title: "NYOC Update 6"
    },
    {
      url: "https://www.facebook.com/watch/?v=1827244744548388",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1827244744548388&show_text=true&width=350",
      title: "NYOC Update 7"
    },
    {
      url: "https://www.facebook.com/watch/?v=1581039803317195",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1581039803317195&show_text=true&width=350",
      title: "NYOC Update 8"
    },
    {
      url: "https://www.facebook.com/watch/?v=2024589995040136",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D2024589995040136&show_text=true&width=350",
      title: "NYOC Update 9"
    },
    {
      url: "https://www.facebook.com/watch/?v=1281474359919323",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1281474359919323&show_text=true&width=350",
      title: "NYOC Update 10"
    },
    {
      url: "https://www.facebook.com/watch/?v=1321285996033923",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1321285996033923&show_text=true&width=350",
      title: "NYOC Update 11"
    },
    {
      url: "https://www.facebook.com/masterspeakersacademy/posts/pfbid029Jvmu2jzacsVyZHGA2Sj4CKeH8MR7xzxQrC6WKuipVemoYLCP8Mr9baVJGMKrQVel",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterspeakersacademy%2Fposts%2Fpfbid029Jvmu2jzacsVyZHGA2Sj4CKeH8MR7xzxQrC6WKuipVemoYLCP8Mr9baVJGMKrQVel&show_text=true&width=350",
      title: "NYOC Update 5"
    },
    {
      url: "https://www.facebook.com/reel/1854727915440326",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1854727915440326&show_text=true&width=350",
      title: "NYOC Update 6"
    },
    {
      url: "https://www.facebook.com/reel/1511974333574273",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1511974333574273&show_text=true&width=350",
      title: "NYOC Update 7"
    },
    {
      url: "https://www.facebook.com/reel/1732155731003186",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1732155731003186&show_text=true&width=350",
      title: "NYOC Update 8"
    },
    {
      url: "https://www.facebook.com/reel/757393780226901",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F757393780226901&show_text=true&width=350",
      title: "NYOC Update 9"
    },
    {
      url: "https://www.facebook.com/reel/1069100435382467",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1069100435382467&show_text=true&width=350",
      title: "NYOC Update 10"
    }
  ];

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  // Reset to first page when screen size changes
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="stay-updated" className="bg-gradient-to-b from-white to-gray-50 py-12 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Stay Updated on NYOC
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          Follow our socials for NYOC highlights and key announcements
          </p>
        </motion.div>

        {/* Carousel with Navigation */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white hover:bg-gray-50 text-red-600 rounded-full p-3 shadow-lg transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous posts"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white hover:bg-gray-50 text-red-600 rounded-full p-3 shadow-lg transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next posts"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Grid of Current Posts (1 on mobile, 3 on desktop) */}
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-md md:max-w-none mx-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {currentPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden mx-auto w-full"
              >
                <iframe
                  src={post.embedUrl}
                  width="350"
                  height="500"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="w-full max-w-full"
                ></iframe>
              </div>
            ))}
          </motion.div>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentPage
                    ? "w-8 bg-red-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Social Media Buttons */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.facebook.com/masterspeakersacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Facebook className="w-5 h-5" />
              View Facebook Page
            </a>
            <a
              href="https://www.instagram.com/masterspeakersacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              View Instagram Page
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialUpdates;
