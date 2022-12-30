import './style.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faFileSignature, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Nav = ({isOpen, setIsOpen}) => {
  const variant = {
    initial: {
      opacity: 0,
      x: 100
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
      x: 100,
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
      x: 100,
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
      x: 100,
      transition: {
        type: 'spring',
        damping: 10
      }
    }
  }

  const transition = { duration: 2, yoyo: Infinity, ease: "easeInOut" }

  return (
    <>
      <motion.div className='hamburger' onClick={() => setIsOpen(!isOpen)} whileHover={{scale: 1.05}} whileTap={{scale: 0.90}}>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/>
      </motion.div>
      <AnimatePresence>
      { isOpen && 
        <motion.nav className='nav-container' variants={variant} animate='visible' initial='initial' exit='exit'>
          <Link to="/">
            <motion.p variants={item} whileHover={{scale: 1.15}} whileTap={{scale: 0.90}}>
              <FontAwesomeIcon icon={faHouse} style={{color: 'white'}}/>
            </motion.p>
          </Link>
          <Link to="/about">
            <motion.p variants={item} whileHover={{scale: 1.15}} whileTap={{scale: 0.90}}>
              <FontAwesomeIcon initial={{pathLength: 0}} animate={{pathLength: 1}} icon={faAddressCard} style={{color: 'white'}}/>
            </motion.p>
          </Link>
          <Link to='/contact'> 
            <motion.p variants={item} whileHover={{scale: 1.15}} whileTap={{scale: 0.90}}>
              <FontAwesomeIcon icon={faFileSignature} style={{color: 'white'}}/>
            </motion.p>
          </Link>
        </motion.nav>
      }
      </AnimatePresence>
      <motion.div animate={{x: -5, zIndex: 1, color: ['#000','#fff'], position:'absolute', transition: {duration: 1, repeat: Infinity, repeatType: 'reverse'}}}>
        <FontAwesomeIcon icon={faChevronLeft} style={{color: 'inherit', zIndex: 1, position:'absolute', left: 110, top: 20}}/>
      </motion.div>
      <motion.div animate={{x: -5, zIndex: 1, color: ['#000','#fff'], position:'absolute', transition: {duration: 1, delay: 0.1, repeat: Infinity, repeatType: 'reverse'}}}>
        <FontAwesomeIcon icon={faChevronLeft} style={{color: 'inherit', zIndex: 1, position:'absolute', left: 120, top: 20}}/>
      </motion.div>
      <motion.div animate={{x: -5, zIndex: 1, color: ['#000','#fff'], position:'absolute', transition: {duration: 1,delay: 0.2, repeat: Infinity, repeatType: 'reverse'}}}>
        <FontAwesomeIcon icon={faChevronLeft} style={{color: 'inherit', zIndex: 1, position:'absolute', left: 130, top: 20}}/>
      </motion.div>
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" height={20} width={20} style={{zIndex: 1, position: 'absolute', top: 50, left: 36}}>
        <motion.path 
          strokeLinecap="round"
          strokeWidth={20}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          fill="none"
          style={{rotate: 90}}
          transition={transition} stroke='#fff' d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        />
      </motion.svg>
    </>
  )
}

export default Nav;

// dynamic background created with framer motion would be sick af
// drawing SVG with a cool symbol or your name would be sick af
// add your best projects to view