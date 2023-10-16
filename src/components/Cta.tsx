import image from '@/assets/faq.jpg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Cta = () => {
  return (
    <div className="py-10 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Kapan Belajar Bahasa <span className="text-orange-500">INGGRIS</span>?
      </h1>
      <div className="md:flex items-center justify-start">
        <div className="md:w-1/2 pr-4 md:pr-12 ml-4  text-left">
          <h5 className="text-lg md:ml-32 ml-4  mb-3 font-bold text-orange-500">
            FAQ
          </h5>
          <p className="text-lg md:ml-32 ml-4 ">
            Mungkin ada yang sejak SD atau bahkan sejak TK. Ketika SMP dan SMA,
            kita juga masih belajar lagi, hingga lanjut ke dunia perkuliahan,
            kita ketemu lagi dengan bahasa Inggris. Pada akhir semester
            perkuliahan, skor TOEFL menjadi syarat kelulusan. Kalau kita lanjut
            S2 dan S3, salah satu syaratnya: BAHASA INGGRIS. Dalam dunia Kerja?
          </p>
          <Accordion className="md:ml-32 ml-4" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Read More</AccordionTrigger>
              <AccordionContent className="text-base">
                Banyak perusahaan menyadari pentingnya karyawan menguasai bahasa
                Inggris untuk bersaing di dunia internasional. Bahasa Inggris
                adalah bahasa internasional dan menjadi kebutuhan mutlak. Kursus
                bahasa Inggris di Jogja direkomendasikan. Namun, setelah belajar
                selama 9 tahun, kemampuan berbicara masih pasif karena kurikulum
                lebih fokus pada tata bahasa daripada berbicara. Untuk
                meningkatkan kemampuan berbicara, English Cafe menawarkan
                kurikulum "Secret Recipe" yang sudah teruji selama 9 tahun.
                Mereka menjanjikan hasil yang cepat dan menawarkan kursus dengan
                pendekatan yang menyenangkan. English Cafe mendapatkan peringkat
                sebagai kursus bahasa Inggris terbaik di Jogja.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="md:w-1/2 md:ml-8 md:mt-0">
          <img
            src={image}
            alt="Gambar Anda"
            className="w-full md:w-2/3 md:mx-auto mx-5"
          />
        </div>
      </div>
    </div>
  )
}

export default Cta
