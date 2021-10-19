import React from "react";

const Doctor = (props) => {
  const { img, name, category } = props;
  return (
    <div className="text-center bg-white shadow p-4">
      <div>
        <img src={img} alt="" />
      </div>
      <h1 className="text-2xl font-bold mt-3">{name}</h1>
      <h1 className="text-xl" style={{ color: "#875ca8" }}>
        {category}
      </h1>
    </div>
  );
};

export default Doctor;
