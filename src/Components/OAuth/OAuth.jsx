import React from "react";
import { FcGoogle } from "react-icons/fc"
import "./OAuth.css"

function OAuth (){
    return(
        <button className="button">
            <FcGoogle className="icon"/>
            Continue with Google
        </button>
    )
}

export default OAuth;