import NextImage, {ImageProps} from 'next/image'
import {FC} from 'react'

const Image: FC<ImageProps> = props => {
  return <NextImage {...props} />
}

export default Image
