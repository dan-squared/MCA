import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://mychickenaddis.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chicken Addis — Poultry Training, Eggs & Equipment in Ethiopia",
    template: "%s · Chicken Addis",
  },
  description:
    "Chicken Addis is Ethiopia's hands-on poultry school on the Addis–Bishoftu belt: 123 rounds of training in shelter, feed and flock health, plus finance, egg supply and modern cages. Training in Amharic.",
  keywords: [
    "poultry training Ethiopia",
    "chicken farming Addis Ababa",
    "layers Bishoftu",
    "egg supply Ethiopia",
    "poultry cages equipment",
    "poultry finance",
  ],
  authors: [{ name: "Chicken Addis Poultry Co." }],
  creator: "Chicken Addis Poultry Co.",
  alternates: {
    canonical: "/",
    types: { "text/markdown": "/overview.md" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Chicken Addis",
    title: "Chicken Addis — Raise Birds, Build Income",
    description:
      "Hands-on poultry school: 123 rounds taught, 2.4k farmers graduated, 18k eggs graded daily. Training in Amharic, Addis Ababa to Bishoftu.",
    images: [{ url: "/layers-grass.jpg", width: 1920, height: 1280, alt: "Layers grazing on green pasture" }],
    locale: "en_ET",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicken Addis — Raise Birds, Build Income",
    description:
      "Ethiopia's hands-on poultry school: training, finance, eggs, cages and community. Round 124 now enrolling.",
    images: ["/layers-grass.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", apple: "/apple-icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#4a1512",
  width: "device-width",
  initialScale: 1,
};

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Chicken Addis Poultry Co.",
    url: SITE_URL,
    email: "hello@chickenaddis.et",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bishoftu Road",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    sameAs: ["https://www.tiktok.com/", "https://www.youtube.com/", "https://www.instagram.com/"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Chicken Addis",
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the key differences between the Foundation, Scale-Up and Breeders' courses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Foundation is for beginners: shelter, feed and flock health. Scale-Up adds layers, yields and costing for working farms. Breeders' Camp covers cross-breeds and hatchery craft.",
        },
      },
      {
        "@type": "Question",
        name: "How can I decide which course will suit me best?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Never raised birds? Start with Foundation. Keeping 50 or more? Join Scale-Up. Planning a hatchery? Talk to us about Breeders' Camp.",
        },
      },
      {
        "@type": "Question",
        name: "Which programs are best suited to families or youth groups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Foundation suits families learning together. Youth groups get discounted seats and a shared demo coop to copy at home.",
        },
      },
      {
        "@type": "Question",
        name: "How many farmers can each cohort accommodate at full occupancy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "24 farmers per round, kept small on purpose. Rounds repeat monthly, now enrolling Round 124.",
        },
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="preload"
          href="/fonts/PPFragment-SerifRegular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/PPFragment-SansRegular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        {JSON_LD.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
