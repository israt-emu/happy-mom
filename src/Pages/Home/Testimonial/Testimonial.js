import React from "react";
import img1 from "../../../images/patient-1.jpg";
import img2 from "../../../images/patient-2.jpg";

const Testimonial = () => {
  return (
    <div className="py-8">
      <h1
        className="text-2xl text-center mb-4 my-4"
        style={{ color: "#875ca8" }}
      >
        Testimonials
      </h1>
      <h1 className="text-center text-3xl">What Patient's Say ?</h1>
      <div className="lg:w-4/5 w-11/12 shadow mx-auto py-12 px-5 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:flex shadow-lg p-6 rounded">
            <div>
              <img
                src={img1}
                alt=""
                className="rounded-full md:w-3/5 w-11/12 md:-mt-14 -mt-0 shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-purple-400 mt-3 md:mt-0">
                Maria Len
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus magnam modi inventore quia adipisci debitis numquam
                necessitatibus iusto asperiores alias?
              </p>
            </div>
          </div>
          <div className="md:flex shadow-lg p-6 rounded">
            <div>
              <img
                src={img2}
                alt=""
                className="rounded-full md:w-3/5 w-11/12 md:-mt-14 -mt-0 shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-purple-400 md:mt-0 mt-3">
                Claira Benny
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus magnam modi inventore quia adipisci debitis numquam
                necessitatibus iusto asperiores alias?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
