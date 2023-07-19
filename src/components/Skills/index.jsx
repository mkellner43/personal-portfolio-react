import Scroll from "./Scroll";
import { frontend, backend, other } from "./data";

const Skills = () => {
  return (
    <section className="flex flex-col">
      <h1
      className="text-5xl text-center font-nunito mt-10"
      >Skills</h1>
      <Scroll data={frontend} baseVelocity={-10} />
      <Scroll data={backend} baseVelocity={10} />
      <Scroll data={other} baseVelocity={-10} />
    </section>
  );
};

export default Skills;
