import React from "react";
import TeamCard from "../../components/TeamCard";
// import TeamCard from "../components/TeamCard";

const MarketingTeam = () => {
  const marketingMembers = [
    {
      name: "Hitanshu Rakesh Patel",
      title: "Marketing Intern ",
      img: "/assets/hitanshu.jpg",
      description:
        "Expert in performance marketing, social media campaigns, and SEO-driven growth strategies.",
      delay: "0.1s",
    },
    {
      name: "Jala Tarun",
      title: "Marketing Intern",
      img: "/assets/tarun.jpg",
      description:
        "Specializes in crafting powerful brand stories and marketing funnels that convert.",
      delay: "0.2s",
    },
    {
      name: "Sudeepthi Gongalla",
      title: "Marketing Intern",
      img: "/assets/sudeepthi.jpg",
      description:
        "Drives engagement through impactful content strategies, storytelling, and analytics.",
      delay: "0.3s",
    },
  ];

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Marketing Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {marketingMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingTeam;
