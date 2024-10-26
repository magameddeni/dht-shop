"use client"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import ProductImage from "@/components/Product/ProductImage"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { TImages } from "@/models"
import "swiper/css"
import s from "./style.module.scss"

interface TProductImagesProps {
  images: TImages[]
}

const ProductImages: React.FC<TProductImagesProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null)
  return (
    <div className={s.images}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Thumbs]}
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
