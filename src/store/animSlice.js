import { createSlice } from '@reduxjs/toolkit'

const animSlice = createSlice({
    name: 'animation',
    initialState: {
        page: 0,
    },
    reducers: {
        changeActiveLi: (state, action) => {
            state.page = action.payload.page;
            console.log(action.payload.page);
        }
    }
})

export const { changeActiveLi } = animSlice.actions
export default animSlice.reducer