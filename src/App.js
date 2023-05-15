import './App.css';
import Navbar from './Navbar.js';
import Players from './components/Players';
import Titles from './components/Titles';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/titles" element={<Titles />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
