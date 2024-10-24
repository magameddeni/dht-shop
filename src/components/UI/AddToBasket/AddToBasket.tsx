import React from "react"
import { Button } from "../button"

interface TAddToBasketProps {
  _id: string
  fluid?: boolean
}

const AddToBasket: React.FC<TAddToBasketProps> = ({ fluid }) => {
  return <Button fluid={fluid}>В корзину</Button>
}

export default AddToBasket
