import './style.scss';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import {open, closed} from '../Variants/Variants';
import Skills from '../Skills';
import resume from '../../Images/resume.pdf';

const About = ({navIsOpen}) => {
return (
  <motion.section className='about-container'  animate={navIsOpen ? open : closed} initial={false}>
    <div className="flex">
      <motion.h1 initial={{y: -100, opacity: 0}} animate={{opacity: 1, y:0, transition: {duration: 1}}}>About me.</motion.h1>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{ once: true }}>
      Hi, I'm Matt, a full stack web developer with 2 years of experience building websites. Much of my growth came through curiousty about how everything works. I love to challenge myself to learn new techologies. Lifetime learning and continuous growth is my passion! 
      </motion.p>
      <a className='downloadResume' href={resume} download>Download Resume</a>
     <Skills />
    </div>
    <Footer />
  </motion.section>
)
}

export default About;