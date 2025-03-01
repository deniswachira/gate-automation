import { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const videoList = [
  {
    title: "Why Gate Automation?",
    description: "Discover the benefits of automating your business processes.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual video link
    thumbnail: "https://via.placeholder.com/300x200?text=Video+1", // Replace with actual thumbnail
  },
  {
    title: "The Hidden Cost of Manual Work",
    description: "Learn how automation can save time and reduce errors.",
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    thumbnail: "https://via.placeholder.com/300x200?text=Video+2",
  },
  {
    title: "AI-Powered Automation That Works",
    description: "Explore how AI can streamline your business workflows.",
    url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    thumbnail: "https://via.placeholder.com/300x200?text=Video+3",
  },
];

const Videos = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <Container className="flex flex-col gap-6 min-h-screen bg-base-200">
      <Navbar />

      {/* Page Title */}
      <motion.h1
        className="text-2xl md:text-5xl font-bold text-gray-800 text-center mt-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Video Library 
      </motion.h1>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {videoList.map((video, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Video Thumbnail / Player */}
            <div className="relative">
              {playingIndex === index ? (
                <ReactPlayer
                  url={video.url}
                  playing
                  controls
                  width="100%"
                  height="200px"
                />
              ) : (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover "
                />
              )}
              {/* Play Button */}
              {playingIndex !== index && (
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-3xl font-bold rounded-lg opacity-80 hover:opacity-100"
                  onClick={() => setPlayingIndex(index)}
                >
                  ▶
                </button>
              )}
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{video.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{video.description}</p>

              
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </Container>
  );
};

export default Videos;
