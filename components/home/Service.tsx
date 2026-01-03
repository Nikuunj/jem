import { service } from "@/lib/data";
import { CardSpotlight } from "../ui/CardSpotLight"
import TitleDom from "../ui/TitleDom";

function Service() {
  const renderCard = service.map((val, idx) => <ServiceCard name={val.name} describe={val.describe} points={val.points} key={val.name + idx} />)
  return (
    <div className="flex flex-col gap-9 px-7">
      <TitleDom name={"OUR SERVICES"}
        line1={"Everything You Need to Build from the Ground Up"}
        line2={"The all-in-one engine to launch, scale, and monetise worldwide.          Designed for the new generation of digital and AI products."} />
      <div className="flex flex-wrap justify-center gap-8">
        {renderCard}
      </div>
    </div >
  )
}

const ServiceCard = ({ name, describe, points }: { name: string, describe: string, points: string[] }) => {
  return (
    <CardSpotlight className=" bg-zinc-100 border border-zinc-300  mix-blend-difference w-fit max-w-sm gap-4 flex flex-col "  >
      <h1 className="text-lg font-bold">
        {name}
      </h1>
      <p className="text-base">
        {describe}
      </p>
      <ul className="text-sm space-y-3">
        {points.map((val, idx) => <Step title={val} key={val + idx} />)}
      </ul>
    </CardSpotlight>
  )
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p >{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
export default Service
