import { createSlice } from "@reduxjs/toolkit";

//initial state to deni hogi.
//an ye jo hanmara kaam he, User ko authenticate krna.

const initialState = 
{
    //false isliye bcz ki abhi user authenticate nahi he.
    status: false,
    //abhi user ke paas koi bhi data nahi he.
    userData: null
}

                    //( {  } )
const authSlice = createSlice(

    {

        //name, initialstate, reducers
    
        name: "auth",
        initialState,
    
        reducers: {
            //ye reducers ke andr sb actions bana rahe he, isko last me export bhi krna he

            login: (state,action) => {

                //ek state lete he
                state.status = true
                state.userData = action.payload.userData;
            },

            //yaha action ki zarurat he naahi
            logout: (state) => {

                state.status = false
                state.userData = null
            }
        }
    
    }

)

//action ko bhi export krna he.
export const {login, logout}  = authSlice.actions;

//reducers to export ho hi rahe he yaha
export default authSlice.reducer;

//===========

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     status : false,
//     userData: null
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         login: (state, action) => {
//             state.status = true;
//             state.userData = action.payload.userData;
//         },
//         logout: (state) => {
//             state.status = false;
//             state.userData = null;
//         }
//      }
// })

// export const {login, logout} = authSlice.actions;

// export default authSlice.reducer;