import memoryGame from "../../Images/memoryGame.png";
import myShop from "../../Images/Screenshot 2023-01-31 at 6.30.08 PM.png";
import cvBuilder from "../../Images/cvBuilder.png";
import weatherChecker from "../../Images/weatherChecker.png";
import ticTacToe from "../../Images/ticTacToe.png";
import toDoList from "../../Images/toDoList.png";
import restaurant from "../../Images/restaurant.png";
import waldo from "../../Images/Screenshot 2023-02-01 at 3.24.41 PM.png";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const photos = [
    {
      image: weatherChecker,
      link: "https://mkellner43.github.io/weather_api/",
      code: "https://github.com/mkellner43/weather_api",
    },
    {
      image: memoryGame,
      link: "https://mkellner43.github.io/memory-game/",
      code: "https://github.com/mkellner43/memory-game",
    },
    {
      image: myShop,
      link: "https://mkellner43.github.io/shop_react/",
      code: "https://github.com/mkellner43/shop_react",
    },
    {
      image: cvBuilder,
      link: "https://mkellner43.github.io/cv-project/",
      code: "https://github.com/mkellner43/cv-project",
    },
    {
      image: ticTacToe,
      link: "https://mkellner43.github.io/ticTacToeJs/",
      code: "https://github.com/mkellner43/ticTacToeJs",
    },
    {
      image: toDoList,
      link: "https://mkellner43.github.io/toDoListJS/",
      code: "https://github.com/mkellner43/toDoListJs",
    },
    {
      image: restaurant,
      link: "https://mkellner43.github.io/restaurant_page/",
      code: "https://github.com/mkellner43/restaurant_page",
    },
    {
      image: waldo,
      link: "https://mkellner43.github.io/wheres_waldo_frontend/",
      code: "https://github.com/mkellner43/wheres_waldo_frontend",
    },
  ];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState();

  const handleClickLeft = () => {
    setDirection(1);
    setIndex((prevState) => {
      if (prevState === 0) {
        return 7;
      } else {
        return prevState - 1;
      }
    });
  };

  const handleClickRight = () => {
    setDirection(-1);
    setIndex((prevState) => {
      if (prevState === 7) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        zIndex: 0,
      };
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      viewport={{ amount: 0.2, once: true }}
      className="flex flex-col items-center justify-center bg-primary-color text-secondary-color"
    >
      <h1 className="text-5xl text-center font-nunito">Projects</h1>
      <motion.div className="flex items-center justify-center p-4 mt-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={"left"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="z-10 text-2xl mr-2"
          >
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              onClick={handleClickLeft}
              style={{ color: "var(--secondary-color)" }}
            />
          </motion.div>
          <motion.a
            href={photos[index].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              layout
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              key={index}
              src={photos[index].image}
              alt="memory game"
              className="h-96 w-96 object-cover rounded-lg shadow-xl"
            />
          </motion.a>
          <motion.div
            key={"right"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="z-10 text-2xl ml-2"
          >
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              onClick={handleClickRight}
              style={{ color: "var(--secondary-color)" }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.a
        key={"right"}
        href={photos[index].code}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="text-lg font-nunito bg-blue-500 p-2 rounded-full"
      >
        View Code
      </motion.a>
    </motion.section>
  );
};

export default Projects;
//add wheres waldo to projects and maybe remove slide animate as it is choppy af
