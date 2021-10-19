import React from "react";
import team from "../../../images/team.jpg";
import img1 from "../../../images/doctor-1.jpg";
import img2 from "../../../images/doctor-3.jpg";
import img3 from "../../../images/doctor-4.jpg";
import img4 from "../../../images/doctor-5.jpg";
import img5 from "../../../images/doctor-6.jpg";
import img6 from "../../../images/doctor-2.jpg";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="md:text-2xl text-xl mt-14 lg:w-3/5 w-11/12 mx-auto mb-4">
          Making the decision to have a baby is momentous. It is to decide
          forever to have your heart go walking around outside your body.Our
          highly qualified doctors will guide you through the journey of your
          pregnancy.
        </h1>
        <img src={team} className="mx-auto lg:w-2/5 w-3/4" alt="" />
      </div>
      <div className="doctors-team py-8" style={{ background: "#faf6f2" }}>
        <h1 className="text-3xl text-center mt-5 mb-8">Meet Our Specialist</h1>
        <div className="md:w-4/5 w-11/12 mx-auto bg-white p-8 shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* passing props to single doctor components */}
            <div>
              <Doctor
                img={img1}
                name="Marry Ellen"
                category="Gynecologist"
              ></Doctor>
            </div>
            <div>
              <Doctor
                img={img2}
                name="Dr. Philip"
                category="Medicine Specialist"
              ></Doctor>
            </div>
            <div>
              <Doctor
                img={img3}
                name="Jonus Anthropy"
                category="Medicine Specialist"
              ></Doctor>
            </div>
            <div>
              <Doctor
                img={img4}
                name="Jenelia Rose"
                category="Gynecologist"
              ></Doctor>
            </div>
            <div>
              <Doctor
                img={img5}
                name="Walter Rudin"
                category="Medicine Specialist"
              ></Doctor>
            </div>
            <div>
              <Doctor
                img={img6}
                name="Dr. Laura Dixon"
                category="Gynecologist"
              ></Doctor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
