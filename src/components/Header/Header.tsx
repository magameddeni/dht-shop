"use client"
import React from "react"
import cx from "classnames"
import { Button } from "../UI/button"
import { Text } from "../UI/text"
import { Icon } from "../UI/icon"
import s from "./style.module.scss"

const Header = () => {
  const renderInputAndCatalogBtn = () => {
    return (
      <div className={s.header__center}>
        <Button>Каталог</Button>
        <input />
      </div>
    )
  }

  const headerNavigation = [
    { title: "Избранное", icon: "heart", href: "favorite" },
    { title: "Корзина", icon: "shopping-cart", href: "cart" },
    { title: "Заказы", icon: "truck", href: "orders" },
    { title: "Профиль", icon: "user", href: "user" },
  ]

  return (
    <header className={cx(s.wrapper)}>
      <div className={s.top_header}></div>

      <div className={cx(s.header, "container")}>
        <Text weight='bold' size='xxl' color='orange'>
          High Tech
        </Text>
        {renderInputAndCatalogBtn()}
        <div className={s.header__navigation}>
          {headerNavigation.map((n) => (
            <Text size='xl' as='div' key={n.href} align='center'>
              <Icon name={n.icon} />
              <Text as='div' className='offset-top-4' size='xxs'>
                {n.title}
              </Text>
            </Text>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
