import "../styles/projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Adidas E-commerce Clone",
      image:
        "https://images.stockcake.com/public/3/0/7/30774fd6-3c88-44b6-b8bb-c4add08ce2c9_large/floating-digital-interface-stockcake.jpg",
      description:
        "A fully responsive e-commerce website inspired by Adidas, built using React.js. Features dynamic product listings, smooth navigation, and a modern UI that mimics the look and feel of a real online store.",
      skills: ["React.js", "CSS3", "Responsive Design", "Redux"],
      features: [
        "Dynamic product listing pages",
        "Responsive layout and custom styling",
        "Reusable UI components with clean architecture",
      ],
      liveLink: "https://adidasofficial.netlify.app/",
      githubLink: "https://github.com/Balaji-webdev/adidas-official",
    },
    {
      id: 1,
      title: "Investing Calculator",
      image:
        "https://media.istockphoto.com/id/1319517808/vector/man-stands-at-a-huge-calculator-finance-and-investments-budgeting-vector-flat-illustration.jpg?s=2048x2048&w=is&k=20&c=SNsswicXLKyiV1TbMw0-YDChvx3iB_tWgpoOqcmIgF4=",
      liveLink: "https://investingcalci.netlify.app/",
      githubLink: "https://github.com/Balaji-webdev/Investing-Calculator",
      skills: ["React.js", "CSS3"],
      description:
        "Investing Calci is a clean and responsive investment calculator web app built using HTML, CSS, and vanilla JavaScript. It allows users to input the principal amount, annual interest rate, and investment duration to instantly calculate the estimated future value using compound interest. The app is designed to be lightweight, user-friendly, and functional across all devices. ",
      features: [
        "Real-time compound interest calculation",
        "Responsive and minimalist UI",
        "DOM manipulation and event handling",
      ],
    },
    {
      id: 1,
      title: "Quiz App",
      image:
        "https://images.stockcake.com/public/f/f/8/ff895088-4e9f-4de8-9c27-7c1431ef2f36_large/brain-puzzle-glows-stockcake.jpg",
      liveLink: "https://thereactquizofficial.netlify.app/",
      githubLink: "https://github.com/Balaji-webdev/quiz-app",
      skills: ["React.js", "CSS3"],
      description:
        "An interactive quiz application built with React.js that tests users on various frontend development topics. It features dynamic questions, real-time feedback, and clean UI styling. Designed for learning and practice, the app enhances engagement through instant responses and a structured quiz flow.",
      features: [
        "Dynamic quiz with multiple questions and answers",
        "Real-time answer checking and score tracking",
        "Component-based structure with clean UI",
        ,
      ],
    },
    {
      id: 2,
      title: "Fitness Tracker",
      image:
        "https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
        liveLink: "https://fitness-tracker-off.netlify.app/",
      githubLink: "https://github.com/Balaji-webdev/FitnessTracker",
      skills: ["React.js", "CSS3", "JavaScript"],
      description:
        "Fitness Tracker is a responsive React-based web application that allows users to track their workouts, set fitness goals, and view real-time progress. With a clean UI and intuitive design, users can log exercises and monitor their progress effectively. Built with React hooks and functional components.",
      features: [
        "Responsive design for all devices",
        "Real-time updates using React state management",
      ],
    },
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <h1 className="projects-title">PROJECTS</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-bullet">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="project-skills">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
