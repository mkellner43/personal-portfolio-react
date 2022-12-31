import './style.scss';
import memoryGame from '../../Images/memoryGame.png';
import myShop from '../../Images/myShop.png';
import cvBuilder from '../../Images/cvBuilder.png';
import weatherChecker from '../../Images/weatherChecker.png';
import ticTacToe from '../../Images/ticTacToe.png';

import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <div className='projects-container'>
        <div>
          <a href="https://mkellner43.github.io/memory-game/" target="_blank" rel="noopener noreferrer">
            <motion.img whileInView={{opacity: 1, transition: {duration: 2}}} viewport={{ once: true, amount: 0.8 }} src={memoryGame} alt="memory game" />
          </a>
        </div>
        <div>
          <a href="https://mkellner43.github.io/shop_react/" target="_blank" rel="noopener noreferrer">
            <motion.img whileInView={{opacity: 1, transition: { duration: 1}}} viewport={{ once: true, amount: 0.8 }} src={myShop} alt="shop" />
          </a>
        </div>
        <div>
          <a href="https://mkellner43.github.io/cv-project/" target="_blank" rel="noopener noreferrer">
            <motion.img whileInView={{opacity: 1, transition: {duration: 2}}} viewport={{ once: true, amount: 0.8 }} src={cvBuilder} alt="cv builder" />
          </a>
        </div>
        <div>
          <a href="https://mkellner43.github.io/weather_api/" target="_blank" rel="noopener noreferrer">
            <motion.img whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{ once: true, amount: 0.8 }} src={weatherChecker} alt="weather checker" />
          </a>
        </div>
        <div>
          <a href="https://mkellner43.github.io/ticTacToeJs/" target="_blank" rel="noopener noreferrer">
            <motion.img whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{ once: true, amount: 0.8 }} src={ticTacToe} alt="weather checker" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects;