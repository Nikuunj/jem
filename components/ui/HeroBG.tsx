
function HeroBG() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-radial-[at_20%_5%] from-zinc-950 from-35% via-50% to-65% via-yellow-800 to-zinc-950 " />

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
