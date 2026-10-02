import '../styles/Education.css'

function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="eyebrow">education</p>
        <h2>Academic background</h2>

        <div className="education__item">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p className="education__meta">Maa Pateswari University, Balrampur · 2nd Semester · Ongoing</p>
          <p className="education__courses">
            Core coursework: Object Oriented Programming (C++), Data Structures (C),
            Discrete Mathematics, Business Communication, Human Values &amp; Environment Studies.
          </p>
        </div>

        {/* add 12th / 10th here if you want them listed */}
      </div>
    </section>
  )
}

export default Education
