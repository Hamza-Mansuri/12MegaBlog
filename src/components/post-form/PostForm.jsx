// import React, { useCallback, useEffect } from 'react'

// import { useForm } from 'react-hook-form'

// import {Button, Input, Select, RTE} from '../index'

// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// import appwriteService from '../../appwrite/config'

// //form pe click karega to kuch value to aaegi na
// export default function PostForm({post}) {

//   //Watch-> kisi feed ko continuosly monitor krna he to, watch capabilities.
//   //setValue-> Form ke andr jo value set krni ho to(bcz these are react-hook-forms).
//   //control-> kisi form ka control chahiiye ho to, same RTE me pass karege.
//   //getValues-> form ki value grab krni ho to

//   //syntax:-
//   // const {} = useForm( { defaultValues: {  }, } )
//   const {register, handleSubmit, watch, setValue, control, getValues} = useForm({

//     //objects
//     defaultValues: {

//       //agr title he to use krlo
//       title: post?.title || "",
//       slug: post?.$id || "",
//       content: post?.content || "",
//       status: post?.status || "active",
//     },
//   });

//   const navigate = useNavigate()
//   const userData = useSelector((state) => state.auth.userData)

//   //agar user ne form submit kiya he to data mil gaya hoga.

//   //to ek submit name ka method banate he.
//   //now the scenario is, agar post ki value he to Edit karo
//   //agar nahi he to nayi Create Karo.

//   const submit = async(data) => {

//     //agar post he aapke paas to update
//     if(post)
//     {
//       //sbse pehle File ko handle krte he.
//       //agar fil he to upload karo
//           //first image
//       const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

//       //ab file aa chuki he, aur post tha pehle se, ek image delete bhi to krni padegi.
//       if(file)
//       {
//         appwriteService.deleteFile(post.featuredImage)
//       }

//       //ab post ko update bhi to krna padega.
//       const dbPost = await appwriteService.updatePost(post.$id, {

//         ...data,
//         //overwrite the featuredInage
//         //agr file he to uski unique id dedo, nahi he to undefinded
//         featuredImage: file ? file.$id : undefined,

//       });

//       //ab dbPost aa gaya he to user ko navigate bhi kara dete he.
//       if(dbPost)
//       {
//         //dbPost se id milega.
//         navigate(`/post/${dbPost.$id}`);
//       }


//     }//ab agar post nahi he to, create karo
//     else
//     {
//       //pehle file upload karo.
//       const file = await appwriteService.uploadFile(data.image[0]);

//       //agar file he to
//       if(file)
//       {
//         //id lelo
//         const fileId = file.$id;
//         data.featuredImage = fileId; //image ko id dedo

//         const dbPost = await appwriteService.createPost({

//           //object
//           ...data,
//           userId: userData.$id,
//         });

//         //dbPost aa gaya he to user ko navigate kara do
//         if(dbPost)
//         {
//           navigate(`/post/${dbPost.$id}`);
//         }
//       }
//     }

//   }


//   //IMP Concept for Interview:- SlugTransform
//   //title ko watch krna he aur space ko replace krna he dash se(-)
//   //slug ki value generate krni he, title ko watch krke.
//   const slugTransform = useCallback((value) => {

//     if(value && typeof value === "string")
//       //single liner
//       return value
//       .trim()
//       .toLowerCase()
//       //^ -> isko chhor ke baaki sb ko space krdo
//       .replace(/[^a-zA-Z\d\s]+/g, '-')
//       .replace(/\s/g, '-');

//     //else return empty string
//     return "";
    
//   }, []);

//   //IMP:- ab iss method ko use kese krna he?
//   useEffect(() => {

//     //Interview Ques:- aapne useEffect me ek method call kara, to aap usko optimize kese kr sakte he.
//     //ANS:- hum usko return krke callback function me unsubcribe kr sakte he, taaki wo ghumta naa reh jaaye baar baar call ho ke.

//     //ab kis tarah value dekhi jaati he aur likhi jaati he.
//     const subscription = watch((value, {name}) => {

//       if(name === "title")
//       {
//         //hum input me slug dege wo, usko slugTransform de dege
//         setValue("slug", slugTransform(value.title),
//           {shouldValidate: true}
//         );
//       }
//     });

//     return () => {

//       //memory management.
//       subscription.unsubscribe();
//     }

//   },[watch, slugTransform, setValue]);

//   return (

//     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">

//             {/* Divided in two parts 2/3 & 1/3 */}
      
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
                
//                 {/* this control has arrived from RTE.jsx */}
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>

//             {/* Other Part */}
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={appwriteService.getFilePreview(post.featuredImage)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//   )
// }

// export default PostForm

//=============

import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}