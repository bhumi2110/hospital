import React from "react";

const HospitalCard = ({ hospital }) => {
  return (
    <div className="card">
      <h3>{hospital.name}</h3>
      <p>Location: {hospital.location}</p>
      <p>Type: {hospital.type}</p>
    </div>
  );
};

export default HospitalCard;
