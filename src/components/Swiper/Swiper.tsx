"use client"
import React from "react"
import cx from "classnames"
import { TProduct } from "../../models/product"
import { Swiper, SwiperSlide } from "swiper/react"
import ProductCard from "../Product/ProductCard"
import "swiper/css"

interface TSwiperSliderProps {
  products: TProduct[]
  classNames?: string
}

const SwiperSlider: React.FC<TSwiperSliderProps> = ({
  products,
  classNames,
}) => {
  return (
    <div className={cx(classNames)}>
      <Swiper spaceBetween={8} slidesPerView='auto'>
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
