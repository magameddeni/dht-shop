import React from "react"
import cx from "classnames"
import { $api } from "@/http/axios"
import { Text } from "@/components/UI/text"
import SwiperSlider from "@/components/Swiper/Swiper"
import { TProduct, TProductForCard } from "@/models/product"
import {
  ProductCharacteristics,
  ProductImages,
  ProductPay,
  ProductSelectColor,
} from "@/components/Product"
import { TReview } from "@/models"
import { Review } from "@/components/Reviews"
import s from "../style.module.scss"

interface TPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ color: string }>
}

interface TProductForPage extends TProduct {
  similar: TProductForCard[]
  reviews: TReview[]
}

const page = async ({ params, searchParams }: TPageProps) => {
  const { slug } = await params
  const { color } = await searchParams

  const { data, status } = await $api.get<TProductForPage>(`/products/${slug}`)

  console.log(data)

  const selectedColor =
    data.colors.find((v) => v.color.name === color) ?? data.colors[0]

  if (status !== 200) return null

  return (
    <div className={s.page}>
      <Text as='h1'>
        {data.productName}, {selectedColor.color.name}
      </Text>
      <article className={s.page__main_content}>
        <ProductImages images={selectedColor?.images} />
        <div>
          <ProductSelectColor colors={data.colors} />
          <ProductCharacteristics
            count={10}
            characteristics={data.characteristics}
          />
        </div>
        <ProductPay {...selectedColor} _id={data._id} />
      </article>

      {!!data.similar.length && (
        <article
          className={cx(
            "offset-top-64",
            s.page__characteristics,
            s["page__view-secondary"],
          )}>
          <Text as='div' size='xxl' weight='bold' color='orange'>
            Похожие товары
          </Text>
          <SwiperSlider products={data?.similar ?? []} />
        </article>
      )}

      <article
        className={cx(
          "offset-top-64",
          s.page__characteristics,
          s["page__view-secondary"],
        )}>
        <Text as='div' size='xxl' weight='bold' color='orange'>
          Характеристики
        </Text>
        <ProductCharacteristics characteristics={data.characteristics} />
      </article>

      {!!data.similar.length && (
        <article
          className={cx(
            "offset-top-64",
            s.page__characteristics,
            s["page__view-secondary"],
          )}>
          <Text as='div' size='xxl' weight='bold' color='orange'>
            Покупают вместе
          </Text>
          <SwiperSlider products={data?.similar ?? []} />
        </article>
      )}

      <article
        className={cx(
          "offset-top-64",
          s.page__description,
          s["page__view-secondary"],
        )}>
        <Text as='div' size='xxl' weight='bold' color='orange'>
          Описание
        </Text>
        <Text as='div' className='offset-top-12'>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </Text>
      </article>

      <article
        className={cx(
          "offset-top-64",
          s.page__reviews,
          s["page__view-secondary"],
        )}>
        <Text as='div' size='xxl'>
          Отзывы
        </Text>
        <Text as='div' className='offset-top-8'>
          {data.reviews.map((review) => (
            <Review key={review._id} {...review} />
          ))}
        </Text>
      </article>
    </div>
  )
}

export default page
