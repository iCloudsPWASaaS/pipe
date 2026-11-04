import type { Metadata } from "next";
import { Inter_Tight, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["400", "500", "600"],
});

const title = "PipeMedicUK | Commercial, Domestic & Facilities Management";
const description =
  "Commercial, domestic and facilities management services across Scotland — electrical, heating, mechanical, plumbing and renewables. Based in Glasgow.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pipemedicuk.com"),
  title,
  description,
  keywords: [
    "PipeMedic UK",
    "plumbing Glasgow",
    "heating Scotland",
    "gas engineer Glasgow",
    "commercial plumbing",
    "domestic heating",
    "renewables",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://pipemedicuk.com",
    siteName: "PipeMedicUK",
    title,
    description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "PipeMedic UK — Gas, Electrical and Plumbing services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "PipeMedic UK",
  legalName: "Pipe Medic UK Limited",
  description,
  url: "https://pipemedicuk.com",
  telephone: "+447830676674",
  email: "info@pipemedicuk.com",
  image: "https://pipemedicuk.com/images/og.jpg",
  identifier: "SC735678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 Royal Crescent",
    addressLocality: "Glasgow",
    addressRegion: "Scotland",
    postalCode: "G3 7SP",
    addressCountry: "GB",
  },
  areaServed: "Scotland",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Gas Safe Registration 923324",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "MCS Certification IAA-10192",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${jakarta.variable} ${interTight.variable}`}>
      <body className="font-body antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
