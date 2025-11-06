import React from "react";

const IncubationInnovationPage = () => {
  return (
    <section className="py-20 bg-gray-50 pt-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Incubation & Innovation
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-12">
          Empowering startups, students, and innovators with the right guidance,
          resources, and technology to turn ideas into impactful realities.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left max-w-5xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To foster innovation and entrepreneurship by providing incubation
              support, mentorship, and access to technology that helps aspiring
              entrepreneurs and student innovators bring their visions to life.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To build a sustainable innovation ecosystem that bridges the gap
              between academia and industry — enabling creative thinkers to
              become successful changemakers.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Startup Mentorship
              </h3>
              <p className="text-gray-600">
                Expert guidance from industry professionals to shape your
                business ideas into scalable solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Technical Support
              </h3>
              <p className="text-gray-600">
                Access to cutting-edge tools, cloud credits, and developer
                support to accelerate innovation.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Collaborative Ecosystem
              </h3>
              <p className="text-gray-600">
                A dynamic network of innovators, mentors, and investors driving
                growth through collaboration.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Join the Program
          </a>
        </div>
      </div>
    </section>
  );
};

export default IncubationInnovationPage;
