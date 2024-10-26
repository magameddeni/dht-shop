import React from "react"
import { TReview } from "@/models"
import s from "./style.module.scss"
import { Text } from "@/components/UI"

const Review: React.FC<TReview> = ({
  disAdvantages,
  advantages,
  comment,
  reviewer,
}) => {
  return (
    <div className={(s.review, "offset-top-32")}>
      <div className={s.review__header}>
        {reviewer && (
          <Text as='div' weight='medium'>
            {reviewer}
          </Text>
        )}
      </div>
      {advantages && (
        <div className='offset-top-16'>
          <Text as='div' weight='medium' size='lg'>
            Достоинства
          </Text>
          {advantages}
        </div>
      )}
      {disAdvantages && (
        <div className='offset-top-16'>
          <Text as='div' weight='medium' size='lg'>
            Недостатки
          </Text>
          {disAdvantages}
        </div>
      )}
      {comment && (
        <div className='offset-top-16'>
          <Text as='div' weight='medium' size='lg'>
            Комментарий
          </Text>
          {comment}
        </div>
      )}
    </div>
  )
}

export default Review
