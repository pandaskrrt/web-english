import { FC } from 'react'
import Navbar from '../components/homepages/Navbar'
import Hero from '../components/homepages/Hero'
import Cta from '../components/homepages/Cta'
import Profile from '../components/homepages/Profile'
import Benefit from '../components/homepages/Benefit'
import Program from '../components/homepages/Price'
import Level from '../components/homepages/Level'
import Footer from '@/components/Footer'
import CabangAccorrdion from '@/components/homepages/CabangAccorrdion'

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cta />
      <Profile />
      <Benefit />
      <Program />
      <Level />
      <CabangAccorrdion />
      <Footer />
    </div>
  )
}

export default Home
