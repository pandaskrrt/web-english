const Profile = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-400  flex flex-col items-center justify-center min-h-screen">
      <div className="text-center p-8 md:mt-16">
        <h1 className="text-3xl font-bold">
          Tempat Les, Kursus Bahasa Inggris dengan Konsep Cafe Pertama di
          Indonesia
        </h1>
        <p>Untuk Siswa, Mahasiswa, Karyawan, dan Umum</p>
        <div className="mt-6 md:mt-12 mx-5">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="rounded-lg absolute inset-0 w-full h-full"
              src="https://lh3.googleusercontent.com/ggs/AF1QipNnU3J0f_e8Wtwf0pE_2d7UNMd4ggQWevCTaGoU=m18?cpn=PAXkheJMFfeoKlcg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-12 mx-5 flex justify-center flex-wrap mb-4">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipPslo2jBvQ9DEWZqVKXEiuSO_lCHh_PPg3Ea47q"
          alt="Image 1"
          className="w-64 h-64 m-2 flex-shrink-0"
        />
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipPslo2jBvQ9DEWZqVKXEiuSO_lCHh_PPg3Ea47q"
          alt="Image 2"
          className="w-64 h-64 m-2 flex-shrink-0"
        />
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipOZFXiT5EcBAdzTdc1qGy7j1XhVlXVg11A0dZIM=s0"
          alt="Image 3"
          className="w-64 h-64 m-2 flex-shrink-0"
        />
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipPslo2jBvQ9DEWZqVKXEiuSO_lCHh_PPg3Ea47q"
          alt="Image 4"
          className="w-64 h-64 m-2 flex-shrink-0"
        />
      </div>
    </div>
  )
}

export default Profile
