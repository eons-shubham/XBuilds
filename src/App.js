import React from "react";
import { useState } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [meaning, setMeaning] = useState("");

  const dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleClick = (e) => {
    let foundMeaning = "";
    for (let i = 0; i < dict.length; i++) {
      if (dict[i].word.toLowerCase() === keyword.toLowerCase()) {
        foundMeaning = dict[i].meaning;
        setMeaning(dict[i].meaning);
      }
    }
    if (foundMeaning === "") {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <h3>Definition:</h3>
      {meaning && <p>{meaning}</p>}
    </div>
  );
}

export default App;
