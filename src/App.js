import React from "react";
import { useState } from "react";
import "./styles.css";

function App() {
  const [modalshow, setmodalshow] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    pno: "",
    date: "",
  });
  const handleClick = () => {
    setmodalshow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(profile.date) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else if (profile.pno.length < 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else {
      setProfile({
        name: "",
        email: "",
        pno: "",
        date: "",
      });
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
    console.log(profile);
  };

  const test = (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal-content") {
      setmodalshow(false);
    }
  };

  return (
    <div className="container">
      <h1>User Details Modal</h1>
      <button className="button" onClick={handleClick}>
        Open Form
      </button>
      {modalshow && (
        <div className="modal" onClick={test}>
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="inside">
              <h1>Fill Details</h1>
              <h2>Username:</h2>
              <input
                id="username"
                type="text"
                value={profile.name}
                onChange={handleChange}
                name="name"
                required
              />

              <h2>Email Address:</h2>
              <input
                id="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                name="email"
                required
              />

              <h2>Phone Number:</h2>
              <input
                id="phone"
                type="tel"
                value={profile.pno}
                onChange={handleChange}
                name="pno"
                required
              />

              <h2>Date of Birth:</h2>
              <input
                id="dob"
                type="date"
                value={profile.date}
                onChange={handleChange}
                name="date"
                required
              />

              <button className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
