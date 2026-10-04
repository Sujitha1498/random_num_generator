import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  };

  return (
    <div className="app">

      <div className="generator-card">

        <div className="header">
          <div className="icon">?</div>

          <h1>Random Number</h1>

          <p>Generate a number between 1 and 100</p>
        </div>

        <div className="number-section">

          {number === null ? (
            <div className="placeholder">
              <span>?</span>
              <p>No number generated yet</p>
            </div>
          ) : (
            <div className="number-display">
              <span>{number}</span>
              <p>Random number generated</p>
            </div>
          )}

        </div>

        {number !== null && (
          <div className="range-info">
            <span>Range</span>
            <strong>1 - 100</strong>
          </div>
        )}

        <button className="generate-button" onClick={generateNumber}>
          Generate Random Number
        </button>

        <p className="tip">
          Click the button to generate a new number
        </p>

      </div>

    </div>
  );
}

export default App;