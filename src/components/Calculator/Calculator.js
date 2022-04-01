import React from "react";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="container">
      <h1>Simple Calculator</h1>
      <h4>Please give the calculative number</h4>
      <input type="number" />
      <br /> <br />
      <button>Submit</button>
      <br />
      <br />
      <h3>Result: {0}</h3>
    </div>
  );
};

export default Calculator;
