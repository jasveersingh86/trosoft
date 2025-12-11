import React from "react";

const logos = [
  "src/assets/logo1.png",
  "src/assets/logo2.png",
  "src/assets/nivesh2.png",
  "src/assets/Fundoo.png",
  "src/assets/decor.png",
  "src/assets/academy.png",
  "src/assets/yojna.png",
  "src/assets/design.png",
  "src/assets/urban.png",
  "src/assets/wemee.png",
  "src/assets/edit.png",
  "src/assets/vasy.png",
  "src/assets/logo13.png",
  "src/assets/logo14.png",
  "src/assets/logo15.png",
  "src/assets/logo16.png",
  "src/assets/logo17.png",
  "src/assets/logo18.png",
  "src/assets/logo19.png",
  "src/assets/logo20.png",
  "src/assets/logo21.png",
  "src/assets/logo22.png",
  "src/assets/logo23.png",
  "src/assets/logo24.png",
];

const Trust = () => {
  return (
    <div className="w-full py-16 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Hall of <span className="text-blue-600">Trust</span>
        </h2>
        <p className="text-gray-600 text-xl font-semibold mt-2">
          We aren’t just your agency – we are your{" "}
          <span className="text-blue-600 font-semibold">partner in growth.</span>
        </p>
      </div>

      {/* Scrolling Logos */}
      {/* <div className=" grid   grid-cols-6 whitespace-nowrap marquee">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            className="w-32  h-20 object-contain mx-8 opacity-80 hover:opacity-100 transition-all duration-300"
            alt="trusted logo"
          />
        ))}
      </div> */}
      {/* Scrolling Logos */}
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center px-4 marquee">
  {logos.map((logo, index) => (
    <img
      key={index}
      src={logo}
      className="w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 object-contain opacity-100 hover:opacity-100 transition-all duration-300"
      alt="trusted logo"
    />
  ))}
</div>

    </div>
  );
};

export default Trust;
