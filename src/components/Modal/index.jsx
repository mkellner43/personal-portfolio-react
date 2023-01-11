import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const Modal = ({sent, setSent, setSend}) => {
  const handleClick = () => {
    setSent(false)
    setSend(false)
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
        {sent &&
          <>
          <motion.button
            whileHover={{color: '#fff', scale: 1.1, backgroundColor: '#FF0000',}}
            whileTap={{scale: 0.9}}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faXmark}/>
          </motion.button>
          <h1>Message Sent!</h1>
        <FontAwesomeIcon icon={faCheck} className='check'/>
        </>
        }
      </div>
    </div>
  )
}

export default Modal;