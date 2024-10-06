import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

// const Snack1 = () => {
//   return (
//     <div>
//       <h2>Doritos</h2>
//       <p>Cheesy and crunchy!</p>
//       <Link to="/">Back to Vending Machine</Link>
//     </div>
//   );
// };

const Snack1 = () => {
  return (
    <div className="snack-container">
      <div className="snack-card">
        <h2 className="snack-title">Doritos</h2>
        <p className="snack-description">Cheesy and crunchy!</p>
        <Link to="/" className="back-link">Back to Vending Machine</Link>
      </div>
    </div>
  );
};
export default Snack1;