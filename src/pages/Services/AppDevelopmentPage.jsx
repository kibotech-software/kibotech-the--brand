import React from "react";

const AppDevelopmentPage = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-gray-50 text-gray-800 ">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          App Development Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Turning ideas into seamless, high-performing mobile experiences that engage users and scale with your business.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <p className="text-gray-700 leading-relaxed">
          At <span className="font-semibold text-blue-600">KiboTech</span>, we
          specialize in building <span className="font-semibold">powerful, user-centric mobile and web applications</span> that blend
          innovative design, robust functionality, and outstanding performance.
          From concept to launch, we ensure your app stands out in a crowded digital world.
        </p>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Custom App Development */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Custom App Development
          </h2>
          <p className="text-gray-700">
            We create tailored mobile and web applications designed for your
            business goals — from feature-rich enterprise tools to sleek
            customer-facing apps that deliver real impact.
          </p>
        </div>

        {/* Cross-Platform Solutions */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Cross-Platform Solutions
          </h2>
          <p className="text-gray-700">
            Using frameworks like <strong>React Native</strong> and{" "}
            <strong>Next.js</strong>, we develop apps that run flawlessly across
            both Android and iOS, reducing cost and time to market.
          </p>
        </div>

        {/* UI/UX-Focused Design */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            UI/UX-Focused Design
          </h2>
          <p className="text-gray-700">
            Every app we build is backed by thoughtful design principles —
            ensuring intuitive navigation, visual consistency, and engaging user
            experiences that convert visitors into loyal customers.
          </p>
        </div>

        {/* Backend & APIs */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Backend & API Development
          </h2>
          <p className="text-gray-700">
            Our developers build robust backends using{" "}
            <strong>Node.js</strong>, <strong>Spring Boot</strong>,{" "}
            <strong>PostgreSQL</strong>, and <strong>MongoDB</strong> to ensure
            your apps are secure, scalable, and lightning-fast.
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700">
          {[
            "React Native",
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Spring Boot",
            "PostgreSQL",
            "MongoDB",
            "Firebase",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose KiboTech</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">End-to-End Expertise</h3>
            <p className="text-gray-700">
              From design and development to deployment, our experts handle every stage of your app’s journey.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">Performance & Scalability</h3>
            <p className="text-gray-700">
              We ensure every app is optimized for speed, responsiveness, and future scalability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">Data Security</h3>
            <p className="text-gray-700">
              Built with strong backend architecture, ensuring your data and user information remain protected.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">Post-Launch Support</h3>
            <p className="text-gray-700">
              Our partnership doesn’t end at delivery — we provide ongoing maintenance, updates, and support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Launch Your Next App?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Let’s bring your vision to life with a powerful, user-focused
          application that represents your brand’s true potential.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default AppDevelopmentPage;
