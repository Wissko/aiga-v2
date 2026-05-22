import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tobeseen.agency"),
  title: {
    default: "TO BE SEEN Agency | Digital Agency & Premium Business Systems",
    template: "%s | TO BE SEEN Agency",
  },
  description: "TO BE SEEN is a digital agency building premium business systems: websites, wallet loyalty, bookings, client follow-up, SEO and automation for ambitious businesses.",
  keywords: ["to be seen", "to be seen agency", "tobeseen", "tobeseen agency", "digital agency", "agence digitale", "premium business systems", "website creation", "wallet loyalty", "booking automation", "client follow-up"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "TO BE SEEN Agency | Digital Agency & Premium Business Systems",
    description: "A digital agency for premium websites, wallet loyalty, bookings, follow-up, SEO and automation.",
    url: "https://tobeseen.agency",
    siteName: "TO BE SEEN Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TO BE SEEN Agency",
    description: "Digital agency and premium business systems studio.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
