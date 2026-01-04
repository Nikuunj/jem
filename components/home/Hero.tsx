import HeroBG from "../ui/HeroBG"
import { Phone } from "lucide-react"
import BorderShineBtn from "../ui/BorderShineBtn"
import { HoverBorderGradient } from "../ui/HoverBorderGradient"

function Hero() {
  return (
    <div className="text-white  h-full min-h-screen flex flex-col justify-center  px-7 gap-5 relative">
      <HeroBG />
      <span className="relative overflow-hidden bg-yellow-400 text-black w-fit py-2 px-4 text-sm sm:text-md -skew-x-12 ms-2 font-medium">
        PROFESSIONAL EARTHMOVING
        <span className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></span>
      </span>     <div className="">
        <TextColor first="MOVING" second="EARTH" />
        <TextColor first="BUILDING" second="FUTURES" />
      </div>
      <p className="text-sm/6 md:text-lg/7 text-zinc-400 max-w-4xl ">
        Janvi Earth Mover delivers powerful excavation and earthmoving solutions. From foundation work to large-scale land development, we get the job done.
      </p>
      <div className="gap-4  flex sm:items-center flex-col sm:flex-row ">
        <a href="tel:+212121212121">
          <HoverBorderGradient
            containerClassName="rounded-full border-zinc-600"
            as="button"
            className="bg-black border-zinc-600  text-white flex items-center space-x-3"
          >
            <Phone className="size-3.5" />
            <span>212121212121</span>
          </HoverBorderGradient>
        </a>
        <BorderShineBtn />
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
