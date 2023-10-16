import { motion } from "framer-motion";
import Skills from "../../components/Skills";
import resume from "../../Images/resume.pdf";
import { Typewriter } from "../../components/Typewriter";
import { Button } from "@mui/material";

const About = () => {
  return (
      <div className="flex flex-col max-w-xl w-full mt-[100px]">
        <div className="w-full">
          <Typewriter text="About me." variant={"h2"} component={"h1"} />
          <div className="min-h-[21vh] py-4">
            <Typewriter
              text=" Hello, I'm Matt, a seasoned full-stack web developer with a track
            record of 3 years in crafting exceptional websites. My journey in this
            dynamic field has been fueled by an insatiable curiosity for
            understanding the intricacies of technology. I thrive on challenging
            myself to embrace emerging technologies and methodologies, making
            continuous learning and personal growth the driving forces behind my
            career. Welcome to my portfolio, where you can explore my passion for
            creating innovative digital experiences!"
              variant="body1"
              component="p"
              delay={1000}
              typingSpeed={25}
            />
          </div>
          <motion.div className="flex justify-center items-center">
            <Button
              href={resume}
              variant="contained"
              download
              target="_blank"
              className="dark:bg-stone-700 dark:hover:bg-stone-600 bg-blue-500 hover:bg-blue-400"
            >
              Download Resume
            </Button>
          </motion.div>
        </div>
        <div className="w-full overflow-hidden">
          <Skills />
        </div>
      </div>
  );
};

export default About;
