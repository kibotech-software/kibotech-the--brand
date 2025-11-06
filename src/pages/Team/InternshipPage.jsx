import React from "react";

const InternshipTeam = () => {
  const interns = [
    { name: "Ankit", role: "Intern", program: "Java Full Stack Development" },
    { name: "Bilal", role: "Intern", program: "Java Full Stack Development" },
    { name: "Nikhil", role: "Intern", program: "Java Full Stack Development" },
    { name: "Sameer", role: "Intern", program: "Java Full Stack Development" },

     { name: "Hitanshu", role: "Intern", program: "Marketing" },
    { name: "Tarun", role: "Intern", program: "Marketing" },
    { name: "Sudeepthi", role: "Intern", program: "Marketing" },

  ];

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Java FullStack Internship
        </h1>
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="min-w-full text-left text-gray-700 border-collapse">
            <thead className="bg-blue-100 text-blue-600 uppercase text-sm">
              <tr>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Program</th>
              </tr>
            </thead>
            <tbody>
              {interns.map((intern, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition-all duration-200"
                >
                  <td className="px-6 py-4 font-medium">{intern.name}</td>
                  <td className="px-6 py-4">{intern.role}</td>
                  <td className="px-6 py-4">{intern.program}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default InternshipTeam;
