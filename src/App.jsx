import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './index.css';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
// import NotFoundPage from './pages/NotFoundPage'; // optional

function App() {
  useScrollAnimation();

  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
