import React from "react";

const WebDevelopmentPage = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Web Development Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Building digital experiences that drive growth and empower businesses
          of all sizes.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <p className="text-gray-700 leading-relaxed">
          At <span className="font-semibold text-blue-600">KiboTech</span>, we
          don’t just build websites — we craft{" "}
          <span className="font-semibold">high-performance digital platforms</span>{" "}
          that empower your business to grow, engage, and convert. Whether you’re
          a startup or a large enterprise, our expert team ensures your online
          presence stands out in today’s competitive digital landscape.
        </p>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* E-Commerce */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            E-Commerce Solutions
          </h2>
          <p className="text-gray-700">
            Launch your online store with scalable, secure, and visually engaging
            platforms. From product catalogs to payment integration and analytics,
            we deliver complete e-commerce systems that drive sales and customer
            satisfaction.
          </p>
        </div>

        {/* Full-Stack */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Full-Stack Web Applications
          </h2>
          <p className="text-gray-700">
            We design and develop end-to-end web applications using modern
            frameworks like <strong>React</strong>, <strong>Node.js</strong>,{" "}
            <strong>Next.js</strong>, and <strong>Spring Boot</strong> — ensuring
            speed, security, and flexibility for your business.
          </p>
        </div>

        {/* UI/UX */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">UI/UX Design</h2>
          <p className="text-gray-700">
            First impressions matter. Our design team creates intuitive and
            engaging interfaces that reflect your brand identity and keep
            visitors coming back.
          </p>
        </div>

        {/* SEO */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            SEO-Optimized Development
          </h2>
          <p className="text-gray-700">
            Every website we build follows SEO-first principles, optimized for
            search engines, speed, and accessibility — helping your brand reach
            the right audience faster.
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
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "Spring Boot",
            "PostgreSQL",
            "MongoDB",
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
            <h3 className="font-semibold text-blue-600 mb-2">
              Expert Engineers
            </h3>
            <p className="text-gray-700">
              Skilled professionals proficient in modern frameworks and scalable
              architecture.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">
              Performance Driven
            </h3>
            <p className="text-gray-700">
              Every project is optimized for speed, SEO, and conversion.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">
              Secure & Reliable
            </h3>
            <p className="text-gray-700">
              We prioritize data protection, backend security, and long-term
              system stability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">
              Client-Centric Approach
            </h3>
            <p className="text-gray-700">
              Custom-built solutions aligned with your specific business goals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Let’s Build Something Exceptional
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Your website is more than just a digital presence — it’s your brand’s
          first impression. Let’s make it unforgettable.
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

export default WebDevelopmentPage;
