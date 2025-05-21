import '../styles/About.css'
import photo from '../assets/photo.jpg'

export default function About() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React.js", 
    "Redux", "Git", "GitHub", 
  ];

  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">ABOUT ME</h1>
        <div className="about-content">
          <div className="about-text">
            <h3>Frontend Developer & Tech Enthusiast</h3>
            <p>
              I'm Balaji S, a passionate and detail-oriented Frontend Developer based
              in Chennai, India. With a solid foundation in HTML5, CSS3, and
              JavaScript, and growing expertise in React.js, I enjoy building
              responsive, user-friendly web interfaces that solve real-world problems.
            </p>
            <p>
              Currently pursuing my B.Sc. in Electronics and Communication Science at
              DRBCCC Hindu College (University of Madras), I've complemented my
              academic journey with hands-on projects and internships that sharpened
              both my technical and collaborative skills.
            </p>
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src={photo} alt="Balaji S" />
          </div>
        </div>
      </div>
    </div>
  );
}