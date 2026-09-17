import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://marcelogoncalvesodonto.com.br"),
  title: "Dr. Marcelo Gonçalves. Odontologia em Santo Amaro, São Paulo",
  description:
    "Clínica geral, dentística, ortodontia, endodontia, cirurgia, prótese e implantodontia em Santo Amaro, São Paulo. Dr. Marcelo Gonçalves, CROSP 99907. Agende sua consulta.",
  openGraph: {
    title: "Dr. Marcelo Gonçalves. Odontologia com propósito",
    description:
      "Clínica geral, dentística e ortodontia em Santo Amaro, São Paulo. Cuidado individualizado, resultados naturais. CROSP 99907.",
    url: "https://marcelogoncalvesodonto.com.br",
    siteName: "Dr. Marcelo Gonçalves",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Dr. Marcelo Gonçalves. Odontologia em Santo Amaro, SP",
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
    name: "Dr. Marcelo Gonçalves",
    description:
      "Clínica geral, dentística, ortodontia, endodontia, cirurgia, prótese e implantodontia em Santo Amaro, São Paulo.",
    url: "https://marcelogoncalvesodonto.com.br",
    telephone: "+5511969918002",
    email: "marcelogoncalvesodontologia@gmail.com",
    image: "https://marcelogoncalvesodonto.com.br/logo.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Benedito Fernandes, 545, Sala 406",
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
        opens: "09:00",
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
      "Clínica geral",
      "Dentística",
      "Ortodontia",
      "Endodontia",
      "Cirurgia",
      "Prótese",
      "Implantodontia",
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
