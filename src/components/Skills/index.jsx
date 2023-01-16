import './style.scss';
import Scroll from './Scroll';
import { frontend, backend, other } from './data';

const Skills = () => {
  return (
    <section className='skills-container'>
      <h1>Skills</h1>
      <div className='skills'>
        <h2>Front-End</h2>
        <Scroll data={frontend}/>
      </div>
      <div className='skills'>
        <h3>Back-End</h3>
        <Scroll data={backend} />
      </div>
      <div className='skills'>
        <h4>Other Technologies</h4>
        <Scroll data={other} />
      </div>
    </section>
  )
}

export default Skills;