import React, { useState, useContext } from "react";
import ComponentD from "./ComponentD.jsx";
import { UserContext } from "../context/UserContext.jsx";
import "./Component.css";

function ComponentC() {
  const [emailValue, setEmailValue] = useState("");
  const { setEmail } = useContext(UserContext);

  const submitEmail = (e) => {
    e.preventDefault();
    setEmail(emailValue);
    setEmailValue("");
  };

  return (
    <div className="card">
      <h1>ComponentC</h1>
      <form className="form-group" onSubmit={submitEmail}>
        <input
          type="email"
          placeholder="Enter your email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          required
        />
        <input type="submit" value="Add Email" />
      </form>

      <ComponentD />
    </div>
  );
}

export default ComponentC;
