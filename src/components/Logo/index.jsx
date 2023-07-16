import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Logo = () => {
  const variants = {
    stateOneAnimate: {
      borderRadius: ["50%", "50%", "3%", "3%", "3%"],
      width: ["100px", "170px", "100px", "100px", "170px"],
      height: ["100px", "170px", "100px", "100px", "100px"],
      rotate: [0, 360, 360, 0, 0],
      transition: {
        duration: 1.5,
        times: [0, 0.2, 0.5, 0.7, 0.98, 1],
      },
    },
    stateTwoAnimate: {
      borderRadius: ["3%", "3%"],
      width: ["160px", "100px"],
      height: ["100px", "100px"],
      transition: {
        duration: 1.5,
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
      width: ["0px", "50px"],
      transition: { duration: 1, delay: 1,
        opacity: {delay: 1.75, duration: 2}
      },
    },
    stateTwoAnimate: {
      opacity: [1, 0],
      width: ["50px", "0px"],
      transition: { duration: 1,
        opacity: {duration: 0.2}
      },
    },
  };

  const [logo, setLogo] = useState("stateOneAnimate");

  useEffect(() => {
    setTimeout(() => {
      setLogo("stateTwoAnimate");
    }, 5000);
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

  return (
    <div
      className="text-teal-600 flex justify-center items-center top-20 absolute z-50"
      onClick={handleChange}
    >
      <motion.div
        variants={variants}
        animate={logo}
        layout
        className="absolute bg-blue-200 flex items-end justify-center border-gray-500 border-4"
      />

      <motion.div animate={logo} className="flex items-end justify-center">
        <motion.p key="1" className="text-4xl z-50">
          M
        </motion.p>
        <motion.p key="2" variants={nameVars} animate={logo} className="pb-1">
          atthew
        </motion.p>
      </motion.div>
      <motion.div animate={logo} className="flex items-end justify-center">
        <motion.p key="3" className="text-4xl z-50">
          K
        </motion.p>
        <motion.p key="4" variants={nameVars} animate={logo} className="pb-1">
          ellner
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Logo;

//find out why letters arent moving x and y
