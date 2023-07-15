import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("darkTheme") === "true" ? true : false
  );
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty(
      "--primary-color",
      darkTheme ? "#000401" : "#B0B0B0"
    );
    root?.style.setProperty(
      "--secondary-color",
      darkTheme ? "#E5E8E8" : "#262833"
    );
    root?.style.setProperty(
      "--background-color",
      darkTheme ? "#4E545C" : "#F5F5F5"
    );
    localStorage.setItem("darkTheme", darkTheme);
  }, [darkTheme]);

  return (
    <>
      <Nav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
      <Routes>
        <Route default path="/" element={<Home navIsOpen={isOpen} />} />
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
