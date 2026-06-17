import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Pay for Long-Term Care — LongTermCareCostCalc",
  description: "Ways to pay for long-term care: (1) Personal savings/assets — the most common method but can quickly deplete retirement savings. (2) Long-term care insuran",
};

export default function Article() {
  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      <Link href="/learn/" className="text-sm text-accent hover:underline mb-4 inline-block">← All Guides</Link>
      <h1 className="font-serif text-3xl font-bold mb-4">How to Pay for Long-Term Care</h1>
      <AdSlot slot="2345678901" format="horizontal" />
      <div className="prose prose-gray max-w-none mt-6">
        <p>Ways to pay for long-term care: (1) Personal savings/assets — the most common method but can quickly deplete retirement savings. (2) Long-term care insurance — best purchased at 55–65 before health issues arise.</p>
        <p>(3) Hybrid life/LTC policies — use life insurance death benefit for LTC if needed. (4) Veterans benefits — Aid and Attendance benefit pays up to $2,300/month for qualifying veterans.</p>
        <p>(5) Medicaid — for those who have spent down assets. (6) Reverse mortgage — converts home equity to income. (7) Family caregiving — reduces costs but has significant personal and financial costs for caregivers..</p>
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
