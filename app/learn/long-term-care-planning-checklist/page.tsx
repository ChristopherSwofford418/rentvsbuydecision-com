import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Long-Term Care Planning Checklist — LongTermCareCostCalc",
  description: "Long-term care planning checklist: (1) Assess your risk — family health history, current health, marital status. (2) Estimate costs in your area using our ",
};

export default function Article() {
  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      <Link href="/learn/" className="text-sm text-accent hover:underline mb-4 inline-block">← All Guides</Link>
      <h1 className="font-serif text-3xl font-bold mb-4">Long-Term Care Planning Checklist</h1>
      <AdSlot slot="2345678901" format="horizontal" />
      <div className="prose prose-gray max-w-none mt-6">
        <p>Long-term care planning checklist: (1) Assess your risk — family health history, current health, marital status. (2) Estimate costs in your area using our calculator.</p>
        <p>(3) Review your assets — can you self-insure? (4) Explore LTCI options at age 55–65 while still insurable. (5) Consult an elder law attorney about Medicaid planning if appropriate.</p>
        <p>(6) Have the conversation with family about care preferences. (7) Create advance directives — healthcare proxy, living will, durable power of attorney. (8) Review and update your plan every 3–5 years. Starting early gives you the most options..</p>
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
