import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import toast from 'react-hot-toast';

export const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className='sticky top-0 z-10 bg-richblack-800 rounded-full px-10 shadow-xl shadow-black opacity-95 mt-3 flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        
        <Link to="/">
            <img src={logo} alt="Brand Logo" width={160} height={32} loading='lazy'/>
        </Link>
        <nav >
            <ul className='text-white flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
            {   !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Log In</button>
                </Link>
            }
            {   !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700' onClick={()=>{
                        setIsLoggedIn(false)
                        toast.success("Logged Out")
                    }}>Log Out</button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
                </Link>
            }
        </div>

    </div>
  )
}
