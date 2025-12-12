
import React from "react";
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import nivesh2 from "../assets/logos/nivesh2.png";
import Fundoo from "../assets/logos/Fundoo.png";
import decor from "../assets/logos/decor.png";
import academy from "../assets/logos/academy.png";
import yojna from "../assets/logos/yojna.png";
import design from "../assets/logos/design.png";
import urban from "../assets/logos/urban.png";
import wemee from "../assets/logos/wemee.png";
import edit from "../assets/logos/edit.png";
import logo12 from "../assets/logos/logo12.png";
import logo13 from "../assets/logos/logo13.png";
import logo14 from "../assets/logos/logo14.png";
import logo15 from "../assets/logos/logo15.png";
import logo16 from "../assets/logos/logo16.png";
import logo17 from "../assets/logos/logo17.png";
import logo18 from "../assets/logos/logo18.png";
import logo19 from "../assets/logos/logo19.png";
import logo20 from "../assets/logos/logo20.png";
import logo21 from "../assets/logos/logo21.png";
import logo22 from "../assets/logos/logo22.png";
import logo23 from "../assets/logos/logo23.png";
import logo24 from "../assets/logos/logo24.png";

const logos = [
  logo1, logo2, nivesh2, Fundoo, decor, academy, yojna, design,
  urban, wemee, edit, logo12, logo13, logo14, logo15, logo16,
  logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24
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
