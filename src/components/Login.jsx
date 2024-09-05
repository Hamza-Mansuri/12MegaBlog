import React, {useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'

//particular method import karwayi
//store wala authLogin
import { login as authLogin } from '../store/authSlice'

import {Button, Input, Logo} from './index'

import authService from '../appwrite/auth'

import { useDispatch } from 'react-redux'

//Imp React-Hook-Form
import { useForm } from "react-hook-form"

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    //react-hook-form docs
    const {register, handleSubmit} = useForm()

    const [error, setError] = useState("")

    //jaanbuch ke ek login method banayi he taaki hadleSubmit aur isme login method me confusion na ho.
    //asyn hum isliye use krte he jb info jaake wapas aati he tb.

    const login = async(data) => {

        //always pehle errors EmptyOut krdo
        setError("")

        //send krte he data, ki jaata bhi he yaa nahi ,is liye try catch
        try {
            
            const session = await authService.login(data)

            //agar session he to user logedIn he, nahi he to check krna padega.
            //agar session he to getCurentUser
            if(session)
            {
                //Hammesha userData await se niklega
                const userData = await authService.getCurrentUser()

                //login agar kr rahe ho tostatus automatic true ho jaaega.

                //if userData aaya he to disptch krdo
                if(userData) dispatch(authLogin(userData)); //if user yaha tk aa chuka he, logedIn ho chuka he to usko yaha rakhna hi kyu he, kahi aur bhejo.
                
                //else
                //Link me Click krna padta he
                //navigate me programised way me hum user ko bhej sakte he.
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (

    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                    {/* Logo liya he */}
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">

                    {/* if Dont have an Account navigate kara diya signUp pe */}
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {/* Ineresting thing is, displaying the error */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        {/* Form is staring from here and main thing is onSubmit */}
        {/* jb bhi form submit hoga, tb handleSubmit call hoga, aur me mere according form ko handle karunga
        handleSubmit as a keyword use hota he */}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"

                //register automatic saari values ko lega, aur automatic saari states ko manage karega.
                //{...register("email- Key", {objects})} this is syntax
                {...register("email", {
                    required: true,
                    
                    //validate ke andr konsa pattern math krna he.
                    //matchPattern ke andr value jaati he, aur pattern chatGPT se.
                    validate: {
                        
                        //.test for value, agr value match ho rahi he rgex se to thik he, warna || krke massg
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login

//========

// import React, {useState} from 'react'
// import {Link, useNavigate} from 'react-router-dom'
// import { login as authLogin } from '../store/authSlice'
// import {Button, Input, Logo} from "./index"
// import {useDispatch} from "react-redux"
// import authService from "../appwrite/auth"
// import {useForm} from "react-hook-form"

// function Login() {
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const {register, handleSubmit} = useForm()
//     const [error, setError] = useState("")

//     const login = async(data) => {
//         setError("")
//         try {
//             const session = await authService.login(data)
//             if (session) {
//                 const userData = await authService.getCurrentUser()
//                 if(userData) dispatch(authLogin(userData));
//                 navigate("/")
//             }
//         } catch (error) {
//             setError(error.message)
//         }
//     }

//   return (
//     <div
//     className='flex items-center justify-center w-full'
//     >
//         <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
//         <div className="mb-2 flex justify-center">
//                     <span className="inline-block w-full max-w-[100px]">
//                         <Logo width="100%" />
//                     </span>
//         </div>
//         <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
//         <p className="mt-2 text-center text-base text-black/60">
//                     Don&apos;t have any account?&nbsp;
//                     <Link
//                         to="/signup"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign Up
//                     </Link>
//         </p>
//         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//         <form onSubmit={handleSubmit(login)} className='mt-8'>
//             <div className='space-y-5'>
//                 <Input
//                 label="Email: "
//                 placeholder="Enter your email"
//                 type="email"
//                 {...register("email", {
//                     required: true,
//                     validate: {
//                         matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                         "Email address must be a valid address",
//                     }
//                 })}
//                 />
//                 <Input
//                 label="Password: "
//                 type="password"
//                 placeholder="Enter your password"
//                 {...register("password", {
//                     required: true,
//                 })}
//                 />
//                 <Button
//                 type="submit"
//                 className="w-full"
//                 >Sign in</Button>
//             </div>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default Login