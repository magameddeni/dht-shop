"use client"
import React from "react"
import cx from "classnames"
import { Text } from "@/components/UI"
import { TProductColor } from "@/models/product"
import { SwiperSlide, Swiper } from "swiper/react"
import { useQueryParams } from "@/hooks/useQueryParams"
import ProductImage from "@/components/Product/ProductImage"
import "swiper/css"
import s from "./style.module.scss"

interface TProductColorsProps {
  colors: TProductColor[]
}

const ProductSelectColor: React.FC<TProductColorsProps> = ({ colors = [] }) => {
  const { params, setParam } = useQueryParams()
  const color = params.get("color") ?? colors[0].color.name

  return (
    <div className={s.colors}>
      <Text as='div'>
        <Text size='xxs' color='gray'>
          Цвет:{" "}
        </Text>
        <Text size='xxs'>{color}</Text>
      </Text>
      <Swiper className='offset-top-4' spaceBetween={10} slidesPerView='auto'>
        {colors.map((p) => (
          <SwiperSlide
            onClick={() => setParam("color", p.color.name)}
            key={p.color.hex}
            className={cx(s.colors__slider, {
              [s["colors__slider-active"]]: p.color.name === color,
            })}>
            <ProductImage offset='offset-2' link={p.images[0].link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductSelectColor
