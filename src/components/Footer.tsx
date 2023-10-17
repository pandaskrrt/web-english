import logo from '@/assets/logo.jpg'
import { Link } from 'react-router-dom'
import { animateScroll } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-orange-400 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={logo} className="h-8 mr-3 rounded-lg" alt="" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                English Cafe
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    onClick={() => animateScroll.scrollToTop()}
                    className="hover:underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <Link to="/intership" className="hover:underline">
                    Intership
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="#" className="hover:underline">
              English Cafe
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
