"use client"
import React from "react"
import cx from "classnames"
import Link from "next/link"
import { TProductForCard } from "@/models"
import { Text, AddToBasket } from "@/components/UI"
import { useWindowSize } from "@/hooks/useWindowSize"
import ImageComponent from "@/components/ImageComponent/ImageComponent"
import { setSpaceBetweenCharacters } from "@/helpers/setSpaceBetweenCharacters"
import s from "./style.module.scss"

const ProductCard: React.FC<TProductForCard> = ({
  _id,
  productName,
  discountPrice,
  images,
  regularPrice,
  colors,
}) => {
  const { size } = useWindowSize()

  return (
    <div className={s.product}>
      <div className={s.product__image}>
        <ImageComponent src={images[0].link} objectFit='contain' fill />
      </div>
      <Link href={`/product/${_id}`}>
        <Text
          className={s.product__name}
          size={size === "xs" ? undefined : "sm"}>
          {productName}
        </Text>
      </Link>

      <div className={s.product__colors}>
        <Text color='gray' size='xxs'>
          Цвета
        </Text>
        {colors.map((c, index) => (
          <Text size='xxs' key={c.hex}>
            {c.name}
            {index !== colors.length - 1 && ","}
          </Text>
        ))}
      </div>

      <Text
        className={cx(s.product__price, "offset-top-8")}
        size={size === "xs" ? "xxl" : "xl"}>
        от{" "}
        {setSpaceBetweenCharacters(
          discountPrice ? discountPrice : regularPrice,
        )}{" "}
        ₽
      </Text>
      <div className={s.product__btn}>
        <AddToBasket _id={_id} />
      </div>
    </div>
  )
}

export default ProductCard
