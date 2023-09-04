import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import s from './Sidebar.module.css'

const Sidebar = ({ categories }) => {

  return (
    <aside className={s.sidebar}>
      <ul className={s.list}>
        {categories?.map(category => (
          <li
            key={category.id}>
            <Link to={`/images/${category.id}`} >{category?.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
