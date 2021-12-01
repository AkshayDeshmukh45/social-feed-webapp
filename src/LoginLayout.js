import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function LoginLayout() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const history = useHistory();

  useEffect =
    (() => {
      if (localStorage.getItem(`user-info`)) {
        history.push("./Login");
      }
    },
    []);

  async function login() {
    console.warn("Data", email, password);
    let items ={email, password};
    let result = await fetch('LoginApi.json')
    method: 'POST',
    header: {
        'content-type': 'application/json',
        "Accept": 'application/json'
    },
    body: JSON.stringify(items)
  });
  result= await result.json();
  localStorage.setItem('user-info',JSON.stringify(result));
  history.push(./Login)

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Login Page</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Container>
        ...
        <Row>
          <Col xs="6">
            <Button color="primary" className="px-4" onClick={login}>
              Login
            </Button>
          </Col>
          <Col xs="6" className="text-right">
            <Button color="link" className="px-0">
              Forgot password?
            </Button>
          </Col>
        </Row>
        ...
      </Container>
    </div>
  );
}
export default LoginLayout;
