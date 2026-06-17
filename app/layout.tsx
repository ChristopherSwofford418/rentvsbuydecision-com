import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://rentvsbuydecision.com"),
  title: {
    default: "RentVsBuyDecision — Should You Rent or Buy a Home?",
    template: "%s · RentVsBuyDecision",
  },
  description: "Free rent vs buy calculator. Compare the true cost of renting vs buying a home in any US city. Make the right housing decision based on your situation.",
  applicationName: "RentVsBuyDecision",
  openGraph: {
    type: "website",
    siteName: "RentVsBuyDecision",
    title: "RentVsBuyDecision — Should You Rent or Buy a Home?",
    description: "Free rent vs buy calculator. Compare the true cost of renting vs buying a home in any US city. Make the right housing decision based on your situation.",
    url: "https://rentvsbuydecision.com",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://rentvsbuydecision.com" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_ADS_ENABLED === "true" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9889586007871680"
            crossOrigin="anonymous"
            suppressHydrationWarning
          />
        )}
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">
        <header className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-serif text-xl font-bold tracking-tight">
              RentVsBuyDecision
            </Link>
            <nav className="hidden md:flex gap-6 text-sm">
              <Link href="/calculator" className="hover:text-accent">Rent vs Buy Calculator</Link>
              <Link href="/learn/rent-vs-buy-analysis" className="hover:text-accent">Full Analysis</Link>
              <Link href="/about" className="hover:text-accent">About</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-line mt-20 py-10 bg-soft">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 text-sm text-gray-700">
            <div>
              <div className="font-serif text-lg font-bold text-ink mb-2">RentVsBuyDecision</div>
              <p>Free rent vs buy calculator. Compare the true cost of renting vs buying a home in any US city. Make the right housing de...</p>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2">Guides</div>
              <ul className="space-y-1">
                <li><Link href="/learn/rent-vs-buy-analysis/" className="hover:text-accent">Rent vs Buy: Full Analysis</Link></li>
                <li><Link href="/learn/hidden-costs-of-buying-a-home/" className="hover:text-accent">Hidden Costs of Buying a Home</Link></li>
                <li><Link href="/learn/when-renting-is-smarter/" className="hover:text-accent">When Renting Is the Smarter Choice</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2">Site</div>
              <ul className="space-y-1">
                <li><Link href="/about" className="hover:text-accent">About</Link></li>
                <li><Link href="/privacy" className="hover:text-accent">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-accent">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} RentVsBuyDecision. Educational content only. Not financial or legal advice.
          </div>
        </footer>
      </body>
    </html>
  );
}
