import './style.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import Hamburger from '../Hamburger';


const Nav = ({isOpen, setIsOpen}) => {

  const variant = {
    initial: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 24,
        staggerChildren: 0.07, 
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        type: 'spring',
        damping: 24,
        delay: 0.2,
        staggerChildren: -0.07,
        delayChildren: 0.2
      }
    }
  }
  const item = {
    initial: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 10
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        type: 'spring',
        damping: 10
      }
    }
  }

  return (
    <>
      <motion.div className='hamburger' onClick={() => setIsOpen(!isOpen)} whileHover={{scale: 1.05}} whileTap={{scale: 0.90}}>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/>
      </motion.div>
      <AnimatePresence>
      { isOpen && 
        <motion.nav className='nav-container' variants={variant} animate='visible' initial='initial' exit='exit'>
          <Link to="/">
            <motion.p variants={item} whileHover={{scale: 1.15}}>🏠</motion.p>
          </Link>
          <Link to="/about">
            <motion.p variants={item} whileHover={{scale: 1.15}}>👀</motion.p>
          </Link>
          <Link to='/contact'>
            <motion.p variants={item} whileHover={{scale: 1.15}}>😇</motion.p>
          </Link>
        </motion.nav>
      }
      </AnimatePresence>
    </>
  )
}

export default Nav;