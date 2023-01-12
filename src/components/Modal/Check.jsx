import { motion } from 'framer-motion';

const Check = () => {
  const zoom = {
    height: ['40px','45px', '40px'],
    width: ['40px','45px', '40px'],
    originX: 0,
    transition: {
      delay: 1.5,
    }
  }
  return (
    <>
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
          animate={{ pathLength: 1, opacity: 1, transition:{duration: 1, delay: 0.5, opacity: {delay: 0.5}}}}
          fill='none'
          stroke='#00ff00' 
          d="M 100 300 L 200 450 C 220 470, 240 470, 250 450 L 420 120"/>
      </motion.svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={70} width={70} className='hollow-circle'>
        <path 
          fill='none'
          stroke='white'
          strokeWidth={4}
        d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"/></svg>
    </>
  )
}

export default Check;