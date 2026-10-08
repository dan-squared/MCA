import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <SiteShell />;
}
