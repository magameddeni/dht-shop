import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const useQueryParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  const updateRouter = () => router.push(pathname + "?" + params.toString())

  const setParam = (key: string, value: string) => {
    params.set(key, value)
    updateRouter()
  }

  const deleteParam = (key: string) => {
    params.delete(key)
    updateRouter()
  }

  return { params: searchParams, setParam, deleteParam }
}
