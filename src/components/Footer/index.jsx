import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer>
      <motion.div className='links'>
          <motion.a whileHover={{scale: 1.1}} href='https://linkedin.com/in/mkellner43/' target={'_blank'} rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>
        <motion.a whileHover={{scale: 1.1}} href='https://github.com/mkellner43/' target={'_blank'} rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </motion.a>
        <motion.a whileHover={{scale: 1.1}} href='https://facebook.com/matt.kellner1/' target={'_blank'} rel='noreferrer'>
          <FontAwesomeIcon icon={faFacebook}/>
        </motion.a>
      </motion.div>
    </footer>
  )
};

export default Footer;