import axios from "axios"

export const $api = axios.create({
  baseURL: "http://localhost:5050",
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer"

  return config
})
