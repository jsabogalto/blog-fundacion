import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import TanStackQueryProvider from "../providers/TansTackQuery";
import FooterComponent from "@/components/FooterComponent";
import WhatsappWidget from "@/components/WhatsappWidget";
import AiChatWidget from "@/components/AiChatWidget";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Fallback para que el build no falle si la env no está definida
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.fundacionreciclandounidos.com";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fundación Reciclando Unidos | Donamos y reciclamos tecnología en Bogotá",
    template: "%s | Fundación Reciclando Unidos",
  },
  description:
    "Reparamos, donamos y reciclamos computadores y tecnología en Bogotá y Cundinamarca para apoyar la educación. Recogida gratis a domicilio y certificado de donación.",
  keywords: ["donar computadores", "donar computadores Bogotá", "reciclaje electrónico Bogotá", "fundación reciclaje electrónico Cundinamarca"],
  applicationName: "Fundación Reciclando Unidos",
  authors: [{ name: "Fundación Reciclando Unidos" }],

  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Fundación Reciclando Unidos",
    title: "Dona computadores y transforma la educación en Bogotá",
    description:
      "Al donar computadores apoyas la educación de colegios, jardines y estudiantes. Reacondicionamos, donamos y reciclamos con recogida gratis en Bogotá.",
    url: "/",
    images: [
      {
        url: "/imagepublic.jpg", // 1200x630
        width: 1200,
        height: 630,
        alt: "Donar computadores para la educación — Fundación Reciclando Unidos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Donamos y reciclamos tecnología en Bogotá | Reciclando Unidos",
    description:
      "Dona computadores usados y apoya la educación de colegios, jardines y estudiantes en Colombia.",
    images: ["/imagepublic.jpg"],
  },

  icons: {
    icon: "/logo-fundacion-ru.ico",
    apple: "/logo-fundacion-ru.ico",
  },

  robots: { index: true, follow: true },
};
const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fundación Reciclando Unidos",
  alternateName: "Reciclando Unidos",
  url: SITE_URL,
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${SITE_URL}/#organization`,
  name: "Fundación Reciclando Unidos",
  url: "https://www.fundacionreciclandounidos.com",
  logo: "https://www.fundacionreciclandounidos.com/logo-fundacion-ru.ico",
  description:
    "Fundación en Bogotá y Cundinamarca que recibe computadores usados en donación, los reacondiciona y los entrega para la educación de colegios, jardines y estudiantes.",
  email: "ambiental@fundacionreciclandounidos.com",
  telephone: "+57-313-541-0348",
  areaServed: [
    { "@type": "City", name: "Bogotá" },
    { "@type": "State", name: "Cundinamarca" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressRegion: "Cundinamarca",
    addressCountry: "CO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-313-541-0348",
    email: "ambiental@fundacionreciclandounidos.com",
    contactType: "customer service",
    areaServed: "CO",
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://www.instagram.com/fundacionreciclandounidos/",
    "https://www.tiktok.com/@reciclandounidos",
    "https://www.linkedin.com/company/fundaci%C3%B3n-reciclando-unidos/",
    "https://www.facebook.com/fundacionreciclandounidos",
  ],
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <html lang="es" className={`${inter.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col bg-white">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
          />
          <TanStackQueryProvider>
            <ToastContainer position="bottom-right" />
            <Suspense fallback={null}>
              <Navbar />
              <main className="">
                {children}
              </main>
              <WhatsappWidget phone="573135410348" />
              <AiChatWidget />
              <FooterComponent />
            </Suspense>
          </TanStackQueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
