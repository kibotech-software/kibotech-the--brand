import React from 'react';

const ServiceCard = ({ icon, title, children, delay }) => (
  <div
    className="flex-1 min-w-[250px] bg-white p-6 sm:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
    style={{ animationDelay: delay }}
  >
    <div className="flex flex-col items-start mb-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-blue-500 text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2">{children}</p>
  </div>
);

const ServicesSection = () => (
  <section id="services" className="py-16 sm:py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Our Core Services
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base">
          Partnering with us means unlocking a future-ready mindset—where education meets innovation,
          mentorship fuels growth, and real-world skills pave the path to success.
        </p>
      </div>

      {/* Responsive layout: 1 per row (mobile), 2 per row (tablet), 4 per row (desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <ServiceCard icon="👥" title="Industry-Experienced Mentors" delay="0ms">
          Gain insights from mentors with real-world, practical experience in a specific field or sector.
        </ServiceCard>

        <ServiceCard icon="🌐" title="Customized Programs" delay="100ms">
          We design educational and training programs tailored to fit the curriculum of every academic stream.
        </ServiceCard>

        <ServiceCard icon="📦" title="Hands-on Projects" delay="200ms">
          Connect tools, teams, and workflows with intelligent automation on projects with real deliverables.
        </ServiceCard>

        <ServiceCard icon="💼" title="Internship Opportunities" delay="300ms">
          Structured internships giving students hands-on experience and real-world tech skills.
        </ServiceCard>
      </div>
    </div>
  </section>
);

export default ServicesSection;
