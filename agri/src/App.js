import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Storage from './pages/Storage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route path='/Storage' element={<Storage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
