import './style.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Logo = () => {
  const variants = {
    stateOneInit: {

    },
    stateOneAnimate: {
      transition: {
        duration: 2,
        type: 'spring',
      }
    },
    stateTwo: {

    },
    stateThree: {

    }
  }
  const [logo, setLogo] = useState(variants.stateOneAnimate)


  return (
    <div className='logo-container'>
      <motion.div
      className='logo'
        variants={variants}
        animate={logo}
      >
      </motion.div>
    </div>
  )
}

export default Logo;