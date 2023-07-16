import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const Logo = () => {
  const variants = {
    stateOneAnimate: {
      borderRadius: ["50%", "50%", "3%", "3%", "3%"],
      width: ["100px", "170px", "100px", "100px", "170px"],
      height: ["100px", "170px", "100px", "100px", "100px"],
      rotate: [0, 360, 360, 0, 0],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.5, 0.7, 0.98, 1],
      },
    },
    stateTwoAnimate: {
      borderRadius: ["3%", "3%"],
      width: ["160px", "100px"],
      height: ["100px", "100px"],
      transition: {
        duration: 1,
      },
    },
  };

  const afterVars = {
    stateOneAnimate: {
      inset: ["30px", "30px", "5px", "5px", "5px"],
      borderRadius: ["50%", "50%", "1%", "1%", "1%"],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.5, 0.7, 1],
      },
    },
    stateTwoAnimate: {
      inset: "5px",
      borderRadius: "1%",
      transition: {
        duration: 2,
      },
    },
  };

  const nameVars = {
    stateOneAnimate: {
      opacity: [0, 1],
      // display: ["none", "block"],
      transition: { delay: 2, duration: 1 },
    },
    stateTwoAnimate: {
      // display: "none",
      opacity: [1, 0],
    },
  };

  const mVar = {
    stateOneAnimate: {
      x: [40, 0],
      transition: {
        delay: 1.2,
        duration: 1,
      },
    },
    stateTwoAnimate: {
      x: [5, 40],
      transition: {
        duration: 1,
      },
    },
  };

  const kVar = {
    stateOneAnimate: {
      x: [-15, -5],
      transition: {
        delay: 1.5,
      },
    },
    stateTwoAnimate: {
      x: [-5, -15],
    },
  };

  const [logo, setLogo] = useState("stateOneAnimate");

  useEffect(() => {
    setTimeout(() => {
      setLogo("stateTwoAnimate");
    }, 3000);
  }, []);

  const handleChange = () => {
    setLogo((prevState) => {
      if (prevState === "stateOneAnimate") {
        return "stateTwoAnimate";
      } else {
        return "stateOneAnimate";
      }
    });
  };
console.log(logo)
  return (
    <div
      className="bg-black text-white flex justify-center items-center top-20 absolute z-50"
      onClick={handleChange}
    >
      <motion.div
        variants={variants}
        animate={logo}
        layout
        className="absolute bg-blue-500 flex items-end justify-center border-blue-950 border-4"
      />

      <motion.div variants={mVar} animate={logo} className="flex items-end justify-center">
        <AnimatePresence>
          <motion.span key="1" className="text-4xl">M</motion.span>
          <motion.span key="2" variants={nameVars} animate={logo} className="pr-2">
            atthew
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <motion.div variants={kVar} animate={logo} className="flex items-end justify-center">
        <AnimatePresence>
          <motion.span key="3" className="text-4xl">K
          </motion.span>
          <motion.span key="4" variants={nameVars} animate={logo}>
            ellner
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Logo;

//find out why letters arent moving x and y
