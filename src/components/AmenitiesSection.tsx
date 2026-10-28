'use client'

import { motion } from 'framer-motion'
import { Trees, ShieldCheck, Route, Waves, Landmark, Hospital, Dumbbell } from 'lucide-react'
import { societyData, type Amenity } from '@/data/society'
import SectionHeader from '@/components/SectionHeader'

const iconMap: Record<string, React.ElementType> = {
  park: Trees,
  security: ShieldCheck,
  road: Route,
  sewerage: Waves,
  mosque: Landmark,
  hospital: Hospital,
  sports: Dumbbell,
  'open-space': Trees,
}

export default function AmenitiesSection() {
  const amenities = societyData?.amenities || []
  return (
    <section className="bg-[#050706] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <SectionHeader title="Amenities & Infrastructure" subtitle="Thoughtfully planned spaces and essential facilities for a better everyday life" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {amenities.map((amenity: Amenity, index: number) => {
              const Icon = iconMap[amenity.icon] || Trees
              return (
                <motion.article key={amenity.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.06 }} viewport={{ once: true, amount: 0.2 }}
                  className="group relative overflow-hidden rounded-2xl border border-[#c9a85c]/20 bg-gradient-to-br from-[#171b17] to-[#0c100d] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b968]/60 hover:shadow-xl hover:shadow-[#c9a85c]/10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#c9a85c]/30 bg-[#c9a85c]/10 text-[#e4c77e] transition-colors group-hover:bg-[#c9a85c]/20">
                    <Icon size={29} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-wide text-white">{amenity.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{amenity.description}</p>
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#c9a85c]/40 to-transparent" />
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
