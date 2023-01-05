import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Footer = ({className}) => {
  return (
    <footer className={className ? className : ''}>
      <motion.div className='links'>
        <motion.div whileHover={{scale: 1.1}}>
          <motion.a href='https://linkedin.com/in/mkellner43/' target={'_blank'} rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}}>
        <motion.a href='https://github.com/mkellner43/' target={'_blank'} rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </motion.a>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}}>
        <motion.a href='https://facebook.com/matt.kellner1/' target={'_blank'} rel='noreferrer'>
          <FontAwesomeIcon icon={faFacebook}/>
        </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  )
};

export default Footer;