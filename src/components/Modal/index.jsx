import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faXmark, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import Check from './Check';

const Modal = ({sent, sendError, setSent, setSend, setError}) => {
  const handleClick = () => {
    setSent(false)
    setSend(false)
    setError(false)
  }
  return (
    <div className="modal-container">
      <div className='modal'>
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
        {/* <FontAwesomeIcon icon={faCheck} className='check'/> */}
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
      </div>
    </div>
  )
}

export default Modal;