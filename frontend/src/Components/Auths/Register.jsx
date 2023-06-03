import React from "react";
import "../Styling/Register.css";
import { Button } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";

function Register() {
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleFNameChange = (event) => {
    setFName(event.target.value);
  };
  const handleLNameChange = (event) => {
    setLName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/signup", {
        first_name: fName,
        last_name: lName,
        phone_number: phoneNumber,
        email: email,
        password: password,
      })
      .then((res) => {
        Cookies.set("jwt", res.data.cookie);
      });
  };
  return (
    <div className="main">
      <h1 className="text">Register</h1>
      <form className="form">
        <div className="innerdiv">
          <label>Fitst Name:</label>
          <input
            className="form-control"
            type="text"
            name="Name"
            onChange={handleFNameChange}
          />
          <br />
          <label>Last Name:</label>
          <input
            className="form-control"
            type="text"
            name="UserName"
            onChange={handleLNameChange}
          />
          <br />
          <label>Phone Number:</label>
          <input
            className="form-control"
            type="number"
            name="Number"
            onChange={handlePhoneNumberChange}
          />
          <br />
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
            onChange={handlePasswordChange}
          />
          <br />
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
          &nbsp;&nbsp;
          <Button
            style={{ color: "white" }}
            variant="contained"
            color="error"
            href="/login"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
