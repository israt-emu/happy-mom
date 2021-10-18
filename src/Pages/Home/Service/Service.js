import React from "react";
import { useHistory } from "react-router";
import "./Service.css";

const Service = ({ service }) => {
  const history = useHistory();
  const { img, name, description, id } = service;
  ///show service details by click
  const showDetails = (serviceId) => {
    history.push(`/details/${serviceId}`);
  };
  return (
    <div className="service">
      <div className="p-4">
        <img src={img} alt="" />
      </div>
      <div className="p-4">
        <h1 className="text-xl service-title mb-2">{name}</h1>
        <p>{description.slice(0, 100)}...</p>
        <button
          className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-300 py-2 px-3 rounded mt-2 text-white"
          onClick={() => showDetails(id)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Service;
