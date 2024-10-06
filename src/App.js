import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./vendingmachine";
import Snack1 from "./components/Snack1";
import Snack2 from "./components/Snack2";
import Snack3 from "./components/Snack3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route exact path="/" element={<VendingMachine />} />

            <Route path="/snack1" element={<Snack1 />}/>
            <Route path="/snack2" element={<Snack2 />} />
            <Route path="/snack3" element={<Snack3 />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

// return (
//   <div className="App">
//   <Router>

//     <Routes>
//       <Route exact path="/" component={VendingMachine} />
//       <Route path="/snack1" component={Snack1} />
//       <Route path="/snack2" component={Snack2} />
//       <Route path="/snack3" component={Snack3} />
//     </Routes>
//   </div>
// </Router>

export default App;
