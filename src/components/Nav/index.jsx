import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressCard,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isOpen, setIsOpen, darkTheme, setDarkTheme }) => {
  const variant = {
    initial: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 24,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: [1, 0],
      x: -100,
      transition: {
        type: "spring",
        damping: 24,
        delay: 0.2,
        staggerChildren: -0.07,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };
  const item = {
    initial: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 24,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        type: "spring",
        damping: 24,
      },
    },
  };
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const changeTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-blue-500 fixed w-full top-0 h-[70px] z-10 px-4">
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          data-dark-theme={darkTheme}
          onClick={changeTheme}
          transition={spring}
          className={`flex items-center bg-white rounded-full w-12 h-6 px-1 ${
            darkTheme ? "justify-end" : "justify-start"
          }`}
        >
          <motion.span
            layout
            className={`w-4 h-4 bg-stone-500 rounded-full shadow-sm`}
          />
        </motion.button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={variant}
            animate="visible"
            initial="initial"
            exit="exit"
            className="fixed top-[70px] bg-blue-500 flex flex-col items-center justify-center z-10 w-20 p-4"
          >
            <Link to="/">
              <motion.p
                variants={item}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full m-2"
              >
                <FontAwesomeIcon icon={faHouse} />
              </motion.p>
            </Link>
            <Link to="/about">
              <motion.p
                variants={item}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full m-2"
              >
                <FontAwesomeIcon
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  icon={faAddressCard}
                />
              </motion.p>
            </Link>
            <Link to="/contact">
              <motion.p
                variants={item}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full m-2"
              >
                <FontAwesomeIcon icon={faFileSignature} />
              </motion.p>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
