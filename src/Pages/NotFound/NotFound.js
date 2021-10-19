import React from "react";
import img from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <img src={img} alt="" className="md:w-3/5 w-4/5 mx-auto" />
    </div>
  );
};

export default NotFound;
