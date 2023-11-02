import Scroll from "./Scroll";
import { frontend, backend, other } from "./data";
import { Typewriter } from "../Typewriter";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Skills = ({ aboutContainer }) => {
  return (
    <section className="flex flex-col gap-5 w-full relative pb-20">
      <div className="min-h-[60px]">
        <Typewriter text="Skills." variant="h2" component="h2" delay={1000} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.2, duration: 1.5, ease: "easeInOut" },
        }}
      >
        <Typography variant="h6" component="h3">
          Frontend
        </Typography>
        <Scroll
          data={frontend}
          baseVelocity={-2}
          aboutContainer={aboutContainer}
        />
        <Typography variant="h6" component="h3">
          Backend
        </Typography>
        <Scroll
          data={backend}
          baseVelocity={2}
          aboutContainer={aboutContainer}
        />
        <Typography variant="h6" component="h3">
          Miscellaneous
        </Typography>
        <Scroll
          data={other}
          baseVelocity={-2}
          aboutContainer={aboutContainer}
        />
      </motion.div>
    </section>
  );
};

export default Skills;
