import "./Home.css";
import profilePicture from "../assets/images/ok.jpg";

import Projects from "../layout/Projects.jsx";
import Contact from "../layout/Contact.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-intro">Hi, I’m</p>
          <h1 className="hero-name">Amiaka D. Kingsley</h1>
          <h2 className="hero-role">Full-Stack Developer</h2>

          <p className="hero-description">
            I specialise in building modern and responsive web applications.
          </p>

          <Link to="/explore" className="btn btn-primary">
            Explore More
          </Link>
        </div>

        <div className="hero-image">
          <img src={profilePicture} alt="Amiaka D. Kingsley portrait" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <header className="section-header">
          <h2>About Me</h2>
        </header>

        <p className="about-text">
          Hello! I'm Amiaka Kingsley Dinso, a passionate and driven Full Stack
          Developer with a Bachelor Degree in Computer Engineering. I have a
          strong foundation in modern web development technologies and
          frameworks. I specialize in building robust, scalable, and
          user-friendly web applications that combine powerful back-end logic
          with intuitive front-end design.
        </p>
      </section>

      {/* SKILLS INTRO */}
      <section className="skills-intro">
        <header className="section-header">
          <h2>My Core Skills</h2>
        </header>

        <p>
          With hands-on experience and a problem-solving mindset, I bring the
          following technical skills to the table:
        </p>
      </section>

      {/* SKILLS GRID */}
      <section className="skills">
        <article className="skill-card">
          <h3>Back-End Development</h3>
          <p>
            I have solid expertise in Java and Spring Boot, allowing me to build
            secure, high-performance RESTful APIs, enterprise-grade
            applications, and microservices. My familiarity with Spring
            Security, JPA/Hibernate, and layered architecture ensures efficient
            and maintainable backend solutions.
          </p>
        </article>

        <article className="skill-card">
          <h3>Front-End Development</h3>
          <p>
            On the client side, I’m highly proficient in HTML, CSS, and
            JavaScript, with adequate knowledge of React.js. I love creating
            responsive, dynamic, and interactive user interfaces that elevate
            user experiences across devices.
          </p>
        </article>

        <article className="skill-card">
          <h3>Mobile Development</h3>
          <p>
            I specialize in building cross-platform mobile applications using
            React Native. I create smooth, responsive, and high-performance apps
            for both iOS and Android devices. My focus is on intuitive UI/UX
            design, seamless navigation, and integrating APIs to deliver fully
            functional mobile solutions.
          </p>
        </article>

        <article className="skill-card">
          <h3>Containerization & DevOps</h3>
          <p>
            I embrace modern deployment practices using Docker to containerize
            applications, making them portable and easy to run in various
            environments. This contributes to smoother CI/CD pipelines and
            workflows.
          </p>
        </article>

        <article className="skill-card">
          <h3>Database Management</h3>
          <p>
            My experience with MySQL enables me to design and manage relational
            databases effectively, ensuring data integrity, efficient queries,
            and strong entity relationships.
          </p>
        </article>

        <article className="skill-card">
          <h3>My Development Philosophy</h3>
          <p>
            I believe in writing clean, well-structured code and continuously
            learning to stay current with the evolving tech landscape. I
            prioritize readability, maintainability, scalable architecture,
            agile methodologies, and user-centered design. As a full-stack developer, I bring end-to-end development capabilities—from backend servers and APIs to pixel-perfect front-end interfaces. I enjoy transforming ideas into real-world digital solutions.
          </p>
        </article>

        
      </section>

      {/* PROJECTS */}
      <section className="projects-section">
        <Projects />
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <Contact />
      </section>
    </main>
  );
}

export default Home;
