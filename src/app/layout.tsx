import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chicken Addis — Poultry Training, Eggs & Equipment in Ethiopia",
  description:
    "Chicken Addis is Ethiopia's hands-on poultry school: 123 rounds of training in shelter building, feed formulas and health, plus business finance, egg supply and modern cages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
