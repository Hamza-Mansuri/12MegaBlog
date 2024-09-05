import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"

const store = configureStore ({


    reducer: {

        auth: authSlice,
        //TODO: add more slice from here
    }
});

export default store;

//==========


// import {configureStore} from '@reduxjs/toolkit';
// import authSlice from './authSlice';

// const store = configureStore({
//     reducer: {
//         auth : authSlice,
//         //TODO: add more slices here for posts
//     }
// });


// export default store;