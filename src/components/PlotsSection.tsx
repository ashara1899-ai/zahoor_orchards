'use client'

import { motion } from 'framer-motion';
import { societyData } from '@/data/society';
import SectionHeader from '@/components/SectionHeader';

export default function PlotsSection() {
  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-12 bg-[#000000]"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Residential Plot Sizes & Prices"
          subtitle="Explore our residential plot options and general base prices"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {societyData.plots.map((plot, index) => (
            <motion.article
              key={plot.size}
              className="rounded-2xl border border-gold/30 bg-card-bg p-7 text-center shadow-lg"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-gold">Residential</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">{plot.size}</h3>
              <p className="mt-3 text-gray-300">Plot dimensions</p>
              <p className="mt-1 text-lg text-white font-medium">{plot.dimensions}</p>
              <div className="my-6 border-t border-gold/20" />
              <p className="text-sm text-gray-300">General base price</p>
              <p className="mt-2 text-3xl font-bold text-gold">{plot.price.replace("PKR ", "")}</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          General residential prices only. Contact our sales office to confirm plot-specific pricing and availability.
        </p>
      </div>
    </motion.section>
  );
}
