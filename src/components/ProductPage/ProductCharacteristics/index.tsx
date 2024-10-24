import React, { useMemo } from "react"
import cx from "classnames"
import { TProductCharacteristics } from "@/models/product"
import { Text } from "@/components/UI/Text"
import s from "./style.module.scss"

interface TProductCharacteristicsProps {
  count?: number
  characteristics: TProductCharacteristics[]
}

const ProductCharacteristics: React.FC<TProductCharacteristicsProps> = ({
  characteristics,
  count,
}) => {
  const items = useMemo(
    () => characteristics.slice(0, count),
    [characteristics, count],
  )

  const renderItems = () =>
    items.map((c) => (
      <Text
        as='div'
        key={c.title}
        className={cx(s.wrapper__characteristic, "offset-top-12")}>
        <Text
          size='sm'
          color='gray'
          className={s.wrapper__characteristic_title}>
          {c.title}
        </Text>
        <Text size='sm' className={s.wrapper__characteristic_value}>
          {c.value.map((value, index) => (
            <>
              {value}
              {index !== c.value.length - 1 && ",  "}
            </>
          ))}
        </Text>
      </Text>
    ))

  return <div className={cx(s.wrapper, "offset-top-20")}>{renderItems()}</div>
}

export default ProductCharacteristics
