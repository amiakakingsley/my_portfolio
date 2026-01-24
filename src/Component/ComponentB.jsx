import React, { useEffect, useState, useContext } from "react";
import ComponentC from "./ComponentC.jsx";
import { UserContext } from "../context/UserContext.jsx";
import "./Component.css";

function ComponentB() {
  const { email } = useContext(UserContext);
  const [message, setMessage] = useState("No Email Available");

  useEffect(() => {
    if (email) setMessage("Your Email is");
  }, [email]);

  return (
    <div className="card">
      <h1>ComponentB</h1>
      <h2>{message} {email}</h2>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
