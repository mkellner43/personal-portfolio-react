import Pic from "../../Images/profilePic2.png";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import { open, closed } from "../../components/Variants/Variants";
import Arrow from "./Arrow";
import Logo from "../../components/Logo";

const Home = ({ navIsOpen }) => {
  return (
    <div className="snap-mandatory snap-y w-screen h-screen overflow-scroll">
      <motion.section
        layout
        className="snap-center flex flex-col justify-center sm:justify-evenly items-center w-screen h-screen relative"
      >
        <Logo />
        <motion.img
          layout
          className="rounded-full shadow-2xl sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4"
          src={Pic}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2 },
          }}
        />
        <motion.div>
          <motion.h1
            layout
            initial={{ x: "30vw", y: "10vh" }}
            animate={{
              x: 0,
              y: 0,
              opacity: [0, 0.1, 1],
              transition: { delay: 0.5, duration: 1 },
            }}
            className="text-5xl text-center font-nunito"
          >
            Matthew Kellner
          </motion.h1>
          <motion.h2
            layout
            initial={{ x: "30vw", y: "10vh" }}
            animate={{
              x: 0,
              y: 0,
              opacity: [0, 0.1, 1],
              transition: { delay: 1, duration: 1 },
            }}
          >
            Full Stack Web Developer
          </motion.h2>
        </motion.div>
        <Arrow />
      </motion.section>
      <section className="snap-center h-screen w-screen flex flex-col items-center justify-center relative">
        <Projects />
        <div className="absolute bottom-0">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;

//! removed all styles restyle with tailwind css