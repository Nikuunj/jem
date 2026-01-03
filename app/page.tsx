import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import Work from "@/components/home/Work";

export default function Home() {
  return (
    <div className="flex flex-col gap-17">
      <Hero />
      <Service />
      <Work />
    </div>
  );
}
