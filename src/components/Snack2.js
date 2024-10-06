import React from "react";
import "./Snacks.css"
import { Link } from "react-router-dom";

const Snack2 = () => {
  return (
    <div className="snack-container">
      <div className="snack-card">
        <h2 className="snack-title">Fruit Snacks</h2>
        <p className="snack-description">Sweet and Fruity!</p>
        <Link to="/" className="back-link">Back to Vending Machine</Link>
      </div>
    </div>
  );
};


export default Snack2;