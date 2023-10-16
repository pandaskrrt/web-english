import image from '@/assets/program.jpg'

const Program = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Program
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            aliquid, dolore nesciunt corporis elige
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {/* Team Member 1 */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={image}
                alt="Bonnie Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Regular</a>
              </h3>

              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Program reguler didesain buat kamu yang suka belajar bareng
                dengan teman-teman satu kelas.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={image}
                alt="Bonnie Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Private</a>
              </h3>

              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Khusus untuk kamu yang super sibuk dan hampir tidak ada waktu
                untuk belajar bahasa inggris, ini adalah program yang di desain
                khusus buat kamu.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={image}
                alt="Bonnie Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Full House</a>
              </h3>

              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Buat kamu yang ingin belajar bahasa Inggris, tapi ingin full
                belajar di rumah. Maka program Full House adalah program yang
                wajib kamu ambil.
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={image}
                alt="Bonnie Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Online</a>
              </h3>

              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Program online di design khusus buat kamu yang super sibuk dan
                tidak bisa datang ke lokasi English Cafe untuk belajar bahasa
                Inggris.
              </p>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={image}
                alt="Bonnie Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Translation</a>
              </h3>

              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                English Translation adalah program khusus penerjemahan dari
                bahasa Inggris ke Indonesia ataupun sebaliknya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Program
