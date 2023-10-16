import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal";
import { Typewriter } from "../../components/Typewriter";
import { Button } from "@mui/material";

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
    <motion.section className="h-screen w-screen bg-slate-200 dark:bg-stone-500 dark:text-[#e3e3e3] flex flex-col pt-[70px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.2 } }}
        className="flex flex-col w-full pt-10 px-4 max-w-2xl grow gap-4 m-auto"
      >
        <Typewriter text="Contact me." variant="h2" component="h1" />
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
          <Button
            variant="contained"
            type="submit"
            disabled={send}
            className="dark:bg-stone-700 dark:hover:bg-stone-600 bg-blue-500 hover:bg-blue-400 "
          >
            send
          </Button>
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
    </motion.section>
  );
};

export default Contact;
