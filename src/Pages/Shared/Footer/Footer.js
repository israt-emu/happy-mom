import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container py-12 lg:w-4/5 md:w-11/12 w-4/5 mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* subscribe column  */}
          <div>
            <h1 className="text-xl font-bold">SUBSCRIBE</h1>
            <p className="my-4">
              Sign up to our Newsletters and get the latest offers
            </p>
            <input
              className="py-2 px-3 bg-purple-300 rounded outline-none"
              type="email"
              placeholder="E-mail"
            />
            <br />
            <button className="border-2 border-pink-300 py-2 px-3 rounded mt-3 text-white transform hover:scale-110 motion-reduce:transform-none button">
              Get Notified
            </button>
          </div>
          {/* contact information  */}
          <div>
            <h1 className="text-xl font-bold">CONTACT US</h1>
            <ul className="mt-4">
              <li>
                <i className="fa fa-map-marker mr-2 my-2"></i>
                <span>Location:4328 white Avenue,USA</span>
              </li>
              <li>
                <i className="fa fa-phone mr-2 my-2"></i>
                <span>1-728-349-6593</span>
              </li>
              <li>
                <i className="fas fa-envelope mr-2 my-2"></i>
                <span>happy-mom@gmail.com</span>
              </li>
            </ul>
            <ul className="flex mt-3">
              <li>
                <i className="fab fa-facebook mr-2 icon transform hover:scale-110 motion-reduce:transform-none"></i>
              </li>
              <li>
                <i className="fab fa-google mx-2 icon transform hover:scale-110 motion-reduce:transform-none"></i>
              </li>
              <li>
                <i className="fab fa-twitter mx-2 icon transform hover:scale-110 motion-reduce:transform-none"></i>
              </li>
              <li>
                <i className="fab fa-pinterest mx-2 icon transform hover:scale-110 motion-reduce:transform-none"></i>
              </li>
            </ul>
          </div>
          {/* service related information  */}
          <div>
            <h1 className="text-xl font-bold">INFORMATION</h1>
            <ul>
              <li className="my-2">Pregnancy Care</li>
              <li className="my-2">NICU Facilities</li>
              <li className="my-2">Maternel Practise</li>
              <li className="my-2">Trisemester Care</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-white mt-5 border-t-2 pt-2">
          Copyright©2021 Happy Mom.All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
