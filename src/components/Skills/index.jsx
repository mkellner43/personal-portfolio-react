import Scroll from "./Scroll";
import { frontend, backend, other } from "./data";

const Skills = ({ aboutContainer }) => {
  return (
    <section className="flex flex-col gap-5 w-full relative px-2 mt-10">
      <h1 className="text-5xl text-center font-nunito">Skills</h1>
      <h2 className="text-xl text-left font-nunito">Frontend</h2>
      <Scroll
        data={frontend}
        baseVelocity={-2}
        aboutContainer={aboutContainer}
      />
      <h2 className="text-xl text-left font-nunito">Backend</h2>
      <Scroll data={backend} baseVelocity={2} aboutContainer={aboutContainer} />
      <h2 className="text-xl text-left font-nunito">Other</h2>
      <Scroll data={other} baseVelocity={-2} aboutContainer={aboutContainer} />
    </section>
  );
};

export default Skills;
