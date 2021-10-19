import React from "react";
import AboutUs from "../AboutUs/AboutUs";

import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
