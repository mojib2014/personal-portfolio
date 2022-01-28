export default function MobileOverlay({ show, onClose }) {
  return (
    <div
      onClick={onClose}
      className={`fixed top-0 left-0 right-0 bottom-0 z-20 bg-black will-change-auto transition-opacity duration-500 ${
        show ? "opacity-90 visible" : "opacity-0 hidden"
      }`}
    >
      <span
        className="absolute cursor-pointer text-[#f8f8f8] right-5 top-3 w-10 h-10 after:content[''] 
      after:absolute after:w-[100%] after:h-1 after:left-0 after:top-[50%]
       after:bg-[#fff] after:origin-center after:rotate-45
       before:content[''] 
      before:absolute before:w-[100%] before:h-1 before:left-0 before:top-[50%]
       before:bg-[#fff] before:origin-center before:-rotate-45
       "
      ></span>
    </div>
  );
}
