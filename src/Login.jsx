import React, { useState } from "react";
import "./index.css";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Use preventDefault instead of defaultPropagation
    alert(`${email} and ${password}`);
    setEmail('');
    setPassword('');
  };

  return (
    <section id="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 id="form_head">Login</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
