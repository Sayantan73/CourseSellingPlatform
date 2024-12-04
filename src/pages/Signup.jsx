import React from 'react'
import { FormTemplate } from '../components/FormTemplate'
import signupImage from '../assets/signup.png'

export const Signup = ({setIsLoggedIn}) => {
  const data = {
    title: "Join the millions learning to code with studyNotion for Free",
    desc1: "Build Skills for today, tomorrow and beyond",
    desc2: "Education to future-proof your career",
    image: signupImage,
    formType: "signup",
    setIsLoggedIn: setIsLoggedIn
  }
  return (
    <div>
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
