import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Footer from './components/Footer';


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    <Routes>
      <Route default path='/' element={<Home navIsOpen={isOpen} />} />
      <Route default path='/about' element={<About navIsOpen={isOpen} />} />
      <Route default path='/contact' element={<Contact navIsOpen={isOpen} />} />
    </Routes>
    {/* <Footer /> */}
    </>
    
  );
}

export default App;
