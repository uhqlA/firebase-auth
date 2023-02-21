import React, { useState } from "react";
import "./Register.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../../OAuth/OAuth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { db } from "../../../Firebase/Firebase";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import VideoBg from "../../Assets/video-1.mp4";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { name, number, email, password, confirmpassword } = formData;
  const navigate = useNavigate();
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData }; //object
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      //sends data to db (a promise)
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Registration successful");
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong while Registering");
    }
  }

  return (
    <div className="section">
      <div className="overlay"></div>
      <video autoPlay loop muted>
        <source src={VideoBg} type="" />
      </video>

      <div className="cover-register">
        <h1 className="h1-register">Register</h1>

        <div className="label">
          <form className="form" onSubmit={onSubmit}>
            <div className="div-form"></div>
            <input
              className="input"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
            />

            <input
              className="input"
              type="text"
              id="number"
              value={number}
              onChange={onChange}
              placeholder="Phone Number"
            />

            <input
              className="input"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder=" Email Address"
            />

            <div className="relative">
              <input
                className="input"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder=" Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-4 text-xl curser-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-4 text-xl curser-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            <div className="relative">
              <input
                className="input"
                type={showPassword ? "text" : "password"}
                id="confirmpassword"
                value={confirmpassword}
                onChange={onChange}
                placeholder="Confirm Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-4 text-xl curser-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-4 text-xl curser-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            <div className="account">
              {/* <p className="register">
                                <Link to="/forget-password"
                                    className="text-blue-600 hover:text-red-800
                                transition duration-200
                                ease-in-out">Forgot Password?</Link>
                            </p> */}
            </div>
            <button className="register-btn" type="subtmit">
              Register
            </button>
            <div className="div-1"></div>
            <p className="login">
              Have an Account?
              <Link
                to="/login"
                className="text-blue-600 hover:text-red-800
                            transition duration-200
                            ease-in-out ml=1"
              >
                Login
              </Link>
            </p>
            <p className="or-para">or</p>
            <OAuth />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
