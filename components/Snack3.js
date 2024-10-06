import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Snack3 = () => {
  return (
    <div>
      <h2>Gatorade</h2>
      <p>Stay hydrated!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack3;