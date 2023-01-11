import './style.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Logo = () => {
  const variants = {
    // initial: {
    //   borderRadius: ['5%','50%', '50%' ,'5%'],
    //   width: ['150px', '100px'],
    //   height: ['150px', '100px'],
    //   transform: ['rotate(0deg)','rotate(0deg)','rotate(360deg)'],
    //   transition: {
    //     duration: 2,
    //     times: [0.2, 0.5, 0.8]
    //   }
    // },
    stateOneAnimate: {
      borderRadius: ['50%', '50%', '5%', '5%', '5%'],
      width: ['100px','150px', '100px', '100px', '150px'],
      height: ['100px','150px', '100px', '100px', '100px'],
      rotate: [null, null, null, 360, 360],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.5, 0.7, 1],
      }
    },
    stateTwoAnimate: {
      borderRadius: ['5%','5%'],
      width: ['150px','100px'],
      height: ['100px', '100px'],
      rotate: 360,
      transition: {
        duration: 2,
      }
    }
  }

  const afterVars = {
    stateOneAnimate: {
      inset: ['30px','30px', '5px', '5px', '5px'],
      borderRadius: ['50%','50%', '5%', '5%', '5%'],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.5, 0.7, 1],
      }
    },
    stateTwoAnimate: {
      inset: ['5px', '5px'],
      borderRadius: ['5%','5%'],
      transition: {
        duration: 2
      }
    }
  }

  const logoContent = {
    stateOneAnimate: {
      opacity: 1,
      transition: {
        duration: 2,
      }
    },
    stateTwoAnimate: {
      opacity: 1,
      transition: {
        duration: 2,
      }
    }
  }

  const nameVars = {
    stateOneAnimate: {
      opacity:[0, 1], 
      transition: {delay: 2, duration: 1}
    },
    stateTwoAnimate: {
      opacity:[1, 0], 
      transition: {delay: 2, duration: 1}
    }
  }

  const initialVars = {
    stateOneAnimate: {
      x: 20
    },
    stateTwoAnimate: {
      x: -30
    }
  }

  const [logo, setLogo] = useState('stateOneAnimate')

  const handleChange = () => {
    setLogo(prevState => {
      if(prevState === 'stateOneAnimate') {
        return 'stateTwoAnimate'
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
        <motion.div 
          className='before'
        >
        </motion.div>
        <motion.div 
          className='after'
          variants={afterVars}
          animate={logo}
        >
        </motion.div>
      </motion.div>
      <motion.div 
        className='logo-content-container'
        onClick={handleChange}
      >
        <motion.span
        className='letters'
        variants={initialVars}
        animate={logo}
        >
          M
        </motion.span>
        <motion.span
        className='letters'
        variants={nameVars}
        animate={logo}
        >
          atthew
        </motion.span>
        {' '}
        <motion.span
        className='letters'
        variants={initialVars}
        animate={logo}
        >
          K
        </motion.span>
        <motion.span
        className='letters'
        variants={nameVars}
        animate={logo}
        >
          ellner
        </motion.span>
      </motion.div>
    </div>
  )
}

export default Logo;

//find out why letters arent moving x and y