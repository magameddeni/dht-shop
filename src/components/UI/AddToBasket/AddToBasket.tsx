import React from "react"
import { Button } from "../button"

interface TAddToBasketProps {
  _id: string
}

const AddToBasket: React.FC<TAddToBasketProps> = ({}) => {
  return (
    <div>
      <Button>В корзину</Button>
    </div>
  )
}

export default AddToBasket
