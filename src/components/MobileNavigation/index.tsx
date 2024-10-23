"use client"
import React from "react"
import cx from "classnames"
import { Icon } from "../UI/icon"
import { usePathname, useRouter } from "next/navigation"
import s from "./style.module.scss"

const MobileNavigation = () => {
  const pathname = usePathname()
  const { push } = useRouter()

  const defaultNavigations = [
    { icon: "home", link: "/" },
    { icon: "search", link: "/search" },
    { icon: "grid", link: "/category" },
    { icon: "shopping-cart", link: "/cart" },
    { icon: "truck", link: "/orders" },
    { icon: "user", link: "/user" },
  ]

  return (
    <div className={s.main}>
      {defaultNavigations.map((v) => (
        <div
          onClick={() => push(v.link)}
          key={v.icon}
          className={cx(s.main__item, {
            [s["main__item-active"]]: pathname === v.link,
          })}>
          <Icon size='xl' name={v.icon} />
        </div>
      ))}
    </div>
  )
}

export default MobileNavigation
