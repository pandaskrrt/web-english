import { FC } from 'react'
import { Check } from 'lucide-react'

interface BenefitItemProps {
  desc: string
}

const BenefitItem: FC<BenefitItemProps> = ({ desc }) => {
  return (
    <div className="flex bg-white rounded-3xl p-4 items-center gap-4 w-[30%]">
      <div className="rounded-full bg-green-600 p-1">
        <Check color="white" className="w-14 h-14" />
      </div>
      <h6 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {desc}
      </h6>
    </div>
  )
}

export default BenefitItem
