import "./styles.css";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import AddHospital from "./components/AddHospital";
import ShowHospitals from "./components/ShowHospitals";

const App = () => {
  const [hospitals, setHospitals] = useState([]);
  const [showAdd, setShowAdd] = useState(true);

  const handleAddHospital = (hospital) => {
    setHospitals([...hospitals, hospital]);
  };

  return (
    <div>
      <Navbar
        onAddClick={() => setShowAdd(true)}
        onShowClick={() => setShowAdd(false)}
      />
      {showAdd ? (
        <AddHospital onAddHospital={handleAddHospital} />
      ) : (
        <ShowHospitals hospitals={hospitals} />
      )}
    </div>
  );
};

export default App;
