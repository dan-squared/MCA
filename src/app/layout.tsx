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
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
