import React, { useState } from "react";
import "../loginmodal/Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import loginimage from "../../assets/loginImg.png";
import SignUp from "../signupmodal/Signup";




const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const openSignUpModal = () => {
    setShowSignUp(true);
  };

  const closeSignUpModal = () => {
    setShowSignUp(false);
  };

  const textlogin = {
    conecteazate: "Conectează-te",
    inregistreazate: "Înregistrează-te",
    placeholderpassword: "Introdu parola",
    placeholderuser: "Introdu username-ul",
    username: "Utilizator",
    password: "Parolă",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const userData = {
        username,
        password,
      };
  
      const response = await fetch("http://localhost:5050/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
  
      const data = await response.json();
      console.log("Răspuns de la server:", data);
      const token = data.token;
  
  
    } catch (error) {
      console.error("Eroare în timpul cererii:", error);
    }
  };
  



  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => handleLogin(false)}>
          &times;
        </span>
        <div className="loginimage">
          <img src={loginimage} alt="loginimage" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="username-container">
            <label htmlFor="username">{textlogin.username}</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-username"
              placeholder="Introdu username-ul"
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">{textlogin.password}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-password"
              required
              placeholder="Introdu parola"
            />
          </div>
          <div className="container-butoane-login">
            <button
              type="button"
              className="butoane-logare"
              onClick={openSignUpModal}
            >
              {textlogin.inregistreazate} <FontAwesomeIcon icon={faUserPlus} />
            </button>
            <button type="submit" className="butoane-logare">
              {textlogin.conecteazate}
              <FontAwesomeIcon icon={faSignInAlt} />
            </button>
          </div>
        </form>
      </div>
      {showSignUp && <SignUp handleSwitchToLogin={closeSignUpModal} />}
    </div>
  );
};

export default Login;
