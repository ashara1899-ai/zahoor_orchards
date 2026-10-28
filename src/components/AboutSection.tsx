'use client'

import { motion } from 'framer-motion'
import { Leaf, HeartHandshake, Building2, Users } from 'lucide-react'
import { societyData } from '@/data/society'
import SectionHeader from '@/components/SectionHeader'

const pillars = [
  { icon: Leaf, title: 'A greener way to live', text: 'Parks, landscaped areas and open spaces that make room for fresh air, family time and a more balanced lifestyle.' },
  { icon: Users, title: 'A community built around people', text: 'A thoughtfully planned neighbourhood where everyday convenience, connection and a sense of belonging matter.' },
  { icon: Building2, title: 'Modern living, closer to home', text: 'Essential infrastructure and facilities designed to bring more of what families need within their own community.' },
  { icon: HeartHandshake, title: 'A vision for Hafizabad', text: 'A long-term commitment to raising expectations for residential living and contributing positively to the city we call home.' },
]

export default function AboutSection() {
  return (
    <section className="bg-[#0b0e0c] px-6 py-20 md:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <SectionHeader title="More Than a Place to Live" subtitle="A vision to elevate everyday life in Hafizabad" />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="space-y-5 text-base leading-8 text-white/70 md:text-lg">
              <p className="text-xl font-medium leading-9 text-white md:text-2xl">
                We believe a home is more than four walls. It is the life you build around it.
              </p>
              <p>
                Zahoor Orchards was envisioned with a clear purpose: to help improve the lifestyle of the people of Hafizabad by creating a thoughtfully planned residential community with the comfort, facilities and environment that modern families deserve.
              </p>
              <p>
                Our ambition goes beyond developing plots. We are working to bring together well-planned roads and infrastructure, green parks and open spaces, healthcare, sports and recreation, and the everyday essentials of a connected neighbourhood.
              </p>
              <p>
                Rooted in Hafizabad, our vision is to contribute to the city’s future — creating a place where families can put down roots, children can grow, neighbours can connect and residents can enjoy a more convenient, active and fulfilling way of life.
              </p>
              <p className="border-l-2 border-[#d6b65f] pl-5 font-medium italic text-[#e5ca83]">
                Zahoor Orchards — shaping a better lifestyle, and a stronger sense of community.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.08 }} viewport={{ once: true }}
                    className="rounded-2xl border border-[#c9a85c]/20 bg-gradient-to-br from-[#191d19] to-[#101310] p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#d6b65f]/30 bg-[#d6b65f]/10 text-[#e5ca83]">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/60">{item.text}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
