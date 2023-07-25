import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} setTheme={setTheme} theme={theme} />
      <Routes>
        <Route default path="/" element={<Home navIsOpen={isOpen} theme={theme} setTheme={setTheme} />} />
        <Route default path="/about" element={<About navIsOpen={isOpen} />} />
        <Route
          default
          path="/contact"
          element={<Contact navIsOpen={isOpen} />}
        />
      </Routes>
    </>
  );
}

export default App;
