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
      x: 100,
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
      opacity: 0,
      x: 100,
      transition: {
        type: "spring",
        damping: 24,
        delay: 0.2,
        staggerChildren: -0.07,
        delayChildren: 0.2,
      },
    },
  };
  const item = {
    initial: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        type: "spring",
        damping: 10,
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
      <motion.div>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={variant}
            animate="visible"
            initial="initial"
            exit="exit"
          >
            <motion.div>
              <Link to="/">
                <motion.p
                  variants={item}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faHouse} />
                </motion.p>
              </Link>
              <Link to="/about">
                <motion.p
                  variants={item}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
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
                >
                  <FontAwesomeIcon icon={faFileSignature} />
                </motion.p>
              </Link>
            </motion.div>
            <motion.button
              variants={item}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              data-dark-theme={darkTheme}
              onClick={changeTheme}
              transition={spring}
            >
              <motion.span layout></motion.span>
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
