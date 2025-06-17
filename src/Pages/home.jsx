import "./home.css"
import NavBar from "../layout/Navbar.jsx"
import profilePicture from "../assets/images/ok.jpg"

import Projects from "../layout/projects.jsx";
import Contact from "../layout/Contact.jsx";
import { Link } from "react-router-dom";
function Home(){
  return(
    <div> 
  
      <section className="section_1">
      <div className="firstSection"> 
        <p className="my_name">I'm Amiaka D. Kingsley,</p>
        <p className="interest">Full-Stack Developer</p>
        <p className="specialise">I specialise in building modern and responsive web Applications</p>
        <button className="button" type="button">
          <Link to={"/explore"}>Explore More</Link>
        </button>
      </div>
      <div className="secondSection">
        <img src={profilePicture} alt="" />
      </div>
      </section>

      <section className="Section_2">
      <h1>About Me</h1>
      <p>Hello! I'm Amiaka Kingsley Dinso, a passionate and driven Full Stack Developer with a Bachelor Degree in Computer Engineering. I have a strong foundation in modern web development technologies and frameworks. I specialize in building robust, scalable, and user-friendly web applications that combine powerful back-end logic with intuitive front-end design.</p>

      <h1>My Core Skills</h1>
      <p>With hands-on experience and a problem-solving mindset, I bring the following technical skills to the table</p>
    </section>

    <section className="section_3">
      <div className="section3_content">
        <ul className="list">
      <li className="list_title">Back-End  Development</li>
       <p>I have solid expertise in Java and Spring Boot, allowing me to build secure, high-performance RESTful APIs, enterprise-grade applications, and microservices with ease. My familiarity with Spring Security, JPA/Hibernate, and layered architecture ensures efficient and maintainable backend solutions.</p>
       </ul>
      </div>
      <div className="section3_content">
         <ul className="list">
      <li className="list_title">Front-End Development</li>
       <p>On the client side, I’m highly proficient in HTML, CSS, and JavaScript, with adiquate knowledge of React.js. I love creating responsive, dynamic, and interactive user interfaces that elevate user experiences across devices.</p>
       </ul>
      </div>
        <div className="section3_content">
       <ul className="list">
      <li className="list_title">Containerization & DevOps</li>
       <p>I embrace modern deployment practices using Docker to containerize applications, making them portable and easy to run in various environments. This also contributes to smoother CI/CD pipelines and development workflows.</p>
       </ul>
      </div>
        <div className="section3_content">
       <ul className="list">
      <li className="list_title">Database Management</li>
       <p>My experience with MySQL enables me to design and manage relational databases effectively, ensuring data integrity, efficient queries, and strong relationships between entities.</p>
       </ul>
      </div>
        <div className="section3_content">
         <ul className="list">
      <li className="list_title"> My Development Philosophy</li>
       <p>I believe in writing clean, well-structured code and continuously learning to stay current with the ever-evolving tech landscape. Whether I'm working on a solo project or collaborating in a team, I prioritize Code readability and maintainability, Scalable architecture, Agile methodologies and user-centered design</p>
       </ul>
      </div>
        <div className="section3_content">
         <ul className="list">
      <li className="list_title"> What I Offer</li>
       <p>As a full-stack developer, I bring end-to-end development capabilities to any project—from setting up backend servers and APIs to building pixel-perfect front-end interfaces. I enjoy transforming ideas into real-world digital solutions that make a difference.</p>
       </ul>
      </div>
     

    </section>

<section>
   <Projects/>
</section>

<section>
  <Contact/>
</section>


<section>
  <div className="footer">
     <h4>Thanks for visiting my website, and I'm looking forward to hear from you</h4>
  </div>
</section>
        
  
      


    </div>

    
   
  );
}

export default Home;