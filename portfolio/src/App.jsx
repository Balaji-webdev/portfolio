import Header from "./components/header";
import "./App.css";
import HomePage from "./components/Homepage";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <section id="home">
        <Header />
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
