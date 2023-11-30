import { createSlice } from '@reduxjs/toolkit'

const headerSlice = createSlice({
    name: 'animation',
    initialState: {
        page: 0,
    },
    reducers: {
        changeActiveLi: (state, action) => {
            state.page = action.payload.page;
        }
    }
})

export const { changeActiveLi } = headerSlice.actions
export default headerSlice.reducer