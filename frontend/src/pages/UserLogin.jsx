import { set } from "mongoose";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState({})
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        setUserData({
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')
    }
    return(
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
            <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e)=>
            handleFormSubmit(e)
        }>
            <h3 className="text-lg font-medium mb-2">What's Your Email Address</h3>
            <input 
            required 
            value={email}
            onChange ={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="text" 
            placeholder="Enter your Email"/>
            <h3 className="text-lg font-medium mb-2">Enter Your Password</h3>
            <input 
            required 
            onChange ={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password" 
            placeholder="Enter your Password"/>
            <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Login</button>
            <p className="text-center">New to Uber? <Link to='/signup' className="text-blue-600">Create a new account</Link></p>
            
        </form>
            </div>
            <div>
                <Link to='/captain-login' className="bg-[#10b461] flex justify-center items-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin