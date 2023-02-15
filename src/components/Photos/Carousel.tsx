import { useRef, useState } from 'react'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import image5 from '../../assets/images/image5.jpg'

export default function Carousel() {
  const [curr, setCurr] = useState(0)
  const images = [image2, image3, image4, image5]
  const imagesWithRefs = images.map((img) => ({
    img,
    ref: useRef<HTMLImageElement>(null),
  }))

  return (
    <>
      <div className="carousel carousel-center w-full p-4 space-x-4 photos--carousel">
        {imagesWithRefs.map(({ img, ref }) => (
          <div
            key={img}
            className="carousel-item px-4 pt-4 pb-8 bg-white shadow-lg aspect-[3/2] photos--carousel-item"
          >
            <img
              ref={ref}
              src={img}
              className="object-contain mx-auto"
              alt="Mi Cumple Martín"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-4">
        {imagesWithRefs.map(({ img, ref }, i) => (
          <div
            key={img}
            className={`w-5 h-5 rounded-full ${
              curr === i ? 'bg-[#252525]' : 'bg-[#f07575]'
            }`}
            onClick={() => {
              setCurr(i)
              ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
              })
            }}
          />
        ))}
      </div>
    </>
  )
}
