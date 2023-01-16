import { 
  motion,
  useTransform, 
  useMotionValue, 
  useAnimationFrame,
 } from 'framer-motion';
import { wrap } from "@motionone/utils";

const Scroll = ({data=[], baseVelocity=100}) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame(() => {
    let moveBy = baseVelocity  / 2000;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <>
      <motion.div className='scroll-container' style={{x}}>
        {data}
        {data}
      </motion.div>
    </>
  )
}

export default Scroll;