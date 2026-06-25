import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import TanStackQueryProvider from "../providers/TansTackQuery";
import FooterComponent from "@/components/FooterComponent";
import WhatsappWidget from "@/components/WhatsappWidget";
import AiChatWidget from "@/components/AiChatWidget";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "./globals.css";

// 👇 debe empezar con NEXT_PUBLIC_ para estar disponible en el navegador
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Fallback para que el build no falle si la env no está definida
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.fundacionreciclandounidos.com";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // 👇 keyword al inicio + gancho educativo. Esto es lo que rankea y lo que se ve en el SERP.
    default: "Donar Computadores usados para Colegios y Estudiantes | Fundación Reciclando Unidos",
    template: "%s | Fundación Reciclando Unidos",
  },
  description:
    "Dona computadores usados en Bogotá y Cundinamarca y apoya la educación de colegios, jardines y estudiantes. Recogida gratis a domicilio en Bogotá y certificado de donación DIAN - Tel: 313 541 03 48 - Correo: ambiental@fundacionreciclandounidos.com",
  keywords: ["donar computadores", "donar computadores Bogotá", "reciclaje electrónico Bogotá y Cundinamarca"],
  applicationName: "Fundación Reciclando Unidos",
  authors: [{ name: "Fundación Reciclando Unidos" }],

  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Fundación Reciclando Unidos",
    title: "Dona Computadores y Transforma la Educación en Bogotá y Cundinamarca | Fundación Reciclando Unidos",
    description:
      "Al donar computadores apoyas la educación de colegios, jardines y estudiantes. Reacondicionamos, donamos y reciclamos con recogida gratis en Bogotá.",
    url: "/",
    images: [
      {
        url: "/imagepublic.jpg", // versión 1200x630 horizontal
        width: 1200,
        height: 630,
        alt: "Donar computadores para la educación - Reciclando Unidos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Donar Computadores para la Educación | Fundación Reciclando Unidos",
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

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col bg-white">
          <TanStackQueryProvider>
            <ToastContainer position="bottom-right" />
	    <Suspense fallback={null}>
            <Navbar />
            {children}
            <WhatsappWidget phone="573135410348" />
            <AiChatWidget />
            <FooterComponent/>
	 </Suspense>
          </TanStackQueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
