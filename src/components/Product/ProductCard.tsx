"use client"
import ImageComponent from "../ImageComponent/ImageComponent"
import AddToBasket from "../UI/AddToBasket/AddToBasket"
import { useWindowSize } from "../../hooks/useWindowSize"
import { TProduct } from "../../models/product"
import { Text } from "../UI/Text"
import { setSpaceBetweenCharacters } from "../../helpers/setSpaceBetweenCharacters"
import s from "./style.module.scss"

const ProductCard: React.FC<TProduct> = ({ _id, productName, colors }) => {
  const { size } = useWindowSize()
  const { discountPrice, images, regularPrice } = colors[0]

  return (
    <div className={s.product}>
      <div className={s.product__image}>
        <ImageComponent src={images[0].link} objectFit='contain' fill />
      </div>
      <Text className={s.product__name} size={size === "xs" ? undefined : "sm"}>
        {productName}
      </Text>
      <Text className={s.product__price} size={size === "xs" ? "xxl" : "xl"}>
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
