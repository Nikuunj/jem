import { Phone } from "lucide-react"
import { HoverBorderGradient } from "../ui/HoverBorderGradient"
import BorderShineBtn from "../ui/BorderShineBtn"
import { PixelatedCanvas } from "../ui/PixelatedCanvas"

function Start() {
  return (
    <div className="flex flex-col gap-9   py-17 px-7 relative text-white">
      <div className="flex flex-col items-start sm:items-center gap-5">
        <h1 className="font-bold text-4xl/15">
          READY TO START YOUR PROJECT?
        </h1>
        <p className="text-zinc-400 ">
          Get in touch with us today for a free consultation and quote
        </p>
      </div>
      <div className="gap-4  flex sm:items-center flex-col sm:flex-row justify-center ">
        <HoverBorderGradient
          containerClassName="rounded-full border-zinc-600"
          as="button"
          className="bg-black border-zinc-600  text-white flex items-center space-x-3"
        >
          <Phone className="size-3.5" />
          <span>212121212121</span>
        </HoverBorderGradient>
        <BorderShineBtn />
      </div>
      <div className="flex justify-center">
        <PixelatedCanvas
          src="/logo.png"
          width={600}
          height={300}
          cellSize={3}
          dotScale={0.9}
          shape="square"
          backgroundColor="#09090b"
          dropoutStrength={0.4}
          interactive
          distortionStrength={3}
          distortionRadius={80}
          distortionMode="swirl"
          followSpeed={0.2}
          jitterStrength={4}
          jitterSpeed={4}
          sampleAverage
          tintColor="#FFFFFF"
          tintStrength={0.25}
          className="rounded-xl shadow-lg"
        />
      </div>
      <StartBG />
    </div>
  )
}

function StartBG() {
  return (
    <div className="absolute inset-0 z-[-1]">
      <div className={`absolute inset-0 bg-radial-[at_50%_-100%] blur-sm from-80% via-85% to-90% from-zinc-950 via-yellow-800 to-zinc-950 `} />

      <div
        className="absolute inset-0 opacity-50 "
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  )
}
export default Start
