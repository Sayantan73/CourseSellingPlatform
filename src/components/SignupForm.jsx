import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword, setShowPassword] = useState("false")
    const [accountType, setAccountType] = useState("student")

    function changeHandler(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Both Passwords do not match")
            return
        }
        toast.success("Account Created")
        console.log({...formData, accountType});
        navigate("/login")
    }
    return (
        <div className='w-full'>
        {/* student instructor button */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={ ()=> setAccountType("student")}>Student</button>
                <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={ ()=> setAccountType("instructor")}>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                {/* firstName and lastName */}
                <div className='mt-[20px] flex justify-between'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type="text" name="firstName" value={formData.firstName} onChange={changeHandler} placeholder='Enter First Name' />
                    </label>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type="text" name="lastName" value={formData.lastName} onChange={changeHandler} placeholder='Enter Last Name' />
                    </label>
                </div>

                {/* email field */}
                <div className="mt-[20px]">
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email<sup className='text-pink-200'>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type="email" name="email" value={formData.email} onChange={changeHandler} placeholder='Enter Email Address' />
                </label>
                </div>

                {/* newPassword and confirmPassword */}
                <div className='flex justify-between mt-[20px]'>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={changeHandler} placeholder='Enter New Password' />
                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type={showPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={changeHandler} placeholder='Confirm Password' />
                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                    
                </div>

                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12ps] py-[8px] mt-6'>Create Account</button>
            </form>
        </div>
    )
}
