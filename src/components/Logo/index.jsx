import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Logo = () => {
  const variants = {
    stateOneAnimate: {
      borderRadius: ['50%', '50%', '3%', '3%', '3%'],
      width: ['100px','170px', '100px', '100px', '170px'],
      height: ['100px','170px', '100px', '100px', '100px'],
      rotate: [0, 360, 360, 0, 0],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.5, 0.7, 0.98, 1],
      }
    },
    stateTwoAnimate: {
      borderRadius: ['3%','3%'],
      width: ['160px','100px'],
      height: ['100px', '100px'],
      transition: {
        duration: 1,
      }
    }
  }

  const afterVars = {
    stateOneAnimate: {
      inset: ['30px','30px', '5px', '5px', '5px'],
      borderRadius: ['50%','50%', '1%', '1%', '1%'],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.5, 0.7, 1],
      }
    },
    stateTwoAnimate: {
      inset: '5px',
      borderRadius: '1%',
      transition: {
        duration: 2
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
    }
  }

  const mVar = {
    stateOneAnimate: {
      x: [50, 5],
      transition: {
        delay: 1.2,
        duration: 1,
      }
    },
    stateTwoAnimate: {
      x: [5, 50],
      transition: {
        duration: 1,
      }
    }
  }

  const kVar = {
    stateOneAnimate: {
      x: [-15, -5],
      transition: {
        delay: 1.5,
      }
    },
    stateTwoAnimate: {
      x: [-5, -15],
    }
  }

  const [logo, setLogo] = useState('stateOneAnimate')

  useEffect(() => {
    setTimeout(() => {
      setLogo('stateTwoAnimate')
    }, 3000)
  }, [])

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
    <div>
      <motion.div
        variants={variants}
        animate={logo}
        onClick={handleChange}
        layout
      >
        <motion.div 
        >
        </motion.div>
        <motion.div 
          variants={afterVars}
          animate={logo}
        >
        </motion.div>
      </motion.div>
      <motion.div 
        onClick={handleChange}
      >
        <motion.div 
          variants={mVar}
          animate={logo}
        >
          <motion.span
          >
            M
          </motion.span>
          <motion.span
          variants={nameVars}
          animate={logo}
          >
            atthew
          </motion.span>
        </motion.div>
        <motion.div 
          variants={kVar}
          animate={logo}
        >
          <motion.span
          >
            K
          </motion.span>
          <motion.span
          variants={nameVars}
          animate={logo}
          >
            ellner
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Logo;

//find out why letters arent moving x and y