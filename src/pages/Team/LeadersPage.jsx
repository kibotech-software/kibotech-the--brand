import React from "react";
import TeamCard from "../../components/TeamCard";

const LeadersPage = () => (
  <section className=" bg-gray-50 ">
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Leadership Team
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Meet the visionaries guiding{" "}
          <span className="text-blue-600 font-semibold">KiboTech</span> —
          passionate leaders driving innovation and excellence in every project.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <TeamCard
          name="Dr. Sara Shuttari"
          title="Executive Director"
          img="/assets/t2.jpg"
          delay="0ms"
          description="With over a decade of leadership experience, Dr. Sara drives strategic growth and innovation, ensuring KiboTech remains at the forefront of digital transformation."
        />
        <TeamCard
          name="Syed Rashid Shuttari"
          title="Managing Director"
          img="/assets/t1.jpg"
          delay="100ms"
          description="A visionary entrepreneur and technologist, Rashid oversees operations and partnerships, guiding KiboTech’s mission to empower businesses through technology."
        />
        <TeamCard
        name="Shafiha Masarrat"
        title="Operations (HR)"
        img="/assets/shafia.jpg"
        delay="200ms"
        description="Shafiha oversees human resources and operations, ensuring smooth coordination, efficient workflows, and a positive organizational culture within the team."
        />

      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Building the Future, Together.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          At KiboTech, leadership isn’t about titles — it’s about impact and
          innovation.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Connect With Us
        </a>
      </div>
    </div>
  </section>
);

export default LeadersPage;
