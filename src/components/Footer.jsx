import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Devil. Built with React.</p>
        <a href="#top" className="pencil-link">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
