import { createSlice } from '@reduxjs/toolkit'

const haederSlice = createSlice({
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

export const { changeActiveLi } = haederSlice.actions
export default haederSlice.reducer