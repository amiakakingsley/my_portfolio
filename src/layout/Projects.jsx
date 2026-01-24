
import React from 'react'
import "./Project.css"
    import hotelImage from "../assets/images/hotel.jpg"

    import quizHome from "../assets/images/quizHome.png"
    
    import bit from "../assets/images/bit.png"
    import dashBoardView from "../assets/images/dashBoardView.png"
    import classamigo from "../assets/images/classamigo.png"

    import createCourse from "../assets/images/createCourse.png"
     

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <header className="section-header">
        <h2>Projects I’ve Worked On</h2>
        <p>
          A selection of full-stack and frontend projects showcasing my skills
          in Java, Spring Boot, React, and modern web technologies.
        </p>
      </header>

      <div className="projects-grid">

        {/* HOTEL MANAGEMENT SYSTEM */}
        <article className="project-card">
          <div className="project-content">
            <h3>Hotel Management System</h3>
            <p>
              A system that manages daily operations within a hotel organization,
              including administration and transaction handling.
            </p>

            <a
              href="https://github.com/amiakakingsley/Hotel_Management_System"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-images">
            <img src={hotelImage} alt="Hotel management system interface" />
            
          </div>
        </article>

        {/* QUIZ PLATFORM */}
        <article className="project-card">
          <div className="project-content">
            <h3>Quiz Platform</h3>
            <p>
              A Spring Boot–based quiz application that allows users to take exams
              online and receive automated scoring based on performance.
            </p>

            <a
              href="https://github.com/amiakakingsley/springQuitProjects/tree/main/src"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-images">
           
            <img src={quizHome} alt="Quiz platform home page" />
          </div>
        </article>

        {/* CRYPTO DASHBOARD */}
        <article className="project-card">
          <div className="project-content">
            <h3>Crypto Dashboard Web App</h3>
            <p>
              A React-based application that displays real-time cryptocurrency
              data using the CoinGecko API, including price charts and market
              trends.
            </p>

            <a
              href="https://github.com/amiakakingsley/Kings_Cryptos/tree/main/src"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-images small-images">
            <img src={bit} alt="Cryptocurrency overview card" />
            <img src={dashBoardView} alt="Crypto dashboard view" />
          </div>
        </article>

        {/* SCHOOL MANAGEMENT SYSTEM */}
        <article className="project-card">
          <div className="project-content">
            <h3>School Management Web Application</h3>
            <p>
              A role-based school management platform built with Spring Boot and
              Spring Security, supporting Admin, Tutor, and Student roles.
            </p>

            <a
              href="https://github.com/amiakakingsley/ClassAmigo"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-images">
            <img src={classamigo} alt="School management dashboard" />
            <img src={createCourse} alt="Create course interface" />
          </div>
        </article>

        {/* BLOG APPLICATION */}
        <article className="project-card">
          <div className="project-content">
            <h3>Full-Stack Blog Application</h3>
            <p>
              A React and Spring Boot blog platform using MongoDB in a Docker
              container for scalable data storage and retrieval.
            </p>

            <a
              href="https://github.com/amiakakingsley/React-SpringBoot-mySql_Docker_container/tree/main/Blog"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        </article>

        {/* MONGO CONNECT APP */}
        <article className="project-card">
          <div className="project-content">
            <h3>MongoConnectApp</h3>
            <p>
              A Node.js application connected to a MongoDB database running in a
              Docker container, enabling dynamic data storage and retrieval.
            </p>

            <a
              href="https://github.com/amiakakingsley/Connecting-a-node-Application-to-a-docker-mongoDb-Container/blob/main/MongoDb.js"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        </article>

      </div>


    </section>
  );
};

export default Projects 
