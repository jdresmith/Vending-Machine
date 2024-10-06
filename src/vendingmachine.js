import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

// const VendingMachine = () => {
//   return (
//     <div>
//       <h1>Welcome to the Vending Machine!</h1>
//       <ul>
//         <li><Link to="/snack1">Snack 1</Link></li>
//         <li><Link to="/snack2">Snack 2</Link></li>
//         <li><Link to="/snack3">Snack 3</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default VendingMachine;

const VendingMachine = () => {
  return (
    <div className="vending-machine">
      <h1 className="machine-title">Welcome to the Vending Machine!</h1>
      <ul className="snack-list">
        <li className="snack-item">
          <Link to="/snack1">Snack 1</Link>
        </li>
        <li className="snack-item">
          <Link to="/snack2">Snack 2</Link>
        </li>
        <li className="snack-item">
          <Link to="/snack3">Snack 3</Link>
        </li>
      </ul>
      
    </div>
  );
};

export default VendingMachine;

