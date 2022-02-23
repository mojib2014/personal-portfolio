import {FC} from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children?: React.ReactNode
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
