import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner -mt-28 pt-28 text-center">
        <h1 className="md:text-4xl text-2xl font-bold text-white lg:mt-20 mt-12 lg:w-3/5 md:w-3/4 w-11/12 mx-auto">
          Babies are bits of star dust blown from the hand of God. Lucky is the
          woman who knows the pangs of birth for she has held a star.
        </h1>
        <p className="md:text-xl text-md text-white my-5 md:w-2/5 w-11/12 mx-auto">
          If you want to be a Happy Mom, then join with our Happy Mom Center
        </p>
        <button className="py-2 px-3 rounded button text-white font-medium shadow transform hover:scale-110 motion-reduce:transform-none	">
          Learn Our Services
        </button>
      </div>
    </div>
  );
};

export default Banner;
