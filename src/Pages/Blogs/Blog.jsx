import React, { useState } from 'react';
import "./Blog.css"
import QuoteGenerator from '../../layout/QuoteGenerator';

function Blog() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const handleGreet = () => {
    if (name.trim()) {
      setGreeting(`👋 Hello, ${name}! Great to have you here.`);
    } else {
      setGreeting("Please enter your name.");
    }
  };

  const changeColor = () => {
    const colors = ['#ffcccb', '#c1f0f6', '#d1ffd6', '#f4d1ff', '#fef9c3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div className="play-page" style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '2rem' }}>
      <h1>🎮 Welcome User</h1>

      <div className="greeting-box">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleGreet}>Say Hello</button>
        <p>{greeting}</p>
      </div>

      <section>
         <QuoteGenerator />
      </section>

      <div className="color-box">
        <button onClick={changeColor}>🎨 Change Background</button>
      </div>
    </div>
  );
}

export default Blog;
