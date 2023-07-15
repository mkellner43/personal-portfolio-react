import Scroll from "./Scroll";
import { frontend, backend, other } from "./data";

const Skills = () => {
  return (
    <section>
      <h1>Skills</h1>
      <div>
        <h2>Front-End</h2>
        <div>
          <Scroll data={frontend} />
        </div>
      </div>

      <div>
        <h2>Back-End</h2>
        <div>
          <Scroll data={backend} baseVelocity={-100} />
        </div>
      </div>
      <div>
        <h2>Other Technologies</h2>
        <div>
          <Scroll data={other} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
