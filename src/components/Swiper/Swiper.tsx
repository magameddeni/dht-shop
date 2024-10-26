"use client"
import React from "react"
import cx from "classnames"
import { TProductForCard } from "../../models/product"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { ProductCard } from "../Product"

interface TSwiperSliderProps {
  products: TProductForCard[]
  classNames?: string
}

const SwiperSlider: React.FC<TSwiperSliderProps> = ({
  products,
  classNames,
}) => {
  return (
    <div className={cx(classNames)}>
      <Swiper className='offset-top-20' spaceBetween={8} slidesPerView='auto'>
        {products.map((p) => (
          <SwiperSlide style={{ width: "auto" }} key={p._id}>
            <ProductCard {...p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperSlider
