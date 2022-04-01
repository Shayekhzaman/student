import React from "react";
import "./Login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let history = useHistory();

  const handleEmailChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // console.log("open");
        history.push("/homePage");
      })
      .catch((error) => {
        const message = error.message;
        if (message === "Firebase: Error (auth/wrong-password).") {
          alert("Wrong password");
        }
        if (message === "Firebase: Error (auth/user-not-found).") {
          alert("User not found");
        }
      });
  };

  // registration
  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("create account successfully");
      })
      .catch((err) => {
        const message = err.message;
        if (
          message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          alert("Password should be 6 characters");
        }
        console.log(message);
      });
  };

  return (
    <div id="body">
        <div id="x">
      <div id="main">
        <div className="h-tag">
          <h2 > Student Supporter Account</h2>
        </div>
        {/* <!-- Login box --> */}
        <div className="login">
          <table cellspacing="2" align="center" cellpadding="8" border="0">
            <tr>
              <td>Enter User Name :</td>
              <td>
                <input
                  onBlur={handleEmailChange}
                  type="email"
                  classNameName="form-control"
                  id="inputEmail3"
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>Enter Password :</td>
              <td>
                <input
                  onBlur={handlePasswordChange}
                  type="password"
                  classNameName="form-control"
                  id="inputPassword3"
                  required
                />
              </td>
            </tr>
            <br />
            <tr>
              <td></td>
              <td>
                <button
                  type="submit"
                  onClick={handleLogin}
                  id="loginButton"
                  classNameName="btn btn-primary"
                >
                  Login
                </button>

                <button
                  type="submit"
                  onClick={handleRegistration}
                  id="registrationButton"
                  classNameName="btn btn-primary"
                >
                  Registration
                </button>
              </td>
            </tr>
          </table>
        </div>
        {/* <!-- login box div ending here.. --> */}
      </div>
    </div>
    </div>
  );
};

export default Login;
