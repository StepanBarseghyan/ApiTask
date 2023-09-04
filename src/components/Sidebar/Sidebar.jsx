import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { changePage, selectCategory } from '../../store/categoriesSlice/categorySlice'
import s from './Sidebar.module.css'

const Sidebar = ({ categories }) => {
  const dispatch = useDispatch()

  return (
    <aside className={s.sidebar}>
      <ul className={s.list}>
        {categories?.map(category => (
          <li
            key={category.id}>
            <Link to={`/images/${category.id}`}>{category?.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
