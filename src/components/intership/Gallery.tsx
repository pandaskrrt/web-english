import { FC } from 'react'
import img1 from '@/assets/office2.jpg'

const Gallery: FC = () => {
  return (
    <section id="gallery" className="flex flex-col items-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-orange-500 my-16">
        GALERI
      </h3>
      <div className="flex flex-col items-center w-[60%]">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-center">
          English Cafe memberikan pilihan program yang sesuai seleramu. Ada 2
          pilihan program spesial yang akan membantumu semakin cepat berbahasa
          Inggris.
        </p>
        <div className="flex justify-between flex-wrap">
          <img
            src={img1}
            alt=""
            className="w-[33%] my-1 object-cover rounded-2xl"
            loading="lazy"
          />
          <img
            src={img1}
            alt=""
            className="w-[33%] my-1 object-cover rounded-2xl"
            loading="lazy"
          />
          <img
            src={img1}
            alt=""
            className="w-[33%] my-1 object-cover rounded-2xl"
            loading="lazy"
          />
          <img
            src={img1}
            alt=""
            className="w-[33%] my-1 object-cover rounded-2xl"
            loading="lazy"
          />
          <img
            src={img1}
            alt=""
            className="w-[33%] my-1 object-cover rounded-2xl"
            loading="lazy"
          />
          <img
            src={img1}
            alt=""
            className="w-[33%] my-1 object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Gallery
