import './style.scss';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer';



const Contact = ({navIsOpen}) => {
  const refForm = useRef()
  let sending = false

  const sendEmail = (e) => {
    e.preventDefault();
    sending = true;
    console.log(sending)
    emailjs.sendForm(
      'default_service',
      'template_wdn4rtp',
      refForm.current,
      '3fx5sviNWk3hvcexs'
    )
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      refForm.current.reset()
   }, function(error) {
      console.log('FAILED...', error);
    });
    sending = false;

  }
  const open = {
    left: 'calc(50px)',
    width: 'calc(100% - 50px - 5px',
    height: 'calc(100% - 10px)',
    borderRadius: '0.25rem',
    marginTop: '5px',
  }
  const closed = {
    left: 0,
    width: '100vw',
    height: '100vh',
    marginTop: '0rem',
    marginLeft: '0rem',
    borderRadius: '0',
    transition: {
      delay: 0.4
    }
  }
return (
  <motion.section className='contact-container'  animate={navIsOpen ? open : closed} initial={false}>
    <motion.div className="flex" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.2}}}>
    <motion.h1 initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 1}}}>Contact me.</motion.h1>
      <form ref={refForm} onSubmit={sendEmail}>
        <motion.div className='space-between'>
          <input className='half' name='name' placeholder='Name' required/>
          <input className='half' name='email' placeholder='Email' type="email" required/>
        </motion.div>
        <input name='subject' placeholder='Subject' required/>
        <textarea name='content' placeholder='Message' rows= '8' cols= '40' required></textarea>
        <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} type='submit' disabled={sending}>
          <FontAwesomeIcon icon={faPaperPlane} size={'2x'}/>
        </motion.button>
      </form>
    </motion.div>
    <Footer />
  </motion.section>
)
}

export default Contact;