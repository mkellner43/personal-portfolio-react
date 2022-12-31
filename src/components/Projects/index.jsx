import './style.scss';
import MemoryGame from '../../Images/memoryGame.png'

const Projects = () => {
  return (
    <section className="projects-container">
      <div>
        <a href="https://mkellner43.github.io/memory-game/" target="_blank" rel="noopener noreferrer">
          <img src={MemoryGame} alt="memory game" />
        </a>
      </div>
    </section>
  )
}

export default Projects;