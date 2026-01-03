import { why } from "@/lib/data"
import { BackgroundRippleEffect } from "../ui/BackgroundRippleEffect"
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "../ui/GlowingStars"
import TitleDom from "../ui/TitleDom"

function Why() {
  const renderCards = why.map((val, i) => <WhyCard title={val.title} describe={val.describe} key={val.title + i} />)
  return (
    <div className="flex flex-col gap-9 px-7 relative py-17 overflow-hidden">
      <TitleDom name={"WHY CHOOSE US"}
        line1={"TRUSTED BY HUNDREDS"}
        line2={"With over 15 years of experience, we've built a reputation for excellence in the earthmoving industry."} />
      <div className="flex flex-wrap justify-center gap-8">
        {renderCards}
      </div>
      <BackgroundRippleEffect />
    </div>
  )
}

function WhyCard({ title, describe }: { title: string, describe: string }) {
  return (
    <div className="z-10 w-sm ">
      <GlowingStarsBackgroundCard className="bg-zinc-50 p-4">
        <GlowingStarsTitle>{title}</GlowingStarsTitle>
        <div className="flex justify-between items-end pt-2 ">
          <GlowingStarsDescription>
            {describe}
          </GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>
    </div>

  )
}

export default Why
