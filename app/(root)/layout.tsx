import React, { ReactNode } from 'react'
import RootLayout from '../layout'

const Rootlayout = ({children}:{children: ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default RootLayout