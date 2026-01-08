import { TextColor } from "@/components/home/Hero";
import { BackgroundRippleEffect } from "@/components/ui/BackgroundRippleEffect";
import HeroBG from "@/components/ui/HeroBG";
import { ParallaxScroll } from "@/components/ui/ParallaXScroll";

const images = [
  "/itachi.jpeg",
  "/side1.jpeg",
  "/side2.jpeg",
  "/side3.jpeg",
  "/side4.jpeg",
  "/side5.jpeg",
  "/side2.jpeg",
  "/side3.jpeg",
  "/side4.jpeg",
  "/side5.jpeg",
  "/itachi.jpeg",
  "/side1.jpeg",
  "/side4.jpeg",
  "/side5.jpeg",
  "/itachi.jpeg",
  "/side1.jpeg",
  "/side2.jpeg",
  "/side3.jpeg",
]

function GalleryPage() {
  return (
    <div>
      <div className="text-white  h-full min-h-screen flex flex-col justify-center  px-7 gap-5 relative">
        <span className="relative overflow-hidden bg-yellow-400 text-black w-fit py-2 px-4 text-sm sm:text-md -skew-x-12 ms-2 font-medium">
          PROJECT GALLERY
          <span className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></span>
        </span>
        <div className="">
          <TextColor first="OUR WORK" second="" />
          <TextColor first="" second="SPEAKS VOLUMES" />
        </div>
        <p className="text-sm/6 md:text-lg/7 text-zinc-400 max-w-4xl ">
          Browse through our portfolio of completed projects. From highway construction to residential foundations, see the quality we deliver.
        </p>

        <HeroBG />
      </div>
      <ParallaxScroll images={images} className="z-20" />
    </div>
  )
}

export default GalleryPage
