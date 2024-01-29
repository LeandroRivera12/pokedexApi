import { createSlice } from "@reduxjs/toolkit";

const trainerSilce = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainerG: (state, action) => action.payload
    }
})

export const { setTrainerG } = trainerSilce.actions

export default trainerSilce.reducer