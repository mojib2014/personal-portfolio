import Header from './Header'
import Footer from './Footer'

const LayoutWrapper = ({children}) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
