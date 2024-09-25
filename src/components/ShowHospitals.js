import React from "react";
import HospitalCard from "./HospitalCard";

const ShowHospitals = ({ hospitals }) => {
  return (
    <div>
      {hospitals.map((hospital, index) => (
        <HospitalCard key={index} hospital={hospital} />
      ))}
    </div>
  );
};

export default ShowHospitals;
