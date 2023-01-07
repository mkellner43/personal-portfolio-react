import './style.scss'
import Pic from '../../Images/profilePic2.png';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import Projects from '../Projects';
import Background from '../Background';
import {open, closed} from '../Variants/Variants';
import Arrow from './Arrow';
import Logo from '../Logo';

const Home = ({navIsOpen}) => {
 return (
  <motion.section layout className='home-container'  animate={navIsOpen ? open : closed} initial={false}>
    <Background />
    <div className="flex-column">
          <Logo />
      <div className="flex">
        <div>
          <motion.h1 initial={{x: '30vw', y: '10vh'}} animate={{x: 0, y: 0, opacity: [0, 0.1, 1], transition: {delay: .5, duration: 1}}}>
            Matthew Kellner
          </motion.h1>
          <motion.h2 initial={{x: '30vw', y: '10vh'}} animate={{x: 0, y: 0, opacity: [0, 0.1, 1], transition: {delay: 1, duration: 1}}}>
            Full Stack Web Developer
          </motion.h2>
        </div>
        <motion.img 
          src={Pic} 
          initial={{opacity: 0}} 
          animate={{opacity: 1, boxShadow: '0 0 20px', transition: {duration: 2}}} 
          whileHover={{scale: 1.1, transition: {duration: 2}}}
        />
      </div>
      <div className='svg-container'>
        <Arrow />
      </div>
    </div>
    <Projects />
    <Footer />
  </motion.section>
 )
}

export default Home;

