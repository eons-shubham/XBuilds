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
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleClick}>
        <label htmlFor="firstname">First Name:</label>
        <input
          id="firstname"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          required={true}
        />
        <br />
        <label htmlFor="lastname">Last Name:</label>
        <input
          id="lastname"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          required={true}
        />
        <br />
        <button>Submit</button>
        {showName && (
          <p>
            Full Name: {firstname} {lastname}
          </p>
        )}
      </form>
    </div>
  );
}

export default App;

// Triggering Vercel Build 2