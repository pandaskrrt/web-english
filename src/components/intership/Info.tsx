import { FC } from 'react'
import logo from '@/assets/office.jpg'

const Info: FC = () => {
  return (
    <section id="info" className="w-full bg-slate-50">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-2/5 md:ml-40 md:mx-0 mx-8">
          <img
            src={logo}
            alt=""
            loading="lazy"
            className="w-80 my-16 rounded-2xl object-contain"
          />
        </div>
        <div className="md:w-3/5 md:text-left md:mr-36 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            PROGRAM <span className="text-orange-500">INTERNSHIP</span>
          </h3>
          <p className="text-sm md:text-base md:mx-0">
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
