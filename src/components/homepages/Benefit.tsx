import { Calendar } from 'lucide-react'
import { Percent } from 'lucide-react'
import { Clock10 } from 'lucide-react'
import { BookMinus } from 'lucide-react'
import { UserCheck2 } from 'lucide-react'
import { HeartHandshake } from 'lucide-react'

const Benefit = () => {
  return (
    <section id="benefit" className="bg-white dark:bg-gray-900 py-6">
      <div className="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6 md:mx-auto mx-4">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-orange-600 dark:text-white">
            Benefit
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Penasaran dengan Benefit yang bisa di dapatkan pada kelas ini?
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Calendar color="orange" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Gratis Mengulang Seumur Hidup
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              reiciendis labore ipsam deserunt velit tenetur aut debitis dolorem
              animi, incidunt ut voluptates quae commodi voluptas optio!
              Tempore, sit. Excepturi, architecto?
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Percent color="orange" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Garansi pasti bisa atau uang kembali 100%
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nulla, neque perferendis nostrum quae unde officiis vel adipisci
              iure quis enim tenetur tempora earum magni quasi voluptas odio
              suscipit accusantium?
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Clock10 color="orange" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Waktu dan Tempat Fleksibel
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              maxime recusandae, debitis et accusamus asperiores officiis nobis
              illo adipisci officia alias! Possimus tenetur temporibus alias
              perspiciatis molestias fuga assumenda distinctio.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <UserCheck2 color="orange" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Garansi TOEFL pasti 500
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              quaerat ipsam itaque reiciendis provident repellat, corrupti
              exercitationem asperiores dolorem, qui eaque vel necessitatibus
              beatae natus molestias! Laborum ex alias possimus.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <HeartHandshake color="orange" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Daftar 2 Gratis 1
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores, deserunt itaque? Hic odio aliquid quidem beatae
              repellendus amet velit iste exercitationem, vero commodi rerum
              soluta assumenda enim? Ducimus, ullam iste!
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <BookMinus color="orange" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Gratis Modul dan e-Sertifikat
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores, deserunt itaque? Hic odio aliquid quidem beatae
              repellendus amet velit iste exercitationem, vero commodi rerum
              soluta assumenda enim? Ducimus, ullam iste!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefit
