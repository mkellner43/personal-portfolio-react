import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Logo = () => {
  const variants = {
    stateOneAnimate: {
      borderRadius: ["50%", "50%", "3%", "3%", "3%"],
      width: ["60px", "100px", "60px", "60px", "180px"],
      height: ["60px", "100px", "60px", "60px", "60px"],
      rotate: [0, 360, 360, 0, 0],
      transition: {
        duration: 1.5,
        times: [0, 0.2, 0.5, 0.7, 0.98, 1],
      },
    },
    stateTwoAnimate: {
      borderRadius: ["3%", "3%"],
      width: ["180px", "60px"],
      height: ["60px", "60px"],
      transition: {
        duration: 1.5,
      },
    },
  };

  const nameVars = {
    stateOneAnimate: {
      opacity: [0, 1],
      width: ["0px", "50px"],
      transition: {
        duration: 1,
        delay: 1,
        opacity: { delay: 1.75, duration: 2 },
      },
    },
    stateTwoAnimate: {
      opacity: [1, 0],
      width: ["50px", "0px"],
      transition: { duration: 1, opacity: { duration: 0.2 } },
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
      className={
        "text-blue-500 dark:text-white flex justify-center items-center relative h-[100px] w-[100px]"
      }
      onClick={handleChange}
    >
      <motion.div
        variants={variants}
        animate={logo}
        layout
        className="absolute bg-blue-200 dark:bg-stone-400 flex items-end justify-center border-blue-500 dark:border-stone-700 border-4 z-40"
      />

      <motion.div animate={logo} className="flex items-end justify-center">
        <motion.p key="1" className="text-4xl z-40">
          M
        </motion.p>
        <motion.p
          key="2"
          variants={nameVars}
          animate={logo}
          className="pb-1 z-40"
        >
          atthew
        </motion.p>
      </motion.div>
      <motion.div animate={logo} className="flex items-end justify-center">
        <motion.p key="3" className={`text-4xl z-40`}>
          K
        </motion.p>
        <motion.p
          key="4"
          variants={nameVars}
          animate={logo}
          className="pb-1 z-40"
        >
          ellner
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Logo;
