<<<<<<< HEAD
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";

// Services Subpages
import WebDevelopmentPage from "./pages/Services/WebDevelopmentPage";
import AppDevelopmentPage from "./pages/Services/AppDevelopmentPage";
import CloudSolutionsPage from "./pages/Services/CloudSolutionsPage";

import DevelopersPage from "./pages/Team/DevelopersPage";
import MarketingPage from "./pages/Team/MarketingPage";
import InternshipPage from "./pages/Team/InternshipPage";
import LeadersPage from "./pages/Team/LeadersPage";
import AboutPage from "./pages/AboutPage";
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './index.css';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
>>>>>>> e116aa8e97904b69ea8fe80d8a403e3fbd0f3ec9

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
// import NotFoundPage from './pages/NotFoundPage'; // optional

<<<<<<< HEAD
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "marooncream");
  }, []);

  return (
    <Router>
   <screenWrapper/>
       <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
=======
function App() {
  return (
    <Router>
      {/* ✅ Hook is now inside the Router */}
      <ScrollAnimationWrapper />

      <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
>>>>>>> e116aa8e97904b69ea8fe80d8a403e3fbd0f3ec9
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/events" element={<EventsPage />} />
<<<<<<< HEAD
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Services */}
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/app-development" element={<AppDevelopmentPage />} />
            <Route path="/services/cloud" element={<CloudSolutionsPage />} />

            {/* Team */}
            <Route path="/team/developers" element={<DevelopersPage />} />
            <Route path="/team/marketing" element={<MarketingPage />} />
            <Route path="/team/internship" element={<InternshipPage />} />
            <Route path="/team/leaders" element={<LeadersPage />} />
=======
            <Route path="/contact" element={<ContactPage />} />
>>>>>>> e116aa8e97904b69ea8fe80d8a403e3fbd0f3ec9
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

<<<<<<< HEAD
=======
// Create a small component that runs the hook safely
const ScrollAnimationWrapper = () => {
  useScrollAnimation();
  return null;
};


>>>>>>> e116aa8e97904b69ea8fe80d8a403e3fbd0f3ec9
export default App;
