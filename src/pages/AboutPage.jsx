import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-white text-gray-800 pt-28 pb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
            About <span className="text-gray-900">KiboTech</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are passionate innovators focused on transforming ideas into digital realities — 
            building scalable, elegant, and future-ready software.
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="p-8 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower individuals, startups, and enterprises by providing
              reliable software solutions. We focus on delivering high-quality projects that
              combine creativity, usability, and cutting-edge technology.
            </p>
          </div>
          <div className="p-8 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where technology is not a barrier but a bridge —
              connecting people, ideas, and opportunities seamlessly across the globe.
            </p>
          </div>
        </div>

        {/* Team Highlight */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Founded by a team of passionate developers, designers, and dreamers, 
            <span className="text-blue-600 font-medium"> KiboTech </span>
            is built on collaboration, innovation, and trust. Our work spans across
            web development, app solutions, and cloud integrations — all driven by
            creativity and a commitment to excellence.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-700 mt-2">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-700 mt-2">Clients Worldwide</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-700 mt-2">Active Developers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-700 mt-2">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
