import {FC} from 'react'

interface Props {
  show?: boolean
  onClose?: React.MouseEventHandler
}

const MobileOverlay: FC<Props> = ({show, onClose}) => {
  return (
    <div
      onClick={onClose}
      className={`fixed top-0 left-0 right-0 bottom-0 z-20 bg-black transition-opacity duration-500 will-change-auto ${
        show ? 'visible opacity-90' : 'hidden opacity-0'
      }`}
    >
      <span
        className="after:content[''] before:content[''] absolute right-5 top-3 h-10 w-10 cursor-pointer 
      text-[#f8f8f8] before:absolute before:left-0 before:top-[50%] before:h-1
       before:w-[100%] before:origin-center before:-rotate-45
       before:bg-[#fff] 
      after:absolute after:left-0 after:top-[50%] after:h-1 after:w-[100%]
       after:origin-center after:rotate-45 after:bg-[#fff]
       "
      ></span>
    </div>
  )
}

export default MobileOverlay
