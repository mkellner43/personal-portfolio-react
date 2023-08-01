import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Skills from "../../components/Skills";
import resume from "../../Images/resume.pdf";

const About = () => {
  return (
      <motion.section className="w-screen justify-center items-center gap-16 bg-slate-200 dark:bg-stone-500 dark:text-white overflow-y-scroll pt-[70px]">
        <div className="flex flex-col justify-center items-center max-w-xl m-auto overflow-x-clip px-5 gap-5 pt-10">
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
            Hi, I'm Matt, a full stack web developer with 3 years of experience
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
          <Skills />
        </div>
        {/* <Footer /> */}
      </motion.section>
  );
};

export default About;
