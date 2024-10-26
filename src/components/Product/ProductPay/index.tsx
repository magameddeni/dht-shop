import React from "react"
import cx from "classnames"
import { AddToBasket, Text } from "@/components/UI"
import { setSpaceBetweenCharacters } from "@/helpers/setSpaceBetweenCharacters"
import s from "./style.module.scss"

interface TProductPayProp {
  _id: string
  regularPrice: number
  discountPrice: number
}

const ProductPay: React.FC<TProductPayProp> = ({
  _id,
  discountPrice,
  regularPrice,
}) => {
  return (
    <div>
      <div className={s.pay}>
        <Text as='div' size='xxl' weight='bold'>
          {setSpaceBetweenCharacters(discountPrice ?? regularPrice)} ₽
        </Text>
        <div className={cx("offset-top-12", s.pay__btn)}>
          <AddToBasket fluid _id={_id} />
        </div>
        <Text
          as='div'
          color='gray'
          className={cx("offset-top-16", s.pay__delivery)}>
          <Text color='usual-gray' size='sm'>
            Доставим завтра
          </Text>
        </Text>
      </div>
    </div>
  )
}

export default ProductPay
