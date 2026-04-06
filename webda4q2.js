import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSub = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div className="container">
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Subtract</button>
      </div>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
