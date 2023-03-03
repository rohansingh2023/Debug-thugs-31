import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Buy from "./pages/Buy";
import Payment from "./pages/Payment";
import Seller from "./pages/Seller";
import Storage from "./pages/Storage";
import Navbar from "./components/Navbar";
import Ship from "./pages/Ship";
import FeedbackForm from "./pages/Feedback";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sell" element={<Seller />}></Route>
          <Route path="/buy" element={<Buy />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/storage" element={<Storage />}></Route>
          <Route path="/shipping" element={<Ship />}></Route>
          <Route path="/feedback" element={<FeedbackForm />}></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
