import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Snack2 = () => {
  return (
    <div>
      <h2>Sour Patch Kids</h2>
      <p>Sour, Sweet, Gone!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack2;