import React from "react"
import cx from "classnames"
import { $api } from "@/http/axios"
import { Text } from "@/components/UI/Text"
import { TProduct, TProductForCard } from "@/models/product"
import MobileNavigation from "@/components/MobileNavigation"
import ProductSelectColor from "@/components/ProductPage/ProductSelectColor"
import ProductImages from "@/components/ProductPage/ProductImages"
import ProductPay from "@/components/ProductPage/ProductPay"
import ProductCharacteristics from "@/components/ProductPage/ProductCharacteristics"
import SwiperSlider from "@/components/Swiper/Swiper"
import s from "../style.module.scss"

interface TPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ color: string }>
}

interface TProductForPage extends TProduct {
  similar: TProductForCard[]
}

const page = async ({ params, searchParams }: TPageProps) => {
  const { slug } = await params
  const { color } = await searchParams

  const { data, status } = await $api.get<TProductForPage>(`/products/${slug}`)

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
        <article className='offset-top-64'>
          <Text size='xxl'>Похожие товары</Text>
          <SwiperSlider products={data?.similar ?? []} />
        </article>
      )}

      <article className={cx("offset-top-64", s.page__characteristics)}>
        <Text size='xxl'>Характеристики</Text>
        <ProductCharacteristics characteristics={data.characteristics} />
      </article>
    </div>
  )
}

export default page
