"use client"
import { useQueryParams } from "@/hooks/useQueryParams"
import React from "react"

const ProductColors = () => {
  const { params } = useQueryParams()
  console.log(params.get("color"))

  return <></>
}

export default ProductColors
