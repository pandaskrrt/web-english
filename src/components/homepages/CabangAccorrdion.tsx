import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const CabangAccorrdion = () => {
  return (
    <div className="text-center mb-20">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-5 py-10">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Level
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          aliquid, dolore nesciunt corporis elige
        </p>
      </div>
      <Accordion className="md:w-96 md:mx-auto mx-10" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>DI Yogyakarta</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-4">
              <li>
                <strong>English Cafe Pusat</strong>
                <br />
                Alamat: Kopi Nuri Concat, Jl. Anggajaya 2, Sanggrahan,
                Condongcatur, Kec. Depok, Kab. Sleman
                <br />
                Jam Buka (Senin-Sabtu): 13.00-18.00 WIB
              </li>
              <li>
                <strong>Bento Kopi Nologaten</strong>
                <br />
                Alamat: Jl. Nologaten, RT.04/RW.01, Tempel, Caturtunggal, Kec.
                Depok, Kab. Sleman
                <br />
                Jam Buka (Senin-Sabtu): 14.00-19.00 WIB
              </li>
              <li>
                <strong>ICafe Resto</strong>
                <br />
                Alamat: Jl. Cik Di Tiro No.18, Terban, Kec. Gondokusuman, Kota
                Yogyakarta
                <br />
                Jam Buka (Senin-Sabtu): 15.00-19.00 WIB
              </li>
              <li>
                <strong>Bento Kopi UAD</strong>
                <br />
                Alamat: Jl. Patih Singoranu No.153, Kragilan, Tamanan, Kec.
                Banguntapan, Kab. Bantul
                <br />
                Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
              </li>
              <li>
                <strong>Bento Kopi UMY</strong>
                <br />
                Alamat: Jl. Gatak No.99, Brajan, Tamantirto, Kec. Kasihan, Kab.
                Bantul
                <br />
                Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="md:w-96 md:mx-auto mx-10" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Solo</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-4">
              <li>
                <strong>Bento Kopi UNS</strong>
                <br />
                Alamat: Jl. Agung Timur No.14, Mojosongo, Kec. Jebres, Kota
                Surakarta
                <br />
                Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
              </li>
              <li>
                <strong>Bento Kopi UMS</strong>
                <br />
                Alamat: Jl. Menco Raya No.109, Nilagraha, Gonilan, Kec.
                Kartasura, Kab. Sukoharjo
                <br />
                Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="md:w-96 md:mx-auto mx-10" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Semarang</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                <strong>Tower Cafe</strong>
                <ul>
                  <li>
                    Alamat: Jl. Banjarsari Selatan No.49B, Tembalang, Kec.
                    Banyumanik, Kota Semarang
                  </li>
                  <li>Jam Operasional: Senin-Sabtu, 15.00-20.00 WIB</li>
                </ul>
              </li>
              <li>
                <strong>Roullazz Cafe</strong>
                <ul>
                  <li>
                    Alamat: Jl. Kusuma Wardani No.H-34, Pleburan, Kec. Semarang
                    Sel., Kota Semarang
                  </li>
                  <li>Jam Operasional: Senin-Sabtu, 15.00-20.00 WIB</li>
                </ul>
              </li>
              <li>
                <strong>KANE Semarang</strong>
                <ul>
                  <li>
                    Alamat: Jl. Jatimulyo No.8, Pedalangan, Kec. Banyumanik,
                    Kota Semarang
                  </li>
                  <li>Jam Operasional: Senin-Sabtu, 15.00-20.00 WIB</li>
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="md:w-96 md:mx-auto mx-10" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Bandung</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                <strong>Akar Creative Space</strong>
                <ul>
                  <li>
                    Alamat: Jl. Buah Batu No.79, Malabar, Kec. Lengkong, Kota
                    Bandung
                  </li>
                  <li>Jam Operasional: Senin-Sabtu, 15.00-19.00 WIB</li>
                </ul>
              </li>
              <li>
                <strong>Yellow Truck Coffee</strong>
                <ul>
                  <li>
                    Alamat: Jl. Patuha No.29, Lkr. Sel., Kec. Lengkong, Kota
                    Bandung
                  </li>
                  <li>Jam Operasional: Senin-Sabtu, 15.00-19.00 WIB</li>
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="md:w-96 md:mx-auto mx-10" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Malang</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                <strong>DW Coffee Shop</strong>
                <ul>
                  <li>
                    Alamat: Jl. Bogor No.11, Sumbersari, Kec. Lowokwaru, Kota
                    Malang
                  </li>
                  <li>Jam Operasional: Senin-Sabtu, 15.00-20.00 WIB</li>
                </ul>
              </li>
              <li>
                <strong>Arena Coffee & Roastery</strong>
                <ul>
                  <li>
                    Alamat: Jl. Ir. Soekarno No.133, Ngudi, Beji, Kec. Junrejo,
                    Kota Batu
                  </li>
                  <li>Jam Operasional: Senin-Sabtu, 15.00-20.00 WIB</li>
                </ul>
              </li>
              <li>
                <strong>Warung Susu 26</strong>
                <ul>
                  <li>
                    Alamat: Jl. Bunga Coklat No.26, Jatimulyo, Kec. Lowokwaru,
                    Kota Malang
                  </li>
                  <li>Jam Operasional: Senin-Sabtu, 15.00-20.00 WIB</li>
                </ul>
              </li>
              <li>
                <strong>PW (Padhasaran Wedhangan)</strong>
                <ul>
                  <li>
                    Alamat: Jl. Simpang Gajayana No.19, Merjosari, Kec.
                    Lowokwaru, Kota Malang
                  </li>
                  <li>Jam Operasional: Senin-Sabtu, 15.00-20.00 WIB</li>
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="md:w-96 md:mx-auto mx-10" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Surabaya</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                <strong>Serlok Kopi</strong>
                <ul>
                  <li>
                    Alamat: Jl. Kertajaya No.67, RT.001/RW.03, Airlangga, Kec.
                    Gubeng, Surabaya
                  </li>
                  <li>Jam Operasional: Senin-Sabtu, 15.00-20.00 WIB</li>
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default CabangAccorrdion
