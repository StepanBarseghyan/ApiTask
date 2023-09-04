import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRequest } from '../../helpers/requests'
export const getCategories = createAsyncThunk(
  'category/getCategories',
  async () => {
    const result = await getRequest('https://api.thecatapi.com/v1/categories')
    return result
  },
)

export const getAllImages = createAsyncThunk(
  'category/getAllImages',
  async () => {
    const result = await getRequest(
      `https://api.thecatapi.com/v1/images/search?limit=10`,
    )
    return result
  },
)

export const getImages = createAsyncThunk(
  'category/getImages',
  async ({id,page}) => {
    const result =
      await getRequest(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id} 
    `)
    return result
  },
)

export const getMoreImages = createAsyncThunk(
  'category/getMoreImages',
  async ({id,page}) => {
    const result =
      await getRequest(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id} 
    `)
    return result
  },
)

