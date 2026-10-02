import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import '../styles/Projects.css'

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="eyebrow">projects</p>
        <h2>Things I've built</h2>

        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
