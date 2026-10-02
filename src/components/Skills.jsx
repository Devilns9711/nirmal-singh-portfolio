import skills from '../data/skills.js'
import '../styles/Skills.css'

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="eyebrow">skills</p>
        <h2>What I work with</h2>

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.group} className="skills__group">
              <h3 className="skills__group-title">{group.group}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
