import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faXmark, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import Check from './Check';

const Modal = ({sent, sendError, setSent, setSend, setError}) => {
  const handleClick = () => {
    setSent(false)
    setSend(false)
    setError(false)
  }
  function removeModal() {
    setTimeout(() => {
      setSend(false)
      setSent(false)
      setError(false)
    }, 3000)
  }

  if(sent){
    removeModal()
  } 

  const vars = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  }
  return (
    <div className="modal-container">
      <motion.div className='modal' variants={vars} animate="animate" initial="initial"
        exit='initial'
      >
        {!sent &&
        <>
          <h1>Sending Message</h1>
        <FontAwesomeIcon icon={faSpinner} className='fa-spin loader'/>
        </>
        }
        {sent && !sendError &&
          <>
          <motion.button
            whileHover={{color: '#fff', scale: 1.1, backgroundColor: '#FF0000',}}
            whileTap={{scale: 0.9}}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faXmark}/>
          </motion.button>
          <h1>Message Sent!</h1>
        <Check />
        </>
        }
        {sent && sendError &&
          <>
          <motion.button
            whileHover={{color: '#fff', scale: 1.1, backgroundColor: '#FF0000',}}
            whileTap={{scale: 0.9}}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faXmark}/>
          </motion.button>
          <h1>Message Error</h1>
        <FontAwesomeIcon icon={faSkullCrossbones} className='error'/>
        <p className='error'>{sendError}</p>
        </>
        }
      </motion.div>
    </div>
  )
}

export default Modal;