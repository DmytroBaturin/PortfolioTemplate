import { configureStore } from '@reduxjs/toolkit'
import animSlice from "./animSlice.js";
export const store = configureStore({
    reducer: {
        anim: animSlice
    },
})