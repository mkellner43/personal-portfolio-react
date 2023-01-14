import './style.scss';
import { 
  motion,
  useTransform, 
  useMotionValue, 
  useScroll, 
  useVelocity, 
  useSpring,
  useAnimationFrame
 } from 'framer-motion';
import mongoose from '../../Images/mongoose.png';
import framerIcon from '../../Images/framerIcon.svg';
import { wrap } from "@motionone/utils";
import { useRef } from 'react';

const Skills = () => {

  function ParalaxText({baseVelocity=100}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], 
    {clamp: false}
    );

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t) => {
    let moveBy = directionFactor.current * baseVelocity / 1000;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const arr= [ 
      <motion.img key={Math.random()} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript'/>,
      <motion.img key={Math.random()} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt='bootstrap'/>,
      <motion.img key={Math.random()} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css3'/>,
      <motion.img key={Math.random()} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html5'/>,
      <motion.img key={Math.random()} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react'/>,
      <motion.img key={Math.random()} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='sass'/>,
      <motion.figure key={Math.random()}>
        <img className='image-icon' src={framerIcon} alt='framer motion'/>
        <figcaption>Framer Motion</figcaption>
      </motion.figure>
  ]

  return (
      <motion.div className='scroll-container' style={{x}}>
        {arr}
        {arr}
      </motion.div>
  )
}

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */

  return (
    <section className='skills-container'>
      <h1>Skills</h1>
      <div className='skills'>
        <h2>Front-End</h2>
        <ParalaxText />
      </div>
      <div className='skills'>
        <h3>Back-End</h3>
        <motion.div variants={'parent'} animate='animate'>
          <motion.img variants={'scroll'} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" alt='ruby'/>
        
          <motion.img variants={'scroll'} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" alt='rails'/>

          <motion.img variants={'scroll'} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='nodejs'/>


          <motion.img variants={'scroll'} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt='express' />
          
          
          <motion.img variants={'scroll'} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='mongo db'/>

          <motion.img variants={'scroll'} className="image-icon" src={mongoose} alt='mongoose'/>

          <motion.img variants={'scroll'} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript'/>

          <motion.img variants={'scroll'} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='mySQL'/>

          <motion.img variants={'scroll'} className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt='postgreSQL'/>
        </motion.div>
      </div>
      <div className='skills'>
        <h4>Other Technologies</h4>
        <div>
          <motion.img variants={'scroll'} className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git' />

          <motion.img variants={'scroll'} className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github'/>
          
          <motion.img variants={'scroll'} className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='npm'/>
          
          <motion.img variants={'scroll'} className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt='webpack'/>

          <motion.img variants={'scroll'} className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt='amazon web services'/>
          
          <motion.img variants={'scroll'} className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt='jest'/>
          
          <motion.img variants={'scroll'} className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original-wordmark.svg" alt='rspec'/>

          <motion.img variants={'scroll'} className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt='vscode'/>
        </div>
      </div>
    </section>
  )
}

export default Skills;