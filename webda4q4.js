import React, { useState } from "react";
import "./App.css";

function App() {
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");
  const [avg, setAvg] = useState("");
  const [grade, setGrade] = useState("");

  const calculateGrade = () => {
    const average = (Number(m1) + Number(m2) + Number(m3)) / 3;
    setAvg(average.toFixed(2));

    if (average >= 90) setGrade("A");
    else if (average >= 75) setGrade("B");
    else if (average >= 50) setGrade("C");
    else setGrade("F");
  };

  return (
    <div className="container">
      <h1>Grade Calculator</h1>

      <input type="number" placeholder="Subject 1" onChange={(e) => setM1(e.target.value)} />
      <input type="number" placeholder="Subject 2" onChange={(e) => setM2(e.target.value)} />
      <input type="number" placeholder="Subject 3" onChange={(e) => setM3(e.target.value)} />

      <button onClick={calculateGrade}>Calculate</button>

      <h2>Average: {avg}</h2>
      <h2>Grade: {grade}</h2>
    </div>
  );
}

export default App;
