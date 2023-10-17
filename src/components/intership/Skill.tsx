import entrepreneurship from '@/assets/entrepreneurship-1-300x188.webp'
import content from '@/assets/content-creation-300x188.webp'
import marketing from '@/assets/marketing-300x188.webp'
import video from '@/assets/video-editing-300x188.webp'
import graphic from '@/assets/graphic-design-300x188.webp'

const Level = () => {
  return (
    <div id="level" className="text-center">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-5 py-10">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-16">
          PENGEMBANGAN <span className="text-orange-500">SKILL</span>
        </h3>
      </div>
      <div className="flex flex-wrap justify-center mx-2 md:mx-14">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="p-8 rounded-t-lg" src={entrepreneurship} alt="" />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Entrepreneurship
                </h5>
              </a>
              <p className="text-left mt-5">
                Di bidang ini, kamu akan dilatih tentang bagaimana membangun
                usaha, membuat produk, mengembangkan usaha, hingga menanamkan
                nilai-nilai entrepreneur.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={marketing}
                alt="marketing"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Marketing
                </h5>
              </a>
              <p className="text-left mt-5">
                Di bidang ini, kamu akan diajari teori-teori marketing, bertemu
                langsung dengan customer, teknik closing dan mentalitas menjadi
                seorang marketer.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={content}
                alt="Content Creation"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Content Creation
                </h5>
              </a>
              <p className="text-left mt-5">
                Kamu akan diajari tentang membuat video yang aesthetic, simple
                dan elegant.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={video}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Video Editing
                </h5>
              </a>
              <p className="text-left mt-5">
                Kamu akan diajari tentang membuat video yang aesthetic, simple
                dan elegant.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={graphic}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Graphic Design
                </h5>
              </a>
              <p className="text-left mt-5">
                Graphic Design adalah skill yang dibutuhkan saat ini. Kamu akan
                belajar tentang cara membuat design yang cantik dan
                eye-catching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Level
