import photo from "../assets/0Z3A8786.JPG";
import "../styles/HomePage.css";
import pdf from '../lib/Balaji S Frontend Developer.pdf'

export default function HomePage() {
  return (
    <>
      <div className="home">
        <h1>
          Hello I'm <span className="highlight">Balaji</span>{" "}
        </h1>
        <h2>Frontend Developer</h2>
        <p>
          I build responsive and interactive websites using HTML, CSS,
          JavaScript, and React.js. Passionate about crafting clean user
          interfaces and constantly learning to grow in the field of web
          development.
        </p>
        <div className="btn">
          <button className="btn1">
            <a href={pdf} download>
              Download CV
            </a>
          </button>
        <a className="btn2" href="#about">About Me</a>
        </div>
        <div className="image">
          <img src={photo} alt="balaji photo " height="54" width="54" />
        </div>
      </div>
    </>
  );
}
