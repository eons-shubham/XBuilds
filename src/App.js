import React from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleSortByDate = () => {
    setData(
      [...data].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
    );
  };

  const handleSortByView = () => {
    setData(
      [...data].sort((a, b) => {
        return b.views - a.views;
      })
    );
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByView}>Sort by Views</button>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        <tbody>
          {data.map((item, index, data) => {
            return (
              <tr>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
