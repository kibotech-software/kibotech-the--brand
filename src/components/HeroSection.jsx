import React, { useState, useEffect } from 'react';
import AnimatedHeroBackground from './AnimatedHeroBackground';
import ScrollingAnnouncementBanner from './ScrollingAnnouncementBanner';

const HeroSection = () => {
  const slides = [
    "/assets/k1.jpg",
    "/assets/k2.jpg",
    "/assets/k3.jpg",
    "/assets/k4.jpg",
    "/assets/k6.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section id="home" className="relative overflow-hidden">
      <AnimatedHeroBackground />

      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={slide}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${slide})`,
            opacity: index === currentSlide ? 1 : 0,
            zIndex: 0
          }}
        />
      ))}

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

<<<<<<< HEAD
      {/* ✅ Integrated Announcement Banner */}
      <div className="relative z-20">
        <ScrollingAnnouncementBanner text="📢 Azad Tech-Expo 2025 | 10 November 2025 | Organized By MANUU In Collaboration with Kibotech" />
      </div>
=======
      {/* ✅ Announcement Banner inside Hero */}
     <div className="relative z-20">
  <ScrollingAnnouncementBanner text="📢 National Seminar Tech Summit Hyderabad 2025 | 10 November 2025 | By Kibotech" />
</div>

>>>>>>> e116aa8e97904b69ea8fe80d8a403e3fbd0f3ec9

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-30 text-center pt-32 pb-24 md:pt-44 md:pb-32">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Specialized in Building and Delivering Software <span className="text-blue-400">Projects.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We Build and Deliver High-Quality Software Projects.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-xl transform hover:scale-105"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
