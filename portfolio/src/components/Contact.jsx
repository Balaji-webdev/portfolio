import Form from "./form";
import "../styles/contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";


export default function Contact() {


  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-title">
          <h1>Get In Touch</h1>
          <p>
            Got a project idea, job opportunity, or just want to connect? Fill
            out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          <Form />

          <div className="contact-info">
            <h3>Let's Connect</h3>
            <div className="contact-links">
              <a
                href="mailto:balajishankar2810@gmail.com"
                className="contact-link"
              >
                <FaEnvelope />
                <span>balajishankar2810@gmail.com</span>
              </a>

              <a href="tel:+919514399491" className="contact-link">
                <FaPhone />
                <span>+91 95143 99491</span>
              </a>

              <a
                href="https://github.com/Balaji-webdev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/balaji-s-11ba24291/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/__balaji__28/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
