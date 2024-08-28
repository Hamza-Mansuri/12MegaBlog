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

const Input = forwardRef( function Input({

    //konsi konsi chize chahiye hume wo yaha define krni he.
    label,
    type = "text",
    className = "",
    ...props

}, ref) //this is ref, this will bhi usefull inahead.
{
    const id = useId()
    return (

        <div className='w-full'>

            {/* agr kisi ne label pass kiya he to. */}
            {label && <label 
            className='block mb-1' 
            htmlFor={id}>
                {label}
            </label>}
        </div>
    )
}

export default Input