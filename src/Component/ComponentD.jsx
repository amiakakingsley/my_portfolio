import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import "./Component.css";

function ComponentD() {
  const { user1 } = useContext(UserContext);

  return (
    <div className="card">
      <h1>ComponentD</h1>
      <h2>{`Welcome, ${user1}`}</h2>
    </div>
  );
}

export default ComponentD;
