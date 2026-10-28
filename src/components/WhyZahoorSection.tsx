'use client'

import { motion } from 'framer-motion'
import { Hospital, Dumbbell, CalendarCheck, FileCheck2, MapPin, Route } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const reasons = [
  { icon: Hospital, title: 'A 24/7 Working Hospital', text: 'A fully fledged hospital operating around the clock — a major everyday advantage for residents and their families.' },
  { icon: Dumbbell, title: 'A Dedicated Sports Complex', text: 'A place to stay active, enjoy sports and make recreation part of community life.' },
  { icon: CalendarCheck, title: 'Flexible Installment Options', text: 'Installment plans are available on eligible plots, helping buyers plan their purchase with greater flexibility.' },
  { icon: FileCheck2, title: 'Possession on Down Payment', text: 'Eligible buyers can take possession upon payment of the down payment, subject to the applicable terms and documentation.' },
  { icon: FileCheck2, title: 'Registry Facility', text: 'A registry facility is available for plots, giving buyers a formal route for property documentation.' },
  { icon: MapPin, title: 'A Prime City Location', text: 'Situated at Madhrianwala Bypass, Zahoor Orchards offers convenient access to Hafizabad and the places that matter in daily life.' },
  { icon: Route, title: 'Roads Designed for Better Movement', text: 'A prominent 100-foot-wide main boulevard, complemented by internal roads at least 30 feet wide.' },
]

export default function WhyZahoorSection() {
  return (
    <section className="bg-[#080b09] px-6 py-20 md:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Why Zahoor Orchards?" subtitle="Distinctive advantages. Everyday convenience. A better place to call home." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.06 }} viewport={{ once: true, amount: 0.2 }}
                className="group rounded-2xl border border-[#c9a85c]/20 bg-gradient-to-br from-[#191d19] to-[#0d100e] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b65f]/60 hover:shadow-xl hover:shadow-black/30">
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl border border-[#d6b65f]/30 bg-[#d6b65f]/10 text-[#e5ca83] group-hover:bg-[#d6b65f]/20">
                  <Icon size={27} strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{item.text}</p>
              </motion.article>
            )
          })}
        </div>
        <p className="mt-8 text-center text-xs leading-6 text-white/40">
          Facilities, possession and registry are subject to applicable approvals, plot eligibility and the terms confirmed by the management.
        </p>
      </div>
    </section>
  )
}
