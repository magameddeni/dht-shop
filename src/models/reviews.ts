import { TImages } from "./file"

export interface TReview {
  _id: string
  disAdvantages?: string
  advantages?: string
  comment?: string
  createdAt: Date
  updatedAt: Date
  files: TImages
  reviewer: string
}
