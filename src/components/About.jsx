import '../styles/About.css'

function About() {
  return (
    <section id="about">
      <div className="container about">
        <p className="eyebrow">about</p>
        <div className="about__grid">
          <div className="about__photo-wrap">
            {
              // <img src="src/assets/images/profile.jpg" alt="" srcset="" />
            }
            <div className="about__photo-placeholder"><img src="/images/profile.jpg" alt="" srcset="" /></div>
          </div>
          <div className="about__text">
            <h2>A bit about me</h2>
            <p>
              I'm Nirmal, a BCA student at Maa Pateshwari University, Balrampur, with a strong interest in web development and programming. I enjoy building responsive websites, learning modern technologies, and strengthening my skills in HTML, CSS, JavaScript, React, Python, C, and C++ through hands-on projects and continuous practice.
            </p>
            <p>
              Beyond coding, I enjoy gaming, graphic design, and exploring AI tools and new technologies. I'm always looking for opportunities to learn, collaborate, and work on projects that challenge me to grow as a developer while creating useful and engaging digital experiences.
            </p>
            <a href="#contact" className="pencil-link about__link">Let's talk →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


