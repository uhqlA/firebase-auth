import React, { useState } from "react";
import "./ForgetPassword.css";
import VideoBg from "../../Assets/video-1.mp4";

import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Link with password recovery was send to your email");
      navigate("/login");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  }

  return (
    <div className="section">
      <div className="overlay"></div>
      <video autoPlay loop muted>
        <source src={VideoBg} type="" />
      </video>

      <div className="cover-forget">
        <h2 className="h1-forgot">Forget Password</h2>
        <p className="p-forgot">Enter your email to reset password</p>

        <div className="label">
          <form onSubmit={onSubmit}>
            <div className="form">
              <div className="div-form">
              
                <input
                  className="input-forgot"
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  placeholder=" Email Address"
                  required
                />              
              <button className="submit-btn" type="submit">
                Reset Password
              </button>
              </div>
              </div>
          
          </form>
       

        <p className="register">
          Have and Account?
          <a
            href="/"
            style={{
              color: "blue",
              fontWeight: "bold",
            }}
          >
            Login Instead.
          </a>
        
        </p>
        <p className="register">
          Don't have an account?
          <a
            href="/register"
            style={{
              color: "blue",
              fontWeight: "bold",
            }}
          >
            Register.
          </a>
          {/* <Link to="/register">Register</Link> */}
        </p>
      </div>
    </div>
    </div>
  );
}
export default ForgetPassword;
