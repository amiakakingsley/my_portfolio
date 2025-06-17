import React from 'react'
import "./Project.css"
import hotelImage from "../assets/images/hotel.jpg"
import quizAddQuetion from "../assets/images/quizAddQuetion.png"
import quizHome from "../assets/images/quizHome.png"
import adminDeposite from "../assets/images/adminPage.png"
import bit from "../assets/images/bit.png"
import dashBoardView from "../assets/images/dashBoardView.png"
import classamigo from "../assets/images/classamigo.png"

import createCourse from "../assets/images/createCourse.png"

const Projects = () => {

  const bitImaheStyle = {
    height: "200px",
    width: "100px",
    display: "inline-block"
  }


  return (
    <div>
        <section className="section_4">
    <h2>Projects I've worked On</h2>


    <div className="projects">
      {/* ........................................ */}
      <div className='colume'>
        <div>
          <h1>A Hotel Management System</h1>
          <p>A system that manages all the activities that takes place in a hotel organization</p>
     
        </div>
        <div className='images'>
          <img className='img' src={hotelImage} alt="" />
          <img className='img' src={adminDeposite} alt="" />
          
        </div>
          <a href="https://github.com/amiakakingsley/Hotel_Management_System">GitHub</a>
      </div>

      {/* ........................................ */}
       <div className='colume'>
        <div>
          <h1>A Quiz Platform</h1>
          <p>"A Quiz Platform" is a web-based application built with Spring Boot. It allows users to take quizzes or exams online. After completing the quiz, the system automatically scores the participant based on their performance.</p>
        </div>
        <div className='images'>
          <img className='img' src={quizAddQuetion} alt="" />
          <img className='img' src={quizHome} alt="" />
        </div>

        <a href="https://github.com/amiakakingsley/springQuitProjects/tree/main/src">GitHub</a>
      </div> 


      {/* ........................................ */}
       <div className='colume'>
        <div>
          <h1>Crypto Dashboard Web App</h1>
          <p>A React-based web application that provides real-time information on cryptocurrencies using the CoinGecko API. The app displays a list of top cryptocurrencies, price charts, market trends, and allows users to search and view detailed stats for each coin.</p>
     
        </div>
        <div className='images'>
          <img style={bitImaheStyle} src={bit} alt="" />
          <img style={bitImaheStyle} src={dashBoardView} alt="" />
          
        </div>
          <a href="https://github.com/amiakakingsley/Kings_Cryptos/tree/main/src">GitHub</a>
      </div>
  
      <div className='colume'>
        <div>
          <h1>School Management Web Application</h1>
          <p>This wep  App is built to manage the daily operations of an educational institution. It's built using Spring Boot for the backend and uses Spring Security to control access to features based on user roles.The platform supports three main types of users, Admin, Tutor and Student Roles</p>
       
        </div>
        <div className='images'>
          <img className='img' src={classamigo} alt="" />
           <img className='img' src={createCourse} alt="" />
        </div>

           <a href="https://github.com/amiakakingsley/ClassAmigo">View gitHub Repository</a>
      </div>
      
       <div className='colume'>
        <div>
          <h1>A Blog Application</h1>
          <p>This is a full-stack blog application built using React for the frontend and Spring Boot for the backend. The application uses MongoDB as its database, which runs inside a Docker container.
</p>
          <a href="https://github.com/amiakakingsley/React-SpringBoot-mySql_Docker_container/tree/main/Blog">View gitHub Repository</a>
        </div>
        <div className='images'>
          <img  alt="" />
        </div>
      </div> <div className='colume'>
        <div>
          <h1>MongoConnectApp</h1>
          <p>An application built with Node.js, HTML, and CSS that connects to a MongoDB database running in a Docker container to store and retrieve data dynamically from a web interface.</p>
          <a href="https://github.com/amiakakingsley/Connecting-a-node-Application-to-a-docker-mongoDb-Container/blob/main/MongoDb.js">View gitHub Repository</a>
        </div>
        <div className='images'>
          <img  alt="" />
        </div>
      </div>
      <div ><button className='btn'>view more</button></div>
    </div>

  </section>


    </div>
  )
}

export default Projects 
