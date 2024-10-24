import Header from "@/components/Header/Header"
import React, { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      <div style={{ padding: "20px", width: "1400px", margin: "auto" }}>
        {children}
      </div>
    </main>
  )
}

export default layout
