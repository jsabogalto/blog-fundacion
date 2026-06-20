import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import TanStackQueryProvider from "../providers/TansTackQuery";
import FooterComponent from "@/components/FooterComponent";
import WhatsappWidget from "@/components/WhatsappWidget";
import AiChatWidget from "@/components/AiChatWidget";
import { ClerkProvider } from "@clerk/nextjs";
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
    default: "Reciclando Unidos | Dona y recicla computadores en Colombia",
    template: "%s | Reciclando Unidos",
  },
  description:
    "Fundación sin ánimo de lucro en Colombia. Reacondicionamos y donamos computadores, reciclamos residuos electrónicos y promovemos la educación tecnológica. Domicilio gratuito en Bogotá.",
  // keywords reducido (opcional; Google lo ignora)
  keywords: ["donar computadores en Colombia", "reciclaje electrónico", "fundación educación tecnológica"],
  applicationName: "Reciclando Unidos",
  authors: [{ name: "Fundación Reciclando Unidos" }],

  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Reciclando Unidos",
    title: "Reciclando Unidos | Dona y recicla computadores en Colombia",
    description:
      "Reacondicionamos y donamos computadores, reciclamos residuos electrónicos y promovemos la educación tecnológica en Colombia.",
    url: "/",
    images: [
      {
        url: "/imagepublic.jpeg", // 👈 versión 1200x630 horizontal
        width: 1200,
        height: 630,
        alt: "Fundación Reciclando Unidos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Reciclando Unidos | Dona y recicla computadores en Colombia",
    description: "Dona computadores usados y apoya la educación tecnológica en Colombia.",
    images: ["/og-reciclando-unidos.jpg"],
  },

  icons: {
    icon: "/icono-reciclano-unidos.png",
    apple: "/icono-reciclano-unidos.png",
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
            <Navbar />
            {children}
            <WhatsappWidget phone="573135410348" />
            <AiChatWidget />
            <FooterComponent/>
          </TanStackQueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}