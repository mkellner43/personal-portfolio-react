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
  
  // React useEffect hook that will fire up
  // when "darkTheme" changes
  useEffect(() => {
    // Accessing scss variable "--background-color"
    // and "--text-color" using plain JavaScript
    // and changing the same according to the state of "darkTheme"
    const root = document.documentElement;
    root?.style.setProperty(
      "--primary-color",
      darkTheme ? "#1d1e21" : "#d9dddc"
    );
    root?.style.setProperty("--secondary-color", darkTheme ? "#fff" : "#262833");
    root?.style.setProperty("--background-color", darkTheme ? '#48494B' : '#fff')

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
