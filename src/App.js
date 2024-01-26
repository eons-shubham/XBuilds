import React from "react";
import { useState } from "react";
import * as math from "mathjs";

function App() {
  const input = {
    width: "250px",
    height: "20px",
    border: "1px solid black",
    textAlign: "left",
    marginBottom: "10px",
  };
  const output = {
    width: "250px",
    height: "20px",
    textAlign: "center",
    marginBottom: "10px",
    color: "grey",
  };

  const container = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "250px",
  };

  const buttonContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
    borderRadius: "20px",
  };

  const buttonItem = {
    width: "50px",
    height: "50px",
    borderRadius: "20%",
  };

  const [ans, setAns] = useState("");
  const [expression, setExpression] = useState("");
  let arr = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  const handleClick = (e) => {
    if (e.target.tagName === "DIV") return;
    else if (e.target.innerText !== "=" && e.target.innerText !== "C") {
      setExpression((prevValue) => prevValue + e.target.innerText);
    } else if (e.target.innerText === "C") {
      setAns("");
      setExpression("");
    } else if (e.target.innerText === "=") {
      if (expression === "") setAns("Error");
      else {
        setAns(math.evaluate(expression));
      }
    }
  };

  return (
    <div style={container}>
      <h1>React Calculator</h1>
      {/* <div style={input}>{expression}</div> */}
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <div style={output}>{ans}</div>
      <div style={buttonContainer} onClick={handleClick}>
        {arr.map((item, idx, arr) => {
          return <button style={buttonItem}>{item}</button>;
        })}
      </div>
    </div>
  );
}

export default App;
