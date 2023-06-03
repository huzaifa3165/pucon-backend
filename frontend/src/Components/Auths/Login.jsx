import React from "react";
import "../Styling/Login.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        Cookies.set("jwt", res.data.cookie);
      });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="main1">
      <h1 className="text1">Login</h1>
      <form className="form1">
        <div className="innerdiv1">
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            name="Email"
            onChange={handleEmailChange}
          />
          <br />
          <label>Password:</label>
          <input
            className="form-control"
            type="password"
            name="Password"
            onChange={handlePassChange}
          />
          <br />
          <Button onClick={handleSubmit} variant="contained" color="success">
            Submit
          </Button>
        </div>
      </form>
      <br />
      <br />
      <Link href="/register">Don't have an account? Register here.</Link>
    </div>
  );
}

export default Login;
