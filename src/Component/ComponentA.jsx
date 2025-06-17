import React, { useState, useContext } from 'react';
import "./Component.css";
import ComponentB from "./ComponentB.jsx";
import { UserContext } from '../context/UserContext.jsx';

function ComponentA () {
  const { setUser, user1 } = useContext(UserContext);
  const [inputValue, setInputValue] = useState(user1 || "Amiaka Kingsley");

  const save = (e) => {
    e.preventDefault();
    setUser(inputValue);
    setInputValue(""); // Clear input after saving
  };

  return (
    <div className="content">
      <div className='box'>
        <h1 style={{color: "yellow"}}>A simple Username context to share a user's name and Email across multiple components using React useContext Hooks.</h1>

        <h1>ComponentA</h1>

        <h2>Edit Name</h2>
        <form onSubmit={save}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          />
          <input type="submit" value="Save" />
        </form>

        <h2>{`Hello ${user1}`}</h2>

        <ComponentB />
      </div>
    </div>
  );
}

export default ComponentA;
