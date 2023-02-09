import React, { useState } from "react";
import "./Login.css"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom";
import OAuth from "../../OAuth/OAuth";


function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    return (
        <section className="section">
            <h1 style={{
              fontSize: "20px",
            }}>Login</h1>
            <div className="container">
                <div className="form">
                    <form >
                        <input className="inputEmail"
                            type="email"
                            id="email"
                            value={email}
                            onChange={onChange}
                            placeholder=" Email Address"
                            required />


                        <div className="relative">
                            <input className="inputPassword"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={onChange}
                                placeholder=" Password"
                                required />
                            {showPassword ? (<AiFillEyeInvisible className="absolute right-3 top-4 text-xl curser-pointer"
                                onClick={() => setShowPassword
                                    ((prevState) => !prevState)} />) :
                                <AiFillEye className="absolute right-3 top-4 text-xl curser-pointer"
                                    onClick={() => setShowPassword
                                        ((prevState) => !prevState)} />}
                        </div>
                        <div className="account">
                            <p className="register">New User?
                                <Link to="/register"
                                    className="text-red-600 hover:text-red-800
                            transition duration-200
                            ease-in-out ml=1">Register</Link>
                            </p>
                            <p className="register">
                                <Link to="/forget-password"
                                    className="text-blue-600 hover:text-red-800
                                transition duration-200
                                ease-in-out">Forgot Password?</Link>
                            </p>
                        </div>
                        <button className="btn" type="subtmit" >Login</button>
                        <div className="div-1">
                            <p>or</p>
                        </div>
                        <OAuth />
                    </form>
                </div>
            </div>
        </section>

    )
}
export default Login;