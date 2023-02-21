import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDoc, serverTimestamp, setDoc, doc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-toastify";
import { db } from "../../Firebase/Firebase";
import "./OAuth.css"
import { useNavigate } from "react-router-dom";

function OAuth (){
    const navigate = useNavigate()
   async function onGoogleClick(){
        try{
            const auth = getAuth ()
            const provider = new GoogleAuthProvider ();
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            //check for the user
            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)

            //checking if the user already exist
            if (!docSnap.exists()){
                await setDoc(docRef,{
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(),
                })
            }
           navigate ("/header");

        }catch (error) {
            toast.error ("Could not authorize with Google")
            console.log(error)
        }
    }
    return(
        <button className="button"
        type="button"
        onClick={onGoogleClick}>
            <FcGoogle className="icon"/>
            Continue with Google
        </button>
    )
}

export default OAuth;