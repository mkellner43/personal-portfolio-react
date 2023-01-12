import './style.scss';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import {open, closed} from '../Variants/Variants';
import Skills from '../Skills';

const About = ({navIsOpen}) => {
return (
  <motion.section className='about-container'  animate={navIsOpen ? open : closed} initial={false}>
    <div className="flex">
      <motion.h1 initial={{y: -100, opacity: 0}} animate={{opacity: 1, y:0, transition: {duration: 1}}}>About me.</motion.h1>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{ once: true }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus in mollis nunc sed id. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Massa ultricies mi quis hendrerit. Sed turpis tincidunt id aliquet risus feugiat in ante. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Tellus elementum sagittis vitae et leo duis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Laoreet sit amet cursus sit amet dictum sit amet. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Massa sed elementum tempus egestas sed. Dui faucibus in ornare quam viverra orci sagittis. At erat pellentesque adipiscing commodo elit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Amet purus gravida quis blandit. Arcu ac tortor dignissim convallis aenean. Nisi quis eleifend quam adipiscing. A diam maecenas sed enim ut sem viverra aliquet.
      </motion.p>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 2}}} viewport={{ once: true, amount: 0.2 }}>
      Aliquam sem fringilla ut morbi. Est ante in nibh mauris cursus. Nullam ac tortor vitae purus faucibus ornare suspendisse. Ac odio tempor orci dapibus ultrices. Sollicitudin aliquam ultrices sagittis orci. Hendrerit dolor magna eget est lorem. Cursus in hac habitasse platea dictumst quisque sagittis purus. Sagittis eu volutpat odio facilisis. Senectus et netus et malesuada fames ac. Pellentesque sit amet porttitor eget. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Non nisi est sit amet facilisis magna etiam tempor. Porta non pulvinar neque laoreet. Ut eu sem integer vitae justo eget magna. Tortor posuere ac ut consequat.
      </motion.p>
     <Skills />
    </div>
    <Footer />
  </motion.section>
)
}

export default About;