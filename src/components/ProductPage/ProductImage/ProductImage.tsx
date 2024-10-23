import React from "react"
import cx from "classnames"
import ImageComponent from "@/components/ImageComponent/ImageComponent"
import s from "./style.module.scss"

interface ProductImageProps {
  link: string
  offset?: string
}

const ProductImage: React.FC<ProductImageProps> = ({ link, offset }) => {
  return (
    <div
      className={cx(s.wrapper, {
        [s[`wrapper-${offset}`]]: offset,
      })}>
      <ImageComponent objectFit='contain' src={link} />
    </div>
  )
}

export default ProductImage
