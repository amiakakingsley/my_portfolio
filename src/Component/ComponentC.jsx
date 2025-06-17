import React, { useState, useContext } from 'react';
import ComponentD from "./ComponentD.jsx";
import { UserContext } from '../context/UserContext.jsx';

function ComponentC() {
  const [emailvalue, setEmailValue] = useState("");
  const { setEmail } = useContext(UserContext);

  function handleEmailInput(e) {
    setEmailValue(e.target.value);
  }

  function submitEmail(e) {
    e.preventDefault();
    setEmail(emailvalue);
    setEmailValue(""); // Optional: clear the input after submit
  }

  return (
    <div className='box'>
      <h2>ComponentC</h2>

      <div className="setemail">
        <form onSubmit={submitEmail}>
          <input
            type="email"
            placeholder='Email'
            value={emailvalue}
            onChange={handleEmailInput}
          />
          <input type="submit" value="Add Email" />
        </form>
      </div>

      <ComponentD />
    </div>
  );
}

export default ComponentC;
