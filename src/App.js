import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Flag from "./Flag";

function App() {
  const contBody = {
    display: "flex",
    flexWrap: "wrap",
    height: "100vh",
    justifyContent: "center",
  };

  const overall = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const timerId = useRef(null);
  const cacheData = useRef([]);

  useEffect(() => {
    const APICall = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setData(res.data);
        cacheData.current = res.data;
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    APICall();
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    let filterData = cacheData.current.filter((item, idx, data) => {
      return item.name.common.toLowerCase().includes(keyword.toLowerCase());
    });
    setData(filterData);
  }, [keyword]);

  return (
    <div style={overall}>
      <input
        type="text"
        value={keyword}
        style={{
          width: "50vw",
          height: "1.5rem",
          padding: "5px",
          borderRadius: "5px",
        }}
        placeholder="Search for countries"
        onChange={handleChange}
      />
      <div style={contBody}>
        {data.map((value, index) => {
          return (
            <Flag
              name={value.name.common}
              imageURL={value.flags.png}
              key={value.cca3}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
