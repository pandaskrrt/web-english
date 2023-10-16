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
              src="https://r5---sn-npoeeney.googlevideo.com/videoplayback?expire=1697437763&ei=I7wsZYitDcOl9fwPw6yT0AU&ip=36.81.152.144&id=4110e5205864cfda&itag=18&source=picasa&begin=0&requiressl=yes&xpc=EgN6AQE=&mh=N8&mm=32&mn=sn-npoeeney&ms=su&mv=m&mvi=5&pl=20&sc=yes&susc=ph&app=fife&ic=945&pcm2=yes&mime=video/mp4&vprv=1&prv=1&dur=30.093&lmt=1603168031153068&mt=1697429800&cpn=PAXkheJMFfeoKlcg&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,app,ic,pcm2,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRQIgZMuKwpNcpZtC86zqfvZjkOcj8gm3SUg3Ry9NbbBW-r0CIQD-UdBc5tF6aG3qXAQUmbIjN42EXIF3Bn3HOAGhthB_Jg==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AK1ks_kwRQIgIQsB9qpHfbjQvZMiskki2W8P345FNSEAPlnOJwmnkcMCIQDhcpI1cJMDWq9nCtCGaRzH60s2roLGg8qS5yvXe9VqRg=="
              title="YouTube Video"
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
