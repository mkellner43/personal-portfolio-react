import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

const Contact = () => {
  const refForm = useRef();
  const [sent, setSent] = useState(false);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSend((prevState) => !prevState);
    emailjs
      .sendForm(
        "default_service",
        "template_wdn4rtp",
        refForm.current,
        "3fx5sviNWk3hvcexs"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setSent((prevState) => !prevState);
          refForm.current.reset();
        },
        function (error) {
          console.log("FAILED...", error);
          setError(error);
        }
      );
  };

  return (
    <motion.section className="h-full w-screen bg-slate-200 dark:bg-stone-500 dark:text-white overflow-y-scroll flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.2 } }}
        className="flex flex-col w-full pt-10 px-4 max-w-2xl grow gap-4"
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          className="text-5xl text-center mb-4"
        >
          Contact me.
        </motion.h1>
        <form
          ref={refForm}
          onSubmit={sendEmail}
          className="flex flex-col gap-2 text-stone-700"
        >
          <motion.div className="flex gap-2">
            <input
              name="name"
              placeholder="Name"
              required
              className="flex-auto py-2 w-2/4 border px-2 rounded-sm"
            />
            <input
              name="email"
              placeholder="Email"
              type="email"
              required
              className="flex-auto py-2 w-2/4 border px-2 rounded-sm"
            />
          </motion.div>
          <input
            name="subject"
            placeholder="Subject"
            required
            className="py-2 border px-2 rounded-sm"
          />
          <textarea
            name="content"
            placeholder="Message"
            rows="8"
            cols="40"
            required
            className="border p-2 rounded-sm resize-none"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={send}
            className="flex items-center justify-center bg-blue-500 text-white rounded-full p-4"
          >
            <FontAwesomeIcon icon={faPaperPlane} size={"2x"} />
          </motion.button>
        </form>
        <AnimatePresence>
          {send && (
            <Modal
              sent={sent}
              setSent={setSent}
              setSend={setSend}
              sendError={error}
              setError={setError}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </motion.section>
  );
};

export default Contact;
