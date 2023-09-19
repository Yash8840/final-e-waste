import React, { useState } from "react";
import './SelectCity.css';


const SelectCity = () => {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
    
  };
  return (
    <>
      <div className="cityBox">
      <span className="distSpan">Your District</span>
      <input type="text" placeholder="Enter Your District"/>
      </div>
    </>
  );
};

export default SelectCity;
