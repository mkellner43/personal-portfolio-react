import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';


function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route default path='/' element={<Home />} />
    </Routes>
    </>
    
  );
}

export default App;
