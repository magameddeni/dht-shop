import Header from "@/components/Header/Header"
import React, { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      <div className='container' style={{ margin: "auto" }}>
        {children}
      </div>
    </main>
  )
}

export default layout
