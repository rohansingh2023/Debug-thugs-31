import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Storage from './pages/Storage';
import Footer from './components/Footer';
import Seller from './pages/Seller';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sell' element={<Seller/>}></Route>
        </Routes>
        <Routes>
          <Route path='/Storage' element={<Storage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
