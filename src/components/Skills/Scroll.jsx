import { useEffect, useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100, aboutContainer }) {
  const baseX = useMotionValue(0);
  const scrollVelocity = useVelocity(aboutContainer);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => {
    return `${wrap(-20, -45, v)}%`;
  });
  useEffect(() => { 
  }, [aboutContainer])

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative h-24">
      <motion.div style={{ x }} className="flex w-max absolute">
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const Scroll = ({ data, baseVelocity = 50, aboutContainer }) => {
  return <ParallaxText baseVelocity={baseVelocity} aboutContainer={aboutContainer} >{data}</ParallaxText>;
};

export default Scroll;
