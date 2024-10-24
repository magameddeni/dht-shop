import axios from "axios"

export const $api = axios.create({
  baseURL: process.env.BASE_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer"

  return config
})
