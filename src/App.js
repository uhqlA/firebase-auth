import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Components/Pages/Home/Home';
import ForgetPassword from "./Components/Pages/ForgetPassword/ForgetPassword";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Profile from "./Components/Pages/Profile/Profile"

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
