import { motion, useScroll } from "framer-motion";
import Footer from "../../components/Footer";
import { open, closed } from "../../components/Variants/Variants";
import Skills from "../../components/Skills";
import resume from "../../Images/resume.pdf";
import { useRef } from "react";

const About = ({ navIsOpen }) => {
  const aboutContainer = useRef(null);
  const { scrollY } = useScroll({ container: aboutContainer });

  return (
    <motion.section
      animate={navIsOpen ? open : closed}
      initial={false}
      className="flex flex-col w-screen overflow-y-scroll mt-[70px] h-[calc(100vh-70px)] overflow-x-hidden gap-16 bg-primary-color text-secondary-color"
      ref={aboutContainer}
    >
      <div className="m-auto max-w-4xl overflow-x-clip">
        <div className="flex flex-col justify-center items-center p-2 gap-5 mt-4">
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
            className="text-justify font-nunito text-xl"
          >
            Hi, I'm Matt, a full stack web developer with 2 years of experience
            building websites. Much of my growth came through my undying
            curiosity for how technology works. I enjoy challenging myself to
            learn new technologies. Lifetime learning and continuous growth is
            my passion!
          </motion.p>
          <motion.div className="flex justify-center items-center">
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
        </div>
        <Skills aboutContainer={scrollY} />
      </div>
      <Footer />
    </motion.section>
  );
};

export default About;


//! need to work on better styles overall and dark / light mode