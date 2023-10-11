import Pic from "../../Images/profilePic.webp";
import Pic_sm from "../../Images/profilePic-sm.webp";
import Pic_md from "../../Images/profilePic-md.webp";
import { motion } from "framer-motion";
import Projects from "../../components/Projects";
import Arrow from "./Arrow";
import Logo from "../../components/Logo";

const Home = ({ setTheme, theme }) => {
  return (
    <div className="w-screen bg-slate-200 dark:bg-stone-500 dark:text-white pt-[70px] overflow-hidden">
      <motion.section
        className="flex flex-col justify-start sm:justify-start items-center w-screen h-[95vh]"
      >
        <motion.div className="flex flex-col items-center grow mt-2">
          <Logo />
          <div className="flex flex-col items-center mt-5">
            <motion.img
              className="rounded-full shadow-2xl w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 aspect-square mb-5"
              src={Pic}
              srcSet={`
            ${Pic} 1200w,
            ${Pic_md} 800w,
            ${Pic_sm} 400w,
            `}
              alt="profile picture of Matthew in a suite"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 1 },
              }}
              className="text-5xl text-center font-nunito"
            >
              Matthew Kellner
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1, duration: 1 },
              }}
              className="text-center font-nunito"
            >
              Full Stack Web Developer
            </motion.h2>
          </div>
          <div className="flex-grow absolute bottom-40">
            <Arrow theme={theme} setTheme={setTheme} />
          </div>
        </motion.div>
      </motion.section>
      <div className="min-h-[75vh]">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
