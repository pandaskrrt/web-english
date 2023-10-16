import React from 'react'

const HeroSection = () => {
  // Simpan URL gambar dalam variabel data
  const data = {
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipMMHsKlM-AmXjfBRnT2G3YRbN8ZyAF5AK_F47sJ=s0',
  }

  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-400 min-h-screen flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2 pr-10 ml-60">
          <img
            src={data.imageUrl}
            alt="Gambar Hero"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="w-1/2 text-white md:mr-28">
          <h1 className="text-5xl font-bold">
            Kursus Bahasa Inggris di Jogja dan Les Bahasa Inggris di Jogja
            Terbaik
          </h1>
          <p className="text-sm mt-4">
            Selamat datang di Tempat Kursus Bahasa Inggris Terbaik |
            0851-7510-4232 0851-7510-4232 (WA) Les Bahasa Inggris Terdekat,
            Belajar Bahasa Inggris, Kursus Bahasa Inggris Terdekat, Kursus
            Bahasa Inggris Murah, Kursus Bahasa Inggris Online
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
