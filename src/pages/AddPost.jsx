// import React from 'react'

// // import PostForm from '../components'

// // import Container from '../components'

// import { Container, PostForm } from '../components'

// //IMP:- Jb ek hi jagah se import kr rahe ho to {} me comas use krna he warna error.

// function AddPost() {
//   return (
//     <div className='py-8'>
//         <Container>
//             <PostForm />
//         </Container>
//     </div>
//   )
// }

// export default AddPost

//======

import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost