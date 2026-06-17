import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://rentvsbuydecision.com/", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: "https://rentvsbuydecision.com/calculator/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "https://rentvsbuydecision.com/learn/rent-vs-buy-analysis/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://rentvsbuydecision.com/learn/hidden-costs-of-buying-a-home/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://rentvsbuydecision.com/learn/when-renting-is-smarter/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://rentvsbuydecision.com/about/", lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
  ];
}
