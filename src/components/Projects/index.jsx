import './style.scss';
import memoryGame from '../../Images/memoryGame.png';
import myShop from '../../Images/myShop.png';
import cvBuilder from '../../Images/cvBuilder.png';
import weatherChecker from '../../Images/weatherChecker.png';
import ticTacToe from '../../Images/ticTacToe.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const photos = [
    {image: memoryGame, link: "https://mkellner43.github.io/memory-game/", code: 'https://github.com/mkellner43/memory-game'},
    {image: myShop, link: "https://mkellner43.github.io/shop_react/", code: 'https://github.com/mkellner43/shop_react'},
    {image: cvBuilder, link: "https://mkellner43.github.io/cv-project/", code: 'https://github.com/mkellner43/cv-project'},
    {image: weatherChecker, link: "https://mkellner43.github.io/weather_api/", code: 'https://github.com/mkellner43/weather_api'},
    {image: ticTacToe, link: "https://mkellner43.github.io/ticTacToeJs/", code: 'https://github.com/mkellner43/ticTacToeJs'}
  ]
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState()

  const handleClickLeft = () => {
    setDirection(1)
    setIndex(prevState => {
      if(prevState === 0) {
        return 4
      } else {
        return prevState - 1
      }
    })
  }

  const handleClickRight = () => {
    setDirection(-1)
    setIndex(prevState => {
      if(prevState === 4) {
        return 0
      } else {
        return prevState + 1
      }
    })
  }

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <div className='container'>
    <motion.section className="projects-wrapper" initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 2}}} viewport={{ amount: 0.2, once: true }}>
      <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}>
        <FontAwesomeIcon key={'left'} icon={faChevronCircleLeft} onClick={handleClickLeft} />
      </motion.div>
        <motion.a 
          href={photos[index].link}
          target="_blank" 
          rel="noopener noreferrer"
          > 
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={photos[index].image}
            variants={variants}
            custom={direction}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            alt="memory game"
            />
        </AnimatePresence>
          </motion.a>
        <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}>
          <FontAwesomeIcon key={'right'} icon={faChevronCircleRight} onClick={handleClickRight}/>
        </motion.div>
    </motion.section>
    <div className='btn-container'>
      <motion.a  
        className='btn' 
        href={photos[index].code} 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.90}}
      >
          View Code
      </motion.a >
    </div>
    </div>
  )
}

export default Projects;
