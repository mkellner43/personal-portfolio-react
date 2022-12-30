import './style.scss';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

const Contact = ({navIsOpen}) => {
const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'default_service',
      'template_wdn4rtp',
      refForm.current,
      '3fx5sviNWk3hvcexs'
    )
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });
  }
  const open = {
    x: 100,
    boxShadow: '0 0 8px black',
    width: 'calc(100% - 100px - 1rem)',
    height: 'calc(100vh - 2rem)',
    marginTop: '1rem',
  }
  const closed = {
    x: 0,
    width: '100%',
    height: '100%',
    marginTop: '0rem',
    transition: {
      delay: 0.4,
    }
  }
return (
  <motion.section className='contact-container'  animate={navIsOpen ? open : closed} initial={false}>
    <div className="flex">
    <motion.h1 initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 1}}}>Contact me.</motion.h1>
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.2}}} className='form-container'>
      <form ref={refForm} onSubmit={sendEmail}>
        <motion.div className='space-between'>
          <input className='half' name='name' placeholder='Name' required/>
          <input className='half' name='email' placeholder='Email' type="email" required/>
        </motion.div>
        <input name='subject' placeholder='Subject' required/>
        <textarea name='content' placeholder='Message' rows= '8' cols= '40' required></textarea>
        <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} type='submit'>Submit</motion.button>
      </form>
    </motion.div>
    </div>
  </motion.section>
)
}

export default Contact;