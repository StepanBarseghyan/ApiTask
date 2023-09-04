import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categoriesSlice/categorySlice'

const store = configureStore({
  reducer: {
    category: categorySlice 
  },
})

export default store