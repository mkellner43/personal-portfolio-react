import { motion } from 'framer-motion';

const Check = () => {
  const zoom = {
    height: ['40px','50px', '40px'],
    width: ['40px','50px', '40px'],
    transition: {
      duration: 0.5,
      delay: 2,
      type: 'spring',
      stiffness: 800,

    }
  }
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"
      height={40}
      width={40}
      className='check'
      animate={zoom}
    >
      <motion.path
        strokeLinecap="round"
        strokeWidth={60}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1, transition:{duration: 1, delay: 1, opacity: {delay: 1}}}}
        fill='none'
        stroke='green' 
        d="M 100 300 L 200 450 C 220 470, 240 470, 250 450 L 400 100"/>
    </motion.svg>
  )
}

export default Check;