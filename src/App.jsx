
import { useEffect, useState } from 'react'

import {useDispatch} from 'react-redux'

//method import me {} nahi
import authService from './appwrite/auth.js'

import {login, logout} from './store/authSlice.js'

import './App.css'
import { Footer, Header } from './components/index.js'

import {Outlet} from 'react-router-dom'

function App() {
  
  //console.log(import.meta.env.VITE_APPWRITE_URL);

  //kuch bhi database se baat krni he, to uske liye Loading State banalo, uske base pe Conditional Rendering achhi ho jaati he.

            //useEffect ke andr hum usko false karege
  const [loading, setLoading] = useState(true)

  //from react redux
  const dispatch = useDispatch()

  //Ab hume services chahiye, auth.js mese
  //ab jese hi application load ho, to useEffect lo, aur useEffect se pucho ki aap logedin ho yaa nahi ho.
  useEffect( () => {

    authService.getCurrentUser()
      //agr data successfully Fetch ho gaya he to, .then()
      //userData ko Dispatch krna padega, taaki wo action.payload he usko mil jaaye(authSlice me)
      .then( (userData) => {

        if (userData) {
          
          dispatch(login( {userData} ))
        }
        else
        {
          dispatch(logout())
        }

      } )

      .finally( () => setLoading(false) )

  },[] )

  //Conditional Rendering

  //? false : true
  return !loading ? (

    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>

      <div className='w-full block'>

        <Header />

        <main>

          <Outlet />

        </main>

        <Footer />

      </div>

    </div>

  ) : null


}

export default App