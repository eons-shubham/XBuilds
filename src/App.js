import axios from "axios";
import { useEffect, useState } from "react";
import Flag from "./Flag";

function App() {
  const container = {
    display: "flex",
    flexWrap: "wrap",
    height: "100vh",
    justifyContent: "center",
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const APICall = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setData(res.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    APICall();
  }, []);

  return (
    <div style={container}>
      {data.map((value, index) => {
        return <Flag name={value.name.common} imageURL={value.flags.png} key={value.cca3}/>;
      })}
    </div>
  );
}

export default App;
