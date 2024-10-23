import React from "react"
import MobileNavigation from "@/components/MobileNavigation"
import Banner from "@/components/Banner/Banner"
import Header from "@/components/Header/Header"

const page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MobileNavigation />
    </div>
  )
}

export default page
