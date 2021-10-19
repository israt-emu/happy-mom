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
                className="rounded-full md:w-4/5 w-11/12 md:-mt-14 -mt-0 shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-purple-400 mt-3 md:mt-0 mb-2">
                Maria Len
              </h1>
              {/* quote about us  */}
              <p>
                <i className="fas fa-quote-left mr-2"></i>
                <i>
                  I have been extremely impressed with your knowledge and
                  insight on our needs here! I would highly recommended your
                  organization and have been blessed to have made many
                  friendships with the highly qualified staff you have provided
                  us.
                </i>
                <i className="fas fa-quote-right ml-2"></i>
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
              <h1 className="text-xl font-bold text-purple-400 md:mt-0 mt-3 mb-2">
                Claira Benny
              </h1>
              {/* quote about us  */}
              <p>
                <i className="fas fa-quote-left mr-2"></i>
                <i>
                  I'm totally happy with the care given by Happy Mom for my
                  sister who had her delivery there.They took care of her and
                  baby seriously.No disappointments from the time of admission
                  to charge.So thankful.
                </i>
                <i className="fas fa-quote-right ml-2"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
