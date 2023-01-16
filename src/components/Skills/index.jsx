import './style.scss';
import Scroll from './Scroll';
import { frontend, backend, other } from './data';

const Skills = () => {
  return (
    <section className='skills-container'>
      <h1>Skills</h1>
      <div className="tech-container">
        <h2>Front-End</h2>
        <div className='skills'>
          <Scroll data={frontend}/>
        </div>
      </div>

      <div className='tech-container'>
        <h2>Back-End</h2>
        <div className='skills'>
          <Scroll data={backend} baseVelocity={-100}/>
        </div>
      </div>
      <div className='tech-container'>
        <h2>Other Technologies</h2>
        <div className='skills'>
          <Scroll data={other} />
        </div>
      </div>
    </section>
  )
}

export default Skills;