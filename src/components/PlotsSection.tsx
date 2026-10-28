'use client'

import { motion } from 'framer-motion';
import { societyData } from '@/data/society';
import SectionHeader from '@/components/SectionHeader';

const formatPKR = (amount: number) =>
  new Intl.NumberFormat('en-PK', { maximumFractionDigits: 0 }).format(amount);

export default function PlotsSection() {
  return (
    <motion.section
      className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-12 bg-[#050505]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(190,150,70,0.12),transparent_58%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          title="Find Your Place at Zahoor Orchards"
          subtitle="Residential plot options with clear, straightforward pricing"
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {societyData.plots.map((plot, index) => (
            <motion.article
              key={plot.size}
              className="group rounded-2xl border border-[#b99a55]/30 bg-gradient-to-b from-[#17140e] to-[#0b0b0b] p-7 text-center shadow-[0_16px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d5b76a]/70"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[#d2b66e]">Residential</p>
              <h3 className="mt-5 text-3xl font-semibold text-white">{plot.size}</h3>
              {plot.dimensions ? (
                <p className="mt-2 text-sm text-white/55">{plot.dimensions}</p>
              ) : (
                <p className="mt-2 text-sm text-white/45">Dimensions confirmed at booking</p>
              )}
              <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#b99a55]/50 to-transparent" />
              <p className="text-xs uppercase tracking-wider text-white/55">General base price</p>
              <p className="mt-2 text-3xl font-bold text-[#e2c477]">Rs. {formatPKR(plot.price)}</p>
              <p className="mt-1 text-xs text-white/45">PKR 8 Lac per Marla</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-white/50">
          Park-facing and corner plots carry a 10% premium. Final price and availability are confirmed by the sales office.
        </p>
      </div>
    </motion.section>
  );
}
