import React from "react";

const TeamCard = ({ name, title, img, delay, description }) => (
  <div
    className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out"
    style={{ animationDelay: delay }}
  >
    {/* Image Section */}
    <div className="relative w-full h-72 md:h-80 overflow-hidden group">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
      />

      {/* Blue Overlay on Hover */}
      <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 ease-out flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-lg font-medium">{title}</p>
      </div>
    </div>

    {/* Text Section */}
    <div className="p-6 text-center">
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default TeamCard;
