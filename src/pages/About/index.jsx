import { motion } from "framer-motion";
import Skills from "../../components/Skills";
import resume from "../../Images/resume.pdf";
import { Typewriter } from "../../components/Typewriter";
import { Button, Typography } from "@mui/material";

const About = () => {
  return (
    <div className="flex flex-col max-w-xl w-full mt-[100px]">
      <div className="w-full">
        <Typewriter text="About me." variant={"h2"} component={"h1"} />
        <motion.div
          className="py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
        >
          <Typography variant="p" component="p">
            Hello, I'm Matt, a seasoned full-stack web developer with a track
            record of 3 years in crafting exceptional websites. My journey in
            this dynamic field has been fueled by an insatiable curiosity for
            understanding the intricacies of technology. I thrive on challenging
            myself to embrace emerging technologies and methodologies, making
            continuous learning and personal growth the driving forces behind my
            career. Welcome to my portfolio, where you can explore my passion
            for creating innovative digital experiences!"
          </Typography>
          <motion.div className="flex justify-center items-center mt-4">
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
        </motion.div>
      </div>
      <div className="w-full overflow-hidden mt-10">
        <Skills />
      </div>
    </div>
  );
};

export default About;
