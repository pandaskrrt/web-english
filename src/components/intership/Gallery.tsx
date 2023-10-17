import { FC } from 'react'
import img1 from '@/assets/office2.jpg'

const Gallery: FC = () => {
  return (
    <section id="gallery" className="flex flex-col items-center">
      <h3 className="scroll-m-20 text-2xl md:text-5xl font-semibold tracking-tight text-orange-500 mb-6">
        GALERI
      </h3>
      <p className="text-lg text-center md:mx-56 mb-8">
        English Cafe memberikan pilihan program yang sesuai seleramu. Ada 2
        pilihan program spesial yang akan membantumu semakin cepat berbahasa
        Inggris.
      </p>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-wrap justify-center gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <img
              key={index}
              src={img1}
              alt=""
              className="w-full md:w-[33%] my-1 object-cover rounded-2xl"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
