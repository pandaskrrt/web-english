import { FC, useState } from 'react'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import logo from '@/assets/logo.jpg'

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="flex justify-between items-center w-4/5 lg:w-3/4 xl:w-2/3 h-16">
      <a href="#" className="flex items-center">
        <img src={logo} className="h-16 w-16 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
      </a>
      <div className="hidden lg:flex items-center gap-4">
        <Link
          activeClass="active"
          to="info"
          spy={true}
          smooth={true}
          duration={500}
          className="font-semibold hover:text-orange-500"
        >
          Info
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          duration={500}
          className="font-semibold hover:text-orange-500"
        >
          Skill
        </Link>
        <Link
          activeClass="active"
          to="benefit"
          spy={true}
          smooth={true}
          duration={500}
          className="font-semibold hover:text-orange-500"
        >
          Benefit
        </Link>
        <Link
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          duration={500}
          className="font-semibold hover:text-orange-500"
        >
          Gallery
        </Link>
        <RouterLink to="/" className="font-semibold hover:text-orange-500">
          Back to home
        </RouterLink>{' '}
        {/* Teks tebal dan hover warna oranye */}
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-white w-48 p-4 shadow-md mt-2">
          <ul className="space-y-2">
            <li>
              <Link
                activeClass="active"
                to="info"
                spy={true}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="font-semibold hover:text-orange-500"
              >
                Info
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skill"
                spy={true}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="font-semibold hover:text-orange-500"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="benefit"
                spy={true}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="font-semibold hover:text-orange-500" // Teks tebal dan hover warna oranye
              >
                Benefit
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="font-semibold hover:text-orange-500" // Teks tebal dan hover warna oranye
              >
                Gallery
              </Link>
            </li>
            <li>
              <RouterLink
                to="/"
                className="block text-gray-600 hover:text-gray-800"
                onClick={toggleMenu}
                className="font-semibold hover:text-orange-500"
              >
                Back to home
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
