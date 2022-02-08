import React, {FC} from 'react'
import SectionContainer from './SectionContainer'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children?: any
}

const LayoutWrapper: FC<Props> = ({children}) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
