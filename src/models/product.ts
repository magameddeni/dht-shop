export interface TProductImages {
  key: string
  link: string
}

export interface TProductColor {
  images: TProductImages[]
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
  description: number
  colors: TProductColor[]
  characteristics: TProductCharacteristics[]
}
