const Hero = () => {
  const data = {
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipMMHsKlM-AmXjfBRnT2G3YRbN8ZyAF5AK_F47sJ=s0',
  }

  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-400 min-h-screen flex flex-col items-center md:flex-row md:items-center justify-between">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:items-center justify-between">
        <div className="w-full md:w-1/2 text-white md:mr-28 order-1 md:order-2 mb-14 md:mb-0">
          <h1 className="text-5xl font-bold text-center md:text-left">
            Kursus Bahasa Inggris di Jogja dan Les Bahasa Inggris di Jogja
            Terbaik
          </h1>
          <p className="text-sm mt-4 text-center md:text-left">
            Selamat datang di Tempat Kursus Bahasa Inggris Terbaik |
            0851-7510-4232 (WA) Les Bahasa Inggris Terdekat, Belajar Bahasa
            Inggris, Kursus Bahasa Inggris Terdekat, Kursus Bahasa Inggris
            Murah, Kursus Bahasa Inggris Online
          </p>
        </div>
        <div className="md:w-1/2 pr-10 md:ml-32 ml-12 md:mt-0 mt-11 self-center">
          <img
            src={data.imageUrl}
            alt="Gambar Hero"
            className="w-full md:max-w-xl h-auto rounded-lg mx-auto md:mx-0"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
