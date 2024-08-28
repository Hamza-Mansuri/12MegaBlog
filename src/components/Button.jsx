import React from 'react'

//in button, most interesting thing is, what are they accepting as parameters, and how they are used.

function Button({
    
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-black',
    className = '', //almost sb classname empty hi lete he
    ...props //aur bhi agr props ho to spread krlo, JITNI bhi properties hune li he wo saari leli.
    
}) {

    // forwardRef lets your component expose a DOM node to parent component with a ref.
    //Most IMP:- Concept
    // forwardRef Hook
    //Example:-
    // suppose there is an input, wahi input hum saari jagah use karege.
    // aur dusri jagah Login Page he, to waha ye input use krne ke liye uska reference to chahiye hoga na, to waha hum use karege forwardRef Hook.
    

  return (
    
    //backText `` { } ke andr tb wo as string consider hogi.
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} {...props}`}>
        {children}
    </button>
  )
}

export default Button