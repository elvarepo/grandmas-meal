import "@stripe/stripe-js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Payment from "./components/Payment";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    if (getUser) {
      setUser(true);
    }
  });
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/payment' element={<Payment/>} >
          </Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




//   return (
//     <Router>
//       <div className="app">
//         {user && <Header />}
//         <Routes>
//           <Route path="/checkout" element={<Checkout />}></Route>

//           <Route path="/login" element={<Login />}></Route>

//           <Route path="/" element={<Home />}></Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
