import React, { useState } from 'react'

const Cabang: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">CABANG LES BAHASA INGGRIS</h1>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700 mx-40">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#jogja"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'profile' ? 'border-primary' : ''
              }`}
              id="jogja"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === 'profile'}
              onClick={() => handleTabClick('profile')}
            >
              Yogyakarta
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'dashboard' ? 'border-primary' : ''
              }`}
              id="solo"
              data-tabs-target="#solo"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected={activeTab === 'dashboard'}
              onClick={() => handleTabClick('dashboard')}
            >
              Solo
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'settings' ? 'border-primary' : ''
              }`}
              id="settings-tab"
              data-tabs-target="#semarang"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected={activeTab === 'settings'}
              onClick={() => handleTabClick('settings')}
            >
              Semarang
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'bandung' ? 'border-primary' : ''
              }`}
              id="bandung"
              data-tabs-target="#bandung"
              type="button"
              role="tab"
              aria-controls="bandung"
              aria-selected={activeTab === 'bandung'}
              onClick={() => handleTabClick('bandung')}
            >
              Bandung
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'malang' ? 'border-primary' : ''
              }`}
              id="malang"
              data-tabs-target="#malang"
              type="button"
              role="tab"
              aria-controls="malang"
              aria-selected={activeTab === 'malang'}
              onClick={() => handleTabClick('malang')}
            >
              Malang
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'surabaya' ? 'border-primary' : ''
              }`}
              id="surabaya"
              data-tabs-target="#surabaya"
              type="button"
              role="tab"
              aria-controls="surabaya"
              aria-selected={activeTab === 'surabaya'}
              onClick={() => handleTabClick('surabaya')}
            >
              Surabaya
            </button>
          </li>
        </ul>
      </div>
      <div className="container mx-auto">
        <div id="jogja" className="sm:flex mx-4">
          <div
            className={`text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === 'profile' ? 'block' : 'hidden'
            } sm:block sm:w-full lg:w-1/2`}
            id="profile"
            role="tabpanel"
            aria-labelledby="jogja"
          >
            <ul className="space-y-4">
              <li>
                <strong className="text-xl sm:text-2xl">
                  English Cafe Pusat
                </strong>
                <br />
                Alamat: Kopi Nuri Concat, Jl. Anggajaya 2, Sanggrahan,
                Condongcatur, Kec. Depok, Kab. Sleman
                <br />
                Jam Buka (Senin-Sabtu): 13.00-18.00 WIB
              </li>
              <li>
                <strong className="text-xl sm:text-2xl">
                  Bento Kopi Nologaten
                </strong>
                <br />
                Alamat: Jl. Nologaten, RT.04/RW.01, Tempel, Caturtunggal, Kec.
                Depok, Kab. Sleman
                <br />
                Jam Buka (Senin-Sabtu): 14.00-19.00 WIB
              </li>
              <li>
                <strong className="text-xl sm:text-2xl">ICafe Resto</strong>
                <br />
                Alamat: Jl. Cik Di Tiro No.18, Terban, Kec. Gondokusuman, Kota
                Yogyakarta
                <br />
                Jam Buka (Senin-Sabtu): 15.00-19.00 WIB
              </li>
              <li>
                <strong className="text-xl sm:text-2xl">Bento Kopi UAD</strong>
                <br />
                Alamat: Jl. Patih Singoranu No.153, Kragilan, Tamanan, Kec.
                Banguntapan, Kab. Bantul
                <br />
                Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
              </li>
              <li>
                <strong className="text-xl sm:text-2xl">Bento Kopi UMY</strong>
                <br />
                Alamat: Jl. Gatak No.99, Brajan, Tamantirto, Kec. Kasihan, Kab.
                Bantul
                <br />
                Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
              </li>
            </ul>
          </div>
          <div
            className={`text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === 'dashboard' ? 'block' : 'hidden'
            } sm:block sm:w-full lg:w-1/2`}
            id="solo"
            role="tabpanel"
            aria-labelledby="solo"
          >
            <ul className="space-y-4">
              <li>
                <strong className="text-xl sm:text-2xl">Bento Kopi UNS</strong>
                <br />
                Alamat: Jl. Agung Timur No.14, Mojosongo, Kec. Jebres, Kota
                Surakarta
                <br />
                Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
              </li>
              <li>
                <strong className="text-xl sm:text-2xl">Bento Kopi UMS</strong>
                <br />
                Alamat: Jl. Menco Raya No.109, Nilagraha, Gonilan, Kec.
                Kartasura, Kab. Sukoharjo
                <br />
                Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
              </li>
            </ul>
          </div>
          <div className="container mx-auto">
            <div id="jogja" className="sm:flex mx-4">
              <div
                className={`text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                  activeTab === 'profile' ? 'block' : 'hidden'
                } sm:block sm:w-full lg:w-1/2`}
                id="profile"
                role="tabpanel"
                aria-labelledby="jogja"
              >
                <ul className="space-y-4">{/* Content for Jogja */}</ul>
              </div>
              <div
                className={`text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                  activeTab === 'dashboard' ? 'block' : 'hidden'
                } sm:block sm:w-full lg:w-1/2`}
                id="solo"
                role="tabpanel"
                aria-labelledby="solo"
              >
                <ul className="space-y-4">{/* Content for Solo */}</ul>
              </div>
            </div>
            <div id="semarang" className="sm:flex mx-4">
              <div
                className={`text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                  activeTab === 'settings' ? 'block' : 'hidden'
                } sm:block sm:w-full lg:w-1/2`}
                id="semarang"
                role="tabpanel"
                aria-labelledby="semarang"
              >
                <ul className="space-y-4">{/* Content for Semarang */}</ul>
              </div>
            </div>
            <div id="bandung" className="sm:flex mx-4">
              <div
                className={`text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                  activeTab === 'bandung' ? 'block' : 'hidden'
                } sm:block sm:w-full lg:w-1/2`}
                id="bandung"
                role="tabpanel"
                aria-labelledby="bandung"
              >
                <ul className="space-y-4">{/* Content for Bandung */}</ul>
              </div>
            </div>
            <div id="malang" className="sm:flex mx-4">
              <div
                className={`text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                  activeTab === 'malang' ? 'block' : 'hidden'
                } sm:block sm:w-full lg:w-1/2`}
                id="malang"
                role="tabpanel"
                aria-labelledby="malang"
              >
                <ul className="space-y-4">
                  {' '}
                  <ul>
                    <li>
                      <strong>DW Coffee Shop</strong>
                      <br />
                      Alamat: Jl. Bogor No.11, Sumbersari, Kec. Lowokwaru, Kota
                      Malang
                      <br />
                      Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
                    </li>
                    <li>
                      <strong>Arena Coffee & Roastery</strong>
                      <br />
                      Alamat: Jl. Ir. Soekarno No.133, Ngudi, Beji, Kec.
                      Junrejo, Kota Batu
                      <br />
                      Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
                    </li>
                    <li>
                      <strong>Warung Susu 26</strong>
                      <br />
                      Alamat: Jl. Bunga Coklat No.26, Jatimulyo, Kec. Lowokwaru,
                      Kota Malang
                      <br />
                      Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
                    </li>
                    <li>
                      <strong>PW (Padhasaran Wedhangan)</strong>
                      <br />
                      Alamat: Jl. Simpang Gajayana No.19, Merjosari, Kec.
                      Lowokwaru, Kota Malang
                      <br />
                      Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div id="surabaya" className="sm:flex mx-4">
              <div
                className={`text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                  activeTab === 'surabaya' ? 'block' : 'hidden'
                } sm:block sm:w-full lg:w-1/2`}
                id="surabaya"
                role="tabpanel"
                aria-labelledby="surabaya"
              >
                <ul className="space-y-4">
                  {' '}
                  <ul>
                    <li>
                      <strong>Serlok Kopi</strong>
                      <br />
                      Alamat: Jl. Kertajaya No.67, RT.001/RW.03, Airlangga, Kec.
                      Gubeng, Surabaya
                      <br />
                      Jam Buka (Senin-Sabtu): 15.00-20.00 WIB
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cabang
