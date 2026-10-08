import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mychickenaddis.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#training`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#experiences`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#community`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#enquire`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}
