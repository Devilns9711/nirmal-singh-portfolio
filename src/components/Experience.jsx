import '../styles/Experience.css'

// Add more entries here as your experience grows
const experience = [
  {
    role: 'BCA Student Developer',
    org: 'Personal Projects',
    period: '2026',
    points: [
      'Built multiple web development projects, including a personal portfolio and ResumeCraft.',
      'Developed a Python-based File Management System with file handling and management features.',
      'Continuously improving skills in React, JavaScript, Python through hands-on projects and university coursework.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="eyebrow">experience</p>
        <h2>Where I've worked</h2>

        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.org} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <p className="timeline__period">{job.period}</p>
                <h3>{job.role} · {job.org}</h3>
                <ul>
                  {job.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
