import { recent_project } from "@/lib/data"
import TitleDom from "../ui/TitleDom"
import { AnimatedTestimonials } from "../ui/AnimatedTestimoials"
import HeroBG from "../ui/HeroBG"

function Work() {
  return (
    <div className="flex flex-col gap-9   py-17 px-7 relative">
      <TitleDom name={"OUR WORK"}
        theme="b"
        line1={"RECENT PROJECTS"}
        line2={"Take a look at some of our completed earthmoving and excavation projects."} />

      <HeroBG position="why" />
      <AnimatedTestimonials testimonials={recent_project} />
    </div>
  )
}

export default Work
