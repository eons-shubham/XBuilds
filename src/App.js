import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [suggest, setSuggest] = useState("");

  const handleInputChange = (e) => {
    const curr = e.target.value;
    setText(e.target.value);

    const customDictionary = {
      teh: "the",
      wrok: "work",
      fot: "for",
      exampl: "example",
    };

    const incorrect = curr.split(" ");
    const correct = incorrect.map((item, index, incorrect) => {
      return customDictionary[item.toLowerCase()] || item;
    });

    const firstCorrection = correct.find(
      (item, index, correct) => item !== incorrect[index]
    );
    setSuggest(firstCorrection || "");
  };
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        rows={5}
        cols={40}
        placeholder="Enter text..."
        value={text}
        onChange={handleInputChange}
      />
      {suggest && (
        <p>
          Did you mean: <strong>{suggest}?</strong>
        </p>
      )}
    </div>
  );
}

export default App;
