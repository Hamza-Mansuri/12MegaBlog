// import React from 'react'

// import {Container, Logo, LogoutBtn} from '../index'

// import { Link } from 'react-router-dom'

// import { useSelector } from 'react-redux'

// import { useNavigate } from 'react-router-dom'

// function Header() {

//   //this status is accessing from authSlice, status:false.
//   const authStatus = useSelector((state) => state.auth.status)

//   const navigate = useNavigate()

//   //jb bhi iss tarah ki navigate banati he, bt ek ARRAY nayana jaata he aur uske upr loop kr diya jaata he.
//   const navItems = [

//     //{},{},{}
//     {
//       name: "Home",
//       slug: "/", //(URL)
//       active: true

//     },
//     {
//       name: "Login",
//       slug: "/login", //(URL)
//       active: !authStatus, //active depend akrega authStatus pe

//     },
//     {
//       name: "SignUp",
//       slug: "/signup", //(URL)
//       active: !authStatus,

//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts", //(URL)
//       active: authStatus,

//     },
//     {
//       name: "Add post",
//       slug: "/add-post", //(URL)
//       active: authStatus,

//     }
    

//   ]



//   return (
    
    
//     <header className='py-3 shadow bg-gray-500'>

//       <Container>

//         <nav className='flex'>

//           <div className='mr-4'>

//             <Link to='/'>

//               <Logo width ='70px'/>

//             </Link>

//           </div>
//           {/* //Note:- don't need to return in () */}
//           <ul className='flex ml-auto'>

//             {/* yaha pr item active he yaa nahi, wo work karege */}
//             {navItems.map((item) => 

//               // if item is active, do this : don't active do this(null)
//               item.active ? (

//                 // jaha HTML element return ho raha he waha mujhe keys lagani hoti he.
//                 //name jo he wo unique he.
//                 //iss <li> <button> ke andr hi navigate k aowrk hoga.
//                 //navigate kaam kese krta he? usko sirf ek URL dedo.(slug: '/login...etc')
//                 <li key={item.name}>
                  
//                   <button
//                   onClick={() => navigate(item.slug)}
//                   className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'
//                   >{item.name}</button>

//                 </li>
//               ) : null
              
//             )}
            
//             {/* agr authStatus true he to hi wo kaam karo && ke baad */}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}

//           </ul>

//         </nav>
        
//       </Container>

//     </header>

//   )
// }

// export default Header

//================

import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header