// src/pages/HomePage.js
import React from 'react';
import ScrollingAnnouncementBanner from '../components/ScrollingAnnouncementBanner';
import HeroSection from '../components/HeroSection';
import ClientLogosSection from '../components/ClientLogosSection';
import ServicesSection from '../components/ServicesSection';
import MissionVisionSection from '../components/MissionVisionSection';
import ProcessSection from '../components/ProcessSection';
import TechStackSection from '../components/TechStackSection';
// import TeamSection from '../components/TeamSection';
import StatisticsSection from '../components/StatisticsSection';
// import EventsGallery from '../components/EventsGallery';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <>
      {/* <ScrollingAnnouncementBanner /> */}
      <HeroSection />
      <ClientLogosSection />
      <ServicesSection />
      <MissionVisionSection />
      <ProcessSection />
      <TechStackSection />
      {/* <TeamSection /> */}
      <StatisticsSection />
      {/* <EventsGallery /> */}
      <FaqSection />
      {/* <ContactSection /> */}
    </>
  );
};

export default HomePage;
