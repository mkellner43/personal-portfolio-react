import { 
  motion,
  useTransform, 
  useMotionValue, 
  useScroll, 
  useVelocity, 
  useSpring,
  useAnimationFrame
 } from 'framer-motion';
import { useRef } from 'react';
import { wrap } from "@motionone/utils";

function Scroll({data=[], baseVelocity=100}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    console.log(delta)
    let moveBy = directionFactor.current * baseVelocity  / 2000;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  

  return (
      <motion.div className='scroll-container' style={{x}}>
        {data}
        {data}
      </motion.div>
  )
}

export default Scroll;