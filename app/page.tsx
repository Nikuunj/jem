import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import Why from "@/components/home/Why";
import Work from "@/components/home/Work";
import { BackgroundRippleEffect } from "@/components/ui/BackgroundRippleEffect";

export default function Home() {
  return (
    <div className="flex flex-col  ">
      <Hero />
      <Service />
      <Work />
      <Why />
    </div>
  );
}
