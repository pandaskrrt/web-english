import { FC } from 'react'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import logo from '@/assets/logo.jpg'

const Navbar: FC = () => {
  return (
    <div className="flex justify-between w-[60%]">
      <div>
        <img
          src={logo}
          alt=""
          loading="lazy"
          className="object-cover w-20 h-12"
        />
      </div>
      <div className="flex items-center gap-4">
        <Link
          activeClass="active"
          to="info"
          spy={true}
          smooth={true}
          duration={500}
        >
          Info
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          duration={500}
        >
          Skill
        </Link>
        <Link
          activeClass="active"
          to="benefit"
          spy={true}
          smooth={true}
          duration={500}
        >
          Benefit
        </Link>
        <Link
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          duration={500}
        >
          Gallery
        </Link>
        <RouterLink to="/">Back to home</RouterLink>
      </div>
    </div>
  )
}

export default Navbar
