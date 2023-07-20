import Scroll from "./Scroll";
import { frontend, backend, other } from "./data";

const Skills = () => {
  return (
    <section className="flex flex-col gap-5 mt-10 w-full">
      <h1 className="text-5xl text-center font-nunito">Skills</h1>
      <h2 className="text-xl text-left font-nunito">Frontend</h2>
        <Scroll data={frontend} baseVelocity={-5} />
      <h2 className="text-xl text-left font-nunito">Backend</h2>
        <Scroll data={backend} baseVelocity={5} />
      <h2 className="text-xl text-left font-nunito">Other</h2>
        <Scroll data={other} baseVelocity={-5} />
    </section>
  );
};

export default Skills;
