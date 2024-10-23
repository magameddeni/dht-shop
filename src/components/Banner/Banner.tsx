"use client"
import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import s from "./style.module.scss"

const Banner = () => {
  return (
    <div className={s.banner}>
      <Swiper spaceBetween={20} slidesPerView={1}>
        <SwiperSlide className={s.banner__slider}>
          <Image
            fill
            objectFit='cover'
            src='https://cdn.citilink.ru/wdl_2V-6cYop1zyKuSX6VyU6ByBkXEjOKEG748JmYfg/resizing_type:fit/gravity:sm/width:559/height:210/plain/banners/nw_banner_1_21154_B_1729597485.jpg'
            alt={""}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
