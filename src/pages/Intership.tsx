import Footer from '@/components/Footer'
import Benefit from '@/components/intership/Benefit'
import Gallery from '@/components/intership/Gallery'
import Info from '@/components/intership/Info'
import Navbar from '@/components/intership/Navbar'
import Skill from '@/components/intership/Skill'
import { FC } from 'react'

const Intership: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Info />
      <Skill />
      <Benefit />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Intership
