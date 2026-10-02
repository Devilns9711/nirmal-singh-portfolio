import '../styles/Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">BCA Student · Web Developer · Programmer · Gamer</p>

        <h1 className="hero__title">
          I build websites, learn new technologies,<br />
          <span className="hero__title-accent">and turn ideas into projects.</span>
        </h1>

        <p className="hero__subtitle">
          Hi, I'm <strong>Nirmal</strong> — a BCA student passionate about Web Development, Programming, and AI. I enjoy building responsive websites, exploring new technologies, and continuously improving my coding skills through real-world projects.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">See my work</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>
      </div>

      {/* signature margin rule, like a notebook binding */}
      <div className="hero__margin" aria-hidden="true" />
    </section>
  )
}

export default Hero
