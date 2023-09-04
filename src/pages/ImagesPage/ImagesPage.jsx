import React, { useEffect,useState } from 'react'
import s from './ImagesPage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {selectCategory,} from '../../store/categoriesSlice/categorySlice'
import { useParams } from 'react-router'
import { getImages } from '../../store/categoriesSlice/categoriesApi'

const ImagesPage = () => {
  const { loading, images } = useSelector(selectCategory)
  const [page,setPage] = useState(1)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getImages({id:id,page:page}))
  }, [id,page])

  const change = () => {
    dispatch(setPage(prev=> prev + 1 ))
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
