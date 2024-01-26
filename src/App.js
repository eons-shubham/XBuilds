import React, { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [showName, setShowName] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowName(true);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <h1>Full Name Display</h1>

        <label htmlFor="first">First Name:</label>
        <input
          id="first"
          name="first"
          type="text"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          required={true}
        />
        <br />
        <label htmlFor="last">Last Name:</label>
        <input
          id="last"
          name="last"
          type="text"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          required={true}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {showName && (
        <p>
          Full Name: {firstname} {lastname}
        </p>
      )}
    </>
  );
}

export default App;

// Triggering Vercel Build 3
