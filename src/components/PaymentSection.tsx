'use client'

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { societyData } from '@/data/society';

export default function PaymentSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Residential Price Guide"
            subtitle="General base prices for residential plots at Zahoor Orchards"
          />
          <div className="mt-12 overflow-x-auto rounded-xl border border-gold/20">
            <table className="w-full">
              <thead>
                <tr className="bg-gold text-black">
                  <th className="px-6 py-4 text-left font-semibold">Plot Size</th>
                  <th className="px-6 py-4 text-left font-semibold">Dimensions</th>
                  <th className="px-6 py-4 text-left font-semibold">General Price</th>
                </tr>
              </thead>
              <tbody>
                {societyData.paymentPlans.map((plan, index) => (
                  <tr
                    key={plan.size}
                    className={`${index % 2 === 0 ? 'bg-card-bg' : 'bg-black'} border-t border-gray-800`}
                  >
                    <td className="px-6 py-5 font-semibold text-white">{plan.size}</td>
                    <td className="px-6 py-5 text-gray-300">{plan.dimensions}</td>
                    <td className="px-6 py-5 text-gold font-bold">{plan.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 border border-gold/30 bg-card-bg rounded-xl p-5 flex items-start gap-3"
          >
            <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/90">
              <span className="font-semibold text-gold">Please note:</span> {societyData.premiumNote}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
