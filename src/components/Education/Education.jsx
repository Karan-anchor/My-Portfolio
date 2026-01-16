// import React from "react";
// import { education } from "../../constants";

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development.
//         </p>
//       </div>

//       {/* Timeline */}
//       <div className="relative">
//         {/* Vertical Line */}
//         <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-white h-full"></div>

//         {/* Education Cards */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`relative flex flex-col sm:flex-row items-center mb-24 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Education Card */}
//             <div
//               className={`w-full sm:max-w-md p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md
//               shadow-[0_0_25px_1px_rgba(130,69,236,0.35)]
//               ${
//                 index % 2 === 0
//                   ? "sm:mr-auto sm:pr-16"
//                   : "sm:ml-auto sm:pl-16"
//               }
//               mt-12 sm:mt-0`}
//             >
//               {/* Top Section */}
//               <div className="flex items-center gap-4">
//                 <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div>
//                   <h4 className="text-sm text-gray-300 font-semibold">
//                     {edu.school}
//                   </h4>
//                   <p className="text-xs text-gray-500">{edu.date}</p>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="mt-4 text-gray-400 text-sm leading-relaxed">
//                 {edu.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical Line (BEHIND CARDS) */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Education Cards */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-24 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* CARD (ABOVE LINE) */}
            <div
              className={`relative z-10 w-full sm:max-w-md p-6 rounded-2xl 
              border border-white bg-gray-900 backdrop-blur-md
              shadow-[0_0_25px_1px_rgba(130,69,236,0.35)]
              ${
                index % 2 === 0
                  ? "sm:mr-auto sm:pr-20"
                  : "sm:ml-auto sm:pl-20"
              }
              mt-12 sm:mt-0`}
            >
              {/* Top Section */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm text-gray-300 font-semibold">
                    {edu.school}
                  </h4>
                  <p className="text-xs text-gray-500">{edu.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
