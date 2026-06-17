import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service — RentVsBuyDecision",
  description: "Terms of service for RentVsBuyDecision.",
};
export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose-article">
      <h1 className="text-3xl font-bold text-ink mb-6">Terms of Service</h1>
      <p>Last updated: June 2025</p>
      <h2>Use of This Site</h2>
      <p>RentVsBuyDecision provides free educational tools and information. All content is for informational purposes only and does not constitute financial, legal, or professional advice. Always consult a qualified professional before making financial decisions.</p>
      <h2>Accuracy of Information</h2>
      <p>We strive to provide accurate and up-to-date information, but we make no warranties about the completeness, accuracy, or reliability of any content. Use this site at your own risk.</p>
      <h2>Limitation of Liability</h2>
      <p>RentVsBuyDecision is not liable for any damages arising from your use of this site or reliance on its content.</p>
      <h2>Contact</h2>
      <p>Questions about these terms? Contact us at: info@rentvsbuydecision.com</p>
    </div>
  );
}
