import React, { useEffect, useState } from 'react'
import s from './ImagesPage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  changePage,
  selectCategory,
} from '../../store/categoriesSlice/categorySlice'
import { useParams } from 'react-router'
import {
  getImages,
  getMoreImages,
} from '../../store/categoriesSlice/categoriesApi'

const ImagesPage = () => {
  const { loading, images, page } = useSelector(selectCategory)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getImages({ id: id, page: page }))
    dispatch(changePage(1))
  }, [id])
  const change = () => {
    dispatch(changePage(page + 1))
    dispatch(getMoreImages({ id: id, page: page }))
  }

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
      <button className={s.showMore} onClick={() => change()}>
        show more
      </button>
    </section>
  )
}

export default ImagesPage
