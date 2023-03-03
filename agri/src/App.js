import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/buy" element={<Buy />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
