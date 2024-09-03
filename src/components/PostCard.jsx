// import React from 'react'

// //information bhi to chahiye hogi, wo kaha se aaegi? Service se.
// import appwriteServices from '../appwrite/config'
// import { Link } from 'react-router-dom'

// function PostCard( {$id, title, featuredImage} ) {
//   return (
    
//     //Link ki khaas baat ye he ki pura URL nahi dena padta, aap jaha ho waha se aage jaa sakte he.
//     <Link to={`/post/${$id}`}>

//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center, mb-4'>

//                 {/* src me koi zarya he kya hum directly image ka preview le paao?
//                 appwrite ke andr getFilePreview me hmko image ke URL mil jaata he. */}

//                 {/* Image ki id apne aap me ek id he.-> $id
//                 aur post ki id featuredImage he */}
//                 <img src={appwriteServices.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
//             </div>
//             <h2 className='text-xl font-bold'>{title}</h2>
//         </div>
//     </Link>
//   )
// }

// export default PostCard

//=============

import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard