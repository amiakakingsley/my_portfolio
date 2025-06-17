import React, { useEffect, useState } from 'react'
import "./Component.css"
import ComponentC from "./ComponentC.jsx"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../context/UserContext.jsx'


function ComponentB() {

  const {email} = useContext(UserContext);
  const [message, setMessage] = useState("No Email Available")
  

  useEffect(()=>{
     setMessage("Your Email is")
  },[email])
  return (
    <div className='box'>
        <h2>ComponentB </h2>
        <h3>{message} {email}</h3>
        <ComponentC />
    </div>
  )
}

export default ComponentB