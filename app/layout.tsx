import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcelo-site-virid.vercel.app"),
  title: "Dr. Marcelo Goncalves — Odontologia em Santo Amaro, São Paulo",
  description:
    "Odontologia geral, estética, ortodontia e emergências em Santo Amaro, São Paulo. Dr. Marcelo Goncalves — CROSP 99907. Agende sua consulta.",
  openGraph: {
    title: "Dr. Marcelo Goncalves — Odontologia calma e precisa",
    description:
      "Odontologia geral, estética e ortodontia em Santo Amaro, São Paulo. CROSP 99907.",
    url: "https://marcelogoncalves.com",
    siteName: "Dr. Marcelo Goncalves",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Marcelo Goncalves — Odontologia em Santo Amaro, SP",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dr. Marcelo Goncalves",
    description:
      "Odontologia geral, estética, ortodontia e emergências em Santo Amaro, São Paulo.",
    url: "https://marcelogoncalves.com",
    telephone: "+551134983481",
    email: "contato@marcelogoncalves.com",
    image: "https://marcelogoncalves.com/logo.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Benedito Fernandes, 545 - Sl 406",
      addressLocality: "Santo Amaro",
      addressRegion: "SP",
      postalCode: "04746-110",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.6542,
      longitude: -46.7093,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "São Paulo",
      },
      {
        "@type": "City",
        name: "Santo Amaro",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Graduação",
        name: "Odontologia",
        awardedBy: {
          "@type": "CollegeOrUniversity",
          name: "Universidade de São Paulo (USP)",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Especialização",
        name: "Ortodontia",
        awardedBy: {
          "@type": "CollegeOrUniversity",
          name: "Faculdade do Centro Oeste Paulista (FACOP)",
        },
      },
    ],
    knowsAbout: [
      "Odontologia geral",
      "Odontologia estética",
      "Ortodontia",
      "Emergências odontológicas",
    ],
    memberOf: {
      "@type": "Organization",
      name: "CROSP",
      identifier: "99907",
    },
    sameAs: [
      "https://www.instagram.com/marcelogoncalvesodontologia/",
    ],
  };

  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
