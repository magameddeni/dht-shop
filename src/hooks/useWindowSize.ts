import { useState, useEffect } from "react"
import { mediaBreakpoints as sizes } from "../constants/grid"
import useEvent from "./useEvent"

export const useWindowSize = () => {
  const [size, setSize] = useState<string>("")
  const [deviceWidth, setDeviceWidth] = useState<string>("")
  const [windowSize, setWindowSize] = useState<{
    width: number | null
    height: number | null
  }>({
    width: null,
    height: null,
  })

  useEffect(() => {
    if (size === "xxs" || size === "xs") setDeviceWidth("small")
    if (size === "sm" || size === "md") setDeviceWidth("medium")
    if (size === "lg" || size === "xl" || size === "xxl")
      setDeviceWidth("large")
  }, [size, setDeviceWidth])

  const setCurrentSize = (width: number) => {
    if (sizes.xs <= width && width < sizes.sm) setSize("xs")
    else if (sizes.sm <= width && width < sizes.md) setSize("sm")
    else if (sizes.md <= width && width < sizes.lg) setSize("md")
    else if (sizes.lg <= width && width < sizes.xl) setSize("lg")
    else if (sizes.xl <= width && width < sizes.xxl) setSize("xl")
    else if (width >= sizes.xxl) setSize("xxl")
    else setSize("xxs")
  }

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    setCurrentSize(window.innerWidth)
  }

  useEffect(() => handleResize(), [])
  useEvent("resize", handleResize)

  return { ...windowSize, size, deviceWidth }
}
