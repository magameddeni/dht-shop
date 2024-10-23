"use client"
import React from "react"
import cx from "classnames"
import SwiperSlider from "../../Swiper/Swiper"
import s from "./style.module.scss"
import { Text } from "../../UI/Text"
import { TProduct } from "../../../models/product"

interface TProductsOfferProps {
  title: string
  _id?: string
  products: TProduct[]
}

const ProductsOffer: React.FC<TProductsOfferProps> = ({ title, products }) => {
  return (
    <div className={cx("offset-top-32", s.products)}>
      <Text size='xxl' weight='medium'>
        {title}
      </Text>
      <SwiperSlider classNames='offset-top-20' products={products} />
    </div>
  )
}

export default ProductsOffer
