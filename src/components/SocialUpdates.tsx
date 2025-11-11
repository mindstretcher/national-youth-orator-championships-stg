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
      url: "https://www.facebook.com/masterspeakersacademy/posts/pfbid02C8Dk8H7MsdxEQodX7M2e6TFs9DNc89DHkh8FxY8vrDVyBqMvqtT9B2fTQjL5vqsQl",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterspeakersacademy%2Fposts%2Fpfbid02C8Dk8H7MsdxEQodX7M2e6TFs9DNc89DHkh8FxY8vrDVyBqMvqtT9B2fTQjL5vqsQl&show_text=true&width=350",
      title: "NYOC Update 1"
    },
    {
      url: "https://www.facebook.com/masterspeakersacademy/posts/pfbid0vouUPn6YWkYowjfgcyBzE5D8jMLdTayqXrN5c7oDv2KvTf3bCcRYELCGRTBeMLSZl",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterspeakersacademy%2Fposts%2Fpfbid0vouUPn6YWkYowjfgcyBzE5D8jMLdTayqXrN5c7oDv2KvTf3bCcRYELCGRTBeMLSZl&show_text=true&width=350",
      title: "NYOC Update 2"
    },
    {
      url: "https://www.facebook.com/masterspeakersacademy/posts/pfbid02WuNcGiipLiHTFbjX5CYvGrXoAMi8LToe5yjTWD4uGdVvEWFe4eMsLwuZ5u9tbwVMl",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterspeakersacademy%2Fposts%2Fpfbid02WuNcGiipLiHTFbjX5CYvGrXoAMi8LToe5yjTWD4uGdVvEWFe4eMsLwuZ5u9tbwVMl&show_text=true&width=350",
      title: "NYOC Update 3"
    },
    {
      url: "https://www.facebook.com/masterspeakersacademy/posts/pfbid029XWbHqDUZUSEgBAxAcyqLYrCUggXf12d8HFDzP26DJVNLAFoCi85XtXgV87DNFPpl",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterspeakersacademy%2Fposts%2Fpfbid029XWbHqDUZUSEgBAxAcyqLYrCUggXf12d8HFDzP26DJVNLAFoCi85XtXgV87DNFPpl&show_text=true&width=350",
      title: "NYOC Update 4"
    },
    {
      url: "https://www.facebook.com/masterspeakersacademy/posts/pfbid024JftmqLSC6omQ7jdk7fQhcv9ba9maPbMPCc1T5zfjZFrTrPrYZ8nmF6Yz4c9ubk3l",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterspeakersacademy%2Fposts%2Fpfbid024JftmqLSC6omQ7jdk7fQhcv9ba9maPbMPCc1T5zfjZFrTrPrYZ8nmF6Yz4c9ubk3l&show_text=true&width=350",
      title: "NYOC Update 5"
    },
    {
      url: "https://www.facebook.com/masterspeakersacademy/posts/pfbid0erEwBCbuVSkpMfhQ49JpcHrEpN5MkuXvfrZANz8Jb1YcF32wNwNFiqmBeq8NwQpZl",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterspeakersacademy%2Fposts%2Fpfbid0erEwBCbuVSkpMfhQ49JpcHrEpN5MkuXvfrZANz8Jb1YcF32wNwNFiqmBeq8NwQpZl&show_text=true&width=350",
      title: "NYOC Update 6"
    },
    {
      url: "https://www.facebook.com/reel/743108442137017",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F743108442137017&show_text=true&width=350",
      title: "NYOC Update 7"
    },
    {
      url: "https://www.facebook.com/reel/878006584765653",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F878006584765653&show_text=true&width=350",
      title: "NYOC Update 8"
    },
    {
      url: "https://www.facebook.com/reel/1050571880386129",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1050571880386129&show_text=true&width=350",
      title: "NYOC Update 9"
    },
    {
      url: "https://www.facebook.com/reel/2092117031318801",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2092117031318801&show_text=true&width=350",
      title: "NYOC Update 10"
    },
    {
      url: "https://www.facebook.com/watch/?v=1281474359919323",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1281474359919323&show_text=true&width=350",
      title: "NYOC Update 11"
    },
    {
      url: "https://www.facebook.com/watch/?v=1321285996033923",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1321285996033923&show_text=true&width=350",
      title: "NYOC Update 12"
    },
    {
      url: "https://www.facebook.com/masterspeakersacademy/posts/pfbid029Jvmu2jzacsVyZHGA2Sj4CKeH8MR7xzxQrC6WKuipVemoYLCP8Mr9baVJGMKrQVel",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterspeakersacademy%2Fposts%2Fpfbid029Jvmu2jzacsVyZHGA2Sj4CKeH8MR7xzxQrC6WKuipVemoYLCP8Mr9baVJGMKrQVel&show_text=true&width=350",
      title: "NYOC Update 13"
    },
    {
      url: "https://www.facebook.com/reel/1854727915440326",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1854727915440326&show_text=true&width=350",
      title: "NYOC Update 14"
    },
    {
      url: "https://www.facebook.com/reel/1511974333574273",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1511974333574273&show_text=true&width=350",
      title: "NYOC Update 15"
    },
    {
      url: "https://www.facebook.com/reel/1732155731003186",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1732155731003186&show_text=true&width=350",
      title: "NYOC Update 16"
    },
    {
      url: "https://www.facebook.com/reel/757393780226901",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F757393780226901&show_text=true&width=350",
      title: "NYOC Update 17"
    },
    {
      url: "https://www.facebook.com/reel/1069100435382467",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1069100435382467&show_text=true&width=350",
      title: "NYOC Update 18"
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
