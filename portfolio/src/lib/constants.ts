import onboardphoto from "../assets/employee_onboarding_mockup.png";
import facephoto from "../assets/face_attendance_mockup.png";
import libro from "../assets/libro.png";
import pdf from "./Balaji_S_Resume.pdf";

export const PERSONAL_INFO = {
  name: "Balaji S",
  title: "Frontend Developer",
  subtitles: ["React.js", "Angular", "Flutter", "TypeScript"],
  availability: "Available Immediately",
  location: "Chennai, India (Open to Relocation across India)",
  bio: "Building production-grade web & cross-platform applications with React.js, Angular, Flutter, and TypeScript. Focused on scalable component architecture, Redux Toolkit state management, role-based access control, and seamless REST API integration.",
  education: {
    degree: "B.Sc. in Electronics and Communication Science",
    institution: "DRBCCC Hindu College (University of Madras)",
    year: "Graduated May 2025",
  },
  email: "balajishankar2810@gmail.com",
  phone: "+91 95143 99491",
  resumePdf: pdf,
  socials: {
    github: "https://github.com/Balaji-webdev",
    linkedin: "https://www.linkedin.com/in/balaji-s-11ba24291/",
    instagram: "https://www.instagram.com/__balaji__28/",
    email: "mailto:balajishankar2810@gmail.com",
    phone: "tel:+919514399491",
  },
};

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon?: string }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend Core",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Angular", level: 80 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    category: "Cross-Platform & Mobile",
    skills: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 85 },
      { name: "Google Play Console", level: 80 },
      { name: "Android APK Deployment", level: 85 },
    ],
  },
  {
    category: "API & State Management",
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "Axios & JSON Server", level: 90 },
      { name: "Optimistic UI Rollbacks", level: 85 },
      { name: "RBAC Access Control", level: 85 },
    ],
  },
  {
    category: "Tools & Ecosystem",
    skills: [
      { name: "Vite", level: 90 },
      { name: "Git / GitHub", level: 90 },
      { name: "ESLint & Code Quality", level: 85 },
      { name: "Netlify Deployment", level: 90 },
    ],
  },
];

export interface Project {
  id: number;
  featured: boolean;
  title: string;
  image: string;
  description: string;
  skills: string[];
  features: string[];
  liveLink: string | null;
  githubLink: string;
  category: "Web App" | "Mobile App" | "E-Commerce" | "Tool";
  metrics?: string;
  architecturalHighlight?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    featured: true,
    title: "Library Management System",
    category: "Web App",
    image: libro,
    description:
      "Full-featured library platform with role-based access control (Admin, Librarian, Guest) and complete CRUD operations. Built with clean slice-based Redux architecture, optimistic UI updates with automatic rollback on API failure, and custom fallback UI for graceful error handling.",
    skills: ["React.js", "Redux Toolkit", "JSON Server", "Axios", "TypeScript"],
    features: [
      "RBAC with Admin, Librarian & Guest roles — full CRUD lifecycle",
      "Real-time debounced search, multi-column sorting, & pagination",
      "Redux Toolkit state across books, authors, users, and sessions",
      "Optimistic UI updates with automatic rollback on API failure",
      "Unique ISBN validation with strict UI/hook/service separation",
    ],
    liveLink: "https://librio-library.netlify.app/",
    githubLink: "https://github.com/Balaji-webdev",
    metrics: "Production Grade | RBAC System",
    architecturalHighlight: "Slice-based Redux with optimistic state rollbacks and custom service abstraction.",
  },
  {
    id: 2,
    featured: true,
    title: "Face Attendance Mobile App",
    category: "Mobile App",
    image: facephoto,
    description:
      "Cross-platform attendance app with real-time face detection and punch-in/out tracking. Integrated REST APIs for face recognition and attendance data management. Handled end-to-end APK build and Google Play Console deployment.",
    skills: ["Flutter", "Dart", "REST API", "Play Console"],
    features: [
      "Real-time face detection & punch-in/out tracking",
      "REST APIs for face recognition & attendance management",
      "End-to-end APK build & Google Play Console production deployment",
    ],
    liveLink: null,
    githubLink: "https://github.com/Balaji-webdev",
    metrics: "Deployed on Google Play Console",
    architecturalHighlight: "Native camera integration with high-speed facial vector match REST API calls.",
  },
  {
    id: 3,
    featured: true,
    title: "Employee Onboarding App",
    category: "Mobile App",
    image: onboardphoto,
    description:
      "Digital employee onboarding flow with government ID verification. Third-party ID verification APIs auto-fetch and pre-fill employee details, eliminating manual data entry across multi-step onboarding screens.",
    skills: ["Flutter", "Dart", "ID Verification API", "REST API"],
    features: [
      "Government ID verification with auto-fill via third-party API",
      "Multi-step onboarding with dynamic data binding triggered by ID input",
    ],
    liveLink: null,
    githubLink: "https://github.com/Balaji-webdev",
    metrics: "Zero Manual Entry Flow",
    architecturalHighlight: "Automated OCR & Government ID payload parser triggering dynamic form re-hydration.",
  },
  {
    id: 5,
    featured: false,
    title: "Adidas E-Commerce Clone",
    category: "E-Commerce",
    image:
      "https://images.stockcake.com/public/3/0/7/30774fd6-3c88-44b6-b8bb-c4add08ce2c9_large/floating-digital-interface-stockcake.jpg",
    description:
      "Fully responsive e-commerce frontend inspired by Adidas India, built with React v19 and Vite for optimized production builds. Modular reusable components, ESLint for code quality, product listing, routing, and responsive layouts deployed live to production.",
    skills: ["React.js v19", "Vite", "ESLint", "Tailwind"],
    features: [
      "Modular reusable components with ESLint for consistent code quality",
      "Product listing, routing, and responsive layouts",
      "Deployed live to production on Netlify",
    ],
    liveLink: "https://adidasofficial.netlify.app/",
    githubLink: "https://github.com/Balaji-webdev/adidas-official",
    metrics: "Live Production App",
  },
  {
    id: 6,
    featured: false,
    title: "Quiz App",
    category: "Web App",
    image:
      "https://images.stockcake.com/public/f/f/8/ff895088-4e9f-4de8-9c27-7c1431ef2f36_large/brain-puzzle-glows-stockcake.jpg",
    description:
      "Interactive quiz application testing frontend development knowledge. Dynamic questions, real-time answer checking, score tracking, and clean component-based structure.",
    skills: ["React.js", "CSS3", "JavaScript"],
    features: [
      "Dynamic quiz with multiple questions and real-time answer checking",
      "Score tracking with component-based architecture",
    ],
    liveLink: "https://thereactquizofficial.netlify.app/",
    githubLink: "https://github.com/Balaji-webdev/quiz-app",
    metrics: "Interactive Quiz Engine",
  },
  {
    id: 7,
    featured: false,
    title: "Investing Calculator",
    category: "Tool",
    image:
      "https://media.istockphoto.com/id/1319517808/vector/man-stands-at-a-huge-calculator-finance-and-investments-budgeting-vector-flat-illustration.jpg?s=2048x2048&w=is&k=20&c=SNsswicXLKyiV1TbMw0-YDChvx3iB_tWgpoOqcmIgF4=",
    description:
      "Clean, responsive investment calculator that computes compound interest from principal, annual rate, and duration. Lightweight, user-friendly, and functional across all devices.",
    skills: ["React.js", "CSS3", "Financial Math"],
    features: [
      "Real-time compound interest calculation",
      "Responsive and minimalist UI",
    ],
    liveLink: "https://investingcalci.netlify.app/",
    githubLink: "https://github.com/Balaji-webdev/Investing-Calculator",
    metrics: "Financial Tool",
  },
  {
    id: 8,
    featured: false,
    title: "Fitness Tracker",
    category: "Tool",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&auto=format&fit=crop&q=60",
    description:
      "Responsive React app for tracking workouts, setting fitness goals, and viewing real-time progress. Built with React hooks and functional components with clean state management.",
    skills: ["React.js", "CSS3", "JavaScript"],
    features: [
      "Real-time updates via React state management",
      "Responsive design for all devices",
    ],
    liveLink: "https://fitness-tracker-off.netlify.app/",
    githubLink: "https://github.com/Balaji-webdev/FitnessTracker",
    metrics: "Workout Analytics App",
  },
];

export const TIMELINE_DATA = [
  {
    period: "2024 — Present",
    title: "Frontend Developer & Mobile App Engineer",
    company: "Independent Projects & Deployments",
    description: "Engineered scalable web applications using React.js, Angular, and TypeScript. Developed cross-platform mobile applications in Flutter/Dart with real-time API integrations, face recognition punch-in, and successfully published Android APKs to Google Play Console.",
    tags: ["React.js", "Angular", "Flutter", "TypeScript", "Redux Toolkit", "Play Console"],
    highlights: [
      "Published production Android APKs to Google Play Console.",
      "Architected Redux Toolkit state slices with optimistic UI rollbacks.",
      "Built multi-role RBAC access systems with CRUD capabilities.",
    ],
  },
  {
    period: "May 2025",
    title: "B.Sc. in Electronics and Communication Science",
    company: "DRBCCC Hindu College (University of Madras)",
    description: "Graduated with strong foundation in core computer science, signal logic, digital systems, and embedded software fundamentals.",
    tags: ["Electronics", "Communication Science", "Embedded Logic", "Web Fundamentals"],
    highlights: [
      "Graduated with Distinction in technical logic and system design.",
      "Led college tech seminars on cross-platform application development.",
    ],
  },
];
