import React from 'react'
import "./Component.css"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext';

function ComponentD() {

    const {user1} = useContext(UserContext);

  return (
    <div className='box'>
        <h1>ComponentD</h1>
        <h2>{`Welcome ${user1}`}</h2>
    </div>
  )
}

export default ComponentD