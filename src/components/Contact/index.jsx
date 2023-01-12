import './style.scss';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {open, closed} from '../Variants/Variants';
import Footer from '../Footer';
import Modal from '../Modal';

const Contact = ({navIsOpen}) => {
  const refForm = useRef()
  const [sent, setSent] = useState(true)
  const [send, setSend] = useState(true)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(prevState => !prevState)
    emailjs.sendForm(
      'default_service',
      'template_wdn4rtp',
      refForm.current,
      '3fx5sviNWk3hvcexs'
    )
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      setSent(prevState => !prevState)
      refForm.current.reset()
   }, function(error) {
      console.log('FAILED...', error);
      setError(error)
    });
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
        <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} type='submit' disabled={send}>
          <FontAwesomeIcon icon={faPaperPlane} size={'2x'}/>
        </motion.button>
      </form>
    { send && <Modal sent={sent} setSent={setSent} setSend={setSend} sendError={error} setError={setError}/>}
    </motion.div>
    <Footer />
  </motion.section>
)
}

export default Contact;