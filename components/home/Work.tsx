import { recent_project } from "@/lib/data"
import TitleDom from "../ui/TitleDom"
import { AnimatedTestimonials } from "../ui/AnimatedTestimoials"

function Work() {
  return (
    <div className="flex flex-col gap-9 bg-black  py-13 px-7">
      <TitleDom name={"OUR WORK"}
        theme="b"
        line1={"RECENT PROJECTS"}
        line2={"Take a look at some of our completed earthmoving and excavation projects."} />

      <AnimatedTestimonials testimonials={recent_project} />
    </div>
  )
}

export default Work
