import React, { useState } from 'react'
import logo from '@/assets/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-16 w-16 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <button className="md:hidden focus:outline-none" onClick={toggleNavbar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row md:space-x-8">
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
              >
                Benefit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
              >
                Program
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
              >
                Level
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
              >
                Harga
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
              >
                Cabang
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
              >
                Testimoni
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Internship
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col mt-4 ml-6 ">
          <li>
            <a
              href="#"
              className="block py-2 text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
            >
              Benefit
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
            >
              Program
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
            >
              Level
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
            >
              Harga
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
            >
              Cabang
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
            >
              Testimoni
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
            >
              Internship
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
