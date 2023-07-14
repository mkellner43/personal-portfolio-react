import './style.scss'
import Pic from '../../Images/profilePic2.png';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';
import Projects from '../../components/Projects';
import Background from '../../components/Background';
import {open, closed} from '../../components/Variants/Variants';
import Arrow from './Arrow';
import Logo from '../../components/Logo';

const Home = ({navIsOpen}) => {
 return (
  <motion.section layout className='home-container'  animate={navIsOpen ? open : closed} initial={false}>
    <Background />
    <div className="flex-column">
          <Logo />
      <div className="flex">
        <div>
          <motion.h1 layout initial={{x: '30vw', y: '10vh'}} animate={{x: 0, y: 0, opacity: [0, 0.1, 1], transition: {delay: .5, duration: 1}}}>
            Matthew Kellner
          </motion.h1>
          <motion.h2 layout initial={{x: '30vw', y: '10vh'}} animate={{x: 0, y: 0, opacity: [0, 0.1, 1], transition: {delay: 1, duration: 1}}}>
            Full Stack Web Developer
          </motion.h2>
        </div>
        <motion.img
        layout 
          src={Pic} 
          initial={{opacity: 0, width: '100px'}} 
          animate={{opacity: 1, boxShadow: '0 0 5px var(--primary-color)', width: '80vw', transition: {duration: 2}}} 
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

