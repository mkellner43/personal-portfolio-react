import './style.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Logo = () => {
  const variants = {
    stateOneAnimate: {
      borderRadius: '50%',
      width: ['100px','150px', '100px'],
      height: ['100px','150px', '100px'],
      rotate: '1turn',
      transition: {
        duration: 1,
        type: 'spring',
      }
    },
    stateTwoAnimate: {
      borderRadius: '5%',
      width: '150px',
      height: '100px',
        transition: {
        duration: 1,
        width: {duration: 1, delay: 1},
        type: 'spring',
      }
    },
    stateThreeAnimate: {
      width: ['150px', '100px'],
      height: '100px',
      borderRadius: '5%',
      transition: {
        duration: 1,
        transform: {duration: 0.2, delay: 1},
        type: 'spring',
      }
    }
  }

  const afterVars = {
    stateOneAnimate: {
      inset: ['30px','5px'],
      transition: {
        type: 'spring',
        duration: 1
      }
    },
    stateTwoAnimate: {
      inset: '5px',
      borderRadius: '5%',
      transition: {
        type: 'spring',
        duration: 2
      }
    },
    stateThreeAnimate: {
      inset: '5px',
      borderRadius: '5%',
      transition: {
        type: 'spring',
        duration: 2,
        transform: {duration: 1}
      }
    }
  }

  const beforeVars = {
    stateOneAnimate: {
      width: '250px',
      height: '250px',
      transition: {
        duration: 1,
        type: 'spring',
      }
    },
    stateTwoAnimate: {
      width: '250px',
      height: '250px',
      transition: {
        duration: 1,
        type: 'spring',
      }
    },
    stateThreeAnimate: {
      width: '250px',
      height: '250px',
      transition: {
        duration: 1,
        type: 'spring',
      }
    }
  }

  const counterRotate = {
    stateTwoAnimate: {
      // transform: 'rotate(-180deg)',
      transition: {
        duration: 2,
        type: 'spring',
      }
    },
    stateThreeAnimate: {
      // transform: 'rotate(0deg)',
      transition: {
        duration: 2,
        type: 'spring',
      }
    }
  }

  const [logo, setLogo] = useState('stateOneAnimate')

  const handleChange = () => {
    setLogo(prevState => {
      if(prevState === 'stateOneAnimate') {
        return 'stateTwoAnimate'
      } else if(prevState === 'stateTwoAnimate') {
        return 'stateThreeAnimate'
      } else {
        return 'stateOneAnimate'
      }
    })
  }

  return (
    <div className='logo-container'>
      <motion.div
        className='logo'
        variants={variants}
        animate={logo}
        onClick={handleChange}
      >
        <motion.p style={{zIndex: 10000, position: 'absolute',color: 'white', transform: 'rotate(0deg) !important'}}
        >
        MK
        </motion.p>
        <motion.div 
          className='before'
          variants={beforeVars}
          animate={logo}
          >
            
        </motion.div>
        <motion.div 
          className='after'
          variants={afterVars}
          animate={logo}
          >
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Logo;