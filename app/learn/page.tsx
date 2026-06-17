import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guides & Resources",
  description: "Free guides and resources from RentVsBuyDecision.",
};
export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-8">Guides & Resources</h1>
      <div className="grid gap-6">
                <Link href="/learn/rent-vs-buy-analysis/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">Rent vs Buy in 2025: A Data-Driven Analysis</h2><p className="mt-1 text-gray-600">A comprehensive data-driven analysis of whether renting or buying makes more financial sense in 2025, with city-by-city breakdowns.</p></Link>
        <Link href="/learn/hidden-costs-of-buying-a-home/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">Hidden Costs of Buying a Home: The Complete List</h2><p className="mt-1 text-gray-600">All the costs of homeownership that real estate agents don't always mention, from closing costs to ongoing maintenance expenses.</p></Link>
        <Link href="/learn/when-renting-is-smarter/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">When Renting Is the Smarter Financial Choice</h2><p className="mt-1 text-gray-600">The financial and lifestyle situations where renting a home is genuinely smarter than buying, despite conventional wisdom.</p></Link>
      </div>
    </div>
  );
}
