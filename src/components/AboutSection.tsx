'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'

export default function AboutSection() {
  return (
    <section className="bg-[#0b0e0c] px-6 py-20 md:px-12 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="About Zahoor Orchards"
            subtitle="A new standard of living in Hafizabad"
          />
          <div className="mx-auto mt-10 max-w-4xl space-y-6 text-center text-base leading-8 text-white/75 md:text-lg md:leading-9">
            <p>
              Zahoor Orchards is designed to be among the finest residential communities in Hafizabad — a place where quality living means more than owning a plot. Our vision is to bring together the facilities, convenience and thoughtful planning that families look for when choosing a place to build their future.
            </p>
            <p>
              What sets Zahoor Orchards apart is the lifestyle we are working to offer: a fully operational 24/7 hospital within the community, a dedicated sports complex, parks and open spaces, a 100-foot main boulevard and wide internal roads. These facilities are part of a wider commitment to make everyday life more comfortable, active and secure for residents.
            </p>
            <p>
              We also aim to make owning a home more accessible through flexible installment options on eligible plots, possession on down payment, and registry facilities for eligible plots. Combined with a prime location on Madhrianwala Bypass, within easy reach of the heart of Hafizabad, Zahoor Orchards brings location, lifestyle and practical value together in one community.
            </p>
            <p className="border-t border-[#c9a85c]/25 pt-6 font-medium text-[#e5ca83]">
              Zahoor Orchards — raising the standard for residential living in Hafizabad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
