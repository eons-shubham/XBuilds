import React, { useState } from "react";

function App() {
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const [showName, setShowName] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowName(true);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <h1>Full Name Display</h1>
        <label>First Name:</label>
        <input
          type="text"
          value={first}
          onChange={(e) => {
            setfirst(e.target.value);
          }}
          required={true}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          value={last}
          onChange={(e) => {
            setlast(e.target.value);
          }}
          required={true}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {showName && (
        <p>
          Full Name: {first} {last}
        </p>
      )}
    </>
  );
}

export default App;

// Triggering Vercel Build 3
