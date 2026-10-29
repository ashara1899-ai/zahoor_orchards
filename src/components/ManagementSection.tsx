'use client'

import { motion } from 'framer-motion'
import { societyData } from '@/data/society'
import SectionHeader from '@/components/SectionHeader'

export default function ManagementSection() {
  const otherMembers = (societyData.management || []).filter(
    (member) => !['Ashar Ali Sheikh', 'Dr Muzaffar Ali Sheikh', 'Mian Amjad Bashir'].includes(member.name)
  )

  return (
    <section className="bg-[#000000] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Leadership & Management"
            subtitle="The people and vision behind Zahoor Orchards"
          />

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mt-12 overflow-hidden rounded-2xl border border-[#b89552]/40 bg-gradient-to-br from-[#171512] via-[#0d0d0d] to-black shadow-2xl"
          >
            <div className="grid md:grid-cols-[minmax(280px,0.82fr)_1.5fr]">
              <div className="relative min-h-[360px] md:min-h-[560px]">
                <img
                  src="/images/dr%20muzaffar.jpeg"
                  alt="Dr. Muzaffar Ali Sheikh, Founder of Zahoor Orchards"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#171512]/35" />
                <div className="absolute bottom-5 left-5 rounded-full border border-[#d6b56e]/60 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e3c47f]">
                  Founder
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a45f]">
                  Founder
                </p>
                <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                  Dr. Muzaffar Ali Sheikh
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#d5bd8a] md:text-base">
                  Physician <span className="px-2 text-[#806a43]">|</span> Former Member of the Provincial Assembly
                </p>

                <div className="my-7 h-px w-20 bg-[#c7a45f]" />

                <p className="text-base leading-8 text-[#d4d0c8] md:text-lg">
                  Dr. Muzaffar Ali Sheikh is a physician, former parliamentarian, and dedicated public servant whose life’s work has been closely connected to the people of Hafizabad. After earning an MBBS from Nishtar Medical College in 1985 and obtaining the MRCGP qualification from the United Kingdom, Dr. Muzaffar Ali Sheikh has devoted more than four decades to medicine and the well-being of the community.
                </p>
                <p className="mt-5 text-base leading-8 text-[#d4d0c8] md:text-lg">
                  Dr. Muzaffar Ali Sheikh has also represented Hafizabad in the Punjab Provincial Assembly, serving two terms from 2002 to 2008 and from 2018 to 2022. Across medicine and public life, the guiding purpose has remained the same: serving people, strengthening the community, and helping create a better future for the city.
                </p>
                <p className="mt-5 text-base leading-8 text-[#d4d0c8] md:text-lg">
                  That commitment finds another expression in Zahoor Orchards. Named in honour of his father, Sheikh Zahoor Hussain, the project reflects Dr. Muzaffar Ali Sheikh’s ambition to create a residential community that brings a more elevated way of living to Hafizabad. It is envisioned as a place where thoughtful planning, quality infrastructure, generous green spaces, and modern amenities come together to enrich everyday life.
                </p>
                <p className="mt-5 text-base leading-8 text-[#d4d0c8] md:text-lg">
                  For Dr. Muzaffar Ali Sheikh, Zahoor Orchards is more than a real estate development. It is a tribute to family, a commitment to the people of Hafizabad, and a lasting investment in the city’s future—a legacy intended to be experienced by generations to come.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            viewport={{ once: true }}
            className="mt-10 overflow-hidden rounded-2xl border border-[#b89552]/30 bg-gradient-to-br from-[#171512] via-[#0d0d0d] to-black shadow-2xl"
          >
            <div className="grid md:grid-cols-[minmax(280px,0.82fr)_1.5fr]">
              <div className="relative min-h-[340px] md:min-h-[500px]">
                <img
                  src="/images/ashar.jpeg"
                  alt="Ashar Ali Sheikh, Director of Administration and Sales & Marketing Administrator at Zahoor Orchards"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#171512]/35" />
                <div className="absolute bottom-5 left-5 rounded-full border border-[#d6b56e]/60 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e3c47f]">
                  Leadership
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a45f]">
                  Director of Administration
                </p>
                <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                  Ashar Ali Sheikh
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#d5bd8a] md:text-base">
                  Director of Administration <span className="px-2 text-[#806a43]">|</span> Sales &amp; Marketing Administrator
                </p>

                <div className="my-7 h-px w-20 bg-[#c7a45f]" />

                <p className="text-base leading-8 text-[#d4d0c8] md:text-lg">
                  An engineer by education and a community-builder by ambition, Ashar Ali Sheikh brings a hands-on, forward-looking perspective to the growth of Zahoor Orchards. A graduate in Electrical Engineering from the National University of Sciences &amp; Technology (NUST), H-12, he has been part of the journey since the project’s inception.
                </p>
                <p className="mt-5 text-base leading-8 text-[#d4d0c8] md:text-lg">
                  Ashar leads the day-to-day administration and operations of the project, while steering its sales and marketing efforts. With a focus on execution, service, and long-term value, he works to turn the vision for Zahoor Orchards into a thoughtfully planned and thriving community.
                </p>
                <p className="mt-5 text-base leading-8 text-[#d4d0c8] md:text-lg">
                  His ambition is to help shape a new benchmark for living in Hafizabad—bringing together modern infrastructure, green spaces, meaningful amenities, and a strong sense of community. For Ashar, Zahoor Orchards is more than a development; it is an opportunity to help evolve the way the city lives, grows, and looks to the future.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            viewport={{ once: true }}
            className="mt-10 overflow-hidden rounded-2xl border border-[#b89552]/30 bg-gradient-to-br from-[#171512] via-[#0d0d0d] to-black shadow-2xl"
          >
            <div className="grid md:grid-cols-[minmax(280px,0.82fr)_1.5fr]">
              <div className="relative min-h-[340px] md:min-h-[500px]">
                <img
                  src="/Mian%20Amjad%20Bashir.jpeg"
                  alt="Mian Amjad Bashir, Director and Managing Partner of Zahoor Orchards"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#171512]/35" />
                <div className="absolute bottom-5 left-5 rounded-full border border-[#d6b56e]/60 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e3c47f]">
                  Director &amp; Managing Partner
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a45f]">
                  Director &amp; Managing Partner
                </p>
                <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                  Mian Amjad Bashir
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#d5bd8a] md:text-base">
                  Visionary Real Estate Developer <span className="px-2 text-[#806a43]">|</span> Strategic Planner
                </p>
                <p className="mt-2 text-sm italic text-[#b7b0a3] md:text-base">
                  Building Today. Envisioning Tomorrow.
                </p>

                <div className="my-7 h-px w-20 bg-[#c7a45f]" />

                <p className="text-base leading-8 text-[#d4d0c8] md:text-lg">
                  With a forward-thinking vision for real estate development and a passion for shaping thriving communities, Mian Amjad Bashir believes that the true value of development lies not merely in the land we build upon, but in the future we create for generations to come.
                </p>
                <p className="mt-5 text-base leading-8 text-[#d4d0c8] md:text-lg">
                  As Director and Managing Partner of Zahoor Orchards Housing Scheme, Hafizabad, he brings a long-term perspective to property development, strategic planning, and investment opportunities. His philosophy combines thoughtful land utilization, organized urban growth, community-focused planning, and a commitment to creating lasting value for investors, residents, and the wider community.
                </p>
                <p className="mt-5 text-base leading-8 text-[#d4d0c8] md:text-lg">
                  He envisions a future where modern infrastructure, green surroundings, essential amenities, and a strong sense of community come together to redefine the standards of living in Hafizabad. Through a practical understanding of real estate and a belief in the potential of emerging cities, he strives to transform development opportunities into well-planned communities that meet the evolving needs of tomorrow.
                </p>
                <p className="mt-5 text-base leading-8 text-[#d4d0c8] md:text-lg">
                  For Mian Amjad Bashir, successful development requires more than foresight—it demands integrity, sound planning, responsible execution, and a clear commitment to the future. Every project represents an opportunity to create value, inspire confidence, and contribute to the sustainable growth of the region.
                </p>
                <p className="mt-5 text-base leading-8 text-[#d4d0c8] md:text-lg">
                  His vision extends beyond individual projects: to help shape the future of real estate by creating communities that people are proud to call home and investments that stand the test of time.
                </p>
                <blockquote className="mt-6 border-l-2 border-[#c7a45f] pl-5 font-serif text-lg italic leading-8 text-[#e3c47f] md:text-xl">
                  “Great developments are not simply built on land; they are built on vision, trust, and a lasting commitment to the future.”
                </blockquote>
              </div>
            </div>
          </motion.article>

          <div className="mt-16">
            <h3 className="mb-8 text-center font-serif text-2xl text-white md:text-3xl">
              The Management Team
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
              {otherMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-white/10 bg-[#151515] p-5 text-center transition-colors duration-300 hover:border-[#b89552]/50"
                >
                  <div className="mb-4 flex justify-center">
                    <svg className="h-8 w-8 text-[#c7a45f]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-sm font-semibold text-white md:text-base">
                    {member.name}
                  </h4>
                  <p className="text-xs text-[#b7b0a3] md:text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
