import './style.scss';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import mongoose from '../../Images/mongoose.png';
import framerIcon from '../../Images/framerIcon.svg'

const Skills = () => {
  const x = useMotionValue(0)
  const scroll = {
    x: [0, -100, 100, -100],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 5
    }
  }
  return (
    <section className='skills-container'>
      <h1>Skills</h1>
      <div className='skills'>
        <h2>Front-End</h2>
        <motion.div style={{position: 'relative'}} animate={''}>
          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript'/>

          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt='bootstrap'/>

          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css3'/>

          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html5'/>

          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react'/>

          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='sass'/>
   
          <figure>
            <img className='image-icon' src={framerIcon} alt='framer motion'/>
            <figcaption>Framer Motion</figcaption>
          </figure>

        </motion.div>
      </div>
      <div className='skills'>
        <h3>Back-End</h3>
        <div>
          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" alt='ruby'/>
        
          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" alt='rails'/>

          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='nodejs'/>


          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt='express' />
          
          
          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='mongo db'/>

          <img className="image-icon" src={mongoose} alt='mongoose'/>

          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript'/>

          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='mySQL'/>

          <img className="image-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt='postgreSQL'/>
        </div>
      </div>
      <div className='skills'>
        <h4>Other Technologies</h4>
        <div>
          <img className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git' />

          <img className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github'/>
          
          <img className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='npm'/>
          
          <img className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt='webpack'/>

          <img className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt='amazon web services'/>
          
          <img className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt='jest'/>
          
          <img className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original-wordmark.svg" alt='rspec'/>

          <img className='image-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt='vscode'/>
        </div>
      </div>
    </section>
  )
}

export default Skills;