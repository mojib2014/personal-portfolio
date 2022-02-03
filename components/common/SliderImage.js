import { useState, useEffect } from "react";
import Image from "next/image";

export default function SliderImage({ images, alt }) {
  const [index, setIndex] = useState(0);

  if (images.length && index > images.length - 1) setIndex(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(intervalID);
  }, [index]);

  return (
    <Image
      src={images[index]}
      alt={alt}
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="fill"
      className="rounded-md transition-all ease-in duration-300 will-change-contents"
    />
  );
}
