import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const container = {
    display: "flex",
    justifyContent: "center",
  };
  const overall = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const input = {
    height: "30px",
    width: "auto",
    margin: "0.5rem",
    borderRadius: "2px",
  };
  const result = {
    marginTop: "24px",
    fontSize: "18px",
  };
  const highlight = {
    fontWeight: "bold",
    fontSize: "24px",
  };

  const fade = {
    color: "#888",
  };

  const [country, setCountry] = useState([]);
  const [currentCountry, setCurrentCountry] = useState("");

  const [state, setState] = useState([]);
  const [currentState, setCurrentState] = useState("");

  const [city, setCity] = useState([]);
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    async function APICall() {
      try {
        const res = await axios.get(
          "https://crio-location-selector.onrender.com/countries"
        );
        setCountry(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    APICall();
  }, []);

  useEffect(() => {
    async function APICall() {
      try {
        const res = await axios.get(
          `https://crio-location-selector.onrender.com/country=${currentCountry}/states`
        );
        setState(res.data);
        setCurrentState("");
        setCurrentCity("");
        setCity([]);
      } catch (error) {
        console.log("Error", error);
      }
    }

    if (currentCountry !== "") {
      APICall();
    }
  }, [currentCountry]);

  useEffect(() => {
    async function APICall() {
      try {
        const res = await axios.get(
          ` https://crio-location-selector.onrender.com/country=${currentCountry}/state=${currentState}/cities`
        );
        setCity(res.data);
        setCurrentCity("");
      } catch (error) {
        console.log("Error", error);
      }
    }
    if (currentCountry && currentState) {
      APICall();
    }
  }, [currentCountry, currentState]);

  return (
    <div style={overall}>
      <h1>Select Location</h1>
      <div style={container}>
        <select
          style={input}
          value={currentCountry}
          onChange={(e) => setCurrentCountry(e.target.value)}
        >
          <option disabled={true} value="">
            Select Country
          </option>
          {country.map((item, idx, country) => {
            return <option value={item}>{item}</option>;
          })}
        </select>

        <select
          style={input}
          value={currentState}
          onChange={(e) => setCurrentState(e.target.value)}
        >
          <option disabled={true} value="">
            Select State
          </option>
          {state.map((item, idx, state) => {
            return <option value={item}>{item}</option>;
          })}
        </select>

        <select
          style={input}
          value={currentCity}
          onChange={(e) => setCurrentCity(e.target.value)}
        >
          <option disabled={true} value="">
            Select City
          </option>
          {city.map((item, idx, city) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      {currentCity && (
        <h2 style={result}>
          You selected <span style={highlight}>{currentCity},</span>
          <span style={fade}>
            {" "}
            {currentState}, {currentCountry}
          </span>
        </h2>
      )}
    </div>
  );
}

export default App;
