import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Habesha Restaurant | Authentic Ethiopian Cuisine · Ottawa",
  description:
    "Authentic Ethiopian cuisine in the heart of Vanier, Ottawa. Halal. 4.6 stars · 633 reviews. Dine in, order pickup, or delivery. 99 Montreal Rd.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${dmSans.variable} antialiased selection:bg-brand-gold selection:text-brand-dark`}
      >
        {children}
      </body>
    </html>
  );
}
