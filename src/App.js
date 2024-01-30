import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    onSearch(searchValue);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const WeatherDisplay = ({ city }) => {
  const [WeatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      async function api() {
        setLoading(true);
        try {
          const res = await axios.get(
            "https://api.weatherapi.com/v1/current.json",
            {
              params: {
                key: "3ed69500b5944503a9271959233011",
                q: city,
              },
            }
          );
          setWeatherData(res.data);
          setLoading(false);
        } catch (error) {
          console.log("Error", error);
          alert("Failed to fetch weather data");
        }
      }

      api();
    }
  }, [city]);

  return (
    <div className="weather-display">
      {loading && <p>Loading data...</p>}
      {!loading && WeatherData && (
        <div className="weather-cards">
          <WeatherCard
            title="Temperature"
            value={`${WeatherData.current.temp_c}°C`}
          />
          <WeatherCard
            title="Humidity"
            value={`${WeatherData.current.humidity}%`}
          />
          <WeatherCard
            title="Condition"
            value={`${WeatherData.current.condition.text}`}
          />
          <WeatherCard
            title="Wind Speed"
            value={`${WeatherData.current.wind_kph} kph`}
          />
        </div>
      )}
    </div>
  );
};

const WeatherCard = ({ title, value }) => {
  return (
    <div className="weather-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

function App() {
  const [city, setCity] = useState("");
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;
