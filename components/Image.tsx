import {FC} from 'react'
import NextImage, {ImageProps} from 'next/image'

interface Props {
  [key: string]: any
}

const Image: FC<ImageProps & Props> = props => {
  return <NextImage {...props} />
}

export default Image
