import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { open, closed } from "../../components/Variants/Variants";
import Skills from "../../components/Skills";
import resume from "../../Images/resume.pdf";

const About = ({ navIsOpen }) => {
  return (
    <motion.section
      animate={navIsOpen ? open : closed}
      initial={false}
      className="flex flex-col justify-center items-center mt-20 pt-5 px-3"
    >
      <div className="flex flex-col items-center justify-center max-w-xl w-screen overflow-hidden p-3">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="text-5xl text-center font-nunito"
        >
          About me.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="text-center font-nunito text-xl mt-5"
        >
          Hi, I'm Matt, a full stack web developer with 2 years of experience
          building websites. Much of my growth came through my undying
          curiosity for how technology works. I enjoy challenging myself to
          learn new technologies. Lifetime learning and continuous growth is my
          passion!
        </motion.p>
        <div className="m-4">
          <a href={resume} download className="bg-blue-500 font-nunito rounded-full p-2">
            Download Resume
          </a>
        </div>
        <Skills />
        <Footer />
      </div>
    </motion.section>
  );
};

export default About;
