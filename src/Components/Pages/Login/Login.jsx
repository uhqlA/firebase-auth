import React, { useState } from "react";
import "./Login.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
//import { Link } from "react-router-dom";
import OAuth from "../../OAuth/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import VideoBg from "../../Assets/video-2.mp4";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/header");
      }
    } catch (error) {
      toast.error("Wrong User Credentials");
    }
  }

  return (
    <div className="section">
      <div className="overlay"></div>
      <video autoPlay loop muted>
        <source src={VideoBg} type="" />
      </video>

      <div className="cover-login">
        <h1 className="h1-login">Login</h1>

        <div className="label">
          <form onSubmit={onSubmit}>
            <div className="form">
              <div className="div-form">

                <input
                  className="input"
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  placeholder=" Email Address"
                  required
                />

                <div className="relative">
                  <input
                    className="input"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={onChange}
                    placeholder=" Password"
                    required
                  />
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className="absolute  top-3 text-xl curser-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEye
                      className="absolute   top-3 text-xl curser-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </div>

                <div className="account"></div>
                <button className="login-btn" type="subtmit">
                  Login
                </button>
                <div className="div-1">
                  <p className="or-para">or</p>
                </div>
              </div>
            </div>
            <OAuth />
          </form>
        </div>
        <p className="register">
          Forgoten Password?
          <a
            href="/forget-password"
            style={{
              color: "blue",
              fontWeight: "bold",
            }}
          >
            Reset.
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
        </p>
      </div>
    </div>
  );
}
export default Login;
