import React from 'react'
import { FormTemplate } from '../components/FormTemplate'
import loginImage from '../assets/login.png'

export const Login = ({setIsLoggedIn}) => {
  const data = {
    title: "Welcome Back",
    desc1: "Build Skills for today, tomorrow and beyond",
    desc2: "Education to future-proof your career",
    image: loginImage,
    formType: "login",
    setIsLoggedIn: setIsLoggedIn
  }
  return (
    <div className='h-screen'>
      <FormTemplate
        title={data.title}
        desc1={data.desc1}
        desc2={data.desc2}
        image={data.image}
        formType={data.formType}
        setIsLoggedIn={data.setIsLoggedIn}
      />
    </div>
  )
}
