import { configureStore } from '@reduxjs/toolkit'
import headerSlice from "./haederSlice.js";
export const store = configureStore({
    reducer: {
        anim: headerSlice
    },
})