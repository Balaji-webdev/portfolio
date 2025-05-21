import logo from "../assets/logo.png";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p><img src={logo} alt="balaji" height='38' width='38' />Designed & Built by Balaji S</p>
        <div className="footer-links">
          <a href="#home" className="footer-link">
            Home
          </a>
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#projects" className="footer-link">
            Projects
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Balaji S. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

