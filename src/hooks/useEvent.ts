import { useEffect } from "react"

const useEvent = (
  event: string,
  handler: () => void,
  passive: boolean = false,
) => {
  const hasWindow = typeof window !== "undefined"

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener(event, handler, passive)
      return () => window.removeEventListener(event, handler)
    }
  }, [hasWindow])
}

export default useEvent
