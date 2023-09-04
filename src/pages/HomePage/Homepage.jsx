import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../store/categoriesSlice/categorySlice'
import s from './Homepage.module.css'
const Homepage = () => {
  const { images, loading } = useSelector(selectCategory)
  return (
    <section className={s.imagesSection}>
      <h1 className={s.title}>Images</h1>
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <div className={s.imagesbody}>
          {images?.map(image => (
            <div className={s.imageBox} key={image?.id}>
              <img src={image?.url} alt="img" />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Homepage
