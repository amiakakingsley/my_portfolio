import React, { useState, useContext } from "react";
import ComponentB from "./ComponentB.jsx";
import { UserContext } from "../context/UserContext.jsx";
import "./Component.css";

function ComponentA() {
  const { setUser, user1 } = useContext(UserContext);
  const [inputValue, setInputValue] = useState(user1 || "Amiaka Kingsley");

  const save = (e) => {
    e.preventDefault();
    setUser(inputValue);
    setInputValue("");
  };

  return (
    <div className="card">
      <h1>ComponentA</h1>
      <h3>A simple Username context to share a user's name and Email across multiple components using React useContext Hooks.</h3>

      <form className="form-group" onSubmit={save}>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>

      <h2>{`Hello, ${user1}`}</h2>

      <ComponentB />
    </div>
  );
}

export default ComponentA;
