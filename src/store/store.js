import { configureStore } from '@reduxjs/toolkit'
import headerSlice from "./headerSlice.js";
export const store = configureStore({
    reducer: {
        anim: headerSlice
    },
})