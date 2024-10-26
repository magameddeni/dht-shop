import { TImages } from "./file"

export interface TProductColor {
  images: TImages[]
  regularPrice: number
  discountPrice: number
  color: {
    hex: string
    name: string
  }
}

export interface TProductCharacteristics {
  title: string
  value: string[]
}

export interface TProduct {
  _id: string
  productName: string
  categories: string[]
  description: string
  colors: TProductColor[]
  characteristics: TProductCharacteristics[]
}

export interface TProductForCard {
  _id: string
  colors: {
    hex: string
    name: string
  }[]
  images: {
    link: string
    _id: string
  }[]
  productName: string
  stock: number
  regularPrice: number
  discountPrice: number
}
