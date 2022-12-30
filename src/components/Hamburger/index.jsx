import './style.scss';
import { motion } from 'framer-motion';

const Hamburger = ({isOpen}) => {
  const variant = isOpen ? 'opened' : 'closed';

  const top = {
    closed: {
      rotate: 0,
      stroke: 'black',
      translateY: 0,
      transition: {
        delay: 0.5
      }
    },
    opened: {
      rotate: 45,
      stroke: 'white',
      translateY: 10,
    }
  };
  
  const center = {
    closed: {
      opacity: 1,
      stroke: 'black',
      transition: {
        delay: 0.5
      }
    },
    opened: {
      opacity: 0,
      stroke: 'white',
    }
  };

  const bottom = {
    closed: {
      rotate: 0,
      stroke: 'black',
      translateY: 0,
      transition: {
        delay: 0.5
      }
    },
    opened: {
      rotate: -45,
      translateY: -10,
      stroke: 'white',
    }
  };

  const lineProps = {
    strokeWidth: '4px',
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 500,
      damping: 20
    },
    strokeLinecap: "round"
  };

  return (
    <motion.svg
      viewBox='0 0 50 50'
      overflow="visible"
      preserveAspectRatio="none"
      width='50'
      height='50'
    >
      <motion.line
        x1="0"
        x2='30'
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2='30'
        y1="10"
        y2="10"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2='30'
        y1="20"
        y2="20"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  )
}

export default Hamburger;