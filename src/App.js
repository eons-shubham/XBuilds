import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

function App() {
  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "arial, sans-serif",
  };

  const listElement = {
    width: "100%",
    backgroundColor: "#009879",
    border: "none",
    borderCollapse: "collapse",
  };

  const heading = {
    textAlign: "left",
    color: "white",
  };

  const pageSection = {
    backgroundColor: "#009879",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    color: "white",
  };

  const buttonCont = {
    backgroundColor: "#009879",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    color: "white",
    border: "none",
  };

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const maxlimit = useRef();

  useEffect(() => {
    async function API() {
      try {
        const res = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        setData(res.data);
        maxlimit.current = Math.ceil(res.data.length / 10);
      } catch (err) {
        console.log("Error", err);
        window.alert("failed to fetch data");
      }
    }
    API();
  }, []);

  return (
    <div style={container}>
      <h1>Employee Data Table</h1>
      <table style={listElement}>
        <tr style={heading}>
          <th style={{ padding: "10px" }}>ID</th>
          <th style={{ padding: "10px" }}>Name</th>
          <th style={{ padding: "10px" }}>Email</th>
          <th style={{ padding: "10px" }}>Role</th>
        </tr>
        <tbody>
          {data.slice((page - 1) * 10, page * 10).map((item, index, data) => {
            return (
              <tr
                style={{
                  backgroundColor: "white",
                  border: "none",
                }}
              >
                <td style={{ padding: "10px" }}>{item.id}</td>
                <td style={{ padding: "10px" }}>{item.name}</td>
                <td style={{ padding: "10px" }}>{item.email}</td>
                <td style={{ padding: "10px" }}>{item.role}</td>
              </tr>
            );
          })}
        </tbody>
        <div style={{ height: "3px", backgroundColor: "#009879" }} />
      </table>
      <div>
        <button
          onClick={() =>
            setPage((prev) => {
              return Math.max(1, prev - 1);
            })
          }
          style={buttonCont}
        >
          Previous
        </button>
        <span style={pageSection}>{page}</span>
        <button
          onClick={() =>
            setPage((prev) => {
              const nextPage = prev + 1;
              return nextPage <= maxlimit.current ? nextPage : prev;
            })
          }
          style={buttonCont}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
