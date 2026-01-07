import Link from "next/link";

function Footer() {
  return (
    <footer className="relative text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5">

          {/* Brand */}
          <div className="md:col-span-2">
            <h1 className="text-xl font-semibold tracking-wide text-yellow-600">
              JANVI EARTH MOVER
            </h1>
            <p className="mt-3 max-w-sm text-sm text-zinc-300 leading-relaxed">
              Professional earthmoving and excavation services. Building foundations
              for your success since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow-500">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
              <li><Link href="/machine" className="hover:text-yellow-400"></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow-500">
              Our Services
            </h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>Earthmoving</li>
              <li>Excavation</li>
              <li>Land Clearing</li>
              <li>Site Grading</li>
              <li>Trenching</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow-500">
              Contact Us
            </h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                <a href="tel:+919876543210" className="hover:text-yellow-400">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@janviearthmover.com"
                  className="hover:text-yellow-400"
                >
                  info@janviearthmover.com
                </a>
              </li>
              <li className="leading-relaxed">
                Industrial Area, Sector 5<br />
                Demo City, State 123456
              </li>
            </ul>
          </div>
        </div>
      </div>

      <FooterBg />
    </footer>
  );
}

function FooterBg() {
  return (
    <div className="absolute inset-0 z-[-1]">
      <div className={`absolute inset-0 bg-radial-[at_50%_140%] blur-sm from-[78%] via-85%  to-90% from-zinc-950 via-yellow-800 to-zinc-950 `} />
      <div
        className="absolute inset-0 opacity-50 "
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  )
}
export default Footer
