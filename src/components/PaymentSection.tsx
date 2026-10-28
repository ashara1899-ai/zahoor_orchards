'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDays, CheckCircle2, Info, Wallet, ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { societyData } from '@/data/society';

const formatPKR = (amount: number) =>
  new Intl.NumberFormat('en-PK', { maximumFractionDigits: 0 }).format(amount);

export default function PaymentSection() {
  const installmentPlans = societyData.paymentPlans.filter((plan) => plan.monthlyInstallment !== null);
  const cashOnlyPlan = societyData.paymentPlans.find((plan) => plan.monthlyInstallment === null);

  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-[#090909]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(190,150,70,0.10),transparent_55%)]" />
      <div className="relative container mx-auto px-4 md:px-6">
        <SectionHeader
          title="A Clear Path to Ownership"
          subtitle="Choose the payment option available for your plot and block"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-[#b99a55]/30 bg-[#15120c] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d2b66e]">Installment blocks</p>
            <p className="mt-2 text-2xl font-semibold text-white">AA &amp; BB</p>
            <p className="mt-1 text-sm text-white/60">3, 5 and 10 Marla plots</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#111] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Cash-only blocks</p>
            <p className="mt-2 text-2xl font-semibold text-white">A &amp; B</p>
            <p className="mt-1 text-sm text-white/60">Full payment at booking</p>
          </div>
          <div className="rounded-xl border border-[#b99a55]/30 bg-[#15120c] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d2b66e]">Installments commence</p>
            <p className="mt-2 text-2xl font-semibold text-white">December 2026</p>
            <p className="mt-1 text-sm text-white/60">24 equal monthly installments</p>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-3">
            <Wallet className="h-5 w-5 text-[#d2b66e]" />
            <h3 className="text-xl md:text-2xl font-semibold text-white">24-Month Installment Plans</h3>
          </div>
          <p className="mt-2 text-sm text-white/55">Select a plot size to open its complete payment schedule. Available exclusively in AA and BB Blocks.</p>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {installmentPlans.map((plan, index) => {
              const monthlyAmount = plan.monthlyInstallment ?? 0;
              const slug = plan.size.toLowerCase().replace(/\s+/g, '-');
              return (
                <motion.div
                  key={plan.size}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/payment-plans/${slug}`}
                    className="group block h-full rounded-2xl border border-[#b99a55]/35 bg-gradient-to-b from-[#19150d] to-[#101010] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e2c477]/80 hover:shadow-[0_16px_45px_rgba(190,150,70,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2c477]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#d2b66e]">Residential</p>
                        <h4 className="mt-2 text-2xl font-semibold text-white">{plan.size}</h4>
                        {plan.dimensions && <p className="mt-1 text-sm text-white/50">{plan.dimensions}</p>}
                      </div>
                      <span className="rounded-full border border-[#b99a55]/40 px-3 py-1 text-xs text-[#e2c477]">24 months</span>
                    </div>
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="text-xs text-white/50">Total price</p>
                      <p className="mt-1 text-2xl font-bold text-[#e2c477]">Rs. {formatPKR(plan.totalPrice)}</p>
                      <div className="mt-5 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-white/50">Down payment</p>
                          <p className="mt-1 text-lg font-semibold text-white">Rs. {formatPKR(plan.downPayment)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/50">Equal monthly</p>
                          <p className="mt-1 text-lg font-semibold text-white">Rs. {formatPKR(monthlyAmount)}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-[#e2c477]">
                      <span>View complete 24-month plan</span>
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {cashOnlyPlan && (
          <Link
            href="/payment-plans/1-kanal"
            className="group mt-8 block rounded-2xl border border-white/15 bg-[#111] p-6 transition-all hover:border-[#b99a55]/60 md:p-8"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Full payment only</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{cashOnlyPlan.size}</h3>
                <p className="mt-1 text-sm text-white/55">{cashOnlyPlan.dimensions}</p>
                <p className="mt-3 text-sm font-semibold text-[#e2c477]">View payment details <ArrowUpRight className="ml-1 inline h-4 w-4" /></p>
              </div>
              <div>
                <p className="text-xs text-white/50">Total price</p>
                <p className="mt-1 text-3xl font-bold text-[#e2c477]">Rs. {formatPKR(cashOnlyPlan.totalPrice)}</p>
                <p className="mt-1 text-sm text-white/55">No installment option</p>
              </div>
            </div>
          </Link>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 rounded-xl border border-[#b99a55]/25 bg-[#15120c] p-5">
            <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#d2b66e]" />
            <div>
              <p className="font-semibold text-white">Plan commencement</p>
              <p className="mt-1 text-sm text-white/65">The 24-month installment plan starts in December 2026.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-[#b99a55]/25 bg-[#15120c] p-5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d2b66e]" />
            <div>
              <p className="font-semibold text-white">Premium plot categories</p>
              <p className="mt-1 text-sm text-white/65">A 10% additional charge applies to park-facing, corner, and main boulevard plots.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#d2b66e]" />
          <p className="text-sm leading-relaxed text-white/60">
            {societyData.premiumNote} The monthly installment shown is a rounded figure. Any remaining balance will be adjusted in the 24th and final installment. Customers may also request a customized payment plan to suit their needs by contacting the sales office.
          </p>
        </div>
      </div>
    </section>
  );
}
