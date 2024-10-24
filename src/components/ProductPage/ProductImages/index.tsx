"use client"
import React, { useState } from "react"
import { TProductImages } from "@/models/product"
import { Swiper, SwiperSlide } from "swiper/react"
import ProductImage from "@/components/ProductPage/ProductImage"
import s from "./style.module.scss"
import "swiper/css"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"

interface TProductImagesProps {
  images: TProductImages[]
}

const ProductImages: React.FC<TProductImagesProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null)
  return (
    <div className={s.images}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}>
        {images.map((v) => (
          <SwiperSlide key={v.link}>
            <div className={s.images__image}>
              <ProductImage offset='offset-4' link={v.link} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className='offset-top-8'
        onSwiper={setThumbsSwiper}
        slidesPerView='auto'
        spaceBetween={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}>
        {images.map((v) => (
          <SwiperSlide key={v.link} style={{ width: "92px", height: "92px" }}>
            <ProductImage offset='offset-4' link={v.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductImages
