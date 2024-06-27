import React, { useState } from "react";
import "./NewsLetter.css";
function NewsLetter() {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };
  return (
    <div className='newsletter'>
      <div className='newsletter_left'>
        <p>Be the first to know about our upcoming events</p>
      </div>
      <div className='newsletter_right'>
        <p style={{ marginRight: "5px", fontSize: "1rem", fontWeight: "500" }}>
          Let's do it! —
        </p>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            required
            value={email}
            placeholder='Enter Your Email Address'
          />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
