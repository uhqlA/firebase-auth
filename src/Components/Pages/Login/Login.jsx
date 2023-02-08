import React, { useState } from "react";
import "./Login.css"
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom";
//import Planting from "../../Assets/treeplanting.jpg"

function Login () {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState ({
        email: "",
        password: "",
    });
    const {email, password} = formData;
    function onChange (e){
        setFormData ((prevState)=>({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    return (
        <section className="section">
            <h1>Login</h1>
            <div className="container">
                {/* <div className="image w-full rounded-2xl">
                    <img src={Planting}
                     alt="tree" />
                </div> */}
                <div className="form">
                    <form >
                        <input className = "inputEmail" 
                        type="email" 
                        id="email"
                        value={email} 
                        onChange ={onChange} 
                        placeholder=" Email Address"
                        required/>

                        
                        <div className="relative">
                        <input className = "inputPassword" 
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password} 
                        onChange ={onChange} 
                        placeholder=" Password"
                        required/>
                        {showPassword ? (<AiFillEyeInvisible className="absolute right-3 top-4 text-xl curser-pointer"
                        onClick={()=> setShowPassword
                            ((prevState) => !prevState)}/>) :
                         <AiFillEye className="absolute right-3 top-4 text-xl curser-pointer"
                         onClick={()=> setShowPassword
                            ((prevState) => !prevState)}/>}
                        </div>
                        <div>
                            <p>Don't have an account?
                                <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
    )
}
export default Login;