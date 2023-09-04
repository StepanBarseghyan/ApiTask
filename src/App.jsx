import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import AppRouter from './components/AppRouter/AppRouter'
import Sidebar from './components/Sidebar/Sidebar'
import { getAllImages, getCategories } from './store/categoriesSlice/categoriesApi'
import { selectCategory } from './store/categoriesSlice/categorySlice'

function App() {
  const dispatch = useDispatch()
  const { categories,images } = useSelector(selectCategory)
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getAllImages())
  }, [])

  return (
    <div className="app">
      <AppRouter/>
    </div>
  )
}

export default App
