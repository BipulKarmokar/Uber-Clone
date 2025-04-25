import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
    const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [fistName, setFirstName] = useState("")
        const [lastName, setLastName] = useState("")
        const [userData, setUserData] = useState({})
        const handleFormSubmit = (e) =>{
            e.preventDefault()
            setUserData({
                fullName:{
                    firstName: fistName,
                    lastName: lastName
                },
                email: email,
                password: password
            })
            setFirstName('')
            setLastName('')
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
            <h3 className="text-lg font-medium mb-2">What's Your Name</h3>
            <div className="flex justify-between gap-2">
            <input 
            required 
            value={fistName}
            onChange ={(e) => setFirstName(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            type="text" 
            placeholder="First Name"/>
            <input 
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value )}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            type="text" 
            placeholder="Last Name"/>
            </div>
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
            <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign Up</button>
            <p className="text-center">Already have an account? <Link to='/login' className="text-blue-600">Login</Link></p>
            
        </form>
            </div>
            <div>
                <p className="text-xm text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores </p>
            </div>
        </div>
    )
}

export default UserSignup