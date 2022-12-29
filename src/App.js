import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    <Routes>
      <Route default path='/' element={<Home />} />
      <Route default path='/about' element={<About />} />
      {/* <Route default path='/contact' element={<Contact />} /> */}
    </Routes>
    </>
    
  );
}

export default App;
