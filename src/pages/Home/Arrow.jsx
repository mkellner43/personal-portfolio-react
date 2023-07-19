import { motion } from 'framer-motion';

const Arrow = () => {
  const transition = { 
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: "easeInOut" 
  }
  return (
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 500" 
      height={40}
      width={40}
      style={{position: 'relative'}}
      initial={{y: 0}} 
      animate={{
        y: 100,
        transition: transition
      }}
    >
      <motion.path 
        strokeLinecap="round"
        strokeWidth={20}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1}}
        fill="none"
        style={{rotate: -90}}
        transition={transition} stroke='var(--secondary-color)' d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      />
    </motion.svg>
  )
}

export default Arrow;