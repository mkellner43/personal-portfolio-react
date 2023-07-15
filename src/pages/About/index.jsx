import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { open, closed } from "../../components/Variants/Variants";
import Skills from "../../components/Skills";
import resume from "../../Images/resume.pdf";

const About = ({ navIsOpen }) => {
  return (
    <motion.section animate={navIsOpen ? open : closed} initial={false}>
      <div>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          About me.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          Hi, I'm Matt, a full stack web developer with 2 years of experience
          building websites. Much of my growth came through my undying
          curiousity for how technology works. I enjoy challenging myself to
          learn new techologies. Lifetime learning and continuous growth is my
          passion!
        </motion.p>
        <a href={resume} download>
          Download Resume
        </a>
        <Skills />
      </div>
      <Footer />
    </motion.section>
  );
};

export default About;
