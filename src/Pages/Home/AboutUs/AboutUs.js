import React from "react";
import img from "../../../images/mom-child.jpg";

const AboutUs = () => {
  return (
    <div className="py-10">
      <div className="lg:w-4/5 w-11/12 mx-auto">
        <h1 className="text-2xl text-center mb-8" style={{ color: "#875ca8" }}>
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex items-center">
          <div>
            <h1 className="text-4xl">
              Welcome To The <br />
              Happy Mom Community!
            </h1>
            <h1 className="text-2xl my-2">
              We extend our helping hand to people who are
            </h1>
            <ul>
              <li>
                <i className="fas fa-hand-point-right text-purple-400 mr-2"></i>
                <span>Couples who cannot conceive naturally</span>
              </li>
              <li>
                <i className="fas fa-hand-point-right text-purple-400 mr-2"></i>
                <span>Men With Fertility Issues</span>
              </li>
              <li>
                <i className="fas fa-hand-point-right text-purple-400 mr-2"></i>
                <span>Couples with Recurrent Pregnancy losses</span>
              </li>
              <li>
                <i className="fas fa-hand-point-right text-purple-400 mr-2"></i>
                <span>Couples Carrying Genetically Inherited Disorder</span>
              </li>
              <li>
                <i className="fas fa-hand-point-right text-purple-400 mr-2"></i>
                <span>Women who want to freeze their eggs</span>
              </li>
              <li>
                <i className="fas fa-hand-point-right text-purple-400 mr-2"></i>
                <span>Cancer Patients who want to preserve their eggs</span>
              </li>
            </ul>
            <button className="py-2 px-3 rounded button-2 mt-3">
              Make an Appoinment
            </button>
          </div>
          <div>
            <img src={img} alt="" className="shadow-lg" />
            <h1 className="text-center text-xl mt-1">Be a Happy Mom!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
