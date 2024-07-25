import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'cheeseburger',
}

export const editModalSlice = createSlice({
    name: 'editModal',
    initialState,
    reducers: {
       changeText: (state) => {
         state.value = 'heaven'
       }
    }

});

export const { changeText } = editModalSlice.actions;
export default editModalSlice.reducer; 