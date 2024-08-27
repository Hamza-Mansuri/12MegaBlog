import React from 'react'

//Logout ke liye kuch action lena padega, kuch dispatch krna padega, reducer lana padega

import { useDispatch } from 'react-redux' 

import { logout } from '../../store/authSlice'

import authService from '../../appwrite/auth'

function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutHandler = () => {

        //.then() se jb successfull logout ho gaya he to dispatch karalo store pr.
        authService.logout().then(() => {

            dispatch(logout())
            //taaki store ke andr jo imp information he wo updated rahe.
        })
    }

  return (
    
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Log Out</button>

  )
}

export default LogoutBtn