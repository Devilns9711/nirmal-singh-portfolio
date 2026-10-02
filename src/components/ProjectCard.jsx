import '../styles/Projects.css'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card__image-placeholder">Screenshot</div>
        )}
      </div>

      <div className="project-card__body">
        <p className="project-card__tagline">{project.tagline}</p>
        <h3>{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.github && (
            <a href={project.github} className="pencil-link" target="_blank" rel="noreferrer">GitHub</a>
          )}
          {project.demo && (
            <a href={project.demo} className="pencil-link" target="_blank" rel="noreferrer">Live demo</a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
