import { configureStore } from '@reduxjs/toolkit'
import AllSlice from './AllSlice'

export const store = configureStore({
    reducer: {
        AllSlice
    }
})
