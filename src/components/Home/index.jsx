import './style.scss'
import Pic from '../../Images/profilePic2.png';
import { motion } from 'framer-motion';
import Footer from '../Footer';

const Home = ({navIsOpen}) => {
  const open = {
      x: 100,
      boxShadow: '0 0 8px black',
      width: 'calc(100% - 100px - 1rem)',
      height: 'calc(100% - 2rem)',
      marginTop: '1rem',
    }
  const closed = {
    x: 0,
    width: '100%',
    height: '100%',
    marginTop: '0rem',
    transition: {
      delay: 0.4,
    }
  }

 return (
  <motion.section className='home-container'  animate={navIsOpen ? open : closed} initial={false}>
    <div className="flex">
      <div>
        <motion.h1 animate={{x: -200, opacity: [0, 0.1, 1], transition: {delay: .5, duration: 1}}}>
          Matthew Kellner
        </motion.h1>
        <motion.h2 initial={{x: 100, y: 150}} animate={{x: -200, y: 0, opacity: [0, 0.1, 1], transition: {delay: 1, duration: 1}}}>
          Full Stack Web Developer
        </motion.h2>
      </div>
      <motion.img 
        src={Pic} 
        initial={{opacity: 0}} 
        animate={{opacity: 1, boxShadow: '0 0 20px', x: "25%", y: "0%", transition: {duration: 2}}} 
        whileHover={{rotate: 10, transition: {duration: 2}}} />
    </div>
    <Footer />
  </motion.section>
 )
}

export default Home;