import React from "react";

const Navbar = ({ onAddClick, onShowClick }) => {
  return (
    <nav>
      <button onClick={onAddClick}>Add</button>
      <button onClick={onShowClick}>Show</button>
    </nav>
  );
};

export default Navbar;
