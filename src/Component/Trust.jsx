
// import React from "react";
// import logo1 from "src /assets/logos/logo1.png";
// import logo2 from "src/assets/logos/logo2.png";
// import nivesh2 from "src/assets/logos/nivesh2.png";
// import Fundoo from "src/assets/logos/Fundoo.png";


// const logos = [
//   logo1, logo2, nivesh2, Fundoo, decor, academy, yojna, design,
//   urban, wemee, edit, logo12, logo13, logo14, logo15, logo16,
//   logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24
// ];

// const Trust = () => {
//   return (
//     <div className="w-full py-16 bg-white overflow-hidden">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold">
//           Hall of <span className="text-blue-600">Trust</span>
//         </h2>
//         <p className="text-gray-600 text-xl font-semibold mt-2">
//           We aren’t just your agency – we are your{" "}
//           <span className="text-blue-600 font-semibold">partner in growth.</span>
//         </p>
//       </div>

//       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center px-4 marquee">
//         {logos.map((logo, index) => (
//           <img
//             key={index}
//             src={logo}
//             className="w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 object-contain opacity-100 hover:opacity-100 transition-all duration-300"
//             alt="trusted logo"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Trust;

import React from "react";

const logos = [
  "logo1.png",
  "logo2.png",
  "nivesh2.png",
  "Fundoo.png",
  "decor.png",
  "academy.png",
  "yojna.png",
  "design.png",
  "urban.png",
  "wemee.png",
  "edit.png",
  "logo12.png",
  "logo13.png",
  "logo14.png",
  "logo15.png",
  "logo16.png",
  "logo17.png",
  "logo18.png",
  "logo19.png",
  "logo20.png",
  "logo21.png",
  "logo22.png",
  "logo23.png",
  "logo24.png"
];

const Trust = () => {
  return (
    <div className="w-full py-16 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Hall of <span className="text-blue-600">Trust</span>
        </h2>
        <p className="text-gray-600 text-xl font-semibold mt-2">
          We aren’t just your agency – we are your{" "}
          <span className="text-blue-600 font-semibold">partner in growth.</span>
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center px-4 marquee">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={`${import.meta.env.BASE_URL}logos/${logo}`}
            className="w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 object-contain opacity-100 hover:opacity-100 transition-all duration-300"
            alt="trusted logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Trust;
