import {FC} from 'react'

interface Props {
  banner?: boolean
  children?: React.ReactNode
}

const PageTitle: FC<Props> = ({banner, children}) => {
  return (
    <h1
      className={`text-3xl font-extrabold leading-9 tracking-tight ${
        banner ? 'text-gray-100' : 'text-gray-900'
      } dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14`}
    >
      {children}
    </h1>
  )
}

export default PageTitle
