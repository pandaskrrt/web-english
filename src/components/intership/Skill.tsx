import { FC } from 'react'
import InterCard from './InterCard'
import enterpreneurship from '@/assets/entrepreneurship-1-300x188.webp'
import content from '@/assets/content-creation-300x188.webp'
import marketing from '@/assets/marketing-300x188.webp'
import video from '@/assets/video-editing-300x188.webp'
import graphic from '@/assets/graphic-design-300x188.webp'

const Skill: FC = () => {
  return (
    <section id="skill" className="flex flex-col items-center w-full">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-16">
        PENGEMBANGAN <span className="text-orange-500">SKILL</span>
      </h3>
      <div className="flex flex-col gap-4 w-[60%]">
        <InterCard
          src={enterpreneurship}
          title="Enterpreneurship"
          desc="Di bidang ini, kamu akan dilatih tentang bagaimana membangun usaha, membuat produk, mengembangkan usaha, hingga menanamkan nilai-nilai entrepreneur."
        />
        <InterCard
          src={marketing}
          title="Marketing"
          desc="Di bidang ini, kamu akan diajari teori-teori marketing, bertemu langsung dengan customer, teknik closing dan mentalitas menjadi seorang merketer."
        />
        <InterCard
          src={content}
          title="Content Creation"
          desc="Pada bagian ini, kamu akan diajari tentang bagaimana membuat konten yang viral, meningkatkan engagement dengan melatih kreativitas kamu."
        />
        <InterCard
          src={video}
          title="Video Editing"
          desc="Kamu akan diajari tentang membuat video yang aesthetic, simple dan elegant."
        />
        <InterCard
          src={graphic}
          title="Graphic Design"
          desc="Graphic Design adalah skill yang dibutuhkan saat ini. Kamu akan belajar tentang cara membuat design yang cantik dan eye catching."
        />
      </div>
    </section>
  )
}

export default Skill
