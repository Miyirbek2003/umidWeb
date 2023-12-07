import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSlides = createAsyncThunk('allSlides/getSlides', async (_, { dispatch }) => {
    const response = await axios.get('https://admin.umidmedicalcentre.uz/api/slides');
    dispatch(setSlides(response.data.items))
})

export const getWorkers = createAsyncThunk('allSlides/getWorkers', async (_, { dispatch }) => {
    const response = await axios.get('https://admin.umidmedicalcentre.uz/api/employee');
    dispatch(setWorkers(response.data.items))
})

export const getCategory = createAsyncThunk('allSlides/getCategory', async (_, { dispatch }) => {
    const response = await axios.get('https://admin.umidmedicalcentre.uz/api/treatments');
    dispatch(setCategory(response.data.items))
})

export const getTypeCategory = createAsyncThunk('allSlides/getTypeCategory', async (_, { dispatch }) => {
    const response = await axios.get('https://admin.umidmedicalcentre.uz/api/typetreatments');

    dispatch(setTypeCategory(response.data.items))
})





export const getContent = createAsyncThunk('allSlides/getContent', async (slug, { dispatch }) => {
    const response = await axios.get(`https://admin.umidmedicalcentre.uz/api/typetreatments/${slug}`);

    dispatch(setContent(response.data.item))
})


export const getFeedback = createAsyncThunk('allSlides/getFeedback', async (_, { dispatch }) => {
    const response = await axios.get('https://admin.umidmedicalcentre.uz/api/feedback');

    dispatch(setFeedback(response.data.items))
})




export const getImageSlide = createAsyncThunk('allSlides/getImageSlide', async (_, { dispatch }) => {
    const response = await axios.get('https://admin.umidmedicalcentre.uz/api/imageslide');

    dispatch(setImageSlide(response.data.items))
})



const initialState = {
    slides: [],
    workers: [],
    category: [],
    typeCategory: [],
    content: [],
    feedback: [],
    imageslide: [],
    loading: false
}

export const allSlice = createSlice({
    name: 'allSlice',
    initialState,
    reducers: {
        setSlides: (state, { payload }) => {
            state.slides = payload
        },
        setWorkers: (state, { payload }) => {
            state.workers = payload
        },
        setCategory: (state, { payload }) => {
            state.category = payload
        },
        setTypeCategory: (state, { payload }) => {
            state.typeCategory = payload
        },
        setContent: (state, { payload }) => {
            state.content = payload
        },
        setFeedback: (state, { payload }) => {
            state.feedback = payload
        },
        setImageSlide: (state, { payload }) => {
            state.imageslide = payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getSlides.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getSlides.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(getSlides.rejected, (state, action) => {
                state.loading = false;
            })
    }
})

export default allSlice.reducer

export const { setSlides, setWorkers, setImageSlide, setCategory, setContent, setTypeCategory, setFeedback } = allSlice.actions