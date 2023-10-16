import { FC } from 'react'
import logo from '@/assets/office.jpg'

const Info: FC = () => {
  return (
    <section id="info" className="flex justify-center w-full bg-slate-50">
      <div className="flex gap-8 w-[60%]">
        <img
          src={logo}
          alt=""
          loading="lazy"
          className="w-80 my-16 rounded-2xl object-contain"
        />
        <div className="self-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            PROGRAM <span className="text-orange-500">INTERSHIP</span>
          </h3>
          <p>
            <span className="font-semibold">English Cafe</span> telah dan akan
            terus berkomitmen untuk mendukung program pemerintah
            <span className="font-semibold"> “SDM Unggul, Indonesia Maju”</span>
            . Melalui program internship, kami memberikan pelatihan untuk
            meningkatkan dan mengasah soft skill bagi pelajar dan mahasiswa.
            Program ini didasari atas semangat untuk menjembatani kebutuhan
            mahasiswa agar siap terjun di dunia kerja.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Info
