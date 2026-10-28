'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'

export default function AboutSection() {
  return (
    <section className="bg-[#0b0e0c] px-6 py-20 md:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl">
            <SectionHeader
              title="About Zahoor Orchards"
              subtitle="A new standard of living in Hafizabad"
            />
          </div>

          <div className="mt-10 max-w-4xl space-y-5 text-left text-base leading-8 text-white/75 md:text-lg md:leading-8">
            <p>
              Zahoor Orchards is setting out to offer one of Hafizabad’s most complete residential lifestyles — bringing together a prime city location, thoughtfully planned infrastructure and facilities that make a real difference to everyday life.
            </p>
            <p>
              Residents have access to a fully operational 24/7 hospital, a dedicated sports complex, parks and open spaces, a 100-foot main boulevard and wide internal roads. Together, these features are designed to support a community where families can feel comfortable, stay active and enjoy greater convenience.
            </p>
            <p>
              Buying a plot is made more accessible through flexible installment options on eligible plots, possession on down payment and registry facilities for eligible plots. Located on Madhrianwala Bypass, Zahoor Orchards combines the convenience of being close to the heart of Hafizabad with the space and facilities of a planned residential community.
            </p>
          </div>

          <div className="mt-9 border-l-2 border-[#d6b65f] pl-5">
            <p className="text-lg font-semibold leading-8 text-[#e5ca83] md:text-xl">
              Zahoor Orchards — a better place to live, grow and build your future in Hafizabad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
