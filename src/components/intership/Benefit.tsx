import { FC } from 'react'
import BenefitItem from './BenefitItem'

const Benefit: FC = () => {
  return (
    <section
      id="benefit"
      className="bg-slate-50 m-16 py-8 w-full flex flex-col items-center"
    >
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-20">
        <span className="text-orange-500">BENEFIT</span> YANG DIDAPAT
      </h3>
      <div className="flex justify-between flex-wrap gap-4 w-[60%] mb-8">
        <BenefitItem desc="Gratis kursus bahasa Inggris" />
        <BenefitItem desc="Leadership" />
        <BenefitItem desc="Public speaking skill" />
        <BenefitItem desc="Networking" />
        <BenefitItem desc="Knowledge" />
        <BenefitItem desc="Experience" />
        <BenefitItem desc="E-sertifikat" />
        <BenefitItem desc="Specific skill" />
        <BenefitItem desc="Berkesempatan menjadi staff" />
      </div>
    </section>
  )
}

export default Benefit
