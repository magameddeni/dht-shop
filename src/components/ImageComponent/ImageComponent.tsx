"use client"
import React, { useState } from "react"
import Image from "next/image"
import { isValidHttpUrl } from "../../helpers/validUrl"

interface ImageComponentProps {
  src?: string
  fill?: boolean
  objectFit?: string
  width?: number
  height?: number
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  fill = true,
  objectFit = "cover",
  width,
  height,
}) => {
  const defaultImage = "/free-icon-no-photo-4054617.png"
  const [link, setLink] = useState(isValidHttpUrl(src) ? src : defaultImage)

  return (
    <Image
      alt={""}
      fill={fill}
      width={width}
      height={height}
      src={link ?? ""}
      objectFit={objectFit}
      onError={() => setLink(defaultImage)}
    />
  )
}

export default ImageComponent
