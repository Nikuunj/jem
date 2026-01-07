import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import Start from "@/components/home/Start";
import Why from "@/components/home/Why";
import Work from "@/components/home/Work";

export default function Home() {
  return (
    <div className="flex flex-col scroll-slow">
      <Hero />
      <Service />
      <Work />
      <Why />
      <Start />
    </div>
  );
}
