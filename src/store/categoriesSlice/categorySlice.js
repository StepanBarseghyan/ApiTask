import { createSlice } from '@reduxjs/toolkit'
import { getAllImages, getCategories, getImages, getMoreImages } from './categoriesApi'

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    images: [],
    loading: false,
    page:1
  },
  reducers: {
    changePage(state,{payload}){
      state.page = payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categories = payload
    })
    builder.addCase(getAllImages.pending, state => {
      state.loading = true
    })
    builder.addCase(getAllImages.fulfilled, (state, { payload }) => {
      state.loading = false
      state.images = payload
    })
    builder.addCase(getImages.pending, state => {
      state.loading = true
    })
    builder.addCase(getImages.fulfilled, (state, { payload }) => {
      state.loading = false
      state.images = payload
    })
    builder.addCase(getMoreImages.fulfilled, (state, { payload }) => {
      state.images.push(...payload)
    })
  },
})
export const selectCategory = state => state.category
export const {changePage} = categorySlice.actions
export default categorySlice.reducer
