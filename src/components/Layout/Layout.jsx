import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { selectCategory } from '../../store/categoriesSlice/categorySlice'

const Layout = () => {
  const { categories } = useSelector(selectCategory)
  return (
    <div>
      <Sidebar categories={categories} />
      <Outlet />
    </div>
  )
}

export default Layout
