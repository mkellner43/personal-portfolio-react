import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false);
  
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--primary-color",darkTheme ? "#000401" : "#B0B0B0");
    root?.style.setProperty("--secondary-color", darkTheme ? "#E5E8E8" : "#262833");
    root?.style.setProperty("--background-color", darkTheme ? '#4E545C' : '#F5F5F5')

  }, [darkTheme]);

  return (
    <>
    <Nav isOpen={isOpen} setIsOpen={setIsOpen} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    <Routes>
      <Route default path='/' element={<Home navIsOpen={isOpen} />} />
      <Route default path='/about' element={<About navIsOpen={isOpen} />} />
      <Route default path='/contact' element={<Contact navIsOpen={isOpen} />} />
    </Routes>
    </>
    
  );
}

export default App;
