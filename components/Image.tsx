import NextImage, {ImageProps} from 'next/image'

interface Props {
  [key: string]: any
}

const Image = (props: ImageProps & Props) => {
  return <NextImage {...props} />
}

export default Image
