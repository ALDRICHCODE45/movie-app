import { createSlice } from '@reduxjs/toolkit';

export const MovieSlice = createSlice({
    name: 'movieApp',
    initialState: {
        data : [],
        isloading: false
    },
    reducers: {
        startLoading: (state) => {
            state.isloading = true
        },
        setData : (state, action) =>{
            state.isloading = false
            state.data = action.payload;
        }
    }
});


export const { startLoading, setData } = MovieSlice.actions;
