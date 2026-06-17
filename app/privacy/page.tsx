import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy — RentVsBuyDecision",
  description: "Privacy policy for RentVsBuyDecision.",
};
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose-article">
      <h1 className="text-3xl font-bold text-ink mb-6">Privacy Policy</h1>
      <p>Last updated: June 2025</p>
      <h2>Information We Collect</h2>
      <p>RentVsBuyDecision does not collect personal information. We use Google Analytics to understand aggregate traffic patterns and Google AdSense to serve advertisements. These third-party services may use cookies.</p>
      <h2>Cookies</h2>
      <p>We use cookies for analytics and advertising purposes. You can disable cookies in your browser settings, though this may affect site functionality.</p>
      <h2>Google AdSense</h2>
      <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-accent underline">Google Ads Settings</a>.</p>
      <h2>Contact</h2>
      <p>For privacy questions, contact us at: info@rentvsbuydecision.com</p>
    </div>
  );
}
