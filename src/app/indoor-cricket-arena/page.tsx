import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Indoor Cricket Arena in Hafizabad | Zahoor Orchards",
  description: "Book a session at Zahoor Orchards Cricket Arena in Hafizabad. A spacious 70 × 115 ft indoor cricket facility with 30 mm synthetic turf.",
  alternates: { canonical: "/indoor-cricket-arena" },
  openGraph: {
    title: "Zahoor Orchards Indoor Cricket Arena | Hafizabad",
    description: "Play at Hafizabad's spacious 70 × 115 ft indoor cricket arena at Zahoor Orchards.",
    url: "/indoor-cricket-arena",
    type: "website",
  },
};

export default function IndoorCricketArenaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080b09] pt-[76px] text-white">
        <section className="relative overflow-hidden border-b border-[#d6b65f]/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(214,182,95,0.16),transparent_48%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#d6b65f]">Zahoor Orchards · Hafizabad</p>
              <h1 className="max-w-3xl font-[var(--font-playfair)] text-4xl font-bold leading-tight md:text-6xl">
                Zahoor Orchards <span className="text-[#e5ca83]">Cricket Arena</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Make room for a bigger game. Enjoy indoor cricket in a spacious dedicated arena, designed for players who want to train, compete and play whatever the weather.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="https://wa.me/923338073719?text=I%27d%20like%20to%20book%20a%20session%20at%20Zahoor%20Orchards%20Cricket%20Arena." target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e4bd59] px-7 py-4 font-bold text-[#17130a] transition hover:bg-[#f0d27f]">
                  Book a Session on WhatsApp
                </a>
                <a href="tel:03338073719" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-[#d6b65f] hover:text-[#e5ca83]">
                  Call 0333 8073719
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="rounded-2xl border border-[#d6b65f]/35 bg-[#111813] p-5 shadow-2xl shadow-black/40">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6b65f]">The playing space</span>
                  <span className="rounded-full border border-[#d6b65f]/30 px-3 py-1 text-xs text-[#e5ca83]">Indoor cricket</span>
                </div>
                <div className="relative flex aspect-[1.55/1] items-center justify-center overflow-hidden rounded-xl border-2 border-white/70 bg-[#174b35]">
                  <div className="absolute inset-3 rounded-lg border border-white/50" />
                  <div className="absolute inset-y-3 left-1/2 border-l border-dashed border-white/60" />
                  <div className="absolute left-1/2 top-1/2 h-20 w-28 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-white/70 bg-[#b9a06a]/25" />
                  <div className="absolute left-1/2 top-1/2 h-12 w-1 -translate-x-1/2 -translate-y-1/2 bg-white/70" />
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-2 text-xs font-bold tracking-widest text-white">70 × 115 FT</div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-white/5 p-4">
                    <p className="text-2xl font-bold text-[#e5ca83]">70 × 115</p>
                    <p className="mt-1 text-xs text-white/60">Feet of playing area</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <p className="text-2xl font-bold text-[#e5ca83]">30 mm</p>
                    <p className="mt-1 text-xs text-white/60">Synthetic turf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6b65f]">Play at Zahoor Orchards</p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-bold md:text-4xl">A dedicated indoor cricket destination in Hafizabad</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Zahoor Orchards Cricket Arena brings a large indoor cricket space to the heart of Hafizabad. With a 70-foot by 115-foot arena and 30 mm synthetic turf, players have room to enjoy a proper game, practice their skills and get together with friends and teammates.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Whether you are arranging a friendly match or looking for a regular place to play, contact the arena team to ask about available booking slots and plan your visit.
            </p>
          </div>
        </section>

        <section className="border-y border-[#d6b65f]/15 bg-[#0d130f]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3 md:px-12">
            <div><p className="text-3xl font-bold text-[#e5ca83]">70 × 115 ft</p><h3 className="mt-2 font-semibold">Spacious arena</h3><p className="mt-2 text-sm leading-6 text-white/60">A generous indoor playing space for cricket sessions.</p></div>
            <div><p className="text-3xl font-bold text-[#e5ca83]">30 mm</p><h3 className="mt-2 font-semibold">Synthetic turf</h3><p className="mt-2 text-sm leading-6 text-white/60">Synthetic grass surface for indoor play.</p></div>
            <div><p className="text-3xl font-bold text-[#e5ca83]">Hafizabad</p><h3 className="mt-2 font-semibold">Convenient location</h3><p className="mt-2 text-sm leading-6 text-white/60">Located within Zahoor Orchards, Madhrianwala Bypass.</p></div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20 text-center md:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6b65f]">Ready to play?</p>
          <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-bold md:text-4xl">Book your cricket session</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">Contact us for booking availability, session details and directions to Zahoor Orchards Cricket Arena.</p>
          <a href="https://wa.me/923338073719?text=I%27d%20like%20to%20enquire%20about%20booking%20Zahoor%20Orchards%20Cricket%20Arena." target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-[#e4bd59] px-8 py-4 font-bold text-[#17130a] transition hover:bg-[#f0d27f]">
            WhatsApp for Bookings
          </a>
          <p className="mt-5 text-sm text-white/50">Main Office, Zahoor Orchards, Madhrianwala Bypass, Hafizabad</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
