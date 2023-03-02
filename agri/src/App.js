import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Ship from './pages/Ship';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/ship' element={<Ship/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
