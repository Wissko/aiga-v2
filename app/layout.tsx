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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tobeseen.agency/#organization",
      "name": "TO BE SEEN Agency",
      "alternateName": ["TO BE SEEN", "TBS", "TBS°", "tobeseen", "tobeseen agency"],
      "url": "https://tobeseen.agency",
      "email": "Agency.tobeseen@gmail.com",
      "description": "TO BE SEEN is a digital agency building premium business systems for websites, wallet loyalty, bookings, client follow-up, SEO and automation.",
      "sameAs": ["https://tobeseen.agency"]
    },
    {
      "@type": "WebSite",
      "@id": "https://tobeseen.agency/#website",
      "url": "https://tobeseen.agency",
      "name": "TO BE SEEN Agency",
      "alternateName": ["TO BE SEEN", "tobeseen agency"],
      "publisher": { "@id": "https://tobeseen.agency/#organization" },
      "inLanguage": "en"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://tobeseen.agency/#digital-agency",
      "name": "TO BE SEEN Agency",
      "url": "https://tobeseen.agency",
      "email": "Agency.tobeseen@gmail.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "French"],
      "description": "Digital agency and premium business systems studio for website creation, wallet loyalty, automated bookings, client follow-up, SEO performance and automation.",
      "keywords": "to be seen, to be seen agency, tobeseen, tobeseen agency, digital agency, agence digitale, premium business systems, website creation, wallet loyalty, booking automation, client follow-up, SEO",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "$$$",
      "parentOrganization": { "@id": "https://tobeseen.agency/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "TO BE SEEN digital agency services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Creation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wallet Loyalty" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automated Bookings" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Client Follow-Up CRM" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO & Performance Insights" } }
        ]
      }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
