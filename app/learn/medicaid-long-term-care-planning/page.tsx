import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medicaid Planning for Long-Term Care — LongTermCareCostCalc",
  description: "Medicaid pays for long-term care for people who meet strict income and asset requirements (typically $2,000 in assets for an individual). To qualify, many ",
};

export default function Article() {
  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      <Link href="/learn/" className="text-sm text-accent hover:underline mb-4 inline-block">← All Guides</Link>
      <h1 className="font-serif text-3xl font-bold mb-4">Medicaid Planning for Long-Term Care</h1>
      <AdSlot slot="2345678901" format="horizontal" />
      <div className="prose prose-gray max-w-none mt-6">
        <p>Medicaid pays for long-term care for people who meet strict income and asset requirements (typically $2,000 in assets for an individual).</p>
        <p>To qualify, many people 'spend down' their assets on care costs.</p>
        <p>Medicaid planning — legally restructuring assets to qualify while preserving wealth for a spouse or heirs — is a specialized area of elder law. Common strategies include: irrevocable trusts (5-year look-back period), spousal asset transfers, and annuities. The 5-year look-back rule means asset transfers made within 5 years of applying for Medicaid can result in a penalty period..</p>
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
