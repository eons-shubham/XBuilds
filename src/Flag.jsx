import React from "react";
import styles from "./Flag.css";
const Flag = ({ name, imageURL }) => {
  return (
    <div className="countryCard">
      <img src={imageURL} alt={name} width={"100px"} height={"100px"} />
      <h2>{name}</h2>
    </div>
  );
};

export default Flag;
