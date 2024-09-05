import React from 'react'

import {Editor} from '@tinymce/tinymce-react'

import {Controller} from 'react-hook-form'
//https://react-hook-form.com/get-started#IntegratingControlledInputs

//control:- as input loya he method me, jo iss component se control pass on karega, jo isko call karega uske andr.
export default function RTE({name, control, label, defaultValue="" }) {
    
  return (
    
    <div className='w-full'>

        {label && <label className='inline-block mb-1 pl-1'>
            {label}</label>}

        <Controller 
        name={name || "content"} //agr name nahi he to content bol lete he.(string he aur kuch bhi nahi he.)
        control={control} //ye control dega Parent Element.

        //Ineresting thing is, kese Elements Render krte he.
        //docs
        render = {({field: {onChange}}) => (

            //Yaha pr jo bhi Element Aapko Render Karwana he.like(input, Editor)
            <Editor
                apiKey='clt82s41acw22okpu00xi6jhy02msrcz1wrv8i5vry3004rd'
                initialValue={defaultValue}
                init={{
                    initialValue: defaultValue,
                    height: 500,
                    menubar: true,
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                    toolbar:
                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                onEditorChange={onChange}
                //Editor me kuch bhi change ho to hamari field govern kare onChange se.
            />

        )}
        />
    </div>
  )
}

//=============

// import React from 'react'
// import {Editor } from '@tinymce/tinymce-react';
// import {Controller } from 'react-hook-form';


// export default function RTE({name, control, label, defaultValue =""}) {
//   return (
//     <div className='w-full'> 
//     {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

//     <Controller
//     name={name || "content"}
//     control={control}
//     render={({field: {onChange}}) => (
//         <Editor
//         apiKey='clt82s41acw22okpu00xi6jhy02msrcz1wrv8i5vry3004rd'
//         initialValue={defaultValue}
//         init={{
//             initialValue: defaultValue,
//             height: 500,
//             menubar: true,
//             plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "code",
//                 "help",
//                 "wordcount",
//                 "anchor",
//             ],
//             toolbar:
//             "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//             content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
//         }}
//         onEditorChange={onChange}
//         />
//     )}
//     />

//      </div>
//   )
// }