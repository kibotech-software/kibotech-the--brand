import React from "react";

const CloudSolutionsPage = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-gray-50 text-gray-800 ">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Cloud Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Secure, scalable, and performance-driven cloud solutions built to
          empower your business and streamline operations.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-blue-600">KiboTech</span> helps
          businesses embrace the power of the cloud with end-to-end solutions
          designed for scalability, flexibility, and cost efficiency. Our
          experts specialize in designing, deploying, and maintaining secure
          cloud infrastructures using industry-leading platforms.
        </p>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Cloud Infrastructure Setup */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Cloud Infrastructure Setup
          </h2>
          <p className="text-gray-700">
            We design and deploy robust, scalable cloud infrastructures on
            leading platforms like <strong>AWS</strong>, <strong>Google Cloud</strong>, and{" "}
            <strong>Microsoft Azure</strong>, ensuring high availability and
            optimized performance.
          </p>
        </div>

        {/* Migration & Modernization */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Migration & Modernization
          </h2>
          <p className="text-gray-700">
            Move your existing applications and data to the cloud with minimal
            downtime. We ensure a seamless transition while modernizing your
            tech stack for improved efficiency and scalability.
          </p>
        </div>

        {/* DevOps & Automation */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            DevOps & Continuous Integration
          </h2>
          <p className="text-gray-700">
            Empower your development process with automation tools and CI/CD
            pipelines using <strong>Docker</strong>, <strong>Kubernetes</strong>,
            and <strong>GitHub Actions</strong> for faster and more reliable
            deployments.
          </p>
        </div>

        {/* Cloud Security */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Cloud Security & Monitoring
          </h2>
          <p className="text-gray-700">
            Security is at the core of every solution we deliver. We implement
            best-in-class practices for data encryption, access control, and
            real-time monitoring to keep your cloud assets safe.
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Cloud Platforms & Tools We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700">
          {[
            "AWS",
            "Google Cloud",
            "Microsoft Azure",
            "Docker",
            "Kubernetes",
            "NGINX",
            "Terraform",
            "CI/CD Pipelines",
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
            <h3 className="font-semibold text-blue-600 mb-2">Cloud Expertise</h3>
            <p className="text-gray-700">
              Certified cloud engineers with deep experience in multi-cloud
              architecture and deployment strategies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">Cost Optimization</h3>
            <p className="text-gray-700">
              We architect systems that maximize performance while reducing your
              cloud expenditure through intelligent scaling and resource
              management.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">High Availability</h3>
            <p className="text-gray-700">
              Our architectures are designed for reliability, fault tolerance,
              and maximum uptime — keeping your business always online.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">End-to-End Support</h3>
            <p className="text-gray-700">
              From planning to deployment and maintenance, we provide full-cycle
              support to keep your cloud systems running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Scale Your Business with the Cloud?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Leverage the power of cloud computing with KiboTech — we’ll help you
          innovate, optimize, and grow faster in today’s digital era.
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

export default CloudSolutionsPage;
