import { motion } from "framer-motion";
import Skills from "../../components/Skills";
import resume from "../../Images/resume.pdf";
import { Typewriter } from "../../components/Typewriter";

const About = () => {
  return (
    <motion.section className="w-screen justify-center items-center gap-16 bg-slate-200 dark:bg-stone-500 dark:text-white overflow-y-scroll pt-[70px]">
      <div className="flex flex-col lg:items-start justify-center items-center max-w-xl m-auto overflow-x-clip px-5 gap-5 pt-10">
        <div className="w-full">
          <Typewriter text="About me." variant={"h2"} component={"h1"} />
          <div className="flex items-center min-h-[330px] py-4">
            <Typewriter
              text=" Hello, I'm Matt, a seasoned full-stack web developer with a track
            record of 3 years in crafting exceptional websites. My journey in this
            dynamic field has been fueled by an insatiable curiosity for
            understanding the intricacies of technology. I thrive on challenging
            myself to embrace emerging technologies and methodologies, making
            continuous learning and personal growth the driving forces behind my
            career. Welcome to my portfolio, where you can explore my passion for
            creating innovative digital experiences!"
              variant="p"
              component="p"
              delay={1000}
              typingSpeed={25}
            />
          </div>
          <motion.div className="flex justify-center items-center">
            <motion.a
              href={resume}
              download
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="text-lg font-nunito bg-blue-500 p-2 rounded-full"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
        <div className="w-full overflow-hidden">
          <Skills />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
