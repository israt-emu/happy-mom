import React from "react";
import { useParams } from "react-router";
import useServices from "../../../hooks/useServices";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [services] = useServices();
  //find single service by id params
  console.log(serviceId);
  const findService = services?.find(
    (service) => service.id.toString() === serviceId
  );

  return (
    <div className="py-10" style={{ background: "#faf6f2" }}>
      <div className="lg:w-4/5 md:w-11/12 w-4/5 mx-auto p-5 shadow-lg bg-white">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 flex items-center">
          <div>
            <img src={findService?.img} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{findService?.name}</h1>
            <h1 className="text-xl my-3" style={{ color: "#875ca8" }}>
              Details About this Service:
            </h1>
            <p>{findService?.description}</p>
            <button className="py-2 px-3 rounded bg-gradient-to-r from-purple-500 to-purple-200 mt-2">
              Find our Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
