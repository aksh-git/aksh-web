import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Routes, Route, useLocation } from "react-router-dom";

import Project from './components/Project';
import BottomNav from './components/BottomNav';
function App() {

  const location = useLocation();
  let activePath = location.pathname;

  return (
    <div className="App">
      <header className="App-header">
        <Navbar aPath={activePath} />
      </header>
      <div className='main-content hidescrollbar'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/projects" element={<Project /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={<Contact /> } />
        </Routes>
      </div>
      <div className='bottom-nav'>
        <BottomNav aPath={activePath} />
      </div>
    </div>
  );
}

export default App;
