import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Typography } from "@mui/material";
import { Typewriter } from "../Typewriter";

const Projects = ({ photos }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    console.log("called");
    setImageIndex((index) => {
      console.log(index);
      if (index === photos.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    console.log("called");
    setImageIndex((index) => {
      console.log(index);
      if (index === 0) return photos.length - 1;
      return index - 1;
    });
  };

  return (
    <motion.section className="w-full max-w-2xl flex flex-col items-center justify-center bg-inherit text-inherit mb-20">
      <Typewriter
        text="Projects"
        variant="h3"
        component={"h3"}
        classes={"w-full justify-self-start"}
      />
      <motion.div className="flex items-center justify-center max-w-2xl py-4">
        <div className="flex overflow-hidden rounded-lg relative">
          <motion.div
            className="z-10 text-2xl absolute left-0 w-12 p-2 flex justify-center items-center h-full transition ease-in-out duration-500 hover:bg-opacity-10 hover:bg-black"
            onClick={showPrevImage}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-4xl drop-shadow-[0_0_10px_black] transition-transform duration-300 ease-in-out hover:translate-x-[-5px]"
            />
          </motion.div>
          {photos.map((photo, index) => (
            <img
              src={photo.image[0]}
              key={photo.link}
              alt={photo.alt}
              aria-hidden={imageIndex !== index}
              className="object-cover shadow-xl aspect-square slider-img select-none transition-translate duration-300 ease-in-out;"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
          <motion.div
            className="z-10 text-2xl absolute h-full right-0 p-2 w-12 flex justify-center items-center transition ease-in-out duration-500 hover:bg-opacity-10 hover:bg-black"
            onClick={showNextImage}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="absolute text-4xl drop-shadow-[0_0_10px_black] transition-transform duration-300 ease-in-out hover:translate-x-[5px]"
            />
          </motion.div>
        </div>
      </motion.div>
      {photos[imageIndex].backend ? (
        <div className="flex">
          <Button
            variant="contained"
            className="dark:bg-stone-700 dark:hover:bg-stone-600 bg-blue-500 hover:bg-blue-400 mx-1"
            href={photos[imageIndex].code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend
          </Button>
          <Button
            variant="contained"
            className="dark:bg-stone-700 dark:hover:bg-stone-500 bg-blue-500 hover:bg-blue-400 mx-1"
            href={photos[imageIndex].backend}
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend
          </Button>
          <Button
            variant="contained"
            className="dark:bg-stone-700 dark:hover:bg-stone-600 bg-blue-500 hover:bg-blue-400 mx-1"
            href={photos[imageIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </Button>
        </div>
      ) : (
        <div className="flex">
          <Button
            variant="contained"
            className="dark:bg-stone-700 dark:hover:bg-stone-600 bg-blue-500 hover:bg-blue-400 mx-1"
            href={photos[imageIndex].code}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </Button>
          <Button
            variant="contained"
            className="dark:bg-stone-700 dark:hover:bg-stone-600 bg-blue-500 hover:bg-blue-400 mx-1"
            href={photos[imageIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </Button>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
