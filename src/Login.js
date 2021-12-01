import React, { useState } from "react";
import { Alert } from "antd";

export default function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password", JSON.parse(passwordlog));
    let mail = localStorage.getItem("Email", JSON.parse(emaillog));

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmaillog(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPasswordlog(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Login
        </button>
      </form>
      ;
    </div>
  );
}
