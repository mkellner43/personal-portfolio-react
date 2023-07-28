import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="flex w-screen justify-center items-center p-2 bg-blue-500 dark:bg-stone-700 min-h-[80px] relative">
      <motion.div className="flex max-w-md w-screen items-center justify-evenly text-2xl text-white">
        <motion.a
          whileHover={{ scale: 1.1, color: "#0072b1", backgroundColor: "#fff" }}
          href="https://linkedin.com/in/mkellner43/"
          target={"_blank"}
          rel="noreferrer"
          className="p-2 rounded-full h-10 w-10 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, color: "#333", backgroundColor: "#fff" }}
          href="https://github.com/mkellner43/"
          target={"_blank"}
          rel="noreferrer"
          className="p-2 rounded-full h-10 w-10 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faGithub} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, color: "#3b5998", backgroundColor: "#fff" }}
          href="https://facebook.com/matt.kellner1/"
          target={"_blank"}
          rel="noreferrer"
          className="p-2 rounded-full h-10 w-10 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;
