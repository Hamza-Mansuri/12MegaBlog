import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import appwriteService from '../appwrite/config'

// import { Container } from '../components'
// import PostForm from '../components'

import { Container, PostForm } from '../components'

function EditPost() {

    const [post, setPost] = useState(null)

    //Slug lagega
    //Edit krna aaye he to user click karega, aur fir uss page pe jaaega, to URL me available hoga.
    const {slug} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
    
        //agar slug he to kaam karo
        if(slug)
        {
            //slug aaya he to post aaega hi aaega.
            appwriteService.getPost(slug).then((post) => {

                //post aa gaua he to setPost kr dijiye.
                if(post)
                {   
                    setPost(post)
                }
            })
        }
        else
        {
            navigate('/')
        }

    }, [slug, navigate])

  return post ? 
  <div className='py-8'>
    <Container>
        <PostForm post={post}/>
    </Container>
  </div>
  : null
}

export default EditPost

//====

// import React, {useEffect, useState} from 'react'
// import {Container, PostForm} from '../components'
// import appwriteService from "../appwrite/config";
// import { useNavigate,  useParams } from 'react-router-dom';

// function EditPost() {
//     const [post, setPosts] = useState(null)
//     const {slug} = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if (post) {
//                     setPosts(post)
//                 }
//             })
//         } else {
//             navigate('/')
//         }
//     }, [slug, navigate])
//   return post ? (
//     <div className='py-8'>
//         <Container>
//             <PostForm post={post} />
//         </Container>
//     </div>
//   ) : null
// }

// export default EditPost