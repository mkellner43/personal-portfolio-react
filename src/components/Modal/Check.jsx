import { motion } from 'framer-motion';

const Check = () => {

  return (
    <>
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"
        height={40}
        width={40}
        className='check'
        >
        <motion.path
          strokeLinecap="round"
          strokeWidth={60}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, transition:{duration: 1, delay: 0.5, opacity: {delay: 0.5}}}}
          fill='none'
          stroke='#fff' 
          d="M 100 300 L 200 450 C 220 470, 240 470, 250 450 L 420 120"/>
      </motion.svg>
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512" height={60} width={60}
        className='hollow-circle'
        animate={{ rotateY: 360, opacity: [0, 1] }}
        transition= {{duration: 1}}
        style={{transformOrigin: 'center', transformStyle: 'preserve-3D'}}
      >
        <path 
          fill='white'
          stroke='white'
          strokeWidth={4}
          d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
        />
      </motion.svg>
    </>
  )
}

export default Check;