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
      className="flex flex-col justify-center items-center relative top-[70px]"
    >
      <div className="flex flex-col items-center justify-center max-w-xl overflow-hidden">
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
          className="text-justify font-nunito text-xl mt-5"
        >
          Hi, I'm Matt, a full stack web developer with 2 years of experience
          building websites. Much of my growth came through my undying curiosity
          for how technology works. I enjoy challenging myself to learn new
          technologies. Lifetime learning and continuous growth is my passion!
        </motion.p>
        <motion.div className="mt-4">
          <motion.a
            href={resume}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="text-lg font-nunito bg-blue-500 p-2 rounded-full"
          >
            Download Resume
          </motion.a>
        </motion.div>
        <Skills />
        <Footer />
      </div>
    </motion.section>
  );
};

export default About;
