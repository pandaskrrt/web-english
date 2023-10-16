import { FC } from 'react'
import Navbar from '../components/homepages/Navbar'
import Hero from '../components/homepages/Hero'
import Cta from '../components/homepages/Cta'
import Profile from '../components/homepages/Profile'
import Benefit from '../components/homepages/Benefit'
import Program from '../components/homepages/Price'
import Level from '../components/homepages/Level'

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
    </div>
  )
}

export default Home
