import React from "react"
import { $api } from "@/http/axios"
import { Text } from "@/components/UI/Text"
import { TProduct } from "@/models/product"
import MobileNavigation from "@/components/MobileNavigation"
import s from "../style.module.scss"
import ProductColors from "@/components/ProductPage/ProductColors"
import ProductImages from "@/components/ProductPage/ProductImages"

interface TPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ color: string }>
}

const page = async ({ params, searchParams }: TPageProps) => {
  const { slug } = await params
  const { color } = await searchParams

  const { data, status } = await $api.get<TProduct>(`/products/${slug}`)

  const selectedColor =
    data.colors.find((v) => v.color.name === color) ?? data.colors[0]

  if (status !== 200) return null

  return (
    <main className={s.page}>
      <Text as='h1'>{data.productName}</Text>
      <article className={s.page__main_content}>
        <ProductImages images={selectedColor?.images} />
      </article>
      <ProductColors />
      <MobileNavigation />
    </main>
  )
}

export default page
