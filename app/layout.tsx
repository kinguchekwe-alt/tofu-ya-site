import type { Metadata } from "next";
import { Bowlby_One, Baloo_2, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const bowlby = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brand",
});

const baloo = Baloo_2({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Tofu Ya — Korean BBQ & Tofu Soup, Sawtelle",
  description:
    "Tofu Ya is a Sawtelle Boulevard staple serving authentic Korean BBQ, customizable soon tofu soups and hearty rice bowls in Los Angeles since 2005.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bowlby.variable} ${baloo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
