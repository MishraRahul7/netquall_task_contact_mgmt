import {configureStore} from "@reduxjs/toolkit";
import contactSlice from "./slices/contact.slice";

const store = configureStore({
    reducer:{
        contact: contactSlice,
    }
})
export default store;