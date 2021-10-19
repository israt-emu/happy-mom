import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  console.log(services);
  return (
    <div>
      <div className="services py-20" style={{ background: "#faf6f2" }}>
        <div className="w-4/5 mx-auto">
          <h1
            className="text-2xl text-center mb-4"
            style={{ color: "#875ca8" }}
          >
            Our Services
          </h1>
          <h1 className="text-4xl md:w-2/4 w-11/12 mx-auto text-center mb-10 mt-2">
            Why should you choose Happy Mom Center?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services?.map(
              (service) =>
                service && (
                  <Service key={service.id} service={service}></Service>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
