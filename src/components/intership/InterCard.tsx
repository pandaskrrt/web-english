import { FC } from 'react'

interface InterCardProps {
  src: string
  title: string
  desc: string
}

const InterCard: FC<InterCardProps> = ({ src, title, desc }) => {
  return (
    <div className="bg-slate-50 rounded-2xl flex">
      <img src={src} alt="" className="w-56 m-8 rounded-2xl" loading="lazy" />
      <div className="flex flex-col mr-8 justify-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-orange-500">
          {title}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-4">{desc}</p>
      </div>
    </div>
  )
}

export default InterCard
