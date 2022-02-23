import {FC} from 'react'
import NextImage, {ImageProps} from 'next/image'

const Image: FC<ImageProps> = props => {
  return <NextImage {...props} />
}

export default Image
