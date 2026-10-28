import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ali Poly Clinic | Doctors & Healthcare in Hafizabad",
  description:
    "Meet the medical team at Ali Poly Clinic, Zahoor Orchards, Hafizabad. General information and doctor profiles for patients and families.",
  alternates: { canonical: "/ali-poly-clinic" },
  openGraph: {
    title: "Ali Poly Clinic | Zahoor Orchards, Hafizabad",
    description:
      "Learn about Ali Poly Clinic and meet its team of medical professionals in Hafizabad.",
    url: "/ali-poly-clinic",
    type: "website",
  },
};

const doctors = [
  {
    name: "Dr. Musaffar Ali Sheikh",
    role: "Senior Physician",
    initials: "MS",
    description:
      "An experienced medical professional offering general medical consultation and care.",
  },
  {
    name: "Dr. Mehak Fatma",
    role: "Gynecologist",
    initials: "MF",
    description:
      "Women's health and gynecological consultation.",
  },
  {
    name: "Dr. Khweeza Raja",
    role: "Physiotherapist",
    initials: "KR",
    description:
      "Physiotherapy support, rehabilitation and physical mobility care.",
  },
  {
    name: "Dr. Kamran Faiz Chatha",
    role: "Orthopedic Surgeon",
    initials: "KC",
    description:
      "Consultation for bone, joint and musculoskeletal conditions.",
  },
];

export default function AliPolyClinicPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080b09] pt-[76px] text-white">
        <section className="relative overflow-hidden border-b border-[#d6b65f]/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(214,182,95,0.16),transparent_48%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#d6b65f]">
                Healthcare · Hafizabad
              </p>
              <h1 className="max-w-3xl font-[var(--font-playfair)] text-4xl font-bold leading-tight md:text-6xl">
                Ali <span className="text-[#e5ca83]">Poly Clinic</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Healthcare for individuals and families, with access to medical
                professionals across general medicine, women’s health,
                physiotherapy and orthopedic care.
              </p>
              <p className="mt-5 max-w-2xl leading-7 text-white/55">
                Located at Zahoor Orchards, Hafizabad. Further clinic
                information, timings and appointment details will be added
                soon.
              </p>
              <a
                href="#doctors"
                className="mt-9 inline-flex items-center justify-center rounded-lg bg-[#e4bd59] px-7 py-4 font-bold text-[#17130a] transition hover:bg-[#f0d27f]"
              >
                Meet Our Doctors
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="rounded-2xl border border-[#d6b65f]/35 bg-[#111813] p-7 shadow-2xl shadow-black/40">
                <div className="flex aspect-[1.2/1] flex-col items-center justify-center rounded-xl border border-[#d6b65f]/25 bg-[radial-gradient(ellipse_at_center,rgba(214,182,95,0.12),transparent_70%)] p-8 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#d6b65f]/50 bg-[#d6b65f]/10 text-4xl text-[#e5ca83]">
                    ✚
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#d6b65f]">
                    Ali Poly Clinic
                  </p>
                  <p className="mt-2 font-[var(--font-playfair)] text-2xl font-semibold">
                    Care with confidence
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">
                    Clinic photographs and additional information coming soon.
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-white/5 p-4">
                    <p className="text-lg font-bold text-[#e5ca83]">4</p>
                    <p className="mt-1 text-xs text-white/60">Featured doctors</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <p className="text-lg font-bold text-[#e5ca83]">Hafizabad</p>
                    <p className="mt-1 text-xs text-white/60">Clinic location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-clinic" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6b65f]">
              About the clinic
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-bold md:text-4xl">
              Medical care across key specialties
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Ali Poly Clinic brings together doctors from a range of medical
              specialties, helping patients and families find consultation for
              general health concerns, women’s health, physical rehabilitation,
              and bone and joint conditions.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/70">
              This page is an introduction to the clinic and its doctors.
              Clinic timings, consultation schedules, available facilities and
              appointment arrangements will be published once confirmed.
            </p>
          </div>
        </section>

        <section id="doctors" className="border-y border-[#d6b65f]/15 bg-[#0d130f]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6b65f]">
                Medical team
              </p>
              <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-bold md:text-4xl">
                Meet our doctors
              </h2>
              <p className="mt-4 leading-7 text-white/60">
                Get to know the medical professionals associated with Ali Poly
                Clinic. Doctor photographs and detailed profiles will be added
                shortly.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {doctors.map((doctor) => (
                <article
                  key={doctor.name}
                  className="overflow-hidden rounded-2xl border border-[#d6b65f]/20 bg-[#111813] transition duration-300 hover:-translate-y-1 hover:border-[#d6b65f]/50"
                >
                  <div className="flex aspect-[4/4.2] items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(214,182,95,0.13),transparent_70%)]">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#d6b65f]/40 bg-[#d6b65f]/10 font-[var(--font-playfair)] text-3xl text-[#e5ca83]">
                      {doctor.initials}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6b65f]">
                      {doctor.role}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug">
                      {doctor.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {doctor.description}
                    </p>
                    <p className="mt-5 border-t border-white/10 pt-4 text-xs text-white/35">
                      Profile photo coming soon
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20 text-center md:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6b65f]">
            Ali Poly Clinic
          </p>
          <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-bold md:text-4xl">
            More clinic information coming soon
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">
            We are preparing additional information about clinic services,
            doctor schedules, timings and appointments. Please check back soon
            for updates.
          </p>
          <p className="mt-8 text-sm text-white/50">
            Zahoor Orchards, Hafizabad
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
