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

function App() {
  useScrollAnimation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "marooncream");
  }, []);

  return (
    <Router>
   <screenWrapper/>
       <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/events" element={<EventsPage />} />
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
