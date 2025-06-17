import React, { useState } from 'react';

function QuoteGenerator() {
  const quotes = [
  "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
  "The best error message is the one that never shows up. – Thomas Fuchs",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie",
  "Any one can write code that a computer can understand, but a good programmer writes code that humans understands. – Martin Fowler",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "A good programmer is someone who always looks both ways before crossing a one-way street. – Doug Linder",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
  "It’s not a bug – it’s an undocumented feature. – Anonymous",
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
  "Great code is poetry. – Kent Beck",
  "You are the compiler of your own success. – Unknown"
];


  const [quote, setQuote] = useState('You are the compiler of your own success');

  const getQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Inspirations 💡</h2>
      <p style={{ marginTop: '1.5rem', fontSize: '20px', fontStyle: 'normal' }}>
        {quote}
      </p>
      <button
        onClick={getQuote}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#6366f1',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Next  
      </button>
      
    </div>
  );
}

export default QuoteGenerator;
