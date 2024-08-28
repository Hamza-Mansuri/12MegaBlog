import React from 'react'

import {container, Logo, LogoutBtn} from '../index'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

function Header() {

  //this status is accessing from authSlice, status:false.
  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()

  //jb bhi iss tarah ki navigate banati he, bt ek ARRAY nayana jaata he aur uske upr loop kr diya jaata he.
  const navItems = [

    //{},{},{}
    {
      name: "Home",
      slug: "/", //(URL)
      active: true

    },
    {
      name: "Login",
      slug: "/login", //(URL)
      active: !authStatus, //active depend akrega authStatus pe

    },
    {
      name: "SignUp",
      slug: "/", //(URL)
      active: !authStatus,

    },
    {
      name: "All Posts",
      slug: "/all-posts", //(URL)
      active: authStatus,

    },
    {
      name: "Add posts",
      slug: "/", //(URL)
      active: authStatus,

    }
    

  ]



  return (
    
    
    <header className='py-3 shadow bg-gray-500'>

      <Container>

        <nav className='flex'>

          <div className='mr-4'>

            <Link to='/'>

              <Logo width ='70px'/>

            </Link>

          </div>
          {/* //Note:- don't need to return in () */}
          <ul className='flex ml-auto'>

            {/* yaha pr item active he yaa nahi, wo work karege */}
            {navigate.map((item) => 

              // if item is active, do this : don't active do this(null)
              item.active ? (

                // jaha HTML element return ho raha he waha muhe keys lagani hoti he.
                //name jo he wo unique he.
                //iss <li> <button> ke andr hi navigate k aowrk hoga.
                //navigate kaam kese krta he? usko sirf ek URL dedo.(slug: '/login...etc')
                <li key={item.name}>
                  
                  <button
                  onClick={() => navigate(item.slug)}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'
                  >{item.name}</button>

                </li>
              ) : null
              
            )}

          </ul>

        </nav>
        
      </Container>

    </header>

  )
}

export default Header