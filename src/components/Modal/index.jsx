import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faXmark,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import Check from "./Check";

const Modal = ({ sent, sendError, setSent, setSend, setError }) => {
  const handleClick = () => {
    setSent(false);
    setSend(false);
    setError(false);
  };
  function removeModal() {
    setTimeout(() => {
      setSend(false);
      setSent(false);
      setError(false);
    }, 2000);
  }

  if (sent) {
    removeModal();
  }

  const vars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  return (
    <div>
      <motion.div
        variants={vars}
        animate="animate"
        initial="initial"
        exit="initial"
        className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex flex-col justify-center items-center z-50"
      >
        {!sent && (
          <>
            <h1 className="text-4xl">Sending</h1>
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin loader text-4xl"
            />
          </>
        )}
        {sent && !sendError && (
          <>
            <motion.button
              whileHover={{
                color: "#fff",
                scale: 1.1,
                backgroundColor: "#FF0000",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClick}
              className="absolute top-20 right-5"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-xl text-red-500"
              />
            </motion.button>
            <h1 className="text-4xl">Message Sent!</h1>
            <Check />
          </>
        )}
        {sent && sendError && (
          <>
            <motion.button
              whileHover={{
                color: "#fff",
                scale: 1.1,
                backgroundColor: "#FF0000",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faXmark} />
            </motion.button>
            <h1>Message Error</h1>
            <FontAwesomeIcon icon={faSkullCrossbones} />
            <p>{sendError}</p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
