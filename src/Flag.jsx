import React from "react";

const Flag = ({ name, imageURL }) => {
  const flagbox = {
    width: "200px",
    height: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={flagbox}>
      <img
        src={imageURL}
        alt={`Flag of ${name}`}
        width={"100px"}
        height={"100px"}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default Flag;
