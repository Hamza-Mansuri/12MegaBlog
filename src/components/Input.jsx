import React, { forwardRef , useId} from 'react'

// forwardRef lets your component expose a DOM node to parent component with a ref.
//Most IMP:- Concept
// forwardRef Hook
//Example:-
// suppose there is an input, wahi input hum saari jagah use karege.
// aur dusri jagah Login Page he, to waha ye input use krne ke liye uska reference to chahiye hoga na, to waha hum use karege forwardRef Hook.


// function Input() {
//   return (
//     <div>Input</div>
//   )
// }

//it will be easy to understand in arrow Function

<<<<<<< HEAD
//Syntax:-

// const Input = forwardRef(function Input({}, ref){

//     return <h1>Test</h1>
// })

=======
>>>>>>> a705f3c236df1e2a2785be1e6aa8e886a821f43f
const Input = forwardRef( function Input({

    //konsi konsi chize chahiye hume wo yaha define krni he.
    label,
    type = "text",
    className = "",
    ...props

<<<<<<< HEAD
     //this is ref, this will bhi usefull inahead.
}, ref) {
=======
}, ref) //this is ref, this will bhi usefull inahead.
{
>>>>>>> a705f3c236df1e2a2785be1e6aa8e886a821f43f
    const id = useId()
    return (

        <div className='w-full'>

            {/* agr kisi ne label pass kiya he to. */}
            {label && <label 
<<<<<<< HEAD
            className='block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>}

            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            
            //now imp thing is, ref pass krdo, jo as a prop liya he, yahi chiz he jo reference degi aapke parent component ko, aur isi ke liye apna forwardRef use kiya he.
            ref={ref}
            {...props}
            //Label me bhi pass ki gayi aur input field me bhi
            id={id}
            />
        </div>
    )
})

export default Input

//==========

// import React, {useId} from 'react'

// const Input = React.forwardRef( function Input({
//     label,
//     type = "text",
//     className = "",
//     ...props
// }, ref){
//     const id = useId()
//     return (
//         <div className='w-full'>
//             {label && <label 
//             className='inline-block mb-1 pl-1' 
//             htmlFor={id}>
//                 {label}
//             </label>
//             }
//             <input
//             type={type}
//             className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
//             ref={ref}
//             {...props}
//             id={id}
//             />
//         </div>
//     )
// })

// export default Input
=======
            className='block mb-1' 
            htmlFor={id}>
                {label}
            </label>}
        </div>
    )
}

export default Input
>>>>>>> a705f3c236df1e2a2785be1e6aa8e886a821f43f
