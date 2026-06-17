import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hidden Costs of Buying a Home: The Complete List",
  description: "All the costs of homeownership that real estate agents don't always mention, from closing costs to ongoing maintenance expenses.",
  alternates: { canonical: "https://rentvsbuydecision.com/learn/hidden-costs-of-buying-a-home/" },
};
export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <span className="text-xs font-medium text-accent uppercase tracking-wide">Cost Guide</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-ink tracking-tight">Hidden Costs of Buying a Home: The Complete List</h1>
        <p className="mt-3 text-lg text-gray-600">All the costs of homeownership that real estate agents don't always mention, from closing costs to ongoing maintenance expenses.</p>
      </div>
      <AdSlot slot="2233445566" format="horizontal" />
      <div className="prose-article mt-8">
        <h2>Upfront Costs Beyond the Down Payment</h2>
<p><strong>Closing costs</strong> typically run 2–5% of the loan amount and include: loan origination fee (0.5–1%); appraisal ($400–$600); home inspection ($300–$500); title insurance ($500–$1,500); title search ($200–$400); attorney fees (in some states, $500–$1,500); recording fees ($100–$250); prepaid interest; and escrow setup for taxes and insurance (2–3 months upfront).</p>

<h2>Moving Costs</h2>
<p>Local moves average $1,000–$2,500; long-distance moves can run $5,000–$15,000+. Don't forget storage costs if there's a gap between your move-out and move-in dates, and the cost of any immediate purchases (appliances, window treatments, furniture for a larger space).</p>

<h2>Ongoing Annual Costs</h2>
<p>• <strong>Property taxes</strong>: 0.5–2.5% of home value annually ($1,500–$7,500/year on a $300,000 home)</p>
<p>• <strong>Homeowner's insurance</strong>: $1,200–$3,000/year (more in hurricane/flood zones)</p>
<p>• <strong>HOA fees</strong>: $200–$800/month in many communities</p>
<p>• <strong>Maintenance and repairs</strong>: Budget 1–2% of home value annually</p>
<p>• <strong>Utilities</strong>: Often higher than renting due to larger space</p>
<p>• <strong>Lawn care/snow removal</strong>: $500–$3,000/year depending on property and region</p>

<h2>Major System Replacements</h2>
<p>Every home has systems with finite lifespans. Budget for eventual replacement: HVAC system ($5,000–$12,000 every 15–20 years); water heater ($800–$2,000 every 10–15 years); roof ($8,000–$25,000 every 20–30 years); windows ($300–$700 each, every 20–25 years); and appliances ($500–$2,000 each, every 10–15 years).</p>

<h2>The Real Monthly Cost</h2>
<p>When you add up all costs — mortgage payment, property taxes, insurance, HOA, maintenance reserve, and utilities — the true monthly cost of homeownership is typically 25–40% higher than the mortgage payment alone. Factor this into your affordability calculation before buying.</p>
      </div>
      <AdSlot slot="6655443322" format="rectangle" />
    </article>
  );
}
