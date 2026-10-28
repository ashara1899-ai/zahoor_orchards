import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, CheckCircle2, Wallet } from 'lucide-react';
import { societyData } from '@/data/society';

const money = (value: number) => new Intl.NumberFormat('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const whole = (value: number) => new Intl.NumberFormat('en-PK', { maximumFractionDigits: 0 }).format(value);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthLabel = (index: number) => {
  const date = new Date(2026, 11 + index, 1);
  return months[date.getMonth()] + ' ' + date.getFullYear();
};

export function generateStaticParams() {
  return societyData.paymentPlans.map((plan) => ({ slug: plan.size.toLowerCase().replace(/\s+/g, '-') }));
}

export default async function PaymentPlanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plan = societyData.paymentPlans.find((item) => item.size.toLowerCase().replace(/\s+/g, '-') === slug);
  if (!plan) notFound();

  const eligible = plan.monthlyInstallment !== null;
  const monthly = eligible ? (plan.monthlyInstallment ?? 0) : 0;
  const balance = plan.totalPrice - plan.downPayment;
  const finalInstallment = eligible ? balance - monthly * 23 : 0;

  return (
    <main className="min-h-screen bg-[#070707] px-4 pb-16 pt-28 text-white md:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/#payment-plan" className="inline-flex items-center gap-2 text-sm text-[#d2b66e] transition hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to payment plans
        </Link>
        <div className="mt-8 rounded-3xl border border-[#b99a55]/35 bg-gradient-to-br from-[#1a160e] via-[#111] to-[#090909] p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d2b66e]">Zahoor Orchards · Payment schedule</p>
          <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold md:text-5xl">{plan.size} Residential Plot</h1>
              {plan.dimensions && <p className="mt-2 text-sm text-white/55">{plan.dimensions}</p>}
              <p className="mt-3 text-sm text-white/65">{eligible ? 'Available in AA and BB Blocks' : 'Full payment option · A and B Blocks are cash-only'}</p>
            </div>
            <div className="md:text-right">
              <p className="text-xs uppercase tracking-wider text-white/50">Total plot price</p>
              <p className="mt-1 text-3xl font-bold text-[#e2c477] md:text-4xl">Rs. {whole(plan.totalPrice)}</p>
            </div>
          </div>

          {eligible ? (
            <>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs text-white/50">Down payment</p>
                  <p className="mt-2 text-xl font-semibold">Rs. {whole(plan.downPayment)}</p>
                  <p className="mt-1 text-xs text-white/45">Payable at booking</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs text-white/50">Monthly installment (first 23)</p>
                  <p className="mt-2 text-xl font-semibold">Rs. {money(monthly)}</p>
                  <p className="mt-1 text-xs text-white/45">For installments 1–23</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs text-white/50">Plan duration</p>
                  <p className="mt-2 text-xl font-semibold">24 months</p>
                  <p className="mt-1 text-xs text-white/45">December 2026 – November 2028</p>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-[#d2b66e]" />
                <h2 className="text-xl font-semibold md:text-2xl">Complete payment chart</h2>
              </div>
              <p className="mt-2 text-sm text-white/55">The down payment is due at booking. The 24 monthly installments begin in December 2026. The first 23 installments use the rounded monthly amount shown above; the remaining balance is adjusted in the 24th and final installment.</p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="bg-[#211b10] text-[#e2c477]">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Payment</th>
                        <th className="px-5 py-4 font-semibold">Due</th>
                        <th className="px-5 py-4 text-right font-semibold">Amount (PKR)</th>
                        <th className="px-5 py-4 text-right font-semibold">Cumulative paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/10 bg-[#17130c]">
                        <td className="px-5 py-4 font-semibold">Down payment</td>
                        <td className="px-5 py-4 text-white/65">At booking</td>
                        <td className="px-5 py-4 text-right font-semibold">Rs. {whole(plan.downPayment)}</td>
                        <td className="px-5 py-4 text-right text-white/65">Rs. {whole(plan.downPayment)}</td>
                      </tr>
                      {Array.from({ length: 24 }, (_, index) => {
                        const installmentAmount = index === 23 ? finalInstallment : monthly;
                        const cumulative = plan.downPayment + monthly * Math.min(index + 1, 23) + (index === 23 ? finalInstallment : 0);
                        return (
                          <tr key={index} className="border-t border-white/10 bg-black/20 transition hover:bg-white/[0.04]">
                            <td className="px-5 py-3.5">Installment {index + 1}</td>
                            <td className="px-5 py-3.5 text-white/65">{monthLabel(index)}</td>
                            <td className="px-5 py-3.5 text-right">Rs. {whole(installmentAmount)}</td>
                            <td className="px-5 py-3.5 text-right text-white/65">Rs. {money(cumulative)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot className="border-t border-[#b99a55]/40 bg-[#211b10]">
                      <tr>
                        <td colSpan={2} className="px-5 py-4 font-semibold text-[#e2c477]">Total of 24 installments</td>
                        <td className="px-5 py-4 text-right font-bold text-[#e2c477]">Rs. {money(balance)}</td>
                        <td className="px-5 py-4 text-right font-bold text-[#e2c477]">Rs. {whole(plan.totalPrice)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-white/45">The first 23 monthly installments use the rounded amount shown above. Any remaining balance is added to the 24th and final installment so that the total paid equals the plot price.</p>
            </>
          ) : (
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#d2b66e]" />
                <h2 className="text-xl font-semibold">Full payment only</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">The 1 Kanal plot category is not eligible for the 24-month installment plan. The full plot price is payable at booking.</p>
              <p className="mt-5 text-2xl font-bold text-[#e2c477]">Rs. {whole(plan.totalPrice)}</p>
            </div>
          )}
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#b99a55]/20 bg-[#15120c] p-5">
          <Wallet className="mt-0.5 h-5 w-5 shrink-0 text-[#d2b66e]" />
          <div>
            <p className="font-semibold text-white">Important payment information</p>
            <p className="mt-1 text-sm leading-relaxed text-white/60">Installment plans are available only in AA and BB Blocks and commence in December 2026. A and B Blocks are cash-only. A 10% additional charge applies to park-facing, corner, and main boulevard plots. Confirm plot-specific availability and final payable amounts with the Zahoor Orchards sales office.</p>
          </div>
        </div>
        {eligible && (
          <div className="mt-5 rounded-xl border border-[#b99a55]/25 bg-[#15120c] p-5">
            <p className="font-semibold text-white">Need a payment plan that suits you?</p>
            <p className="mt-1 text-sm leading-relaxed text-white/65">Your payment plan can be adjusted or customized according to your needs. Please contact the Zahoor Orchards sales office, and our team will assist you in creating a suitable payment plan.</p>
            <a href="tel:03338073719" className="mt-3 inline-flex font-semibold text-[#e2c477] hover:text-white">Call: 0333 8073719</a>
          </div>
        )}
      </div>
    </main>
  );
}
