// //it is a mechanism that how pages and route are protected

// //it is a type of protected container

// import React, { useEffect, useState } from 'react'

// import {useSelector} from 'react-redux'

// import {useNavigate} from 'react-router-dom'

// //File ka name aur function ka name alag ho sakta he.
// export default function Protected({children, authentication = true}) {

//   const navigate = useNavigate()
//   const [loader, setLoader] = useState(true)

//   //store se puchhege ki aap logedin ho yaa nahi ho.
//   const authStatus = useSelector(state => state.auth.status)

//   useEffect(() => {

//     //Easy to understand

//     // if(authStatus === true)
//     // {
//     //   navigate("/")
//     // }
//     // else if(authStatus === false)
//     // {
//     //   navigate("/login")
//     // }

//     //true && false !== true
//     //final result
//     //true && true
//     if(authentication && authStatus !== authentication)
//     {
//       navigate("/login")
//     }
//     //false && true !== true
//     //final result
//     //false && false
//     else if(!authentication && authStatus !== authentication)
//     {
//       navigate("/")
//     }

//     setLoader(false)
//     //setLoader yaha pe false ho hi jaaega.

//   }, [authStatus, navigate, authentication])
//   //dependencies ki user ka status me change hua he to, kahi se navigate hoke aaya he to, authentication me kuch change.


//   return loader ? <h1>Loading...</h1> : <>{children}</>
// }


//==========

import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}