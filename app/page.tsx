import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft to-white py-20 border-b border-line">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
            Should You Rent or Buy a Home?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Free rent vs buy calculator. Compare the true cost of renting vs buying a home in any US city. Make the right housing decision based on your situation.
          </p>
          <Link href="/calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-opacity">
            Rent vs Buy Calculator →
          </Link>
        </div>
      </section>

      <AdSlot slot="1234567890" format="horizontal" className="mt-8" />

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink mb-8">Guides & Data</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/learn/rent-vs-buy-analysis/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Analysis</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">Rent vs Buy in 2025: A Data-Driven Analysis</h3>
            <p className="mt-1 text-sm text-gray-600">A comprehensive data-driven analysis of whether renting or buying makes more financial sense in 2025, with city-by-city breakdowns.</p>
          </a>
          <a href="/learn/hidden-costs-of-buying-a-home/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Cost Guide</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">Hidden Costs of Buying a Home: The Complete List</h3>
            <p className="mt-1 text-sm text-gray-600">All the costs of homeownership that real estate agents don't always mention, from closing costs to ongoing maintenance expenses.</p>
          </a>
          <a href="/learn/when-renting-is-smarter/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Renting Guide</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">When Renting Is the Smarter Financial Choice</h3>
            <p className="mt-1 text-sm text-gray-600">The financial and lifestyle situations where renting a home is genuinely smarter than buying, despite conventional wisdom.</p>
          </a>
        </div>
      </section>

      <AdSlot slot="0987654321" format="rectangle" />
    </div>
  );
}
