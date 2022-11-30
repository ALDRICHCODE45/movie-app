import { configureStore } from '@reduxjs/toolkit'
import {MovieSlice} from './slices/Movie/MovieSlice'

export const store = configureStore({
    reducer:{
        movieApp: MovieSlice.reducer
    }
});