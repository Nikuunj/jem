
function HeroBG({ position = "hero" }: { position?: "hero" | "why" }) {
  return (
    <div className="absolute inset-0 z-[-1]">
      <div className={`absolute inset-0 ${position === "hero" ? "bg-radial-[at_0%_20%] md:bg-radial-[at_20%_5%]  " :
        "bg-radial-[at_75%_75%] "} blur-sm from-zinc-950 from-70% via-80% to-95% via-yellow-800 to-zinc-950`} />
      {position === "why" && <div key={2} className={` absolute inset-0  bg-radial-[at_0%_20%]  blur-sm from-transparent from-75% via-85% to-95% via-yellow-800 to-transparent`} />
      }
      <div
        className="absolute inset-0 opacity-50 "
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
}

export default HeroBG;
