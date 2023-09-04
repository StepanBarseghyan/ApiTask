import React from 'react'
import Homepage from '../../pages/HomePage/Homepage'
import {Routes,Route} from 'react-router-dom'
import Layout from '../Layout/Layout'
import ImagesPage from '../../pages/ImagesPage/ImagesPage'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path={'/images/:id'} element={<ImagesPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRouter
