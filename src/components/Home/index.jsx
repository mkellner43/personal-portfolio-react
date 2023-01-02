import './style.scss'
import Pic from '../../Images/profilePic2.png';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import Projects from '../Projects';

const Home = ({navIsOpen}) => {
  const open = {
      x: '5vw',
      width: 'calc(100% - 5.5vw)',
      height: 'calc(100% - 1vh)',
      marginTop: '0.5vh',
    }
  const closed = {
    x: 0,
    width: '100%',
    height: '100%',
    marginTop: '0rem',
    borderRadius: '0',
    transition: {
      delay: 0.4,
    }
  }
  const transition = { duration: 2, yoyo: Infinity, ease: "easeInOut" }

 return (
  <motion.section className='home-container'  animate={navIsOpen ? open : closed} initial={false}>
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
        whileHover={{rotate: 10, transition: {duration: 2}}} />
    </div>
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" height={40} width={40} style={{zIndex: 1, position: 'relative', top: '20vh', left: '48.5%'}}>
      <motion.path 
        strokeLinecap="round"
        strokeWidth={20}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        fill="none"
        style={{rotate: -90}}
        transition={transition} stroke='#fff' d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      />
    </motion.svg>
    <Projects />
    <Footer />
  </motion.section>
 )
}

export default Home;

// make footer appear with nav (:
// make arrow bounce when animation is drawn
// dynamic background to surround name and pic (:
// in about create cool animations to display what tech you know
