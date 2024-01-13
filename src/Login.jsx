import { useState } from "react";
import "./index.css";
const Login = () => {
  const handleSubmit = () => {};
  return (
    <section id="login">
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <h2 id="form_head" >login</h2>
          <div>
            <label htmlFor="email">email</label>
            <input type="email" id="password" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="text" id="password" />
          </div>
          <div className="btn">
          <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
