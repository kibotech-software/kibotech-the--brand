import React from "react";
import TeamCard from "../../components/TeamCard";

const DevelopersPage = () => (
  <section className=" bg-gray-50 ">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Developers
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Meet the engineering team behind KiboTech — experts in crafting
          innovative, scalable, and performance-driven digital experiences.
        </p>
      </div>

      {/* Responsive grid — 1 on mobile, 2 on medium, 3 on large */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <TeamCard
          name="Guntupalli Anjali"
          title="Senior Software Engineer"
          img="/assets/anjali.jpg"
          delay="0ms"
          description="Anjali specializes in full-stack development using React, Node.js, and PostgreSQL. She ensures clean architecture and seamless user experiences across all platforms."
        />

        <TeamCard
          name="Vavilala Shashank"
          title="Software Engineer"
          img="/assets/shashank.jpg"
          delay="100ms"
          
          description="Shashank builds efficient backend systems and API integrations using Node.js and MongoDB, focusing on performance, scalability, and modern design patterns."
        />

        <TeamCard
          name="Chekuru Sai Lakshmi"
          title="Software Trainee"
          img="/assets/lakshmi.jpg"
          delay="200ms"
          description="Sai Lakshmi contributes to front-end design and development using Next.js and Tailwind CSS, bringing creativity and precision to every interface she builds."
        />
      </div>
    </div>
  </section>
);

export default DevelopersPage;
