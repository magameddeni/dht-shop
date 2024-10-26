import React, { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div style={{ padding: "20px", maxWidth: "1400px", margin: "auto" }}>
        {children}
      </div>
    </main>
  )
}

export default layout
