import HeroBG from "../ui/HeroBG"

function Hero() {
  return (
    <div className="text-white bg-[#020617] h-full min-h-screen flex flex-col justify-center  px-7 gap-5">
      <HeroBG />
      <span className="bg-yellow-400 text-black w-fit py-2 px-4 text-md -skew-x-8 ms-2 font-medium">
        PROFESSIONAL EARTHMOVING
      </span>
      <div className="">
        <TextColor first="MOVING" second="EARTH" />
        <TextColor first="BUILDING" second="FUTURES" />
      </div>
      <p className="text-lg/7 text-zinc-400 max-w-4xl ">
        Janvi Earth Mover delivers powerful excavation and earthmoving solutions. From foundation work to large-scale land development, we get the job done.
      </p>
    </div>
  )
}

function TextColor({ first, second }: { first: string, second: string }) {
  return (
    <p className="text-[81px]/21 font-bold">
      <span>{first}</span> <span className="text-yellow-400">{second}</span>
    </p>
  )
}

export default Hero
