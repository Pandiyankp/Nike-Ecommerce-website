import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
const Store =configureStore({
    reducer:{
        cart:CartSlice ,
    }
});

export default Store;
















// import  { configureStore }  from "@reduxjs/toolkit";


// import CartSlice from './CartSlice';

// const Store =configureStore({

//   reducer:{
//     Cart:CartSlice ,  

//   }
// });

// export default Store;