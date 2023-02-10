import React, { useState } from "react";
import "./ForgetPassword.css"

import { Link } from "react-router-dom";
import OAuth from "../../OAuth/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function ForgetPassword() {
   
    const navigate = useNavigate ();
    const [email, setEmail] = useState("");
    
    function onChange(e) {
        setEmail (e.target.value)
        }

        async function onSubmit(e){
            e.preventDefault ()
                try {
                    const auth = getAuth ()
                    await sendPasswordResetEmail (auth, email)
                    toast.success ("Link with password recovery was send to your email");
                    navigate("/login")

                }catch (error){
                    toast.error ("Could not send reset password");
                }
            
        }
    
    return (
        <section className="section">
            <h1 style={{
              fontSize: "20px",
            }}>Forgot Password</h1>
            <div className="container">
                <div className="form">
                    <form onSubmit={onSubmit}>
                        <input className="inputEmail"
                            type="email"
                            id="email"
                            value={email}
                            onChange={onChange}
                            placeholder=" Email Address"
                            required />


                    
                        <div className="account">
                            <p className="register">New User?
                                <Link to="/register"
                                    className="text-red-600 hover:text-red-800
                            transition duration-200
                            ease-in-out ml=1">Register</Link>
                            </p>
                            <p className="register">
                                <Link to="/login"
                                    className="text-blue-600 hover:text-red-800
                                transition duration-200
                                ease-in-out">Login instead.</Link>
                            </p>
                        </div>
                        <button className="btn" type="subtmit" >reset password</button>
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
export default ForgetPassword;