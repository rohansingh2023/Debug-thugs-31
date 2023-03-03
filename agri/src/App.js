import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Buy from "./pages/Buy";
import Seller from './pages/Seller';
import Storage from "./pages/Storage"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sell' element={<Seller/>}></Route>
          <Route path="/buy" element={<Buy />}></Route>
          <Route path='/storage' element={<Storage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
