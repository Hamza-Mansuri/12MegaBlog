// import React, { useEffect, useState } from 'react'

// import {Container, PostCard } from '../components'


// import appwriteService from '../appwrite/config'

// //state bhi chahiye hoga, bcz saare post ko ek query bhi krni padegi.

// function AllPosts() {

//     //jisme hum saare ke saare post lege
//     const [posts, setPost] = useState([])

//     //jese hi component load hoga, useEffect kr lege,saara kaam ho jaaega.
//     useEffect(() => {},[])

//     appwriteService.getPosts([]).then((posts) => {

//         //agar posts he hamare paas to saare documents mil jaaege.
//         if(posts)
//         {
//             setPost(posts.documents)//ye saare posts ke andr gaye he.
//         }
//     })

//   return (
//     <div className='py-8 w-full'>

//         <Container>

//             <div className='flex flex-wrap'>

//                 {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>

//                         {/* <PostCard post={post}/> */}
//                         <PostCard {...post}/>
//                     </div>
//                 ))}
//             </div>
//         </Container>
//     </div>
//   )
// }

// export default AllPosts

//========

import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts