import React, { useState } from "react";
import "./Register.css"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom";
import OAuth from "../../OAuth/OAuth";


function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",    });
    const { name, email, password,confirmpassword } = formData;
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    return (
        <section className="section">
            <h1>Register</h1>
            <div className="container">
                <div className="form">
                    <form >
                    <input className="inputEmail"
                            type="text"
                            id="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Full Name"
                            required />

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

                        <div className="relative">
                            <input className="inputPassword"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={confirmpassword}
                                onChange={onChange}
                                placeholder="Confirm Password"
                                required />
                            {showPassword ? (<AiFillEyeInvisible className="absolute right-3 top-4 text-xl curser-pointer"
                                onClick={() => setShowPassword
                                    ((prevState) => !prevState)} />) :
                                <AiFillEye className="absolute right-3 top-4 text-xl curser-pointer"
                                    onClick={() => setShowPassword
                                        ((prevState) => !prevState)} />}
                        </div>

                        <div className="account">
                            <p className="login">Have an Account?
                                <Link to="/login"
                                    className="text-red-600 hover:text-red-800
                            transition duration-200
                            ease-in-out ml=1">Login</Link>
                            </p>
                            <p className="register">
                                <Link to="/forget-password"
                                    className="text-blue-600 hover:text-red-800
                                transition duration-200
                                ease-in-out">Forgot Password?</Link>
                            </p>
                        </div>
                        <button className="btn" type="subtmit" >Register</button>
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
export default Register;