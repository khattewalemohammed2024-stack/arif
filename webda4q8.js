import React, { useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);

  const searchCountry = async () => {
    const url = `https://restcountries.com/v3.1/name/${country}`;
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  };

  return (
    <div className="container">
      <h1>Country Explorer</h1>

      <input
        type="text"
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button onClick={searchCountry}>Search</button>

      <div className="grid">
        {data.map((c, index) => (
          <div className="card" key={index}>
            <img src={c.flags.png} alt="flag" />
            <h3>{c.name.common}</h3>
            <p>Capital: {c.capital?.[0]}</p>
            <p>Population: {c.population}</p>
            <p>Region: {c.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
