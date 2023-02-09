import React, { useState } from "react";
import "./Register.css"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom";
import OAuth from "../../OAuth/OAuth";
import { createUserWithEmailAndPassword, getAuth,updateProfile } from "firebase/auth";
import { db } from "../../../Firebase/Firebase"
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",    });
    const { name, email, password,confirmpassword } = formData;
    const navigate = useNavigate ();
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    async function onSubmit (e){
        e.preventDefault ()

        try {
            const auth = getAuth ();
           const userCredential = await createUserWithEmailAndPassword ( auth, email,password);

           updateProfile(auth.currentUser, {
            displayName : name
           })
           const user = userCredential.user;
           const formDataCopy = {...formData} //object
           delete formDataCopy.password;
           formDataCopy.timestamp = serverTimestamp
           ();
                //sends data to db (a promise)
           await setDoc(doc(db, "users", user.uid), formDataCopy)
           toast.success("Registration successful");
           navigate("/login")
        } catch (error){
            toast.error("Something went wrong while Registering")
        }
    }
    return (
        <section className="section">
            <h1 style={{
              fontSize: "20px",
            }}>Register</h1>
            <div className="container">
                <div className="form">
                    <form onSubmit={onSubmit}>
                    <input className="inputEmail"
                            type="text"
                            id="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Full Name"
                            />

                        <input className="inputEmail"
                            type="email"
                            id="email"
                            value={email}
                            onChange={onChange}
                            placeholder=" Email Address"
                             />


                        <div className="relative">
                            <input className="inputPassword"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={onChange}
                                placeholder=" Password"
                                />
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
                                id="confirmpassword"
                                value={confirmpassword}
                                onChange={onChange}
                                placeholder="Confirm Password"
                                />
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