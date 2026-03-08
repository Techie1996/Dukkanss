import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import PromoBanner from "@/components/layout/PromoBanner";
import CategoryIconsStrip from "@/components/layout/CategoryIconsStrip";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dukaans.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: "/favicon.svg" },
  title: "Dukaans – Premium Indian Grocery Online",
  description:
    "Shop curated Indian groceries with fast delivery across Europe. A premium ecommerce experience inspired by Shopify storefronts.",
  openGraph: {
    title: "Dukaans – Europe's Premium Indian Grocery Store",
    description: "Shop 250+ trusted Indian brands. Fast delivery across Europe.",
    url: siteUrl,
    siteName: "Dukaans",
    images: [
      {
        url: "https://picsum.photos/seed/dukaans-og/1200/630",
        width: 1200,
        height: 630,
        alt: "Dukaans – Premium Indian Grocery"
      }
    ],
    locale: "en_EU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dukaans – Europe's Premium Indian Grocery",
    description: "Shop 250+ trusted Indian brands. Fast delivery across Europe.",
    images: ["https://picsum.photos/seed/dukaans-og/1200/630"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} font-sans`}>
        <div className="flex min-h-screen flex-col bg-[var(--bg-body)]">
          <div className="sticky top-0 z-40">
            <PromoBanner />
            <Navbar />
          </div>
          <CartDrawer />
          <main className="flex-1">
            <CategoryIconsStrip />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

