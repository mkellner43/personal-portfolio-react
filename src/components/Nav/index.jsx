import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger";
import { useEffect, useRef } from "react";
import { Button, Typography } from "@mui/material";

const Nav = ({ isOpen, setIsOpen, theme, setTheme }) => {
  const dropdown = useRef(null);
  const ham = useRef(null);
  const variant = {
    initial: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
  };
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 400,
  };

  const changeTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  const closeDropdown = (e) => {
    if (
      dropdown.current &&
      !dropdown.current.contains(e.target) &&
      !ham.current.contains(e.target)
    )
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <>
      <motion.nav className="fixed top-0 w-full flex items-center justify-between bg-blue-500 dark:bg-stone-700 h-[70px] px-4 z-50">
        <motion.div ref={ham}>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={changeTheme}
          className={`flex bg-white rounded-full w-12 h-6 px-1 items-center`}
          aria-label="dark mode toggle"
        >
          <motion.span
            initial={{ x: 0 }}
            animate={
              theme === "dark"
                ? {
                    x: 0,
                  }
                : {
                    x: 24,
                  }
            }
            transition={spring}
            className={` w-4 h-4 bg-black rounded-full`}
          />
        </motion.button>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdown}
            variants={variant}
            animate="visible"
            initial="initial"
            exit="exit"
            className="fixed top-[70px] bg-slate-200 dark:bg-stone-700 dark:text-slate-200 flex flex-col items-center h-screen w-screen z-50 gap-10 pt-[5vh] overflow-hidden"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="w-full">
              <Button className="w-full text-inherit">
                <Typography variant="h2" component="h1">
                  Home
                </Typography>
              </Button>
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <Button className="w-full text-inherit">
                <Typography variant="h2" component="h1">
                  About
                </Typography>
              </Button>
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <Button className="w-full text-inherit">
                <Typography variant="h2" component="h1">
                  Contact me
                </Typography>
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
//fix line in nav bar ugh
