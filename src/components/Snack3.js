import React from "react";
import "./Snacks.css"
import { Link } from "react-router-dom";

const Snack3 = () => {
  return (
    <div className="snack-container">
      <div className="snack-card">
        <h2 className="snack-title">Gatorade</h2>
        <p className="snack-description">Fruit punch flavor for hydration</p>
        <Link to="/" className="back-link">Back to Vending Machine</Link>
      </div>
    </div>
  );
};


export default Snack3;