import memoryGame from "../../Images/memoryGame.png";
import myShop from "../../Images/Screenshot 2023-01-31 at 6.30.08 PM.png";
import cvBuilder from "../../Images/cvBuilder.png";
import weatherChecker from "../../Images/weatherChecker.png";
import ticTacToe from "../../Images/ticTacToe.png";
import toDoList from "../../Images/toDoList.png";
import restaurant from "../../Images/restaurant.png";
import waldo from "../../Images/Screenshot 2023-02-01 at 3.24.41 PM.png";
import mattBook from "../../Images/mattBook.png";

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
      image: mattBook,
      link: "https://mattbook-frontend.onrender.com",
      code: "https://github.com/mkellner43/front-end-mb/tree/main",
      backend: "https://github.com/mkellner43/back-end-mb/tree/main",
    },
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
        return 8;
      } else {
        return prevState - 1;
      }
    });
  };

  const handleClickRight = () => {
    setDirection(-1);
    setIndex((prevState) => {
      if (prevState === 8) {
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
      };
    },
  };

  return (
    <motion.section className="w-screen flex flex-col items-center justify-center bg-inherit text-inherit pb-10">
      <h1 className="text-5xl text-center font-nunito">Projects</h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        viewport={{ amount: 0.2, once: true }}
        className="flex items-center my-10 relative max-w-7xl"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="z-10 text-2xl h-full absolute left-2 w-12 flex justify-center items-center drop-shadow-lg"
          onClick={handleClickLeft}
        >
          <motion.span className="absolute dark:bg-black bg-white w-4 h-4 rounded-full" />
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            onClick={handleClickLeft}
            className="absolute text-4xl"
          />
        </motion.div>
        <AnimatePresence initial={false}>
          <motion.a
            href={photos[index].link}
            target="_blank"
            rel="noopener noreferrer"
            className="select-none"
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
              className="object-cover rounded-lg shadow-xl w-96 h-96 sm:w-full sm:h-auto sm:aspect-square sm:max-h-[70vh]"
            />
          </motion.a>
        </AnimatePresence>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="z-10 text-2xl absolute h-full right-2 w-12 flex justify-center items-center drop-shadow-lg"
          onClick={handleClickRight}
        >
          <motion.span className="absolute  w-4 h-4 rounded-full dark:bg-black bg-white" />
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            onClick={handleClickRight}
            className="absolute text-4xl"
          />
        </motion.div>
      </motion.div>
      {photos[index].backend ? (
        <div className="flex justify-evenly items-center min-w-[300px] select-none">
          <motion.a
            href={photos[index].code}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="text-lg font-nunito bg-blue-500 p-2 rounded-full"
          >
            Frontend
          </motion.a>
          <motion.a
            href={photos[index].backend}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="text-lg font-nunito bg-blue-500 p-2 rounded-full"
          >
            Backend
          </motion.a>
        </div>
      ) : (
        <motion.a
          href={photos[index].code}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="text-lg font-nunito bg-blue-500 p-2 rounded-full select-none"
        >
          View Code
        </motion.a>
      )}
    </motion.section>
  );
};

export default Projects;
