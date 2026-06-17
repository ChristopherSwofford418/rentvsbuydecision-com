import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Long-Term Care Insurance: Complete Guide — LongTermCareCostCalc",
  description: "Long-term care insurance (LTCI) pays for nursing home, assisted living, and home care costs when you can no longer perform 2 of 6 activities of daily livin",
};

export default function Article() {
  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      <Link href="/learn/" className="text-sm text-accent hover:underline mb-4 inline-block">← All Guides</Link>
      <h1 className="font-serif text-3xl font-bold mb-4">Long-Term Care Insurance: Complete Guide</h1>
      <AdSlot slot="2345678901" format="horizontal" />
      <div className="prose prose-gray max-w-none mt-6">
        <p>Long-term care insurance (LTCI) pays for nursing home, assisted living, and home care costs when you can no longer perform 2 of 6 activities of daily living (ADLs) or have a cognitive impairment. Policies typically pay $150–$300/day for 2–5 years.</p>
        <p>The average annual premium for a 55-year-old couple is $3,000–$5,000. Premiums increase significantly with age — buying at 55 vs.</p>
        <p>65 can cut premiums in half. Hybrid life/LTC policies combine life insurance with LTC benefits and are increasingly popular. About 70% of people over 65 will need some form of long-term care..</p>
      </div>
      <div className="mt-8">
        <AdSlot slot="1234567890" format="rectangle" />
      </div>
      <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-line">
        <p className="text-sm text-gray-600">Need more help? <Link href="/" className="text-accent hover:underline">Use our free calculator →</Link></p>
      </div>
    </article>
  );
}
