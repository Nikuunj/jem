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
          <div className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>

  )
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-zinc-400/80 stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

export default Why
