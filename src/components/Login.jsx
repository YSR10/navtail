import React, { useState } from "react";
import { login } from "../features/userslice";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Dispatch = useDispatch;

  const handleSubmit = (e) => {
    e.preventDefault();

    Dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="submit-btn">
          LOG-IN
        </button>
      </form>
    </div>
  );
};

export default Login;
