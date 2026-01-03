import { PHONE_NUMBER } from "@/config"
import HeroBG from "../ui/HeroBG"
import { ArrowRight } from "lucide-react"

function Hero() {
  return (
    <div className="text-white  h-full min-h-screen flex flex-col justify-center  px-7 gap-5 relative">
      <HeroBG />
      <span className="bg-yellow-400 text-black w-fit py-2 px-4 text-sm sm:text-md -skew-x-8 ms-2 font-medium">
        PROFESSIONAL EARTHMOVING
      </span>
      <div className="">
        <TextColor first="MOVING" second="EARTH" />
        <TextColor first="BUILDING" second="FUTURES" />
      </div>
      <p className="text-sm/6 md:text-lg/7 text-zinc-400 max-w-4xl ">
        Janvi Earth Mover delivers powerful excavation and earthmoving solutions. From foundation work to large-scale land development, we get the job done.
      </p>
      <div className="gap-4  flex sm:items-center flex-col sm:flex-row ">
        <span className="bg-yellow-400 text-black w-fit py-3 px-7    font-medium flex items-center gap-2">
          <span className="text-sm sm:text-xl">
            {PHONE_NUMBER}
          </span>
          <ArrowRight className="size-3 sm:size-5" />
        </span>
        <span className="border-2 border-yellow-400  w-fit py-3 px-7   font-medium flex items-center gap-2">
          <span className="text-sm sm:text-xl">
            {PHONE_NUMBER}
          </span>
          <ArrowRight className="size-3 sm:size-5" />
        </span>
      </div>
    </div>
  )
}

function TextColor({ first, second }: { first: string, second: string }) {
  return (
    <p className="text-3xl sm:text-5xl lg:text-[81px]/21 font-bold">
      <span>{first}</span> <span className="text-yellow-400">{second}</span>
    </p>
  )
}

export default Hero
