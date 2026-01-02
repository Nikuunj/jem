import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Service />
    </div>
  );
}
