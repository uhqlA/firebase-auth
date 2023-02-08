
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';

import Logo from "../Assets/logo2.png";
import "./Header.css"

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
       function pathRoute(route){
        if(route === location.pathname){
            return true;
        }
       }
  return (
    <div className='bg-white border-b shandow-sm sticky top-0z-50'>
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img src={Logo} alt="Logo" className='Logo'
                onClick={() => navigate("/")}/>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-m font-semibold text-green-400 border-b-[3px] border-b-transparent ${pathRoute ("/") && "text-black border-b-red-500 "}`}
                    onClick={() => navigate("/")}
                    >Home</li>
                    <li className={`cursor-pointer py-3 text-m font-semibold text-green-400 border-b-[3px] border-b-transparent ${pathRoute ("/dashboard") && "text-black border-b-red-500 "}`}
                    onClick={() => navigate("/dashboard")}
                    >Dashboard</li>
                    <li className={`cursor-pointer py-3 text-m font-semibold text-green-400 border-b-[3px] border-b-transparent ${pathRoute ("/login") && "text-black border-b-red-500 "}`}
                    onClick={() => navigate("/login")}
                    >Login</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header;