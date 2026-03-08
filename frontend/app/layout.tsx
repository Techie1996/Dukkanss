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

export const metadata: Metadata = {
  title: "Dukaans – Premium Indian Grocery Online",
  description:
    "Shop curated Indian groceries with fast delivery across Europe. A premium ecommerce experience inspired by Shopify storefronts."
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

