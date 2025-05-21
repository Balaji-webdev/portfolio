import logo from "../assets/logo.png";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="logo" height="38" width="38" />
        <h1>BALAJI</h1>
      </div>
      <nav>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}
